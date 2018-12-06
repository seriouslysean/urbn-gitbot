/**
 * When the bot joins a channel, tell everyone what it can do
 */
const config = require('../config');

const helpMessage = `I'm here to help you find out what PRs you currently have open and which of them need your attention. In order to get the most out of me, you can use the following slash commands:

* \`/${config.UGB_SLASH_COMMAND} pr\` - Pull all PRs
* \`/${config.UGB_SLASH_COMMAND} pr reviewer\` - Pull PRs where you are a reviewer
* \`/${config.UGB_SLASH_COMMAND} pr assigned\` - Pull PRs where you are an assignee
* \`/${config.UGB_SLASH_COMMAND} help\` - Additional information
* \`/${config.UGB_SLASH_COMMAND} creators\` - The lovely folks who made me`;

module.exports = function(controller) {

    controller.on('bot_channel_join,bot_group_join', (bot, message) => {

        bot.reply(message, {
            attachments: [{
                title: `Beep, boop! I'm the ${config.UGB_BOT_NAME}!`,
                pretext: `Thanks for inviting me, <@${message.inviter}>!`,
                text: helpMessage,
                mrkdwn_in: [
                    'text',
                    'pretext',
                ],
            }],
        });

    });

    // Someone asks for help

    const helpStrings = [
        // Need to double escape the backslash because we're within single quotes
        '^what can you do\\??$',
        '^help$',
    ];

    controller.hears(helpStrings, 'direct_mention', (bot, message) => {
        bot.reply(message, {
            attachments: [{
                pretext: `Don't worry-- *${config.UGB_BOT_NAME}* to the rescue, <@${message.user}>!`,
                text: helpMessage,
                mrkdwn_in: [
                    'text',
                    'pretext',
                ],
            }],
        });
    });

    // Someone asks who created me

    const creatorStrings = [
        '^who made you\??$',
        '^creators$',
    ];

    controller.hears(creatorStrings, 'direct_mention', (bot, message) => {
        bot.reply(message, {
            attachments: [{
                pretext: `Thanks for asking, <@${message.user}>!`,
                text: `I was created during the 2018 URBN Fall Hackathon in a join effort by the following humans:

*Allan Ashenfelter* - Manager
*Dan Gautsch* - Technical Lead UCC
*Michael Greenberg* - Software Engineer
*Sean Kennedy* - Senior Software Engineer
*Brandon Wolvin* - Technical Lead Account
*John Zlotek* - Co-op`,
                mrkdwn_in: [
                    'text',
                    'pretext',
                ],
            }],
        });
    });

}