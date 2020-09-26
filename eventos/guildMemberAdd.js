let modelWelcome = require('../database/models/welcomes')
const Discord = require("discord.js")
const Canvas = require("canvas")
Canvas.registerFont('./uni-sans-heavy-caps.otf', { family: "Uni Sans"})
module.exports = async (bot, member) => {
  let guild = await modelWelcome.findOne({ server: member.guild.id }).exec()
  if(!guild) return;
  let canal = member.guild.channels.cache.find((c) => c.id === guild.canal)
  if(!canal) return;
  let url = guild.url;
  

  const canvas = Canvas.createCanvas(800, 360)
  const ctx = canvas.getContext("2d")
  
  if(url) {
    const bg = await Canvas.loadImage(url)
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
  } else {
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
  ctx.font = "45px Uni Sans"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  //ctx.textBaseline = "hanging"
  ctx.fillText(`${member.user.username}`, canvas.width/2, 75)

  ctx.font = "30px Uni Sans"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  //ctx.textBaseline = ""
  ctx.fillText(`Bienvenido a ${member.guild.name}!`, canvas.width/2, 37.5)

  const y = 100, radio = 85, x = canvas.width/2-radio

  ctx.beginPath()
  ctx.arc(x+radio, y+radio, radio+5, 0, Math.PI * 2, true)
  ctx.fillStyle = "#ff0000"
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.save()
  ctx.beginPath()
  ctx.arc(x+radio, y+radio, radio, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.clip()

  const avatar = member.user.displayAvatarURL({ format: "png", dynamic: false, size: 256 })
  const imagen = await Canvas.loadImage(avatar)
  ctx.drawImage(imagen, x, y, radio*2, radio*2)

  const atta = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
 canal.send(atta)
}