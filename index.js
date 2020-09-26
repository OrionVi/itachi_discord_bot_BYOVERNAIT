const express = require("express")
const app = express()
const port = 3010

app.get('/', (req, res) => res.send("Mangekyou Sharingan!"))
app.listen(port, () => console.log("Assasino da Anbu."))

const Discord = require("discord.js")
const bot = new Discord.Client()
const { readdirSync, statSync } = require("fs")
require("./database/index")


function getDirectories() {
  return readdirSync('./commands').filter(function subFolder(file) {
    return statSync('./commands/'+file).isDirectory()
  })
}
bot.commands = new Discord.Collection()

let commandFiles = readdirSync('./commands').filter(f => f.endsWith(".js"))

for(const folder of getDirectories()) {
  const folderFiles = readdirSync('./commands/'+folder).filter(f => f.endsWith(".js"))
  for(const file of folderFiles) {
    commandFiles.push([folder, file])
  }
}
for(const file of commandFiles) {
  let command;
  if(Array.isArray(file)) {
    command = require(`./commands/${file[0]}/${file[1]}`)
  } else {
    command = require(`./commands/${file}`)
  }
  bot.commands.set(command.nombre, command)
}

for(const file of readdirSync('./eventos/')) {
  if(file.endsWith('.js')) {
    let fileName = file.substring(0, file.length - 3)
    let fileContents = require(`./eventos/${file}`)
    bot.on(fileName, fileContents.bind(null, bot))
    
  }
}
bot.login(process.env.DISCORD_TOKEN)