const net = require('net');

// Establish connection with game server


const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542

  });
  // this iterperets incoming data as text
  conn.setEncoding('utf8');

  // Update the connect function to also attach an event handler
  // to handle incoming data and console log it for the player

  // message from user
  // on('data') --- do something, when Data got recieved
  // callback funtion needs to have two paramenters 'data' being one and the
  // var data
  conn.on('data', (data) => {
    console.log('Data:', data);
  });

  return conn;
};

// in curley braces, because the opject on play is in curly braces,
// if we remove on both it will stil run at this level
module.exports = { connect };