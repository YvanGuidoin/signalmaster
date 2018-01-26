const fs = require("fs"),
  sockets = require("./sockets"),
  http = require("http");

const config = {
  server: {
    port: parseInt(process.env.PORT, 10) || 8888,
    secure: false,
    path: process.env.SOCKETIO_PATH || "/socket.io",
    serveClient: true
  },
  rooms: {
    maxClients: 0
  },
  stunservers: [
    {
      urls: process.env.STUN || "stun:stun.l.google.com:19302"
    }
  ],
  turnservers: [
    // {
    //   urls: ["turn:your.turn.servers.here"],
    //   secret: "turnserversharedsecret",
    //   expiry: 86400
    // }
  ]
};

const server_handler = function(req, res) {
  res.writeHead(200);
  res.end();
};
const server = http.Server(server_handler);
server.listen(config.server.port);

sockets(server, config);

const httpUrl = "http://localhost:" + config.server.port;
console.log("signal master is running at: " + httpUrl);
