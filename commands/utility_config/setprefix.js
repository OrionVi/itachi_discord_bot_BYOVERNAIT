const { MessageEmbed } = require("discord.js")
let modelPrefix = require("../../database/models/prefixes")
module.exports = {
  nombre: "setprefix",
  alias: ["changeprefix"],
  run: async(bot, msg, args) => {
    let npre = args[0]
    if(!msg.member.hasPermission("ADMINISTRATOR")) {
      return msg.channel.send("Solo un Admin puede cambiar mi prefix.")
    }else if(!npre) {
      return msg.channel.send("Escribe mi nuevo prefix por favor.")
    } else if(npre.length > 5) {
      return msg.channel.send("El Prefix no puede mayor a 5 caracteres.")
    }
    let prefixNuevo = await modelPrefix.findOne({server: msg.guild.id}).exec()
    if(prefixNuevo) {
      await prefixNuevo.updateOne({server: msg.guild.id, prefix: npre})
      msg.channel.send("Prefix cambiado correctamente a: "+npre)
    } else {
      let prefixNuevo2 = new modelPrefix({server: msg.guild.id, prefix: npre})
      await prefixNuevo2.save()
      msg.channel.send("Prefix cambiado correctamente a: "+npre)
    }
  },
  help: "Comando para cambiar el prefix del Bot en el Server.",
  uso: "ui!setprefix <nuevo prefix>",
  cooldown: "0"
}