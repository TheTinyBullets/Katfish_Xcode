String.prototype.repeat = function (count) {
  if (count < 1) { return ''; }
  var result = '', pattern = this.valueOf();
  while (count > 1) {
    if (count) { result += " " + pattern; }
    count >>= 1, pattern += " " + pattern;
  } return result + " " + pattern;
};

console.log("client".repeat(3));