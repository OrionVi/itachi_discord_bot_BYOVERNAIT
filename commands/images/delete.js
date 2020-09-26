const {MessageAttachment} = require("discord.js")
const {Canvas} = require("swiftcord")
const sc = new Canvas()
module.exports = {
  nombre: "delete",
  alias: ["borrar"],
  run: async(bot, msg, args) => {
    let user = msg.mentions.users.first() || msg.author
    let avatar = user.displayAvatarURL({ format: "png" })

    let image = await sc.delete(avatar)
    let att = new MessageAttachment(image, "delete.png")
    return msg.channel.send(att)
  },
  help: "Borraras el Avatar del Mencionado o el Tuyo? LO HARAS?",
  uso: "ui!delete <mencion>?",
  cooldown: "0"
}