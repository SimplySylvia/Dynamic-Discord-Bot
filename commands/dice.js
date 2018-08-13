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
        let num = Number(args[0])
        let output = Math.floor(Math.random() * num) + 1

        if(isNaN(num) == false){
            if (output === num){
                giphy.random({tag:'win',rating:'pg'}).then(function (res) {
                    message.channel.send(`${message.author.username} rolled a d${num}!\nAnd got...\nCRITICAL SUCCESS! ${output}`,{
                        file: res.data.image_url,
                    });
                });  
            }
            else if (output === 1) {
                giphy.random({tag:'fail',rating:'pg'}).then(function (res) {
                    message.channel.send(`${message.author.username} rolled a d${num}!\nAnd got...\nCRITICAL FAIL! ${output}`,{
                        file: res.data.image_url,
                    });
                });
            } 
            else {
                message.channel.send(`${message.author.username} rolled a d${num}!\nAnd got ${output}`);
            }
        } else {
            message.channel.send(`${message.author.username} must enter a number for this command. !d [number]`);
        }
    },
};