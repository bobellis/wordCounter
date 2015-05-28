function wordCount(text){
  var wordArray = text.split(" ")
  var words = {}
  wordArray.forEach(function(element, index, array){
    if (words[element]){
      words[element] = words[element] + 1;
    }
    else{
      words[element] = 1;
    }
  })
  return sortWordCount(words);
}

function sortWordCount(object){
  var keys = [];
  var values = [];
  var ordered = [];
  for (var key in object) {
    keys.push(key);
    values.push(object[key]);
  }
  while (ordered.length < values.length){
    var max = Math.max.apply(Math, values);
    var index = values.indexOf(max);
    ordered.push(keys[index] + ":" + values[index].toString());
    values[index] = 0;
  }
  return ordered.join(", ");
}
