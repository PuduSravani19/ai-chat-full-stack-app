import express from "express";
import cors from "cors";
const app =express();
app.use(cors());
app.use(express.json());
app.post("/api/chat",(req,res)=>{
    const message=req.body.message;
    if(!message){
        return res.status(400).json({error:"Message required"});
    }
    res.json({
    reply:"you said: "+ message
});

})


app.listen(5000,()=>{
    console.log("server running on port number 5000");
})