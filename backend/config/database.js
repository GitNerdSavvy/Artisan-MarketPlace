const mongoose=require('mongoose')

const connectionDB=()=>{
    mongoose.connect(process.env.DB_URL, {useUnifiedTopology:true,useNewUrlParser:true}).then((data)=>{
        console.log("Connected to MongoDB Database");
    })
}

module.exports=connectionDB