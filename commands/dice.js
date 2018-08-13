const got = require('got');
const { api } = require('../config.json');

const giphy = require('giphy-api')(api);

module.exports = {
    name: 'dice',
    description: 'Rolls a die based on the input given.',
    args: true,
    usage: '<dice number of sides>',
    aliases: ['d'],
    execute(message, args) {
        var output = Math.floor(Math.random() * args[0]) + 1

        if (output == args[0]){
            giphy.random('success').then(function (res) {
                message.channel.send(`${message.author.username} rolled a d${args[0]}!\nAnd got...\nCRITICAL SUCCESS! ${output}`,{
                    file: res.data.image_url,
                });
            });  
        }
        else if (output === 1) {
            giphy.random('fail').then(function (res) {
                message.channel.send(`${message.author.username} rolled a d${args[0]}!\nAnd got...\nCRITICAL FAIL! ${output}`,{
                    file: res.data.image_url,
                });
            });
        } 
        else {
            message.channel.send(`${message.author.username} rolled a d${args[0]}!\nAnd got ${output}`);
        }
        
    },
};