const {MessageAttachment} = require("discord.js")
module.exports = {
  nombre: "gdlogo",
  alias: ["geo", "gdimg"],
  run: (bot, msg, args) => {
    let texto = args.join("%20")
    if(!texto) { return msg.channel.send("Escribe un texto.") }
    let link = `https://gdcolon.com/tools/gdlogo/img/${texto}`
    let att = new MessageAttachment(link, "gd.png")
    msg.channel.send(att)
  },
  help: "Comando para crear una imagen con un texto personalizado con la fuente de geometry dash",
  uso: "ui!gdlogo <texto>",
  cooldown: "0"
}