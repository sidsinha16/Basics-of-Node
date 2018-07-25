var express = require('express');
var app = express();

app.set("view engine",'ejs');



// app.get('/',(req,res)=>{
//   res.send("Hello");
// })

app.get('/',(req,res)=>{
  let data = {'age':12,'Place':'Jodhpur'}
  res.render("index",{id : req.params.id,data:data})
});


app.get('/contact/:cont',(req,res)=>{
  let data = {"content":req.params.cont,'arr':["sid","den","rosy"]}
  res.render("contact",{data})
});

app.listen(3000,()=>{
  console.log("Server Started")
})
