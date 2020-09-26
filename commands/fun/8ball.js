const { MessageEmbed } = require("discord.js")
module.exports = {
  nombre: "8ball",
  alias: ["premonicion"], //por poner algo xd
  run: (bot, msg, args) => {
    let pregunta = args.join(" ")
    let responses = ["Si", "No", "oye lo dudo.", "tal vez", "eso nunca sera posible", "posiblemente no", "mi base de datos dice que no vuelvas a preguntar eso nunca"]
    let rpts = responses[Math.floor(Math.random() * responses.length)]

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Oh oraculo, dame tu sabiduria!")
    .addField("Tu pregunta fue:", pregunta)
    .addField("Mi RESPUESTA ES:", rpts)
    return msg.channel.send(embed)
  },
  help: "Preguntale algo al Bot.",
  uso: "ui!8ball <pregunta>",
  cooldown: '0'
}