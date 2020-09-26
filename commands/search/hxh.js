const { MessageEmbed} = require("discord.js")
const { HunterXHunter } = require("anime-info")
const hxh = new HunterXHunter({ lang : "es" })
module.exports = {
  nombre: "hunterxh",
  alias: ["hxhsearch"],
  run: async(bot, msg, args) => {
    let personaje = args.join("_")
    if(!personaje) { return msg.channel.send("Escribe el nombre de un personaje de Hunter X Hunter") }
    try{
      const kilua = await hxh.getCharacter(personaje)
      let habili;
      if(kilua.abilities.join(" | ").length > 1024) {
        habili = kilua.abilities.splice(0, kilua.abilities.length / 2)
      } else {
        habili = kilua.abilities
      }
      const embed = new MessageEmbed()
      .setTitle(`${kilua.name}`)
      .setDescription(`${kilua.description}`)
      .addField("Alias:", kilua.alias.length <= 0 ? "???" : kilua.alias.join(" | "))
      .addField("Sexo:", kilua.gender.length <= 0 ? "???" : kilua.gender[0])
      .addField("Edad:", kilua.age.length <= 0 ? "???" : kilua.age.join(" | "))
      .addField("Nen:", kilua.nen_type.length <= 0 ? "???" : kilua.nen_type.join(" | "))
      .addField("Habilidades:", kilua.abilities.length <= 0 ? "???" : habili.join(" | "))
      .setImage(kilua.photo[0].icon)
      msg.channel.send(embed)
    } catch(error) {
      switch(error.message){
        case("The requested Character does not exist"):{ return msg.channel.send("El Personaje no existe") }
        default:{ return msg.channel.send("Ocurrio un error")
        console.log(error)
        }
      }
    }
  },
  help: "Comando para buscar Personajes de Hunter X Hunter",
  uso: "ui!hunterxh <personaje>",
  cooldown: "0"
}