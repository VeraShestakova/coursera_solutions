var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function (array){
for (var i=0; i < array.length; i++) {
  if (array[i].toLowerCase().charAt(0) == "j") {
    byeSpeaker.speak(array[i])
  } else {
    helloSpeaker.speak(array[i])
  }
}
})(names)