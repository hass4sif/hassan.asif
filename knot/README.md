# Knot

Knot shows what repeats in a text, a picture or a recording. Repeats are clues to how a thing was made. Each result becomes a piece cut from the material and a girih tile, and a room gathers them into one collage and one girih.

It runs in the browser, on a phone or a computer. Your files stay on your device.

**Open Knot:** https://www.hassanasif.net/knot/
**The room, for a projector:** https://www.hassanasif.net/knot/room.html

## How to use it

1. **Choose.** Pick Text, Picture or Sound. Add your own material, or try an example.
2. **Read.** Knot takes your material apart with a few plain questions, the kind a maker would ask. Each answer says what Knot found and how it checked.
3. **Undo.** Use the answers as clues. Write down three steps you think made your material. Then compare them with Knot’s three steps.
4. **Redo.** Give your three steps to a partner. Can they make your material again from the steps alone?
5. **Check.** Send your tile to the room. Open the Room tab: the group’s pieces gather into one collage, there and on the screen at the front.

## What Knot shows

Each result answers one question. The card gives Knot’s answer, what it means, how Knot checks it in one sentence, an Undo clue (what the answer suggests about the making) and a Redo step (one step you could write down). More adds why it matters, what it misses, what it does to your tile, and the settings. Under "In short", Knot offers its own guess at three steps, folded away so that people write theirs first.

### Text

Each sentence, or each line of a poem, a song or a list, becomes a dot on a circle in reading order. A tie joins two dots that use the same word. Knot reads English, French, Arabic, Persian and Urdu: it removes Arabic vowel signs, Qur'anic marks and tatweel, folds the Arabic and Persian forms of alef, kaf and yeh into one form each, keeps Urdu ے apart from ی, and sets common words aside. A tap counts a set-aside word again.

- **Shared words:** the share of pairs that share a word, against the same words scattered at random over units of the same lengths.
- **Distance:** how far apart two uses of a word sit, against shuffled orders.
- **Centre:** the units with the most shared words, with long units discounted (Hoey 1991; Mihalcea and Tarau 2004).
- **Loose ends:** the units that share no word with the rest.
- **Ending:** whether the last unit picks up the first unit's words, against the other pairs (Douglas 2007).
- **Mirror order:** whether words return in reverse order more often than in shuffled copies. Two words fall in mirror order by chance one time in three (Edwards and Edwards).
- **Refrain and rhyme:** for lines, an ending that returns at fixed places and the shared final letters before it, as the radīf and qāfiya of a ghazal (Faruqi and Pritchett 1991).
- **Longest return:** the shared word that spans the longest stretch of the text.
- **Repeated phrase:** the longest run of words that comes back whole.
- **Returns map:** each word set against each later word, a dotplot (Church and Helfman 1993).

### Picture

- **How close are the stripes? (stripe map):** the picture's Fourier power spectrum, the same kind of map that X-rays through a crystal draw. Each pair of dots is one set of stripes; dots far from the middle mean stripes close together. It has no time axis and no place axis.
- **Which ways do the lines run?** The line rose counts which way the edges run, weighted by contrast (after Freeman and Roth 1995); the stripe map adds the set of directions in which the stripes repeat, so that ten spokes read as lines running five ways, 36 degrees apart (Lu and Steinhardt 2007).
- **Strongest stripes:** how many stripes fit across the square and which way they run: the size of the repeated piece.
- **Does it repeat? (repeat unit):** two slides that land the picture on itself, drawn as arrows, with a see-through copy that slides along them (Liu, Collins and Tsin 2004).
- **Is there a star? (star test):** how well the picture matches itself turned around one point, from a half turn to a sixteenth, and whether mirrors pass through that point (after Lee, Collins and Liu 2008).
- **Colours:** the main colours by area, by median cut (Heckbert 1982).

### Sound

- **Sound picture:** a spectrogram, time against pitch, 50 to 8,000 vibrations a second, with octave lines.
- **Phrases:** stretches between pauses of a quarter second or more.
- **Pitch:** the main voice by subharmonic summation (Hermes 1988), counted in cents from the voice's own home pitch, with a pitch rose that folds one octave into a circle (Gedik and Bozkurt 2010; Heydarian and Bainbridge 2019).
- **Returns:** each moment set against each other moment (Foote 1999), the strongest passage that comes back, and the share of moments that return.

Knot does not name a maqām, check tajwīd, identify a reciter or judge a recitation.

## Your tile and the room

Each result makes a piece and a girih tile.

