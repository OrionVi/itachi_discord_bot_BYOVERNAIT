const memazo = require("memejs")
const {MessageAttachment} = require("discord.js")
module.exports = {
  nombre: 'meme',
  alias: ["memazo"],
  run: (bot, msg, args) => {
    memazo.meme('SpanishMeme', (err, res) => {
      if(err) return msg.channel.send("Error: "+err)
      let att = new MessageAttachment(res.url, 'laweamala.png')
      return msg.channel.send(att)
    })
  },
  help: "Memes malos de Reddit.",
  uso: "ui!meme",
  cooldown: "0"
}