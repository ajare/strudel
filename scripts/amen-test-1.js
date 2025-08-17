samples('github:ajare/strudel')

setCps(175/60/4)

$: s("amen/4").fit()
   .n(4)
   .scrub(irand(16).div(16)             // seek to location in sample
       .seg("8")                        // sample N times
    )                           
   .rib("<4 10 40 25>", 1)              // loop cycle
   .sometimesBy(0.1,                    // N% of time:
       ply("2 | 4")                     //   repeat last part
   )      

$: s("white!8").decay(0.1)
  .sometimesBy(0.2, ply("2 | 4"))
  .gain(1.1)
