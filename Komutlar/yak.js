const Discord = require("discord.js");

exports.run = (client, message, params) => {
  const kyzer = new Discord.MessageEmbed()
    .setColor("RANDOM") 
    .setDescription('D-dostum Thomas Shelby Bile Yaktı 🚬🚬 ...')
    .setImage('https://cdn.discordapp.com/attachments/821309707758993414/834334689291665428/tenor.gif')
    .setFooter('Herkes Yaktı ab...')
    
  message.channel.send(kyzer)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sigara"],
  permLevel: 0
};

exports.help = {
  name: "yak",
  description: "davet",
  usage: "davet"
};