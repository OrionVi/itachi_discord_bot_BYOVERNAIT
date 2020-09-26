let {Schema, model} = require("mongoose")

const notesSchema = new Schema({

  user: String,
  notes: Array

})

module.exports = model('notes', notesSchema)