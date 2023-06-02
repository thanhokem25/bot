const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
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
		.setDescription("`Ex .spam 0123456789`")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`python SMS-V1.py ${host} 120 `, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **The Spam Was Sent To Phone** 🚀')
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
	.setTitle('🚀 **Spam Under Review** 🚀')
	.setTimestamp()
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['spam'],
  permLevel: 0
}

exports.help = {
  name: 'spam',
  description: 'zxcr9999',
  usage: 'spam'
}