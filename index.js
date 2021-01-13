// setup user interface
// specifically so that we can handle user input via stdin

//Create a function handleUserInput and register it as the "data" callback handler for stdin
const handleUserInput = ('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }

});

const setupInput = function() {
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput)
  stdin.resume();
  
  
  // then return
  return stdin;
};

// module.exports = { handleUserInput };
module.exports = { setupInput };