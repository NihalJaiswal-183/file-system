#!/usr/bin/env node
let fs = require("fs");
let path = require("path");
let helpobj=require("./commands/help");
let treeobj=require("./commands/tree");
let organizeobj=require("./commands/organize");
let inputArr = process.argv.slice(2);
console.log(inputArr);

// node main.js  tree "directory path"
// node main.js organize "directory path"
// node main.js help

let utility = {
    media: ["mp4", "mp3"],
    archives: ["zip", "rar", "7z", "rar", "tar", "gz", "ar", "iso", "xz", "ini"],
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "css", "html", "odb", "js"],
    app: ["exe", "dog", "pkg", "deb"]
}

let destpath;

let command = inputArr[0];


if (command == "tree") {
    treeobj.treekey(inputArr[1]);
} else if (command == "organize") {
    organizeobj.organizekey(inputArr[1]);
} else if (command == "help") {
    helpobj.helpkey(inputArr[1]);
} else {
    console.log("please 👍input a valid command");
}

