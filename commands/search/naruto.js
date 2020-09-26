const { MessageEmbed } = require("discord.js")
const { Naruto } = require("anime-info")
const naruto = new Naruto({ lang: "es" })
module.exports = {
  nombre: "naruto",
  alias: ["naruto_search"],
  run: async(bot, msg, args) => {
    let personaje = args.join("_")
    if(!personaje) { return msg.channel.send("Escribe el nombre de un personaje de Naruto.") }
    try{
    const itachi = await naruto.getCharacter(personaje)
    if(!itachi) { return msg.channel.send("No encontre ese personaje.") }
    let jutsus;
    if(itachi.jutsu.join(" | ").length > 1024 && personaje !== "Naruto_Uzumaki") {
      jutsus = itachi.jutsu.splice(0, itachi.jutsu.length / 3)
    } else if(personaje == "Naruto_Uzumaki"){
      jutsus = itachi.jutsu.splice(0, itachi.jutsu.length / 10)
      } else {
        jutsus = itachi.jutsu;
      }
      console.log(itachi)
    const embed = new MessageEmbed()
    .setColor(itachi.status == "Muerto" || "Muerta" || null ? "RED" : "GREEN")
    .setTitle(`${itachi.name}`)
    .setDescription(`${itachi.description}`)
    .setImage(`${itachi.photo[0].icon}`)
    .addField("Rango Ninja:", itachi.ninja_rank[0] === undefined || itachi.ninja_rank.length <= 0 ? "???" : `${itachi.ninja_rank[0]}`)
    .addField("Debut (Anime):", itachi.debut.anime === null ? "???" : `${itachi.debut.anime}`)
    .addField("Jutsus:", itachi.jutsu.length <= 0 ? "???" : `${jutsus.join(" | ")}`)
    .addField("Herramientas:", itachi.tools.length <= 0 ? "???" : `${itachi.tools.join(" | ")}`)
    msg.channel.send(embed) 
    } catch(error) {
      switch(error.message){
        case("The requested Character does not exist"):{ return msg.channel.send("El Personaje a buscar no existe.")}
        case("MessageEmbed field values may not be empty."):{ return msg.channel.send("Al Personaje le falta informacion")}
        case("Invalid Form Body"):{("Ocurrio un error desconocido.")}
      }
    }
  },
  help: "Comando para buscar Personajes de Naruto.",
  uso: "ui!naruto <personaje>",
  cooldown: "0"
}