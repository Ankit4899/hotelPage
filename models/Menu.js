const mongoose = require('mongoose')
const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:["Sweet","Spicy","Sour"],
        required:true
    },
    is_Drink:{
        type:Boolean,
        default:false
    },
    ingedrients:{
        type:[String],
        dafault:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const Menu = new mongoose.model("Menu",menuSchema);

module.exports = Menu;