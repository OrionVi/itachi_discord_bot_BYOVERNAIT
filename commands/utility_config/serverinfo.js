const {MessageEmbed} = require("discord.js")
module.exports = {
  nombre: "serverinfo",
  alias: ["guildinfo"],
  run: (bot, msg, args) => {
    let server = msg.guild;
    const embed = new MessageEmbed()
    .setColor("RED")
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField("Region:", server.region, true)
    .addField("ID:", server.id, true)
    .addField("Dueño:", server.owner.user.tag, true)
    .addField("Fecha de Creacion:", server.createdAt.toDateString(), true)
    .addField("Miembros:", server.memberCount, true)
    msg.channel.send(embed)
  },
  help: "Comando para ver la informacion de el Server.",
  uso: "ui!serverinfo",
  cooldown: "0"
}