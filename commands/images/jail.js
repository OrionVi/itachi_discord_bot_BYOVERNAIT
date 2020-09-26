const {MessageAttachment} = require("discord.js")
const {Canvas} = require("swiftcord")
const sc = new Canvas()
module.exports = {
   nombre: "jail",
   alias: ["jaula", "carcel"],
   run: async(bot, msg, args) => {
     let user = msg.mentions.users.first() || msg.author
     let avatar = user.displayAvatarURL({ format: "png" })

     let image = await sc.jail(avatar)
     let attachment = new MessageAttachment(image, "jaula.png")
     return msg.channel.send(attachment)
   },
   help: "Encierra el Avatar del mencionado o el propio D:",
   uso: "ui!jail <mencion>?",
   cooldown: "0"
}