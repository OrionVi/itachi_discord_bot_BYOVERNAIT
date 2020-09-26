const Canvas = require("canvas")
const Discord = require("discord.js")
Canvas.registerFont('./whitneybookitalic.otf', { family: "whitney"})
module.exports = {
  nombre: "sayimage",
  alias: ["sayimg"],
  run: async(bot, msg, args) => {
    
    const miembro = msg.mentions.members.first()
    if(!miembro) return msg.channel.send("Necesitas mencionar a Alguien antes del mensaje...")
    const mensaje = args.slice(1).join(" ")
    if(!mensaje) return msg.channel.send("Necesitas escribir un mensaje...")
    
    const canvas = Canvas.createCanvas(400,69)
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = "#36393f"
    ctx.fillRect(0,0,canvas.width,canvas.height)

    const x = 11, y = 13, radius = 20
    ctx.save()
    ctx.beginPath()
    ctx.arc(x+radius, y+radius, radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    const url = miembro.user.displayAvatarURL({ format: "png", dynamic: false, size: 1024 })
    const image = await Canvas.loadImage(url)
    ctx.drawImage(image, x, y, radius * 2, radius * 2 )

    ctx.restore()

    ctx.lineWidth = .3
    ctx.font = "14px whitney"
    ctx.fillStyle = miembro.roles.color.hexColor || "#000"
    ctx.strokeStyle = miembro.roles.color.hexColor || "#000"
    ctx.strokeText(miembro.nickname || miembro.user.username, 66, 27)
    ctx.fillText(miembro.nickname || miembro.user.username, 66, 27)

    let largo = ctx.measureText(miembro.nickname || miembro.user.username).width
    ctx.font = "11.2px whitney"
    ctx.fillStyle = "#72767d"

    let hour = Math.floor(Math.random() * 12)
    let min = Math.floor(Math.random() * 60)
    const t = ["AM", "PM"]
    const tt = t[Math.floor(Math.random() * t.length)]

    hour = (hour < 10 ? "0" : "") + hour
    min = (min < 10 ? "0" : "") + min

    ctx.fillText(`Today, ${hour}:${min} ${tt}`, 66 + largo + 8, 27)
    
    ctx.lineWidth = .1
    ctx.font = "14.5px whitney"
    ctx.fillStyle = "#dcddde"
    ctx.strokeStyle = "#dcddde"
    let w = ctx.measureText(mensaje).width - Math.floor(ctx.measureText(mensaje).width*.08)
    ctx.strokeText(mensaje, 66, 50, w)
    ctx.fillText(mensaje, 66, 50, w)

    const attach = new Discord.MessageAttachment(canvas.toBuffer(), "imgsay.png")
    msg.channel.send(attach)
  },
  help: "Haz que una persona diga algo...",
  uso: "ui!sayimage <mencion> <texto>",
  cooldown: "0"
}