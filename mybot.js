const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Let's get rolling!");
});

client.on("message", (message) => {
  if (message.content.startsWith("/d6")) {
    message.channel.send("you rolled a d6!");
  }
});

client.login("NDc3NTE2ODU1NzA0Mjg5Mjgx.Dk9Tiw.c0f7trDIb2bdsnpWPTpH86CaBns");