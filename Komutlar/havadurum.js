

const Discord = require("discord.js");
const weather = require("weather-js");

exports.run = (client, message, args) => {
  weather.find({ search: args.join(" "), degreeType: "C" }, function(
    err,
    result
  ) {
    if (err) message.channel.send(err);
    if (result === undefined || result.length === 0) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription("Lütfen bir yer gir.")
          .setColor("RANDOM")
      );
      return;
    }

    var current = result[0].current;
    var location = result[0].location;

    const plasmic = new Discord.MessageEmbed()

      .setDescription(`**${current.skytext}**`)
      .setAuthor(`${current.observationpoint} için hava durumu`)
      .setThumbnail(current.imageUrl)
      .setColor("RANDOM")
      .addField("● Zaman Dilimi", `UTC${location.timezone}`, true)
      .addField("● Derece Türü", location.degreetype, true)
      .addField("● Sıcaklık", `${current.temperature} Derece`, true)
      .addField("● Hava", `${current.feelslike}`, true)
      .addField("● Rüzgar", current.winddisplay, true)
      .addField("● Nem", `${current.humidity}%`, true);

    message.channel.send(plasmic);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["havadurumu"],
  permLevel: "0"
};

exports.help = {
  name: "hava-durumu",
  description: "hava durumunu gösterir",
  usage: "havadurumu"
};