setTimeout(function(){
  buffer = window.myLib
  myLib = {}
  myLib.push = function() {
    // "".split(<anything>) returns [""] in JS
    // So there's need to fight with JS when function is called without arguments
    if (arguments.length > 0) {
      // `arguments` returns a Arguments object, so we need to convert to array:
      var argsArray = [].slice.call(arguments);
      // The `.join().split()` is to handle strings with multiple words:
      [].push.apply(buffer, argsArray.join(' ').split(' '));
    }

    while (buffer.length > 1) {
      console.log(buffer.shift(), buffer.shift());
    }
  };

  // We need to make sure the initial buffer is processed since myLib loads async
  myLib.push();
}, 1);

window.myLib = window.myLib || [];
