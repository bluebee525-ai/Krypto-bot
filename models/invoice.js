const mongoose = require("mongoose")

const invoiceSchema = new mongoose.Schema({

invoiceId:Number,
user:String,

coin:String,
usd:Number,
cryptoAmount:Number,

address:String,

txid:String,

status:{
type:String,
default:"pending"
},

confirmations:{
type:Number,
default:0
},

created:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Invoice",invoiceSchema)
