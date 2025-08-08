// Minimal 2-row, 16-step sequencer with record + viz.
// Works with no audio files (synth-only).

const STEPS = 16;
const rows = [
  { name: 'Kick',  synth: new Tone.MembraneSynth({ pitchDecay: 0.02 }).toDestination() },
  { name: 'Hat',   synth: new Tone.MetalSynth({ frequency: 200, envelope:{decay:0.2}, volume:-8 }).toDestination() }
];

const gridState = Array.from({ length: rows.length }, () => Array(STEPS).fill(false));
let currentStep = 0;
let playing = false;

// UI refs
const gridEl = document.getElementById('grid');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const bpmInput = document.getElementById('bpm');
const bpmVal = document.getElementById('bpmVal');
const recordBtn = document.getElementById('record');
const downloadA = document.getElementById('download');
const impactText = document.getElementById('impactText');

// Build grid (2 rows x 16 steps)
rows.forEach((row, rIdx) => {
  const label = document.createElement('div');
  label.className = 'rowlabel';
  label.textContent = row.name;
  gridEl.appendChild(label);

  for (let s = 0; s < STEPS; s++) {
    const cell = document.createElement('div');
    cell.className = 'step';
    cell.role = 'button';
    cell.tabIndex = 0;
    cell.title = `${row.name} - step ${s+1}`;
    const toggle = () => {
      gridState[rIdx][s] = !gridState[rIdx][s];
      cell.classList.toggle('active');
      updateImpact();
    };
    cell.addEventListener('click', toggle);
    cell.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); toggle(); }});
    gridEl.appendChild(cell);
  }
});

// Transport + BPM
Tone.Transport.bpm.value = Number(bpmInput.value);
bpmInput.addEventListener('input', () => {
  Tone.Transport.bpm.rampTo(Number(bpmInput.value), 0.05);
  bpmVal.textContent = bpmInput.value;
});

// Viz
const cvs = document.getElementById('viz');
const ctx = cvs.getContext('2d');
function drawViz(step) {
  ctx.fillStyle = '#000'; ctx.fillRect(0,0,cvs.width,cvs.height);
  ctx.fillStyle = '#0a0';
  const w = cvs.width / STEPS;
  ctx.fillRect(step*w, 0, w-2, cvs.height);
}

// Sequencing
const loop = new Tone.Loop((time) => {
  const step = currentStep % STEPS;
  rows.forEach((row, rIdx) => {
    if (gridState[rIdx][step]) {
      const note = rIdx === 0 ? 'C2' : '8n';
      row.synth.triggerAttackRelease(note, '8n', time);
    }
  });
  drawViz(step);
  currentStep++;
}, '16n');

// Start/Stop
startBtn.addEventListener('click', async () => {
  await Tone.start();              // user gesture unlocks audio
  loop.start(0);
  Tone.Transport.start();
  playing = true;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  recordBtn.disabled = false;
});
stopBtn.addEventListener('click', () => {
  loop.stop(); Tone.Transport.stop(); currentStep = 0; playing = false;
  startBtn.disabled = false; stopBtn.disabled = true;
});

// Impact (toy heuristic you can edit)
function updateImpact() {
  const density = gridState.flat().filter(Boolean).length / (rows.length * STEPS);
  const evenness = (() => {
    // reward off-beat hats (every other step)
    let hits = 0; for (let i=1; i<STEPS; i+=2) if (gridState[1][i]) hits++;
    return hits / (STEPS/2);
  })();
  const platform = Math.round((0.5 + evenness*0.5) * 100);
  const community = Math.round((0.4 + density*0.6) * 100);
  const copyright = Math.round((1 - density*0.7) * 100); // lower density => lower "risk"
  impactText.innerHTML = `
    <strong>Platform‑friendliness:</strong> ${platform}% ·
    <strong>Community remixability:</strong> ${community}% ·
    <strong>Copyright risk (lower is better):</strong> ${copyright}%
  `;
}
updateImpact();

// Recording 8 bars using MediaRecorder (audio/webm)
const dest = Tone.getContext().createMediaStreamDestination();
Tone.Destination.connect(dest);
let recorder;
try { recorder = new MediaRecorder(dest.stream); } catch {}

recordBtn.addEventListener('click', () => {
  if (!playing || !recorder) return; // simple guard
  const bars = 8;
  const bpm = Tone.Transport.bpm.value;
  const secondsPerBar = (60 / bpm) * 4;
  const durationMs = Math.ceil((bars * secondsPerBar) * 1000);

  const chunks = [];
  recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data);
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/webm' });
    const url = URL.createObjectURL(blob);
    downloadA.href = url;
    downloadA.download = 'remix.webm';
    downloadA.style.display = 'inline';
    downloadA.textContent = 'Download recording';
  };

  recorder.start();
  setTimeout(() => recorder.stop(), durationMs);
});
