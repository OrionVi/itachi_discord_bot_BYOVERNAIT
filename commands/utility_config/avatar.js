const { MessageEmbed } = require("discord.js")
module.exports = {
  nombre: "avatar",
  alias: ["pfp"],
  run: (bot, msg, args) => {
    let user = msg.mentions.members.first() || msg.member

    const embed = new MessageEmbed()
    .setColor("RED")
    .setAuthor(`Avatar de ${user.displayName}`, user.user.displayAvatarURL())
    .setDescription(`[Descarga Avatar](${user.user.displayAvatarURL({ dynamic: true, size: 2048 })})`)
    .setImage(user.user.displayAvatarURL({ dynamic: true, size: 2048 }))
    msg.channel.send(embed)
  },
  help: "Avatar del Mencionado o el Propio",
  uso: "ui!avatar <mencion>?",
  cooldown: "0"
}