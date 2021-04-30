const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');

module.exports = client => {
  var degisenOynuyor = [
    
    "Altyapıyı İyi Kullanmalar",
    "Paylaşmanız Yasak! İzin Almak Dışında",
    "",
    "Emek Hırsızlığı Yapmayın skrm",
    "DarkFire Development Eğlence Altyapısı"
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 30000);
  
  client.user.setStatus("idle"); //dnd, idle, online, offline
  
}