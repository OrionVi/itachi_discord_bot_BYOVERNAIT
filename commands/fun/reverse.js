module.exports = {
  nombre: "reverse",
  alias: ["reversa"],
  run: (bot, msg, args) => {
    if(!args.join(" ")) { return msg.channel.send("Escribe el mensaje a invertir.")}
    const rEveErSAAaAAAa = args.join(" ").split("").reverse().join("")
    msg.channel.send(rEveErSAAaAAAa)
  },
  help: "Dale vuelta al mensaje que escribas.",
  uso: "ui!reverse <texto>",
  cooldown: "0"
}