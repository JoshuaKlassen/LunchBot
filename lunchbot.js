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
    debug: false
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

var testData = ['Epic Wedge', 'Subway', 'Shawarma Khan', 'Bodegoes', 'King at Bannatyne', 'Chosabi', 'Miss Brown\'s', 'Kay\'s Deli', 'Free Press Cafe', 'Yellow Dog', 'Smoke\'s Poutinery', 'King\'s Head', 'Pita & Wings', 'Freshii', 'Wasabi Cafe'];

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, 'Hello World!');
});

controller.hears(['(.*)recommend(.*)'], 'direct_message,direct_mention,mention', function(bot, message) {
    var item = testData[Math.floor(Math.random() * testData.length)];
    bot.reply(message, 'I recommend: ' + item);
});