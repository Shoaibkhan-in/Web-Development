import fs from "fs/promises"
import fsn from "fs"
import path from "path"


const basepath="C:\\Users\\shoai\\Desktop\\Sigma Web Development\\backend node js &npm\\file clutter"

let files = await fs.readdir(basepath)
let extensions=[]
for (const item of files) {
    let ext=item.split(".")[item.split(".").length-1];
    console.log(ext)
    if(item.split(".").length>1 && ext!="js"  && ext!="json"){
    if(fsn.existsSync(path.join(basepath, ext))){
        //if directory exist don't make it just move file to the directory
        fs.rename(path.join(basepath, item), path.join (basepath, ext, item))
    }
    else{
        // make directory
        fs.mkdir(ext)
        fs.rename(path.join(basepath, item), path.join (basepath, ext, item))
    }
}
}