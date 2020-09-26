module.exports = {
	nombre: 'chiste',
	alias: ['joke'],
	run: (bot, msg, args) => {
    require('node-fetch')('https://risapi.glitch.me').then(res => res.json()).then(body => {
      return msg.channel.send(body.chiste)
    })    
	},
  help: "Chistes malos.",
  uso: "ui!chiste",
  cooldown: '0'
};
