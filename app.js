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

const express =require('express')
const app=express();
app.use('/assets',express.static('assets'))
app.set('view engine','ejs')
app.get ('/profile/:name',function(req,res){
    data={email:"mohit@gmail.com",gender:"male",skills:["java","php","nodejs"]}
   res.render('profile',{name:req.params.name,data:data})
})
app.get ('/home',function(req,res){
   res.render('home')
})
app.get ('/login',function(req,res){
   console.log(req.query)
    res.render('login')
 })

app.listen(4500)

