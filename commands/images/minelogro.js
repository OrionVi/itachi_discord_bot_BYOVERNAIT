const { MessageAttachment } = require("discord.js")
module.exports = {
  nombre: "minelogro",
  alias: ["machievement"],
  run: async(bot, msg, args) => {
    let tlogro = args.join("%20")
    if(!tlogro) return msg.channel.send("Escribe el texto del Logro.")
    if(tlogro.length > 23) return msg.channel.send("El Texto del Logro no puede ser mayor a 23 Caracteres")
    if(tlogro.length < 2) return msg.channel.send("El Texto del Logro debe ser minimo 2 caracteres")
    const numeros = ["1", "38", "21", "20", "13", "18", "17", "9", "31", "22", "23", "2", "11", "19", "33", "34", "26", "35", "6", "7", "10", "39", "4", "5", "28"]
    const random = numeros[Math.floor(Math.random() * numeros.length)]
    let link = `https://minecraftskinstealer.com/achievement/${random}/Logro+Desbloqueado%21/${tlogro}`
    let att = new MessageAttachment(link, "logro.png")
    msg.channel.send(att)
  },
  help: "Comando para hacer Imagenes de Logros de Minecraft personalizados",
  uso: "ui!minelogro <texto>",
  cooldown: "0"
}