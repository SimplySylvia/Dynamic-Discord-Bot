const Discord = require("discord.js");
const { prefix, token } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log("Let's get rolling!");
});


client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  //command for dice
  if (command === 'd') {
    client.commands.get('dice').execute(message, args);
  }
  //replies user info
  else if ( command === 'user-info') {
    client.commands.get('user-info').execute(message, args);
  }
  // test command ping
  else if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  }
});

client.login(token);