const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {

const Embedkyzerdensaabler = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
return message.author.send(Embedkyzerdensaabler);
 
}
  if (message.channel.type !== "dm") {

const Embedkyzerdensaabler = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Polis Geliyor!!!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif");

return message.channel.send(Embedkyzerdensaabler);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ara155",
  description: "x_REDDAWN_x",
  usage: "ara155"
};
