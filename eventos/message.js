let modelPrefix = require("../database/models/prefixes")
const pkmn = require('../utils/pokemon')
module.exports = async (bot, msg) => {
  let subfijo = await modelPrefix.findOne({server: msg.guild.id}).exec()
    if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  let prefix = subfijo ? subfijo.prefix : "ui!"
  if(msg.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`)) && !msg.author.bot) {
    msg.channel.send(`Mi Prefix en este server es: ${prefix}`)
  }
  if(!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  let cmd = bot.commands.get(command) || bot.commands.find((c) => c.alias.includes(command))
  if(cmd) { return cmd.run(bot, msg, args, pkmn) }
}