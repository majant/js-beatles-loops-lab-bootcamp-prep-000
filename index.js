function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

var musicians = ["John Lennon", "Ringo Starr"]
var instruments = ["guitar", "drums"]

console.log(theBeatlesPlay(musicians, instruments))
