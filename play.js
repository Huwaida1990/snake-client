const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port:  50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect',(msg)=>{
    console.log("Successfully connected to game server");
    conn.write('Name : __');
  })


  return conn;
};

console.log("Connecting ...");

module.exports = connect;