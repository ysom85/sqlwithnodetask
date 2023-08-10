import express from "express"
import router from './routes/employee_router.js'
import {connectDB} from "./database.js"
import {config} from "dotenv"
config({
    path: "./data/config.env"
})
const app = express();
connectDB();
app.listen(5000, ()=>{
    console.log(`server is working`);
})
app.use(express.json())
app.use("/api", router)
app.get("/", (req,res )=>{
    res.send("nice working")
})

