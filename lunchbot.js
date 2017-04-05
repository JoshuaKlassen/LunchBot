/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
LunchBot:
A basic Slack bot, using Botkit: https://github.com/howdyai/botkit

Usage: token=<MY_TOKEN> node lunchbot.js

Where <MY_TOKEN> is the bot token from Slack

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');

var controller = Botkit.slackbot({
    debug: false,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, 'Hello World!');
});