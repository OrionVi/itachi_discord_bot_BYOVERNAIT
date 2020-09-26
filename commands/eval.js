const Discord = require("discord.js")
module.exports = {
  nombre: "eval",
  alias: ["e"],
  run: async(bot, msg, args) => {
    if(msg.author.id !== "561684795806187530") return;
    let code = args.join(' ')
    if(!code) return;
    try{
     let evaluado = await eval(code);
  let tipo = typeof(evaluado)
  let resultado = require("util").inspect(evaluado, { depth: 0 });

const embed1 = new Discord.MessageEmbed()
.addField("Tipo", `\`\`\`js\n${tipo}\`\`\``)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField("Salida", `\`\`\`js\n${resultado.slice(0, 1024)}\`\`\``)
.setTimestamp()
.setFooter(msg.member.user.tag,  msg.author.displayAvatarURL())
.setColor('RANDOM')
msg.channel.send(embed1)

  } catch(err) {
    const embed2 = new Discord.MessageEmbed()
     .setTitle('Error')
     .setTimestamp()
        .setColor('ff0000')
        .addField("Codigo", `\`\`\`js\n${code}\`\`\``)
        .setFooter(msg.member.user.tag,  msg.author.displayAvatarURL())
    .addField("Error", `\`\`\`js\n${err}\`\`\``)
    msg.channel.send(embed2)
    
     }
  }
}