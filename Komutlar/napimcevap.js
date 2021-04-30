const Discord = require("discord.js");

exports.run = (client, message, params) => {

const virus = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Lafı Koydu !!")
      .setColor("PİNK")
       .setFooter(message.author.username + " Napime Cevabı Koydu Abooo")
      .setTimestamp()
      .setDescription("")
      .setImage('https://cdn.discordapp.com/attachments/827952012309299210/827970129974263818/7aba1c68beecae1a7c2fb40960efefb4.png');

return message.channel.send(virus);
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "napimcvp",
  description: "Lafı Koy",
  usage: "napimcvp"
};