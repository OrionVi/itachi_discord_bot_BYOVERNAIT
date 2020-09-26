const { MessageEmbed } = require("discord.js")
const google = require("google-it")
module.exports = {
  nombre: "google",
  alias: ["gsearch"],
  run: (bot, msg, args) => {
    let busqueda = args.join(" ")
    if(!busqueda) { return msg.channel.send("Escribe algo para buscar en Google.") }
    try{
      google({'query': busqueda}).then(results => {
        const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle(`:mag_right: ${busqueda}`)
        .setDescription(`1.- [${results[0].title}](${results[0].link}) \n ${results[0].snippet} \n\n 2.- [${results[1].title}](${results[1].link}) \n ${results[1].snippet} \n\n 3.- [${results[2].title}](${results[2].link}) \n ${results[2].snippet}`)
        .setFooter(`Pedido por ${msg.member.displayName}`, msg.author.displayAvatarURL())
        msg.channel.send(embed)
      })
    } catch(error) {
      console.log(error.message)
    }
  },
  help: "Comando para buscar en Google",
  uso: "ui!google <cosa a buscar>",
  cooldown: "0"
}