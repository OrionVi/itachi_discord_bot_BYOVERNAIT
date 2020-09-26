const { MessageEmbed } = require("discord.js")
const { OnePunchMan } = require("anime-info")
const opm = new OnePunchMan({ lang: "es"})
module.exports = {
  nombre: "onepunchman",
  alias: ["opmsearch"],
  run: async(bot, msg, args) => {
    let personaje = args.join("_")
    if(!personaje) { return msg.channel.send("Escribe un Personaje de One Punch Man")}
    try{
      const tatsu = await opm.getCharacter(personaje)
      console.log(tatsu)
      let abilities;
      if(tatsu.abilities.join(" | ").length > 1024) {
        abilities = tatsu.abilities.splice(0, tatsu.abilities.length / 2)
      } else {
        abilities = tatsu.abilities;
      }
      const embed = new MessageEmbed()
      .setColor(tatsu.status == "Vivo" || "Viva" || null ? "GREEN" : "RED")
      .setTitle(`${tatsu.name}`)
      .setDescription(`${tatsu.description}`)
      .addField("Alias:", tatsu.alias.length <= 0 ? "???" : `${tatsu.alias.join(" | ")}`)
      .addField("Sexo:", tatsu.sex == null ? "???" : `${tatsu.sex}`)
      .addField("Edad:", tatsu.age == null ? "???" : `${tatsu.age}`)
      .addField("Raza:", tatsu.race.length <= 0 ? "???" : `${tatsu.race[0]}`)
      .addField("Habilidades:", tatsu.abilities.length <= 0 ? "???" : `${abilities.join(" | ")}`)
      .setImage(tatsu.photo[0].icon)
      msg.channel.send(embed)
    } catch(error) {
      switch(error.message){
        case("The requested Character does not exist"):{ return msg.channel.send("El Personaje a Buscar no existe.")}
        default:{ return msg.channel.send("Ocurrio un error.")
        console.log(error)
        }
      }
    }
  },
  help: "Comando para buscar personajes de One Punch Man.",
  uso: "ui!onepunchman <personaje>",
  cooldown: "0"
}