setcpm(75 / 4)

// Change euclidean params can change energy - change step from 1 up to 5
// Building up the step param like this works well as an intro...
// Pause on third is nice, but notes need to be tweaked a bit.  
const p1 = n("<0 4 ~ [2 4]!2 3 ~ 3 6>").euclid("<2 4 5 7>/4", 8)  
  .scale("D:minor").scaleTrans("<0 7>");

// This needs an extra note somewhere, but carefully, as it's very nice at
// the moment.
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
