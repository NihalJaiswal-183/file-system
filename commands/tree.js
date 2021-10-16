let fs = require("fs");
let path = require("path");
treeHelper = (dirpath, indent) => {
    let isfile = fs.lstatSync(dirpath).isFile();
    if (isfile == true) {
        let filename = path.basename(dirpath);
        console.log(indent + "|-- " + filename)
    }
    else {
        let dirname = path.basename(dirpath);
        console.log(indent + " 🎁 " + dirname);
        let children = fs.readdirSync(dirpath);
        for (let i = 0; i < children.length; i++) {
            childpath = path.join(dirpath, children[i]);
            treeHelper(childpath, indent);
        }
    }
}

treefn = (dirpath) => {
    let doesexist = fs.existsSync(dirpath);
    if (dirpath == undefined) {
        treeHelper(process.cwd(), " ");
    }
    else {
        if (doesexist == true) {
            treeHelper(dirpath, " ");
        }
        else {
            console.log("please input a valid path");
        }
    }
};

module.exports={
    treekey:treefn
}