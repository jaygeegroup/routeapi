require('dotenv').config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 3009

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/production", function(req,res){
    res.send({
        APIROUTE:`http://6c7c292be31e.ngrok.io`
    });
})
app.get("/development", function(req,res){
    res.send({
        APIROUTE:`http://localhost:3009`
    });
})
app.get("/scmdev", function(req,res){
    res.send({
        APIROUTE:`http://localhost:3009`
    });
})
app.get("/scmckbuilddev", function(req,res){
    res.send({
        APIROUTE:`https://8e9a0791e08d.ngrok.io`
        
    });
})
app.get("/appdev", function(req,res){
    res.send({
        APIROUTE:`https://7c5dc8107d26.ngrok.io`
    });
})
app.get("/scmprod", function(req,res){
    res.send({
        APIROUTE:`https://api.jaygeegroupapp.com`
    });
})
app.get("/scmlevisdev", function(req,res){
    res.send({
        APIROUTE:`https://8e9a0791e08d.ngrok.io`
    });
})
app.get("/jghrisapp", function(req,res){
    res.send({
        APIROUTE:`https://8e9a0791e08d.ngrok.io`
    });
})
app.get("/jgrealisasiapp", function(req,res){
    res.send({
        APIROUTE:`https://8e9a0791e08d.ngrok.io`
    });
})
app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`);
});