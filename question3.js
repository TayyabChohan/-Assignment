function longest(string) {
  var max = 0;
  var temp = "";
  var i;
  var char;
  var pos;

  for (i = 0; i < string.length; i += 1) {
    char = string.charAt(i);
    pos = temp.indexOf(char);
    if (pos !== -1) {
      temp = temp.substr(pos + 1);
    }
    temp += char;
    max = Math.max(max, temp.length);
  }
  return max;
}

longest("geeksforgeeks");
console.log(longest("geeksforgeeks"));
