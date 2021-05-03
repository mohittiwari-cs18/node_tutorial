//Minimal API
// var http= require('http');
// http.createServer(function(req,res){
//     res.write("hello this is response");
//     res.end();
// }).listen(4000)

// var sum=function(a,b){
//     return a+b;
// }
// function complex(add){
//     console.log(sum(4,5));
// }
// complex(sum);

// var file=require('./other')
// console.log(file())

//Code for importing JSON file-------------------------------------------------------------
// var http=require('http')
// var data= require('./data.json')
// http.createServer(
//     function(req,res){
//         res.writeHead(200,{'Content-Type':'applicatios\json' })
//         res.write(JSON.stringify(data));
//         res.end();
//     }
// ).listen(3500)

// var http=require('http')
// var page='<input type="text" placeholder="Enter your Name">'
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.write('<h2>Enter your Name</h2>')
//     res.write(page)
//     res.end()
// }).listen(4000)

// var http=require('http')
// var uc=require('upper-case')
// http.createServer(
//     function(req,res){
//         res.write(uc.upperCase("hello this is npm"))
//         res.end()
//     }
// ).listen(4000)

//NODEMAILER--------------------------------------------------------------
// var nodeMailer=require('nodemailer')
// var transport=nodeMailer.createTransport(
//     {
//         host:'smtp.gmail.com',
//         port:587,
//         secure:false,
//         requireTLS:true,
//         auth:{
//             user:'mohittiwari4101@gmail.com',
//             pass:'Mohit@4000',
//         }
//     }
// );
// var mailOptions={
//     from:'mohittiwari4101@gmail.com',
//     to:'mohittiwari8317@gmail.com',
//     subject:'Mail from npm',
//     text:'This is mail sent by npm localhost'
// }
// transport.sendMail(mailOptions,function(error,info){
//     if(error){
//         console.log(error)
//     } 
//     else{
//         console.warn('email has been sent',info.response);
//     }
   
// })

//Code to read file in node--------------------------------------------------------------------
// var http=require('http')
// var fs=require('fs')
// http.createServer(function(req,res){
//     fs.readFile('index.html',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(4000)

//CODE TO CONNECT DATABASE IN NODE-----------------------------------------------------
// var mysql=require('mysql')
// var con= mysql.createConnection(
//     {
//         host:"localhost",
//         user:"root",
//         password:"redhat@123",
//         database:"",
//     }
// );
// con.connect(function(error){
//     if(error){
//         throw error;
//     }
//     con.query("select * from users",function(err,result){
//         if (err) throw err;
//         console.log("All results are here",result);
//     })
// })

//Event Emitter------------------------------------------------------------
// var fs=require('fs')
// var rs=fs.createReadStream('demo.txt')
// rs.on('open',function(){
//     console.log("The file is opened")
// })

// var events =require('events');
// var eventEmitter=new events.EventEmitter();

// eventEmitter.on("speak",function(name){
//     console.log(name, "is speaking")
// });
// eventEmitter.emit("speak","Mohit")