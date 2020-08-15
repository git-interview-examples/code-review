myLib.push('the');
myLib.push('quick', 'brown');

setTimeout(function(){
  myLib.push('fox jumped over the lazy dog')
}, 100);

// Expected output
//
// >> the quick
// (99ms wait)
// >> brown fox
// >> jumped over
// >> the lazy
