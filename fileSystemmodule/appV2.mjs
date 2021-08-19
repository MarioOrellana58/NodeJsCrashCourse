import fs from 'fs';//https://nodejs.org/api/fs.html#fs_fspromises_mkdir_path_options

const createFile = (path) => {
   return new Promise((resolve, reject) =>{
      fs.mkdir(path, (err) => {
         if (err) {
            reject(err)
         } else {
            resolve("exito")
         }
      }); 
   }) 
}

const init = async () => {
  try{
   let response = await createFile("folderasdv");
   console.log(response)
  }catch(ex){
     console.log(ex)
     console.log("error")
  }
}

init();
