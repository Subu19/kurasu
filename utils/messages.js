const moment = require('moment');
const emoji = require('node-emoji');

function formatMessages(username, imageUrl, text, sId, sId2) {
    const message = textToEmoji(text);
    const filteredMessage = message.split("<").join("&lt").split(">").join("&gt");

    return {
        username: username,
        imageUrl: imageUrl,
        text: emoji.emojify(filteredMessage),
        sId: sId,
        sId2: sId2,
        time: moment().format('h:mm a')
    };
};
// function formatDmMessages(sId, sId2, username, imageUrl, text, chatBoxId) {
//     const message = textToEmoji(text);
//     const filteredMessage = message.split("<").join("&lt").split(">").join("&gt");

//     return {
//         sId: sId,
//         sId2: sId2,
//         username: username,
//         imageUrl: imageUrl,
//         text: emoji.emojify(filteredMessage),
//         chatBoxId: chatBoxId,
//         time: moment().format('h:mm a')
//     };
// }

function formatYTMessages(username, imageUrl, text, sId, sId2, url) {
    text = textToEmoji(text);
    return {
        username: username,
        imageUrl: imageUrl,
        text: emoji.emojify(text),
        sId: sId,
        sId2: sId2,
        url: url,
        time: moment().format('h:mm a')
    };
};


function formatLinkMessages(username, imageUrl, text, sId, sId2, url, metaData) {

    text = textToEmoji(text);
    return {
        username: username,
        imageUrl: imageUrl,
        text: emoji.emojify(text),
        sId: sId,
        sId2: sId2,
        url: url,
        metaData: metaData,
        time: moment().format('h:mm a')
    };
};

function formatTyping(username, sId) {
    return {
        user: username,
        sId: sId
    }
}
function textToEmoji(text) {
    // text = text.replace('<', '&lt;');
    text = text.replace(':D', ':laughing:');
    text = text.replace(':)', ':smile:');
    text = text.replace(':P', ':stuck_out_tongue:');
    text = text.replace(';P', ':zany_face:');
    text = text.replace(':(', ':slightly_frowning_face:');
    text = text.replace('-_-', ':expressionless:');
    // text = text.replace('', '');
    // text = text.replace('XD', ':laughing:');
    // text = text.replace('XD', ':laughing:');
    // text = text.replace('XD', ':laughing:');

    return text;
}

module.exports = {
    formatMessages,
    formatTyping,
    formatYTMessages,
    formatLinkMessages
};
