const os = require("os");

// INFO ABOUT CURRENT USER
const user = os.userInfo();
console.log(user);

// UPTIME INFO

console.log(`The uptime of this PC is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    version: os.version(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);