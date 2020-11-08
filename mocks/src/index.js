const mb = require("mountebank");
const settings = require("./settings");
const nabService = require("./nab-service/nab-service");
// const loginService = require("./login-service");

const mbServerInstance = mb.create({
  port: settings.port,
  pidfile: "../mb.pid",
  logfile: "../mb.log",
  protofile: "../protofile.json",
  ipWhitelist: ["*"],
});

mbServerInstance.then(function () {
  nabService.addService();
});
