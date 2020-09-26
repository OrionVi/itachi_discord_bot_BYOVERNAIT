let {Schema, model} = require("mongoose")

let prefixSchema = new Schema({
  server: String,
  prefix: String
})

module.exports = model('prefixes', prefixSchema)