The piece is cut from your material, in a shape that comes from what Knot found. A picture gives two by two of its repeating tile, or the disc of its star with as many points, or a cut whose sides follow its line directions; its pixels stay square, like the small stones of a mosaic. A text gives its own knot: one corner for each sentence or line, set out by its length, printed with the opening of the text, with the ties as chords and the most shared words around the edge. A sound gives its pitch line wrapped into a ring, which swells when the voice goes up and dips at each pause, filled with a small sound picture in orange, dark where the sound is loud; a violet line joins a part and its return. Small cuts lie around each piece: shards of the picture or the sound picture in the five girih shapes (Lu and Steinhardt 2007), a few lines cut from the text, and the pitch line bent like a wire. The same tile gives the same cuts on each screen.

The girih tile shows the same result in the session's girih. Its colour names the kind of material, its line weight says how much comes back, and a filled centre marks a strong repeat. The phone repeats the tile into a small girih of 21 tiles, which you can save.

In a session, the room page shows a QR code and a six-letter room code. A phone that joins can send its tile. Knot shows, before sending, exactly what leaves the phone: the medium, three small numbers, a few words about the result, a name, an optional word and, if you tick the box, the piece. For a picture, the piece carries a thumbnail of at most 64 by 64 pixels, cut as above. For a sound, it carries a grey sound picture of at most 96 by 48 pixels, which makes no sound, and the pitch line as 48 numbers. For a text, it carries the opening of the text, up to 160 characters, its six most shared words and its repeated phrase. Untick the box to send the numbers and words alone; the room then shows a plain shape. Your file itself stays on the phone. The tile travels through ntfy.sh, a public message service that needs no account, locked with AES-GCM, with the room code as the secret; it stays under the 4,096 bytes that ntfy.sh keeps as one message, and ntfy.sh deletes messages after 12 hours. People with the room code can read the tiles. If the network fails, the phone shows its tile as a QR code and a short typed code, which the room reads through a camera or a keyboard; these carry the numbers and words, without the piece. Each phone has a Room tab that shows the same collage and girih as the room page: both read the room's log on ntfy.sh in the same order, so tiles sent before a screen opened still show for twelve hours. New round on the room page sends a marker that clears the pattern on each screen. Tiles added by camera or typed code go out on the network too.

The room opens on the collage. Pieces take their places along a sunflower spiral, the arrangement of seeds in a sunflower head (Vogel 1979), in the order they came, packed close so that they overlap a little; each new piece lands on top, with its cuts. Dashed threads run over the pieces like stitches and join pieces that share something: two texts with a shared word, two pictures with the same star or both with lines in five directions, two sounds that both come back.

The room also places tiles ring by ring from a central decagon, one each 600 milliseconds. Tiles meet at the middle of their edges at 54 degrees, Hankin's "polygons in contact" method (Kaplan 2005; Kaplan and Salesin 2004), so the lines run on from tile to tile. Besides the collage, the room offers five views: tiles and lines; girih, with the tiles hidden; tiles alone; collation, where each tile takes its own angle from its numbers and the lines bend where neighbours differ; and strands, which follow each line through the room. The layout is a modern reconstruction. The room saves itself after each tile and exports SVG, PNG and JSON.

## Own window

Add Knot to the Home Screen, or install it from the browser's menu, and it opens in its own window without the browser's bars, offline as well. On a computer, the window button also offers full screen and a separate window.

## Privacy

Knot reads your files inside your browser, and they stay on your device. It keeps a draft of your text in your browser's own storage. It loads its fonts from this folder, so opening Knot tells no third party. A tile leaves the phone when you press Send, and not before. With the box ticked, the small piece described above goes with it.

## Cite

Asif, Hassan. 2026. *Knot*. Software, version 6.3. https://www.hassanasif.net/knot/

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
- Vogel, H. 1979. "A Better Way to Construct the Sunflower Head." *Mathematical Biosciences* 44 (3 to 4): 179 to 189.
- Wattenberg, M. 2002. "Arc Diagrams: Visualizing Structure in Strings." IEEE InfoVis.
- Wichmann, B. 2008. "Islamic Tilings by Symmetry Group."

## Licence

Code: MIT licence (see `LICENSE`). Parts by others, with their licences: see `THIRD_PARTY.md`. The Samarkand tiles in the picture example: the Tuman Aqa tomb, Shah-i Zinda, Samarkand; photo by Patrickringgenberg, CC BY 3.0, via Wikimedia Commons, cropped.
