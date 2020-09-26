module.exports = {
  nombre: "say",
  alias: ["decir"],
  run: (bot, msg, args) => {
    if(msg.deletable) { msg.delete() }
    msg.channel.send(args.join(" "), { allowedMentions: { parse: [] } })
  },
  help: "Un Simple comando say.",
  uso: "ui!say <texto>",
  cooldown: '0'
}