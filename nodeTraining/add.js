/*
var b = prompt("请输入第一个数！");
var c = prompt("请输入第二个数！");
console.log(b);
console.log(c);
var a = Number(b)+Number(c);
console.log(a);
*/

var prompt = require('prompt');

prompt.start();

prompt.get(['X', 'Y'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  X: ' + result.X);
  console.log('  Y: ' + result.Y);
  var sum = Number(result.X)+Number(result.Y);
  console.log('  X+Y: ' + sum);
});

function onErr(err) {
  console.log(err);
  return 1;
}
