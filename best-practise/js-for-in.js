Array.prototype.foo = 1;

var a = []; 
a[5] = 5;   

for (var i = 0; i < a.length; i++) {
  console.log('a '+a[i]);
}

var a1 = []; 
a1[5] = 5;   

for (var i in a1) {
  console.log('a1 '+a1[i]);
}