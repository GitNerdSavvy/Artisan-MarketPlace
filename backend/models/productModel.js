const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({

        title:{
            type:String,
            required:[true,"Enter your Art Name"]
        },
        description:{
            type:String,
            required:[true,"Enter the description about Art"]
        },
        price:{
            type:Number,
            required:[true,"Enter the price of Art"],
            maxLength:[3,"Cannot exceed 3 digits"]
        },
        artist:{
            type:String,
            required:[true,"Enter the name of Artist"]
        },
        artImg:[
        { public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
        ],
        rating:{
            type:Number,
            default:0
        },
        reviews:[
            {
                name:{
                    type:String,
                    required:true
                },
                rating:{
                    type:Number,
                    required:true
                },
                comment:{
                    type:String,
                    required:true
                }
            }
        ],
        creation:{
            type:Date,
            default:Date.now
        }



})

module.exports =mongoose.model("Product",productSchema);