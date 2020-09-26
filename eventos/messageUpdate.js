module.exports = (bot, oldMessage, newMessage) => {
  bot.emit("message", newMessage)
}