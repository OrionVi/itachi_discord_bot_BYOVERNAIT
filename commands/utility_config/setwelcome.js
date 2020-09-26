let modelWelcome = require('../../database/models/welcomes')
module.exports = {
  nombre: "setwelcome",
  alias: ["setwel"],
  run: async (bot, msg, args) => {
    let canal = msg.mentions.channels.first()
    let bienvenida = await modelWelcome.findOne({ server: msg.guild.id }).exec()
    if(args[0] === "canal") {
      if(!canal) return msg.channel.send("Debes mencionar un canal...")

      if(bienvenida) {
        await bienvenida.updateOne({ server: msg.guild.id, canal: canal.id })
        msg.channel.send("Canal de Bienvenida cambiado correctamente.")
      } else {
        let newb = new modelWelcome({ server: msg.guild.id, canal: canal.id })
        await newb.save()
        msg.channel.send("Canal de bienvenida establecido correctamente.")
      }
    } else if(args[0] === "fondo") {
      var url = args.slice(1).join(" ")
      if(!url) return msg.channel.send("Debes poner una URL de una imagen para el fondo...")
      if(bienvenida){
        await bienvenida.updateOne({ server: msg.guild.id, url: url })
        msg.channel.send("Imagen de fondo cambiada correctamente.")
      } else {
        let newf = new modelWelcome({ server: msg.guild.id, url: url })
        await newf.save()
        msg.channel.send("Imagen de fondo establecida correctamente.")
      }
    } else if(args[0] !== "canal" && args[0] !== "fondo") {
      msg.channel.send('Modo de uso: \n `setwelcome canal <canal>` o `setwelcome fondo <url>` \n <canal> se reemplaza por una mencion a un canal y <url> se reemplaza por la url de una imagen.')
    }
  },
  help: "establecer o cambiar el canal o fondo de la bienvenida del server.",
  uso: "Canal: ui!setwelcome canal <mencion canal> \n Fondo: ui!setwelcome fondo <url imagen>"
}