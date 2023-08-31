const express=require('express')
const app=express()
const cookieParser = require("cookie-parser");
const middleware = require('./middleware/error')
app.use(express.json())
app.use(cookieParser())


// Router
const product =require("./routes/productRoute")
const user =require("./routes/userRoute")
app.use("/api/v1",product);
app.use("/api/v1",user);



// Middleware
app.use(middleware);

module.exports=app;