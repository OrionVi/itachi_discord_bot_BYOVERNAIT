const {MessageAttachment} = require('discord.js')
const mars = require("marsnpm")
module.exports = {
  nombre: "boton",
  alias: ["button"],
  run: async (bot, msg, args) => {    
    let texto = args.join(" ")
    let opt = texto.split("/")
    if(!opt[0]) { return msg.channel.send(`Para usar este comando tienes que ingresar dos textos separados por una "/"`) } 
    else if(!opt[1]) { return msg.channel.send(`Para usar este comando tienes que ingresar dos textos separados por una "/"`) }
    let url = await mars.boton(opt[0], opt[1])
    msg.channel.send({ files: [url] })
  },
  help: 'Comando para usar la plantilla del meme del boton (Ni idea como explicar el comando)',
  uso: "ui!boton <texto1/texto2> (dos textos separados por una / )",
  cooldown: '0'
}