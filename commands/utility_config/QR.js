const {MessageAttachment} = require("discord.js")
module.exports = {
  nombre: "qr",
  alias: ["qrcode", "codigoqr"],
  run: async(bot, msg, args) => {
    let text = args.join(" ")
    if(!text) { return msg.channel.send("Escribe un texto o pon una URL")}

    await msg.channel.send("Espera un momento.").then(msj => {
      const att = new MessageAttachment(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(new RegExp(" ", "g"), "%20")}`, "qr.png")
      msj.edit(att)
    })
  },
  help: "Crea Codigos QR con Enlaces o Textos.",
  uso: "ui!qr <texto o enlace>",
  cooldown: "0"
}