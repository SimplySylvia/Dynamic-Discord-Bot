const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

client.on("ready", () => {
  console.log("Let's get rolling!");
});

let selectedDice = "";

client.on("message", (message) => {
  if (message.content.startsWith("/d")) {
    message.channel.send(`you rolled a d${selectedDice}!`);
  }
});

client.login(config.token);