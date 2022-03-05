const {MOVEMENT, MESSAGES } = require('./constants');

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
    
  if (key === MOVEMENT.UP) {
    connection.write('Move: up');
  }
  if (key === MOVEMENT.LEFT) {
    connection.write('Move: left');
  }
  if (key === MOVEMENT.DOWN) {
    connection.write('Move: down');
  }
  if (key === MOVEMENT.RIGHT) {
    connection.write('Move: right');
  }
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

//EXPORT
module.exports = { setupInput };