let fs = require("fs");
let path = require("path");
sendfile = (src, dest, category) => {
    let categorypath = path.join(dest, category);
    if (fs.existsSync(categorypath) == false) {
        fs.mkdirSync(categorypath);
    }
    var filename = path.basename(src, category);
    let destpath = path.join(categorypath, filename);
    fs.copyFileSync(src, destpath);
    fs.unlinkSync(src);

    // console.log(filename, "copied to", categorypath);
}
getCategory = (name) => {
    let ext = path.extname(name);
    ext = ext.slice(1);
    // console.log(ext);
    let filetype = "documents";
    for (let type in utility) {
        for (let p in utility[type]) {
            if (ext == utility[type][p]) {
                filetype = type;
                break;
            }
            // console.log(utility[type][p]);
        }
    }
    return filetype;
}
organizeHelper = (src, dest) => {
    let childName = fs.readdirSync(src);
    //   console.log(childName);
    for (let i = 0; i < childName.length; i++) {
        let childAddress = path.join(src, childName[i]);
        if (fs.lstatSync(childAddress).isFile()) {
            let category = getCategory(childName[i]);
            //  console.log(childName[i]);
            //   console.log(category);
            sendfile(childAddress, dest, category);

        }
    }
};

organizefn = (dirpath) => {
    let doesexist = fs.existsSync(dirpath);
    if (dirpath == undefined) {
        destpath = process.cwd();
        //  organizeHelper(dirpath, destpath);
    } else {
        if (doesexist) {
            destpath = path.join(dirpath + "organised_path");
            if (fs.existsSync(destpath) == false) fs.mkdirSync(destpath);

            organizeHelper(dirpath, destpath);
        }
        else {
            console.log("please input a valid path");
        }
    }

    // 1.input -> directory path given
    // 2.create -> organise_files -> directory
    // 3.identify categories of all the files present in that input directory
    // 4.copy / cut files to that organise directory inside of any of categoey directory
};

module.exports={
    organizekey:organizefn
}