const {writeFileSync} = require("fs");

for(let i = 0; i < 10000 ; i++) {
    writeFileSync(
        "./content/big-file.txt",
        `Hello world ${i}\n`,
        {flag : "a"}
    )
}