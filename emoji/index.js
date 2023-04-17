const fs = require('fs');
 let cowsay = require('cowsay');
 let colors = require('colors');
    console.log(cowsay.think({
        text: 'The end is near...',
         e: "* *"
        }).rainbow)

//use the filesystem module to create a file and add contents to it

const contents = "We're building things!!";

//write a file with nodejs
fs.writeFile('./daily-log.txt', contents, err => {
    if (err) {
        console.error(err);
    }
})