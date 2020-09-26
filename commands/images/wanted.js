const {MessageAttachment} = require("discord.js")
const {Canvas} = require("swiftcord")
const sc = new Canvas()
module.exports = {
  nombre: "wanted",
  alias: [],
  run: async(bot, msg, args) => {
    let user = msg.mentions.users.first() || msg.author
    let avatar = user.displayAvatarURL({ format: "png" })

    let image = await sc.wanted(avatar)
    let attachment = new MessageAttachment(image, "wanted.png")
    return msg.channel.send(attachment)
  },
  help: "Haz un cartel de wanted con el Avatar del mencionado o el propio",
  uso: "ui!wanted <mencion>?",
  cooldown: "0"
}