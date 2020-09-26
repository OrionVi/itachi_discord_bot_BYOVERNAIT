const { MessageEmbed } = require("discord.js")
const wtf = require("wtf_wikipedia")
module.exports = {
  nombre: "wikipedia",
  alias: ["wiki"],
  run: (bot, msg, args) => {
    let busqueda = args.join(" ")
    if(!busqueda) { return msg.channel.send("Escribe algo para buscar en la Wikipedia") }
    wtf.fetch(busqueda, "es").then((doc) => {
      const embed = new MessageEmbed()
      .setColor("RED")
      .setTitle(`:mag_right: ${busqueda} :mag:`)
      .setDescription(`${doc.sentences(0).text()} ${doc.sentences(1).text()}`)
      .setFooter(`Pedido por ${msg.member.displayName}`)
      msg.channel.send(embed)
    }).catch((err) => {
      msg.channel.send("No se encontro ese Articulo de la Wikipedia")
      console.log(err)
    }) 
  },
  help: "Comando para buscar en la Wikipedia",
  uso: "ui!wikipedia <busqueda>",
  cooldown: "0"
}