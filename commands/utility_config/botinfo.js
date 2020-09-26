const {MessageEmbed} = require("discord.js")
const humanize = require("humanize-duration")
module.exports = {
  nombre: "botinfo",
  alias: ["botstats"],
  run: async(bot, msg, args) => {
    const uptime = humanize(bot.uptime, {language: "es"})
    const embed = new MessageEmbed()
    .setColor("RED")
    .setAuthor("Itachi Uchiha", bot.user.avatarURL())
    .setThumbnail(bot.user.avatarURL())
    .addField("Uptime:", uptime)
    .addField("Usuarios:", bot.users.cache.size)
    .addField("RAM:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField("Lenguaje:", "JS")
    .addField("Libreria:", "Discord.Js")
    msg.channel.send(embed)
  },
  help: "Ve la Info del Bot.",
  uso: "ui!botinfo",
  cooldown: '0'
}
