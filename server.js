// const express = require("express");
// const bodyParser = require("body-parser");
// const app= express();

// app.use(bodyParser.urlencoded({extended:true}));
// // app.use(bodyParser.json());

// app.listen(8233,()=>{
//     console.log("Server runnig")
// })
const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world')
});

// app.get('/index.html',(req,res)=>{
//     res.sendFile(__dirname+"/"+"index.html")
//     console.log('jide')
// });

// app.get('/process',(req,res)=>{
//     let reply={
//                 'first_name':req.query.firstname,
//                 lastname:req.query.lastname
//     };
//     res.send(reply);
// })
const port =process.env.PORT || 9876
app.listen(port, ()=>{
    console.log(`Sever running on port ${port}`)
});