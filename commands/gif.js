const { api } = require('../config.json');

const giphy = require('giphy-api')(api);

module.exports = {
    name: 'gif',
    description: 'Post a random gif of your choice.',
    args: true,
    execute(message, args) {
        giphy.random({tag: args[0],rating:'pg'}).then(function (res) {
            message.channel.send(`${message.author.username} posted:`,{
                file: res.data.image_url,
            });
        });
    },
};