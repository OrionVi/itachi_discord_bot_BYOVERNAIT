const { MessageEmbed } = require("discord.js")
module.exports = {
  nombre: "reportbug",
  alias: ["reportarbug"],
  run: (bot, msg, args) => {
    let yo = bot.users.cache.get("561684795806187530")
    const texto = args.join(" ")
    if(!texto) return;
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Bug Reportado.")
    .setDescription(texto)
    .setThumbnail(msg.guild.iconURL())
    .setFooter(msg.guild.name)
    .setTimestamp()    
    return yo.send(embed).catch(err => {
      console.log(err)
      })
  },
  help: "Comando para reportar bugs del Bot."
}