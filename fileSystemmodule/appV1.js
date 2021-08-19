const fs = require('fs')

//create a file
// fs.writeFile('example.txt', "this is an example", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('File successfully created')
//         //read a file
//         fs.readFile('example.txt','utf8',(err, file) => {//sin encoding imprime el buffer
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log(file)
//             }
//         })
//     }
// })

//rename or move file
// fs.rename('example.txt', 'example2.txt', (err) =>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Successfully renamed the file')
//     }
// })

//append data
// fs.appendFile('example2.txt', "\npatito feliz", (err) => {
//     if (err) {
//         console.log(err)   
//     } else {
//         console.log("Successfully appended data to file")
//     }
// })

//delete file
fs.unlink('example2.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Successfully deleted the file")
    }
})