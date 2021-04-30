const fs = require('fs');
const discord = require('discord.js');

exports.run = async(client, message, args) => {
  
let saldirmasana = args.slice(1).join(' ');
let uye = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.channel.send(`Üye etiketlemedin, nasıl saldıracağım?!`)
if(!args[0])  return message.channel.send("Kullanım: k!saldır @ÜYE Saldırma Sebebi")
if(!args[1])  return message.channel.send("Kullanım: k!saldır @ÜYE Saldırma Sebebi")

const kyzerdensaabler = new discord.MessageEmbed()
.addField("**Buneee, imdaaat**", `${uye}`)
.addField("**Şimdi Mahvettim Seni!**", `<@!${message.author.id}>`)
.addField("**Ne yaptım kiiiii, imdaat!!**", `${uye}`)
.addField(`${saldirmasana}`, `<@!${message.author.id}>`)
message.channel.send(kyzerdensaabler)  

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'saldır',
  description: 'Birine Saldırırsınız.',
  usage: ''
};