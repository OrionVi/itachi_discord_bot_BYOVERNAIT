const {MessageEmbed} = require("discord.js")
const mal = require("mal-scraper")
const trans = require("@vitalets/google-translate-api")
module.exports = {
  nombre: "anime",
  alias: ["mal"],
  run: (bot, msg, args) => {
    let busqueda = args.join(" ")
    if(!busqueda) { return msg.channel.send("Escribe el nombre de un Anime") }
    mal.getInfoFromName(busqueda).then((data) => {
      trans(data.synopsis, { from : "en", to: "es"}).then(res => {
      
      const embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(`[${data.title}](${data.url}) \n\n\ **Sinopsis:** \n ${res.text}`)
      .setImage(data.picture)
      msg.channel.send(embed)
    })
    })
  },
  help: "Comando para buscar en MyAnimeList.",
  uso: "ui!anime <anime>",
  cooldown: "0"
}