require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    console.log(msg.author)
    msg.reply("test");
  }
});

client.login(process.env.TOKEN);