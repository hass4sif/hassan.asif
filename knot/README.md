# Knot

Knot shows what comes back in a text, a picture or a recording, and joins each reading into a shared girih.

It runs in the browser, on a phone or a computer. Your files stay on your device.

**Open Knot:** https://www.hassanasif.net/knot/
**The room, for a projector:** https://www.hassanasif.net/knot/room.html

## What Knot shows

Each result comes as a card: what it shows, why it matters, what it cannot show, how it bears on girih and knots, the outcome on your material, and the settings behind it. A short line at the top of each tab, "In short", puts the results together.

### Text

Each sentence, or each line of a poem, a song or a list, becomes a point on a circle in reading order. A line joins two points that use the same word. Knot reads English, French, Arabic, Persian and Urdu: it removes Arabic vowel signs, Qur'anic marks and tatweel, folds the Arabic and Persian forms of alef, kaf and yeh into one form each, keeps Urdu ے apart from ی, and sets common words aside. A tap counts a set-aside word again.

- **Density:** the share of pairs that share a word, against the same words scattered at random over units of the same lengths.
- **Reach:** how far apart two uses of a word sit, against shuffled orders.
- **Centre:** the units with the most shared words, with long units discounted (Hoey 1991; Mihalcea and Tarau 2004).
- **Closing:** whether the last unit picks up the first unit's words, against the other pairs (Douglas 2007).
- **Mirror order:** whether words return in reverse order more often than in shuffled copies. Two words fall in mirror order by chance one time in three (Edwards and Edwards).
- **Refrain and rhyme:** for lines, an ending that returns at fixed places and the shared final letters before it, as the radīf and qāfiya of a ghazal (Faruqi and Pritchett 1991).
- **Repeated phrase:** the longest run of words that returns.
- **Returns map:** each word set against each later word, a dotplot (Church and Helfman 1993).

### Picture

- **Diffraction view:** the picture's Fourier power spectrum, the quantity a crystal's diffraction pattern records. It has no time axis and no place axis, so it is no spectrogram. Each spot has a twin across the centre.
- **Strongest repeat and directions:** how many stripes fit across the square, which way they run, and the set of directions, so that "ten directions" reads as lines running five ways, 36 degrees apart (Lu and Steinhardt 2007).
- **Line rose:** which way the edges run, weighted by contrast (after Freeman and Roth 1995).
- **Repeat unit:** two slides that land the picture on itself, drawn as arrows, with a see-through copy that slides along them (Liu, Collins and Tsin 2004).
- **Star:** how well the picture matches itself turned around one point, from a half to a sixteenth, and whether mirrors pass through that point (after Lee, Collins and Liu 2008).
- **Colours:** the main colours by area, by median cut (Heckbert 1982).

### Sound

- **Spectrogram:** time against pitch, 50 to 8,000 vibrations a second, with octave lines.
- **Phrases:** stretches between pauses of a quarter second or more.
- **Pitch:** the main voice by subharmonic summation (Hermes 1988), counted in cents from the voice's own home pitch, with a pitch rose that folds one octave into a circle (Gedik and Bozkurt 2010; Heydarian and Bainbridge 2019).
- **Returns:** each moment set against each other moment (Foote 1999), the strongest passage that comes back, and the share of moments that return.

Knot does not name a maqām, check tajwīd, identify a reciter or judge a recitation.

## Your tile and the room

Each reading makes a girih tile. Its colour names the medium, its line weight says how much comes back, and a filled centre marks returns at fixed places. The phone repeats the tile into a small girih of 21 tiles, which you can save.

In a session, the room page shows a QR code and a six-letter room code. A phone that joins can send its tile. Knot shows, before sending, exactly what leaves the phone: the medium, three small numbers, a few words about the result, a name and an optional word. No file, text, picture or sound leaves. The tile travels through ntfy.sh, a public message service that needs no account, locked with AES-GCM, with the room code as the secret; ntfy.sh deletes messages after 12 hours. People with the room code can read the tiles. If the network fails, the phone shows its tile as a QR code and a short typed code, which the room reads through a camera or a keyboard.

The room places tiles ring by ring from a central decagon, one each 600 milliseconds. Tiles meet at the middle of their edges at 54 degrees, Hankin's "polygons in contact" method (Kaplan 2005; Kaplan and Salesin 2004), so the lines run on from tile to tile. The room offers five views: tiles and lines; girih, with the tiles hidden; tiles alone; collation, where each tile takes its own angle from its numbers and the lines bend where neighbours differ; and strands, which follow each line through the room. The layout is a modern reconstruction. The room saves itself after each tile and exports SVG, PNG and JSON.

## Own window

Add Knot to the Home Screen, or install it from the browser's menu, and it opens in its own window without the browser's bars, offline as well. On a computer, the window button also offers full screen and a separate window.

## Privacy

