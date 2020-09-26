let {MessageEmbed} = require("discord.js")
module.exports = {
  nombre: "hack",
  alias: ["hackear"],
  run: (bot, msg, args) => {
    let usuario = msg.mentions.members.first()
    if(!usuario) return msg.channel.send('Menciona a alguien para "hackear"')
    //
    const correos = ["gmail.com", "outlook.com", "outlook.es", "yahoo.com", "hotmail.com"]
    const correosr = correos[Math.floor(Math.random() * correos.length)]
    //
    const deaaah = ["master69", "progamerxxx", "_gamer1029", "jsjs"]
    const nashe = deaaah[Math.floor(Math.random() * deaaah.length)]
    //
    const pass = ["xdxdmna", "94tzA1kmd", "xdxdxdxd", `${usuario.user.username}`]
    const word = pass[Math.floor(Math.random() * pass.length)]
    const dou = [`${usuario.user.username}${word}`, `${usuario.displayName}${word}`]
    const dour = dou[Math.floor(Math.random() * dou.length)]
    //
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Hackeo Realizado.")
    .setDescription('Aqui estan los datos de '+usuario.user.username)
    .addField("Correo:", `${usuario.displayName}${nashe}${correosr}`, true)
    .addField('Contraseña:', `${dour}`)
    msg.channel.send(embed)
  },
  help: '"Hackea" a un Usuario.',
  uso: "ui!hack <mencion>",
  cooldown: "0"
}