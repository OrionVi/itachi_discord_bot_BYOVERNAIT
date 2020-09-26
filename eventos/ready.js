module.exports = (bot) => {
  console.log("Quanta Arrogancia...")
  bot.user.setPresence({
    status: "dnd",
    activity: {
      name: "ui!help | Quanta Arrogancia...",
      url: "https://www.twitch.tv/martel02",
      type: "STREAMING"
    }
  })

}