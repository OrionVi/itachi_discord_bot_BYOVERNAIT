const mongo = require("mongoose")

module.exports = mongo.connect('mongodb+srv://Overnait:mongodbAtlas@cluster0.zu409.mongodb.net/ItachiBot?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => console.log("Conexion con MongoDB Realizada.")).catch((err) => {
  console.log(err)
})