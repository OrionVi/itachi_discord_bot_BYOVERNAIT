const { MessageEmbed } = require("discord.js")
module.exports = {
  nombre: "userinfo",
  alias: ["usuarioinfo"],
  run: (bot, msg, args) => {
    let user = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.member
    const embed = new MessageEmbed()
    .setColor("RED")
    .setAuthor(user.user.tag, user.user.displayAvatarURL())
    .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    .addField('Jugando a:', user.user.presence.game == null ? "Nada" : user.user.presence.game, true)
    .addField("ID:", user.user.id, true)
    .addField("Apodo:", user.nickname !== null ? user.nickname : "No tiene.", true)
    .addField("Cuenta creada:", user.user.createdAt.toDateString(), true)
    .addField("Fecha de Ingreso:", user.joinedAt.toDateString(), true)
    .addField("Roles:", user.roles.cache.map(x => `\`${x.name}\``).join(" | "), true)
    msg.channel.send(embed)
  },
  help: "Comando para ver la info del usuario mencionado o la tuya.",
  uso: "ui!userinfo",
  cooldown: "0"
}