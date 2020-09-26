const {MessageAttachment} = require("discord.js")
const {Canvas} = require("swiftcord")
const sc = new Canvas()
module.exports = {
  nombre: "trash",
  alias: ["basura"],
  run: async(bot, msg, args) => {
    let user = msg.mentions.users.first() || msg.author
    let avatar = user.displayAvatarURL({ format: "png" })

    let image = await sc.trash(avatar)
    let att = new MessageAttachment(image, "trash.png")
    return msg.channel.send(att)
  },
  help: "Dile al mencionado que es basura (o a ti mismo, si es que quieres)",
  uso: "ui!trash <mencion>?",
  cooldown: "0"
}