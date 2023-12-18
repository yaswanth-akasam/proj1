import express from "express";

const app = express();
const PORT = 3000;

const CITIES = [
    {
        "id" : 1,
        "city" : "Mumbai",
        "state" : "Maharastra"

    },{
        "id" : 2,
        "city" : "Chennai",
        "state" : "Tamil Nadu"
    },{
        "id" : 3,
        "city" : "Hyderabad",
        "state" : "Telengana"
    }
]



app.get('/api/cities',(req,res)=>{
    res.json(CITIES);
})

app.get('/',(req,res)=>{
   res.send("Hello world");
})

app.get('/bot', (req,res)=>{
   res.send('<h1>BOT</h1>');
})

app.listen(PORT,(req, res)=>{
    console.log(`listening at ${PORT}`)
})