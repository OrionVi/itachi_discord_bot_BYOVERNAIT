const chatbot = require("espchatbotapi")
module.exports = {
  nombre: "chat",
  alias: ["chatbot"],
  run: (bot, msg, args) => {
    if(!args) return;
    chatbot.hablar(args.join(" ")).then(res => {
      msg.channel.send(res)
    })
  },
  help: "Hablar con el Bot.",
  uso: "ui!chatbot <lo que le quieras decir>",
  cooldown: "0"
}