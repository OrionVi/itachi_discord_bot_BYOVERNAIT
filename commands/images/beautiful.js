const {MessageAttachment} = require("discord.js")
const {Canvas} = require("swiftcord")
const sc = new Canvas()
module.exports = {
  nombre: "hermoso",
  alias: ["beautiful", "hermosura"],
  run: async(bot, msg, args) => {
    let user = msg.mentions.users.first() || msg.author
    let avatar = user.displayAvatarURL({ format: "png" })

    let image = await sc.beautiful(avatar)
    let att = new MessageAttachment(image, "hermoso.png")
    return msg.channel.send(att)
  },
  help: "Dile al mencionado que es hermoso (o a ti mismo si es que tu ego alcanza)",
  uso: "ui!hermoso <mencion>?",
  cooldown: "0"
}