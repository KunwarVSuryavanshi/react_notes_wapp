const express = require('express')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const mongoClient = mongodb.MongoClient;
const cors = require('cors')
var url = "mongodb://localhost:27017/";
var app = express();
app.use(cors());
const dbName = "notes_db"
app.use(bodyParser.json());
app.get('/getNotes',(req,res)=>{
    mongoClient.connect(url,(err,client)=>{
        if(err) console.log(err);
        else{
            const db = client.db(dbName);
            db.collection('notes').find({}).toArray((err,result)=>{
                if(err) console.log(err)
                else{
                    res.send(result)
                }
            })
            client.close();
        }
    })
})
app.post('/addNotes',(req,res)=>{
    mongoClient.connect(url,(err,client)=>{
        if(err) console.log(err);
        else{
            const db = client.db(dbName);
            db.collection('notes').insertOne({
                title:req.body.title,
                note:req.body.body
            })
        }
        client.close();
    })
})
app.listen(3004,()=>console.log("*********SERVER STARTED*********"))