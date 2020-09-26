const {MessageEmbed} = require("discord.js")
const used = new Map()
const human = require("humanize-duration")
module.exports = {
  nombre: "wtpkmn",
  alias: ["wtp", "wtpokemon"],
  run: (bot, msg, args, pkmn) => {
    const cd = used.get(msg.author.id)
    if(cd) {
      const restante = human(cd - Date.now(), { units: ['h', 'm', 's'], language: 'es', conjunction: ' y ', serialComma: false, round: true })
      return msg.channel.send(`Espera ${restante} para volver a usar el comando.`).then(msj => { setTimeout(() => { msj.delete()}, 5000)})
    } else {
    const random = Math.floor(Math.random() * 811)
    const randomPokemon = pkmn[random]
    const embed = new MessageEmbed()
    .setColor("BLUE")
    .setTitle("Cual es este Pokemon?")
    .setDescription("Tienes 20 Segundos!")
    .setImage(randomPokemon.imageURL)
    msg.channel.send(embed).then(msj => {
      msg.channel.awaitMessages(x => x.author.id === msg.author.id && x.content.toLowerCase() === randomPokemon.name, { max: 1, time: 20000, errors: ["time"] }).then(col => {
        const embedo = new MessageEmbed()
        .setColor("GREEN")
        .setTitle(":tada: Lo Hiciste!")
        .setDescription("Correcto!, el Pokemon era "+randomPokemon.name)
        .setImage(randomPokemon.imageURL)
        msj.edit(embedo)
      }).catch(col => {
        const embada = new MessageEmbed()
        .setColor("RED")
        .setTitle(" D: ")
        .setDescription("No Pudiste, el Pokemon era "+randomPokemon.name)
        .setImage(randomPokemon.imageURL)
        msj.edit(embada)
      })
      used.set(msg.author.id, Date.now() + 1000*60*1)
      setTimeout(() => used.delete(msg.author.id), 1000*60*1)
    }).catch(err => { return msg.channel.send("Hubo un Error: "+err) })
    }
  },
  help: "Comando para jugar Whos That Pokemon",
  uso: "ui!wtpkmn",
  cooldown: '1 Minuto'
}