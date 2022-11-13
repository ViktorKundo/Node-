const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
    console.log(`data recived korisnik: ${name} with id:${id}`);
})

customEmitter.on("response", () => {
    console.log(`nesto drugo`);
})

customEmitter.emit("response", "Peter", 15);