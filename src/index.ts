import express from "express";
import dotenv from "dotenv"
const PORT  = process.env.PORT


dotenv.config()
const app = express()

app.use(express.json())

// app.use();
// app.use();

app.listen(PORT,()=>{
    console.log("SERVER STARTEd")
})

