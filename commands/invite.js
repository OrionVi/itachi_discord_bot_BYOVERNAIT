const {MessageEmbed} = require("discord.js")
module.exports = {
  nombre: "invite",
  alias: ["invitacion"],
  run: (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("RED")
    .setTitle("Aqui esta mi Invitacion!")
    .setDescription("Agradezco el Interes en invitarme a un Servidor ^-^ \n [Invitacion!](https://discord.com/oauth2/authorize?client_id=745408204103483523&scope=bot&permissions=604359745)")
    msg.channel.send(embed)
  },
  help: "Mi invitacion!",
  uso: "ui!invite",
  cooldown: '0'
}