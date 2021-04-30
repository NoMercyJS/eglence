const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const token = process.env.token;
const ayarlar = require("./ayarlar.json");
const db = require("quick.db");
var prefix = process.env.prefix;

client.on("ready", () => {
  console.log(`Bot suan bu isimle aktif: ${client.user.tag}!`);
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// KOMUTLAR BAŞ

client.on('message', async (msg , bot)=> { 
if(!msg.content.startsWith(`${process.env.prefix}liderlik`)) return;
 const sorted = msg.guild.members.cache.filter(u => !u.bot).array().sort((a, b) => { return (db.fetch(`para.${b.user.id + msg.guild.id}`) ? db.fetch(`para.${b.user.id + msg.guild.id}`) : 0) - (db.fetch(`para.${a.user.id + msg.guild.id}`) ? db.fetch(`para.${a.user.id + msg.guild.id}`) : 0) });
    const top10 = sorted.splice(0, 5)
     const mappedCoin = top10.filter(o => !o.bot).map(s => db.fetch(`para.${s.user.id + msg.guild.id}`) || 0)
     const mappedName = top10.filter(o => !o.bot).map(s => s.user.tag);
let kedjik = []
 for(var i = 0; i < 5; i++) {
            var coin = mappedCoin[i]
            var name = mappedName[i]

            if(coin > 0) {
              kedjik.push(`[${i + 1}] > ${name}\n  Coin: ${coin} \n\n`) 
            }

           
        }
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Coin Sıralaması!")
.setDescription(kedjik)
msg.channel.send(embed)
})
client.on('message', async (message , bot)=> { 
const db = require("quick.db")
const random = require("random");
if(message.author.bot) return;
if(message.channel.id !== ayarlar.coinSistemiAtılacakKanalID) return;
let max 
let min
let qwe = random.int(min = 100, max = 500)
let xd1 = db.fetch(`zamanı.${message.guild.id+message.channel.id}`)
if(!xd1) {
db.set(`zamanı.${message.guild.id+message.channel.id}`,qwe)
return;
}
db.add(`zamanı1.${message.guild.id+message.channel.id}`,1)
let xd2 =db.fetch(`zamanı1.${message.guild.id+message.channel.id}`)
if(xd1 == xd2) {


 db.delete(`zamanı.${message.guild.id+message.channel.id}`)
 db.delete(`zamanı1.${message.guild.id+message.channel.id}`)

message.channel.send(`Birisi yere 175 Coin düşürdü! Almak için 5 saniye içinde **${process.env.prefix}al** yaz`).then(() => {
	message.channel.awaitMessages(m => m.content === `${process.env.prefix}al`, { max: 1, time: 5000, errors: ['time'] })
		.then(collected => {
			message.channel.send(`${collected.first().author} parayı aldı!`);
            db.add(`para.${collected.first().author.id + message.guild.id}`, 175)

		})
		.catch(collected => {
			message.channel.send('Kimse zamanında yazamadı :C');
		});
});
}
})



////////////// KOMUTLAR SON
////////////// ALTI ELLEME
require("./util/eventLoader")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (process.env.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.token);
