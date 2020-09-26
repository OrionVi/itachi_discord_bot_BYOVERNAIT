const { MessageEmbed } = require("discord.js")
module.exports = {
  nombre: "sayembed",
  alias: ["embedsay"],
  run: (bot, msg, args) => {
    let texto = args.join(" ")
    let opts = texto.split("/")
    const embed = new MessageEmbed()
    if(!texto || !opts) {
      embed.setColor("RED")
      embed.addField("Modo de uso:", "titulo/descripcion/color")
      return msg.channel.send(embed)
    }
    embed.setColor(opts[2])
    embed.setTitle(opts[0])
    embed.setDescription(opts[1])
    return msg.channel.send(embed)
  },
  help: "Comando say en Embed.",
  uso: "ui!sayembed <titulo/descripcion/color> (separado por / )",
  cooldown: '0'
}