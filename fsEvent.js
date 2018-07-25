var fs = require('fs');

//  fs.readFile('text.txt','utf-8',function(err,buff){
//   console.log(buff);
// });

// var read = fs.readFileSync('text.txt','utf-8');
// fs.writeFileSync('writeTxt.txt',read);

// var datas = "Hello.This is for testing purpose";
//
// fs.writeFile("writeTxt.txt",datas,function(err,data){
//   if(err) throw err;
//   console.log("data written successfully");
//    fs.writeFile("text.txt",datas,function(err,buff){
//       if(err) throw err;
//       fs.readFile("text.txt",'utf-8',function(err,buff){
//         if(err) throw err;
//         console.log(buff.toString());
//       });
//   });
// })
// if(fs.exists("./text.txt")){
//   fs.unlink("./text.txt",function(err,data){
//     if(err) throw err;
//     console.log("Deleted");
//   })
// }else{
//   fs.mkdir('./stuff',function(){
//     fs.readFile('test.txt','utf-8',function(err,data){
//       fs.writeFile('./stuff/text.txt',data)
//     })
//   })
// }
// if(fs.existsSync('./text.txt')){
//   fs.unlink('./text.txt',function(err,data){
//     if(err) throw err;
//     console.log(data);
//     console.log("deleted");
//   });
// }else{
//   var data = "je;;;;;"
//   fs.writeFile('./text.txt',data,function(err,data){
//     if(err) throw err;
//     console.log(data)
//   });
// }
// if(fs.existsSync("./stuff")){
//   fs.unlink("./stuff/text.txt",function(){
//     fs.rmdir("./stuff")
//   });
// }
