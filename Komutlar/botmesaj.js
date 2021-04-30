  const Discord = require('discord.js');

  exports.run = (bot, message, args) => {
      const kyzerdensaabler = args.join(" ")
      if (!kyzerdensaabler) return message.channel.send("**HATA**\nGönderilecek Mesajı Girmediniz!")
      message.author.send(kyzerdensaabler)
  }

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bmesaj"],
    permLevel: 0
  };

  module.exports.help = {
    name: 'botmesaj',
    description: 'yazdığınız mesajı özelden size gönderir',
    usage: 'botmesaj'
  };