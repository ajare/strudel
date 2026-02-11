setcpm(75 / 4)

// Change euclidean params can change energy - change step from 1 up to 5
// Building up the step param like this works well as an intro, as here euclid
// functions as a filter, removing notes.
// Pause on third is nice, but notes need to be tweaked a bit.  
const p1 = n("<0 4 ~ [2 4]!2 3 ~ 3 6>").euclid("<2 4 5 7>/4", 8)  
  .scale("D:minor").scaleTrans("<0 7>");

// This needs an extra note somewhere, but carefully, as it's very nice at
// the moment.  The chord [g4, a#4, d5] on the 7th note is important, along with
// the 5-step on euclid which mutes the note so you can hear the chord fully.
const p2 = n("[0 <5 6> 4 <7*2 2>]").euclid(5, 8)
  .sometimesBy(0.125, ply("2"))
  .s("piano")
  .scale("D:minor").scaleTrans("<0 7 14 <21 12>>");

// This can definitely be improved.
const p3 = n("<0 4 ~ 5 3 2>").euclid(5, 8)
  .scale("D:minor").scaleTrans("<0 12>");

// Another one.  5 scale transpositions (ie odd number) means that it flips each time through
// because we are dividing the main pattern by 2
// Don't use so much delay on this as it's already quite an involved pattern, or reduce delay
// as increase euclid step
const p4 = n("[0 2 3 3@2 5 5@2 2 [5 7] 6 4 2 0 3@2]/2").euclid("<3 5 7 7 8>/2", 8)  
  .scale("D:minor").scaleTrans("<0 7 14 7 [5 4 3]>");

$piano: seqPLoop(
  [0, 16, p1],
  [16, 24, p2],
  [24, 32, p3])
  .s("piano")
  .lpf(rand.range(300, 500))
  .lpq(5)
  .delay(rand.range(0.5, 0.8))
  .room(0.5)
  .postgain(0.6)
  ._pianoroll()

//
// Basic chords
//
const cc = {
  maj1: "0, 4, 7",
  maj2: "2, 5, 9",
  maj3: "4, 7, 11",
  maj4: "5, 9, 12",
  maj5: "7, 11, 14",
  maj6: "9, 12, 16",
  maj7: "11, 14, 17",
  maj1sus2: [0, 2, 7], maj1sus4: [0, 5, 7],
  maj2sus2: [2, 4, 9], maj2sus4: [2, 7, 9],
  maj3sus2: [4, 5, 11], maj3sus4: [4, 9, 11],
  maj4sus2: [5, 7, 12], maj4sus4: [5, 11, 12],
  maj5sus2: [7, 9, 14], maj5sus4: [7, 12, 14],
  maj6sus2: [9, 11, 16], maj6sus4: [9, 14, 16],
  maj7sus2: [11, 12, 17], maj7sus4: [11, 16, 17],
  maj1inv1: [], maj1inv2: [],
  min1: "0, 3, 7",
  min2: "2, 5, 8",
  min3: "3, 7, 10",
  min4: "5, 8, 12",
  min5: "7, 10, 14",
  min6: "8, 12, 15",
  min7: "10, 14, 17",
}

// For .slow(2)
const c2 = "[d3, f3, a3]*2 [a3, c4, e4]*2 [f3, a3, c4]*2 <[g4, a#4, d5] [d3, f3, a3]>*2"

// For .slow(4)
const c4 = "[d3, f3, a3] [a3, c4, e4] [f3, a3, c4] <[g4, a#4, d5] [d3, f3, a3]>"

$chords: seqPLoop(
  [0, 16, note(c4).slow(4)],
  [16, 24, note(c2).slow(2)],
  [24, 32, note(c4).slow(4)],
  )
  .s("piano")
  .lpf(500)
  .postgain(0.4)
  ._punchcard({ labels: 1 })
