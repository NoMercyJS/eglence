const Discord = require('discord.js');
const Tesseract= require('tesseract.js');

exports.run = async (client, message, args) => {
let resim = message.attachments.map(a => a.url).toString()
if(!resim) return message.reply('resim atmalısın')
Tesseract.recognize(
resim,
'tur',
{ logger: m => console.log(m) }
).then(({ data: { text } }) => {
 message.channel.send(text)
})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['resim'],
    permLevel: 0
}

exports.help = {
    name: 'resim',
    description: "resimi yazıya çevirir.",
    usage: 'resim'
}