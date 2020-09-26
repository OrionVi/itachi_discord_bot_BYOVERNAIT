const { MessageEmbed } = require("discord.js")
const { DragonBall } = require("anime-info")
const dbz = new DragonBall({ lang : "es" })
module.exports = {
  nombre: "dragonball",
  alias: ["dbsearch"],
  run: async(bot, msg, args) => {
    let personaje = args.join("_")
    if(!personaje) { return msg.channel.send("Escribe el nombre de un personaje de Dragon Ball") }
    try{
      const cell = await dbz.getCharacter(personaje)
      console.log(cell)
      let transformaciones;
      if(cell.transformation.join(" | ").length > 1024) {
        transformaciones = cell.transformation.splice(0, cell.transformation.length / 2)
      } else {
        transformaciones = cell.transformation
      }
      const embed = new MessageEmbed()
      .setTitle(`${cell.name}`)
      .setDescription(`${cell.description}`)
      .setImage(cell.photo[0].icon)
      .addField("Alias:", cell.alias.length <= 0 ? "???" : `${cell.alias.join(" | ")}`)
      .addField("Raza:", cell.race.length <= 0 ? "???" : `${cell.race[0]}`)
      .addField("Ocupacion:", cell.occupation.length <= 0 ? "???" : `${cell.occupation[0]}`)
      .addField("Transformaciones:", cell.transformation.length <= 0 ? "???" : `${transformaciones.join(" | ")}`)
      .setColor("#EA5926")
      msg.channel.send(embed)
    } catch(error) {
      switch(error.message) {
        case("The requested Character does not exist"):{return msg.channel.send("El Personaje no existe")}
        default:{ return msg.channel.send("Ocurrio un error.")}
      }
    }
  },
  help: "Comando para buscar personajes de Dragon Ball.",
  uso: "ui!dragonball <personaje>",
  cooldown: "0"
}