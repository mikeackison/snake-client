const net = require('net');
const { IP, PORT } = require('./constants')

const name = "Name: MCA"
// Establish connection with game server


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });
  // this iterperets incoming data as text
  conn.setEncoding('utf8');


  // print a message to the screen when a connection is established
  // use the event handler
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    
    conn.write(name);

    
});

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
