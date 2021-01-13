// setup user interface
// specifically so that we can handle user input via stdin

// const { createConnection } = require("net");
// const { connect } = require("./client");


let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();


  stdin.on('data', function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === "w") {
      connection.write('Move: up');

    } else if (key === 'a') {
      connection.write('Move: left');

    } else if (key === 's') {
      connection.write('Move: down');

    } else if (key === 'd') {
      connection.write('Move: right');
    }
  })
  // then return
  return stdin;
};

// module.exports = { handleUserInput };
module.exports = { setupInput };