const {MessageAttachment} = require("discord.js")
const {Canvas} = require("swiftcord")
const sc = new Canvas()
module.exports = {
  nombre: "rip",
  alias: ["tumba"],
  run: async(bot, msg, args) => {
    let user = msg.mentions.users.first() || msg.author
    let avatar = user.displayAvatarURL({ format: "png" })
    let img = await sc.rip(avatar)

    let att = new MessageAttachment(img, 'rip.png')
    return msg.channel.send(att)
  },
  help: "Comando para colocar tu avatar o el de un mencionado encma de una tumba (suena peor de lo que es.)",
  uso: "ui!rip <mencion>?",
  cooldown: "0"
}