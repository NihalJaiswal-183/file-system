
helpfn = (dirpath) => {
    console.log(`
    ${dirpath}
    node main.js  tree "directory path"
    node main.js organize "directory path"
    node main.js help
    `);
};

module.exports={
    helpkey:helpfn
}