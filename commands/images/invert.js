const {MessageAttachment} = require("discord.js")
const {Canvas} = require("swiftcord")
const sc = new Canvas()
module.exports = {
  nombre: "invert",
  alias: ["invertir"],
  run: async(bot, msg, args) => {
    let user = msg.mentions.users.first() || msg.author
    let avatar = user.displayAvatarURL({ format: "png" })

    let image = await sc.invert(avatar)
    let attach = new MessageAttachment(image, "invert.png")
    return msg.channel.send(attach)
  },
  help: "Invertir el color el Avatar del Mencionado o el Propio",
  uso: "ui!invert <mencion>?"
}