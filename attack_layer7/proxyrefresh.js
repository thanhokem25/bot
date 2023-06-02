const https = require('https');
const fs = require('fs');
const Discord = require("discord.js");
const moment = require('moment');
const config = require('../ayarlar.json');
var room = config.commandroom;

module.exports.run = async (bot, message, args) => {
	if (message.channel.id != room) {
		return;
	}
    var url = "https://api.proxylist.to/http?key=PROXY-8FF02357-LIST-132CBA84-TO"
    const file = fs.createWriteStream("http.txt")
    fs.writeFileSync('http.txt', ' ');
    const request = https.get(url, function(response) {
        response.pipe(file)
        console.log(`[${moment.utc(Date.now())}] [*] proxy has bên update`)
    });
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Cập Nhật Thành Công")
    .setDescription(`Proxy Đã Được Thêm Vào`)
    message.channel.send(embed)
}


module.exports.help = {
    name: "proxyadd",
    aliases: ["proxyadd"]
}