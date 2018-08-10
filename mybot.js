const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on("ready", () => {
  console.log("Let's get rolling!");
});

let selectedDice = "";

client.on("message", (message) => {
  if (message.content.startsWith(`${prefix}d6`)) {
    message.channel.send(`you rolled a d6`);
  } else if (message.content.startsWith(`${prefix}d4`)){
    message.channel.send(`you rolled a d4`);

  }
});

client.login(token);