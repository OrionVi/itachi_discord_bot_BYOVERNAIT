const math = require("math-expression-evaluator")
const { MessageEmbed } = require("discord.js")
module.exports = {
  nombre: "calculadora",
  alias: ["calcular", "calc"],
  run: async (bot, msg, args) => {
   const embed = new MessageEmbed()
   if(!args[0]) {
     embed.setDescription("INGRESE UNA OPERACION.")
     return await msg.channel.send(embed)
   }

   let resultado;
   try{
     resultado = math.eval(args.join(" "))
   } catch(error) {
     resultado = "ERROR"
   }
   embed.setTitle("Calculadora:")
   embed.addField("Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``, false)
   embed.addField("Salida:", `\`\`\`js\n${resultado}\`\`\``, false)
   await msg.channel.send(embed)
  },
  help: "Calculadora para calcular... si...",
  uso: "ui!calculadora <operacion>",
  cooldown: "0"
}