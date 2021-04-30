const Discord = require("discord.js");
const darkfire = require("../darkfire.js");

exports.run = (client, message) => {
  if (!message.guild) {
    return message.author.send(``);
  }
  if (message.author.bot === true) {
    return;
  }
  if (!message.guild) {
    const motion = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.sendEmbed(motion);
  }
  if (message.channel.type !== "dm") {
    const motion = new Discord.MessageEmbed()
      .setAuthor("Bot Ağlıyor Hemen Ondan Özür Dile :(")
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setImage(
        `https://cdn.discordapp.com/attachments/785513839390621728/801216183219126302/s-b71f45213a23e0a6edbc2579e33eb2140f25cdf1.gif`
      );
    return message.channel.send(motion);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ağla",
  description: "Botu Ağlatırsınız.",
  usage: "ağla"
};