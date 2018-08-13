const got = require('got');
const { api } = require('../config.json');

module.exports = {
    name: 'dice',
    description: 'Rolls a die based on the input given.',
    args: true,
    usage: '<dice number of sides>',
    aliases: ['d'],
    execute(message, args) {
        var output = Math.floor(Math.random() * args[0]) + 1

        if (output == args[0]){
            
            const res = got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=win`)

            message.channel.send(`${message.author.username} rolled a d${args[0]}!\nAnd got...\nCRITICAL SUCCESS! ${output}`,{
                file: 'https://media.giphy.com/media/aWRWTF27ilPzy/giphy.gif',
            });
        }
        else if (output === 1) {
            message.channel.send(`${message.author.username} rolled a d${args[0]}!\nAnd got...\nCRITICAL FAILURE! ${output}`,{
                file: 'https://media.giphy.com/media/duexIlfr9yYwYE23UA/giphy.gif',
            });
        } 
        else {
            message.channel.send(`${message.author.username} rolled a d${args[0]}!\nAnd got ${output}`);
        }
        
    },
};