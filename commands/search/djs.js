const {MessageEmbed} = require("discord.js")
const fetch = require("node-fetch")
module.exports = {
  nombre: "discordjs",
  alias: ["djs"],
  run: (bot, msg, args) => {
    let src = "";
    let cont = "";
    if(["stable", "master","commando", "rpc", "akairo", "akairo-master", "collection"].includes(args[0])) {
      src = args[0]
      cont = args.slice(1).join(" ")
    } else {
      src = "stable"
      cont = args.join(" ")
    }
    fetch(`https://djsdocs.sorta.moe/v2/embed?src=${src}&q=${cont}`).then(r => r.json()).then(res => {
      msg.channel.send(new MessageEmbed(res))
    }).catch(err => msg.channel.send("Error "+err))
  },
  help: "Comando para buscar en los Docs de discord.js (v12)",
  uso: "ui!discordjs <busqueda>",
  cooldown: "0"
}