Knot reads your files inside your browser, and they stay on your device. It keeps a draft of your text in your browser's own storage. It loads its fonts from this folder, so opening Knot tells no third party. A tile leaves the phone when you press Send, and not before.

## Cite

Asif, Hassan. 2026. *Knot*. Software, version 6. https://www.hassanasif.net/knot/

## Sources

- Church, K. W., and J. I. Helfman. 1993. "Dotplot: A Program for Exploring Self-Similarity in Millions of Lines of Text and Code." *Journal of Computational and Graphical Statistics* 2 (2): 153 to 174.
- Douglas, M. 2007. *Thinking in Circles: An Essay on Ring Composition*. New Haven: Yale University Press.
- During, J. "Dawr." *Encyclopaedia Iranica*.
- Edwards, B. F., and W. F. Edwards. "Does Chiasmus Appear in the Book of Mormon by Chance?" *BYU Studies*.
- Faruqi, S. R., and F. W. Pritchett. 1991. "Lyric Poetry in Urdu: The Ghazal."
- Foote, J. 1999. "Visualizing Music and Audio Using Self-Similarity." *Proceedings of ACM Multimedia 99*: 77 to 80.
- Freeman, W. T., and M. Roth. 1995. "Orientation Histograms for Hand Gesture Recognition." International Workshop on Automatic Face and Gesture Recognition.
- Gabor, D. 1946. "Theory of Communication." *Journal of the Institution of Electrical Engineers* 93.
- Gedik, A. C., and B. Bozkurt. 2010. "Pitch-Frequency Histogram-Based Music Information Retrieval for Turkish Music." *Signal Processing* 90 (4).
- Grünbaum, B. 2006. "What Symmetry Groups Are Present in the Alhambra?" *Notices of the American Mathematical Society* 53 (6).
- Hargittai, I., and M. Hargittai. 2020. "Penrose, Mackay, Shechtman and Bringing Down the Dogma about Fivefold Symmetry." *IUCr Newsletter* 28 (4).
- Heckbert, P. 1982. "Color Image Quantization for Frame Buffer Display." *Computer Graphics* (SIGGRAPH) 16 (3).
- Hermes, D. J. 1988. "Measurement of Pitch by Subharmonic Summation." *Journal of the Acoustical Society of America* 83 (1): 257 to 264.
- Heydarian, P., and D. Bainbridge. 2019. "Dastgàh Recognition in Iranian Music." Digital Libraries for Musicology.
- Hoey, M. 1991. *Patterns of Lexis in Text*. Oxford: Oxford University Press.
- Kaplan, C. S. 2005. "Islamic Star Patterns from Polygons in Contact." *Graphics Interface 2005*.
- Kaplan, C. S., and D. H. Salesin. 2004. "Islamic Star Patterns in Absolute Geometry." *ACM Transactions on Graphics* 23 (2).
- Lee, S., R. T. Collins and Y. Liu. 2008. "Rotation Symmetry Group Detection via Frequency Analysis of Frieze-Expansions." CVPR.
- Liu, Y., R. T. Collins and Y. Tsin. 2004. "A Computational Model for Periodic Pattern Perception Based on Frieze and Wallpaper Groups." *IEEE Transactions on Pattern Analysis and Machine Intelligence* 26 (3): 354 to 371.
- Lu, P. J., and P. J. Steinhardt. 2007. "Decagonal and Quasi-Crystalline Tilings in Medieval Islamic Architecture." *Science* 315: 1106 to 1110.
- Marwan, N., M. C. Romano, M. Thiel and J. Kurths. 2007. "Recurrence Plots for the Analysis of Complex Systems." *Physics Reports* 438.
- Mihalcea, R., and P. Tarau. 2004. "TextRank: Bringing Order into Texts." Proceedings of EMNLP.
- Paley, W. B. 2002. *TextArc*.
- Polyak, M., and O. Viro. 1994. "Gauss Diagram Formulas for Vassiliev Invariants." *International Mathematics Research Notices*.
- Senechal, M. 1995. *Quasicrystals and Geometry*. Cambridge: Cambridge University Press.
- Shechtman, D., I. Blech, D. Gratias and J. W. Cahn. 1984. "Metallic Phase with Long-Range Orientational Order and No Translational Symmetry." *Physical Review Letters* 53 (20): 1951 to 1953.
- Wattenberg, M. 2002. "Arc Diagrams: Visualizing Structure in Strings." IEEE InfoVis.
- Wichmann, B. 2008. "Islamic Tilings by Symmetry Group."

## Licence

Code: MIT licence (see `LICENSE`). Parts by others, with their licences: see `THIRD_PARTY.md`. The Samarkand tiles in the picture example: the Tuman Aqa tomb, Shah-i Zinda, Samarkand; photo by Patrickringgenberg, CC BY 3.0, via Wikimedia Commons, cropped.
