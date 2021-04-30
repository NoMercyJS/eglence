const fs = require('fs');
const discord = require('discord.js');

exports.run = async(client, message, args) => {
  
let vur = args.slice(1).join(' ');
let uye = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.channel.send(`Üye etiketlemedin, nasıl vurucam?!`)
if(!args[0])  return message.channel.send("Kullanım: k!vur @ÜYE vurma Sebebi")
if(!args[1])  return message.channel.send("Kullanım: k!vur @ÜYE vurma Sebebi")

const umutice = new discord.MessageEmbed()
.addField("**Napoyosun sen lan**", `${uye}`)
.addField("**PARAMI VER!**", `<@!${message.author.id}>`)
.addField("**VERMİYCEM!!**", `${uye}`)
.addField("**O ZAMAN GÖRÜŞÜRÜZ AMA ÖBÜR DÜNYADA!**", `<@!${message.author.id}>`)
.addField("**KATİL İMDAAAAAAT!**", `${uye}`)
.addField(`${vur}`, `<@!${message.author.id}>`)
message.channel.send(umutice)  

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vur',
  description: 'Etiketlenen Kişiyi Vurur.',
  usage: ''
};