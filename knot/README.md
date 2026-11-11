# Knot

Knot shows what comes back in your material: the words a text returns to, the spacings and turns at which a picture repeats, and the passages a sound repeats.

It runs in the browser, on a phone or a computer. Your files stay on your device.

**Open Knot:** https://hassanasif.net/knot/

## What Knot shows

### Text

Each sentence becomes a point on a circle, in reading order. A line joins two sentences that share a word. The six words shared most get their own colours.

- **Density:** the share of sentence pairs that share a word. A dense knot keeps returning to its own words; a sparse one brings new words with each sentence.
- **Centre:** the sentences that share two or more words with the most other sentences. Hoey calls such pairs bonds; the sentences with most bonds often state what a text is about (Hoey 1991).
- **Loose ends:** sentences that share no word with the rest.
- **Ring:** whether the last sentence returns to the words of the first (Douglas 2007).
- **Longest line:** the word that returns over the longest stretch of the text.

### Picture

Knot takes the largest square from the middle of a picture.

- **Repeats map:** the picture's Fourier power spectrum. Each point stands for one spacing and one direction: distance from the centre tells how often a stripe repeats across the square, the angle tells which way it runs. A crystal's diffraction pattern is the same kind of picture (Shechtman et al. 1984).
- **Strongest repeat:** how many times it repeats across the square, and at what angle.
- **Directions:** a set of four, six, eight, ten, twelve or sixteen directions, counted when it returns across several spacings.
- **Repeat unit:** two shifts at which the picture lands on itself, found in its autocorrelation (Liu, Collins and Tsin 2004). A pattern with clear directions and no repeat unit has order without a repeat, as a Penrose tiling does, or a repeat larger than the picture.
- **Star:** how well the picture matches itself when turned around one point by 360 degrees divided by n, for n from 2 to 16. Knot looks for the strongest star; tap a point to test another.

### Sound

Knot reads up to the first minute of a recording: a voice memo, a song, or the sound of a phone video.

- **Pitch over time:** a spectrogram from 50 to 8,000 vibrations a second, spaced as on a keyboard.
- **Main pitch:** its centre and range in semitones, by subharmonic summation (Hermes 1988).
- **Phrases:** stretches of sound between pauses of a quarter second or more.
- **Returns map:** each moment compared with each other moment. Bright lines beside the diagonal are passages that come back (Foote 1999). Knot names the strongest return and its delay.

Each view can be saved as an image, or copied as text.

## Use

Open the link above, or open `index.html` in a browser. It needs no installation and no account.

- Pictures: JPEG, PNG, WebP and GIF. HEIC photos open in Safari; elsewhere, choose a screenshot of the photo.
- Sound: WAV, MP3, M4A, AAC, OGG, FLAC and WebM, and the sound of MP4 and MOV videos.
- On a computer, a file dropped on the page opens in its tab, and a pasted picture opens in the picture tab.

## Privacy

Knot reads your files inside your browser, and they stay on your device. It keeps a draft of your text in your browser's own storage.

## Cite

Asif, Hassan. 2026. *Knot*. Software, version 1.0. https://hassanasif.net/knot/

## Sources

- Douglas, M. 2007. *Thinking in Circles: An Essay on Ring Composition*. New Haven: Yale University Press.
- Foote, J. 1999. "Visualizing Music and Audio Using Self-Similarity." *Proceedings of ACM Multimedia 99*: 77 to 80.
- Hermes, D. J. 1988. "Measurement of Pitch by Subharmonic Summation." *Journal of the Acoustical Society of America* 83 (1): 257 to 264.
- Hoey, M. 1991. *Patterns of Lexis in Text*. Oxford: Oxford University Press.
- Liu, Y., R. T. Collins and Y. Tsin. 2004. "A Computational Model for Periodic Pattern Perception Based on Frieze and Wallpaper Groups." *IEEE Transactions on Pattern Analysis and Machine Intelligence* 26 (3): 354 to 371.
- Paley, W. B. 2002. *TextArc*.
- Shechtman, D., I. Blech, D. Gratias and J. W. Cahn. 1984. "Metallic Phase with Long-Range Orientational Order and No Translational Symmetry." *Physical Review Letters* 53 (20): 1951 to 1953.

## Licence

Code: MIT licence (see `LICENSE`). The Samarkand tiles in the picture example: the Tuman Aqa tomb, Shah-i Zinda, Samarkand; photo by Patrickringgenberg, CC BY 3.0, via Wikimedia Commons, cropped.
