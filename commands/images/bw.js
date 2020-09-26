const {MessageAttachment} = require("discord.js")
const {Canvas} = require("swiftcord")
const sc = new Canvas()
module.exports = {
  nombre: "bw",
  alias: ["grey", "greyscale"],
  run: async(bot, msg, args) => {
    let user = msg.mentions.users.first() || msg.author
    let avatar = user.displayAvatarURL({ format: "png" })

    let image = await sc.greyscale(avatar)

    let attachment = new MessageAttachment(image, "grey.png")
    return msg.channel.send(attachment)
  },
  help: "Convierte los colores del Avatar del mencionado o el propio a una escala de grises",
  uso: "ui!bw <mencion>?",
  cooldown: "0"
}