// //EXPRESS---------------------


// const express=require('express');
// const app=express();
// const router = express.Router();
// //Middleware-------
// const checkUrl=function(req,res,next){
//     console.log("current route is",req.originalUrl)
//     next();
// }
// // app.use(checkUrl);
// app.get('/',function(req,res){
//     // res.send("Hello this is Home page")
//     res.sendFile(__dirname+"/home.html")
// });

// router.get('/about',checkUrl,function(req,res){
//     // res.send("Hello this is About Page")
//     res.sendFile(__dirname+"/about.html")
// });

// router.get('/contact',checkUrl,function(req,res){
//     // res.send("Hello this is Contact Page")
//     res.sendFile(__dirname+"/contact.html")
// });
// app.use('/',router)
// app.listen(4500);

// _________________________________
//dynamic get data from database
//TEMPLATE ENGINE ejs

// const express =require('express')
// const app=express();
// app.use('/assets',express.static('assets'))
// var bodyParser=require('body-parser')
// var encoder=bodyParser.urlencoded();
// app.set('view engine','ejs')
// app.get ('/profile/:name',function(req,res){
//     data={email:"mohit@gmail.com",gender:"male",skills:["java","php","nodejs"]}
//    res.render('profile',{name:req.params.name,data:data})
// })
// app.post("/login",encoder,function(req,res){
//    console.log(req.body)
//     res.render('home')
//  })
// app.get ('/home',function(req,res){
//    res.render('home')
// })

// app.get ('/login',function(req,res){
   
//    res.render('login')
// })


// app.listen(4500)

// ----------------------------------
//code to connect node with atlas mongo db

const express= require('express')
const app=express();
const mongoose=require('mongoose')
const User=require('./models/users')
var bodyParser=require('body-parser')
var jsonParser=bodyParser.json();
mongoose.connect('mongodb+srv://mohit:xcBkk5YAmpzohyHX@cluster0.hxzo4.mongodb.net/node?retryWrites=true&w=majority',
{
   useNewUrlParser:true,
   useUnifiedTopology:true
});

//API FOR GET
app.get('/users',function(req,res){
   User.find()
   .then((data)=>{
      res.json(data)
   })
})

//API FOR POST
app.post('/user',jsonParser,function(req,res){
   const data=new User({
      _id:new mongoose.Types.ObjectId,
      name:req.body.name,
      email:req.body.email,
      address:req.body.address
   })
   data.save().then((result)=>{
      res.status(201).json(result)
   })
   .catch((error)=>{
      console.log(error)
   })
 
})

//API for DELETION
app.delete('/user/:id',function(req,res){
   User.deleteOne({_id:req.params.id})
   .then((result)=>{
      res.status(200).json(result)
   })
   .catch((err)=>{
      console.log(err)
   })
})



app.listen(4500)