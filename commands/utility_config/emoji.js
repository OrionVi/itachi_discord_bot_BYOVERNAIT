const Discord = require("discord.js")
module.exports = {
  nombre: "jumbo",
  alias: ["emoji"],
  run: (bot, msg, args) => {
    let emoji = Discord.Util.parseEmoji(args[0])
    if(!emoji) { return msg.channel.send("Pon un Emoji.")}
    let giforno = emoji.animated ? "gif" : "png"
    let emojiimg = `https://cdn.discordapp.com/emojis/${emoji.id}.${giforno}`
    const att = new Discord.MessageAttachment(emojiimg, `emoji.${giforno}`)
    msg.channel.send(att)
  },
  help: "Comando para obtener la Imagen de un Emoji",
  uso: "ui!jumbo <emoji>",
  cooldown: "0"
}