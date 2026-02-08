setcpm(85 / 4)

// Use euclidean rhythm for much of it, maybe changing the first value keeping the second (8)
// We can increase the "energy" by increasing the first value

// Common "tail"
  .s("piano")
  .lpf(rand.range(300, 500))
  .lpq(5)
  .delay(rand.range(0.5, 0.8))
  .room(0.5)
  .postgain(0.6)
  
// Complex part which can be built up and played with a bit
$piano: n("[0 <5 6> 4 <7*2 2>]").euclid(5, 8)
  .sometimesBy(0.125, ply("2"))
  .scale("D:minor").scaleTrans("<0 7 14 <21 12>>")

// Slow part.  This could be part of an interlude where
// we rely more or less on the chords
$piano: n("<0 4 ~ 5 3 2>").euclid(5, 8)
  .scale("D:minor").scaleTrans("<0 12>")

//
// Basic chords
//

// For .slow(2)
const c2 = "[d3, f3, a3]*2 [a3, c4, e4]*2 [f3, a3, c4]*2 <[g4, a#4, d5] [d3, f3, a3]>*2"

// For .slow(4)
const c4 = "[d3, f3, a3] [a3, c4, e4] [f3, a3, c4] <[g4, a#4, d5] [d3, f3, a3]>"

$chords: note(c4).slow(4)
  .s("piano")
  .lpf(500)
  .postgain(0.4)
  ._punchcard({ labels: 1 })
