const os = require("os");

const myOsInfo = {
  freeMemory: `${os.freemem() / 1024 ** 2} mb`,
  hostName: os.hostname(),
  version: os.version(),
  parallelism: os.availableParallelism(),
};

// console.log(myOsInfo);

module.exports = myOsInfo;
