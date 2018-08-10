module.exports = {
    name: 'dice',
    description: 'Rolls a die based on the input given.',
    args: true,
    usage: '<dice number of sides>',
    aliases: ['d'],
    execute(message, args) {
        var output = Math.floor(Math.random() * args[0]) + 1
        message.channel.send(`${message.author.username} rolled a d${args[0]}!\nAnd got ${output}`);
    },
};