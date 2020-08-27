var express=require("express")

var PORT=process.env.PORT || 4000;


var app=express();

const dotenv=require("dotenv");
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
const cors = require('cors')
app.use(cors());
//console.log(process.env.key)

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

app.use(cors(corsOptions));

// var MongoClinet=require('mongodb').MongoClient;

// var db;

// MongoClinet.connect("mongodb://127.0.0.1:27017/logix",(err,client)=>{
//              if (err){
//                   return error
//              }

//              db=client.db("logix")
//              console.log(db)
// })

// const arr=[
//     {
//         "email": "admin@argames.com",
//         "query": "testing1",
//         "createdAt": "2020-05-05T12:04:42.395Z"
//     },
//     {
//         "email": "admin@argames.com",
//         "query": "testing2",
//         "createdAt": "2020-05-05T12:04:42.395Z"
//     },
//     {
//         "email": "admin@argames.com",
//         "query": "testing3",
//         "createdAt": "2020-05-05T12:04:42.395Z"
//     },
//     {
//         "email": "admin@argames.com",
//         "query": "testing4",
//         "createdAt": "2020-05-05T12:04:42.395Z"
//     },
//     {
//         "email": "admin@argames.com",
//         "query": "testing5",
//         "createdAt": "2020-05-05T12:04:42.395Z"
//     },
//     {
//         "email": "admin@argames.com",
//         "query": "testing6",
//         "createdAt": "2020-05-05T12:04:42.395Z"
//     }
// ]

const mongoose =require('mongoose');
// var key=require("./keys.js").a.key
mongoose.connect(process.env.key,{
    useNewUrlParser: true ,
    useUnifiedTopology: true
}
)

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to Database');
  });

  // If the connection throws an error
  mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });

const QuerySchema=new mongoose.Schema({
    email: String ,
    query: String,
    createdAt: Date,
})

const Queries = mongoose.model('QuerySchema', QuerySchema );



// for(let i=0;i<arr.length;i++){

//     const data=new Queries({
//         email:arr[i].email,
//         query:arr[i].query,
//         createdAt:arr[i].createdAt,

//     })

//     data.save((err)=>{
//         console.log(err)
//     })


// }




app.get("/",(req,res)=>{
    res.send("Hello")
})
app.get("/getDb",(req,res)=>{

       Queries.find({},(err,result)=>{
                  if (err)
                      console.log(err)

                  //console.log(result)
                  res.send( {"result":result});
       })



})

app.listen(PORT,()=>{
    console.log(`Running at port Number: ${PORT}`)
})
