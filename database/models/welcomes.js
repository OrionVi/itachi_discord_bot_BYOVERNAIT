let {Schema, model} = require("mongoose")

let welcomeSchema = new Schema({
  server: String,
  canal: String,
  url: String
})

module.exports = model('welcomes', welcomeSchema)