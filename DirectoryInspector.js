// Write a NodeJs app to list elements in a specific directory:
const fs = require("fs");


const directoryInspector = (path = __dirname)=>{
        try{
                if(fs.existsSync(path)){
                        const files  = fs.readdirSync(path);
                        files.forEach(  (file)=> {
                                let c_path = path + "/" + file;
                                if( fs.lstatSync(file).isDirectory() ){
                                        console.log(`${file}/`);
                                }else{
                                        console.log(file);   
                                }
                        } )

                }else{
                        throw new Error("The path doesn not exist!!");
                }
        }catch(e){
                console.log(e);
        }
}

directoryInspector()
directoryInspector("./")
directoryInspector("Ksquare")