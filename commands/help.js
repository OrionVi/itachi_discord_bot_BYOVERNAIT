const { MessageEmbed } = require("discord.js")
let emojis = require('../utils/emojis')
let modelPrefix = require("../database/models/prefixes")
module.exports = {
  nombre: "help",
  alias: ["ayuda"],
  run: async(bot, msg, args) => {
    let subfijo = await modelPrefix.findOne({server: msg.guild.id}).exec()
    let prefix = subfijo ? subfijo.prefix : "ui!"
    const embed = new MessageEmbed()
    .setColor("RED")
    .setTitle("Hola...")
    .setDescription(`Soy [Itachi Uchiha](https://myanimelist.net/character/14/Itachi_Uchiha) <:Mangekyo:745580611829235722> \n aqui estan mis comandos;`)
    .addField(`${emojis.LAUGHING} Diversion General:`, "```say 8ball sayembed chat chiste hack meme reverse wtpkmn```")
    .addField(`${emojis.MAG_RIGHT} Busqueda:`, "```naruto dragonball onepunchman hunterxh wikipedia anime google discordjs```")
    .addField(`${emojis.TV} Imagenes:`, "```minelogro gdlogo rip boton bw jail wanted delete invert hermoso trash sayimage```")
    .addField(`${emojis.WRENCH} Utilidad/Config:`, "```avatar botinfo invite calculadora serverinfo userinfo jumbo qr / setprefix setwelcome```")
    .setFooter(`Usa ${prefix}help <comando> para mas informacion del comando deseado | Creado y desarrollado por Overnait#1201`)
    let cmdinfo = bot.commands.get(args[0]) || bot.commands.find((c) => c.alias.includes(args[0]))
    if(!cmdinfo) {
      return msg.channel.send(embed)
    } else if(cmdinfo) {
      let textoHelp = cmdinfo.help
      const embedo = new MessageEmbed()
      .setColor("RED")
      .setTitle(cmdinfo.nombre)
      .addField('Aliases:', cmdinfo.alias.length <= 0 ? "Ninguno." : `${cmdinfo.alias.join(" ")}`)
      .addField("Uso:", `${cmdinfo.uso}`)
      .addField("Info:", `${textoHelp}`)
      .addField("Cooldown:", `${cmdinfo.cooldown}`)
      .setFooter('Los "ui!" se cambian por el prefix del server si es que este fue cambiado. | Los "?" significan opcional')
      msg.channel.send(embedo)
      
    }
  },
  help: "Comando par ver todos los demas comandos.",
  uso: "ui!help",
  cooldown: "0"
}