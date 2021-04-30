const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
                                                                                              

if(!args[0]) return message.channel.send(`Hayatının aşkını etiketlemelisin. \`❤️\``)
let mention = message.mentions.users.first()
if(!mention) return message.channel.send(`Hayatının aşkını bulamadım.. \`💔\``)
  
message.channel.send(`${mention}, bak bu ${message.author.username} seninle evlenmek istiyor.
Kabul Ediyor musun?`).then(async nobles => {
  
nobles.react(`✅`)
nobles.react(`❌`)

let evet_Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id !== client.user.id && user.id === mention.id
let evet = nobles.createReactionCollector(evet_Filter, { time: 0 });
  
let hayır_Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id !== client.user.id && user.id === mention.id
let hayır = nobles.createReactionCollector(hayır_Filter, { time: 0 });
  
  
  
evet.on("collect", async reaction => {
  
let user = reaction.users.last()
if(user.id !== mention.id) return;
  
  nobles.reactions.get(`✅`).removeAll()
  nobles.reactions.get(`❌`).removeAll()
  nobles.edit(`${message.author.username.toUpperCase()} OHA KABUL ETTİ, ARTIK ${mention.username.toUpperCase()} İLE SONSUZA KADAR BERABER OLACAKSIN! \`❤️\``)
  message.guild.members.cache.get(message.author.id).setNickname(`${mention.username}'nin papatyası`)
  message.guild.members.cache.get(mention.id).setNickname(`${message.author.username}'nin çiçeği`)
  
})
  
hayır.on("collect", async reaction => {
  
let user = reaction.users.last()
if(user.id !== mention.id) return;
  
  nobles.reactions.get(`✅`).removeAll()
  nobles.reactions.get(`❌`).removeAll()
  nobles.edit(`${message.author}, üzgünüm.. \`💔\``)
  mention.send(`Niye Kabul Etmiyorsun Üzüldü Çocuk?`)
  
})
  
  
})
  
  
};
exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: ['evlenmeteklifi'],
  permLevel: 0
};

exports.help = {
  name: 'evlenme-teklifi'
};