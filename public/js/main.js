
const socket = io();
const chatBox = document.querySelectorAll(".message-box");

let username = document.getElementById("User").value;
let profilePic = document.getElementById('imageUrl').value;
let userId = document.getElementById('userId').value;
const onlineList = document.getElementById("onlineList");


socket.on("message", (message) => {
     console.log(message);
     broadcastMessage(message);
     chatBox.scrollTop = chatBox.scrollHeight;
});
socket.on("chat", async (message) => {
     const sId = message.sId;
     const sId2 = message.sId2;

     var sIdDiv = document.getElementById(`chatBox-${sId}`);
     var sId2Div = document.getElementById(`chatBox-${sId2}`);

     //If it isn't "undefined" and it isn't "null", then it exists.
     if (typeof (sIdDiv) != 'undefined' && sIdDiv != null) {
          const chatBoxId = `chatBox-${sId}`;
          if (
               sIdDiv.scrollHeight - sIdDiv.scrollTop > sIdDiv.clientHeight - 5 &&
               sIdDiv.scrollHeight - sIdDiv.scrollTop <= sIdDiv.clientHeight + 5
          ) {
               if (document.visibilityState == "visible") {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `${message.text}`);
                    userChat(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sIdDiv.scrollHeight
                    }, 500);
                    document.title = 'KuraSu';
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';


               } else {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `${message.text}`);
                    userChat(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sIdDiv.scrollHeight
                    }, 500);
                    document.getElementById("messageSound").play();
                    document.title = `(🔴)KuraSu`;
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';


               }
          } else {
               checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `${message.text}`);
               userChat(message, chatBoxId);
               // document.getElementById("newMessage").style.display = "block";
               document.getElementById("messageSound").play();
               document.title = `(🔴)KuraSu`;
               typingUsers.length = 0;
               document.querySelector('.roomListLink').innerHTML = ' Menu';


          }
     } else if (typeof (sId2Div) != 'undefined' && sId2Div != null) {
          const chatBoxId = `chatBox-${sId2}`;
          if (
               sId2Div.scrollHeight - sId2Div.scrollTop > sId2Div.clientHeight - 5 &&
               sId2Div.scrollHeight - sId2Div.scrollTop <= sId2Div.clientHeight + 5
          ) {
               if (document.visibilityState == "visible") {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `${message.text}`);
                    userChat(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sId2Div.scrollHeight
                    }, 500);
                    document.title = 'KuraSu';
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';

               } else {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `${message.text}`);
                    userChat(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sId2Div.scrollHeight
                    }, 500);
                    document.getElementById("messageSound").play();
                    document.title = `(🔴)KuraSu`;
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';

               }
          } else {
               checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `${message.text}`);
               userChat(message, chatBoxId);
               // document.getElementById("newMessage").style.display = "block";
               document.getElementById("messageSound").play();
               document.title = `(🔴)KuraSu`;
               typingUsers.length = 0;
               document.querySelector('.roomListLink').innerHTML = ' Menu';


          }
     } else {
          let currentChat = '';
          var x = document.querySelectorAll(".message-box");
          var i;
          for (i = 0; i < x.length; i++) {
               if (x[i].style.display !== 'none') {
                    currentChat = x[i].id;
               }
          }
          await dmClick(`${sId2}`, `${message.imageUrl}`, `${message.username}`);
          const chatBoxId = `chatBox-${sId2}`;
          userChat(message, chatBoxId);
          topNotify(`${message.imageUrl}`, `${message.username}`, `${message.text}`);

          document.getElementById(chatBoxId).style.display = 'none';
          document.getElementById(currentChat).style.display = 'block';
          document.querySelector('.roomListLink').innerHTML = ' Menu<font color="red">(New)</font>';
          document.getElementById("messageSound").play();
          document.title = `(🔴)KuraSu`;


     }

});



socket.on("youtubeEmbed", async (message) => {
     const sId = message.sId;
     const sId2 = message.sId2;
     var sIdDiv = document.getElementById(`chatBox-${sId}`);
     var sId2Div = document.getElementById(`chatBox-${sId2}`);
     if (typeof (sIdDiv) != 'undefined' && sIdDiv != null) {
          const chatBoxId = `chatBox-${sId}`;
          if (
               sIdDiv.scrollHeight - sIdDiv.scrollTop > sIdDiv.clientHeight - 5 &&
               sIdDiv.scrollHeight - sIdDiv.scrollTop <= sIdDiv.clientHeight + 5
          ) {
               if (document.visibilityState == "visible") {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a youtube link`);
                    sendYoutubeEmbed(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sIdDiv.scrollHeight
                    }, 500);
                    document.title = 'KuraSu';
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';


               } else {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a youtube link`);
                    sendYoutubeEmbed(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sIdDiv.scrollHeight
                    }, 500);
                    document.getElementById("messageSound").play();
                    document.title = `(🔴)KuraSu`;
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';


               }
          } else {
               checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a youtube link`);
               sendYoutubeEmbed(message, chatBoxId);
               // document.getElementById("newMessage").style.display = "block";
               document.getElementById("messageSound").play();
               document.title = `(🔴)KuraSu`;
               typingUsers.length = 0;
               document.querySelector('.roomListLink').innerHTML = ' Menu';


          }
     } else if (typeof (sId2Div) != 'undefined' && sId2Div != null) {
          const chatBoxId = `chatBox-${sId2}`;
          if (
               sId2Div.scrollHeight - sId2Div.scrollTop > sId2Div.clientHeight - 5 &&
               sId2Div.scrollHeight - sId2Div.scrollTop <= sId2Div.clientHeight + 5
          ) {
               if (document.visibilityState == "visible") {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a youtube link`);

                    sendYoutubeEmbed(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sId2Div.scrollHeight
                    }, 500);
                    document.title = 'KuraSu';
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';

               } else {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a youtube link`); sendYoutubeEmbed(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sId2Div.scrollHeight
                    }, 500);
                    document.getElementById("messageSound").play();
                    document.title = `(🔴)KuraSu`;
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';

               }
          } else {
               checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a youtube link`); sendYoutubeEmbed(message, chatBoxId);
               // document.getElementById("newMessage").style.display = "block";
               document.getElementById("messageSound").play();
               document.title = `(🔴)KuraSu`;
               typingUsers.length = 0;
               document.querySelector('.roomListLink').innerHTML = ' Menu';


          }
     } else {
          let currentChat = '';
          var x = document.querySelectorAll(".message-box");
          var i;
          for (i = 0; i < x.length; i++) {
               if (x[i].style.display !== 'none') {
                    currentChat = x[i].id;
               }
          }
          await dmClick(`${sId2}`, `${message.imageUrl}`, `${message.username}`);
          const chatBoxId = `chatBox-${sId2}`;
          sendYoutubeEmbed(message, chatBoxId);
          topNotify(`${message.imageUrl}`, `${message.username}`, 'Youtube link...');
          document.getElementById(chatBoxId).style.display = 'none';
          document.getElementById(currentChat).style.display = 'block';
          document.querySelector('.roomListLink').innerHTML = ' Menu<font color="red">(New)</font>';
          document.getElementById("messageSound").play();
          document.title = `(🔴)KuraSu`;


     }

});
socket.on("linkEmbed", async (message) => {
     const sId = message.sId;
     const sId2 = message.sId2;
     var sIdDiv = document.getElementById(`chatBox-${sId}`);
     var sId2Div = document.getElementById(`chatBox-${sId2}`);
     if (typeof (sIdDiv) != 'undefined' && sIdDiv != null) {
          const chatBoxId = `chatBox-${sId}`;
          if (
               sIdDiv.scrollHeight - sIdDiv.scrollTop > sIdDiv.clientHeight - 5 &&
               sIdDiv.scrollHeight - sIdDiv.scrollTop <= sIdDiv.clientHeight + 5
          ) {
               if (document.visibilityState == "visible") {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a link`);
                    sendLinkEmbed(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sIdDiv.scrollHeight
                    }, 500);
                    document.title = 'KuraSu';
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';


               } else {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a link`);
                    sendLinkEmbed(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sIdDiv.scrollHeight
                    }, 500);
                    document.getElementById("messageSound").play();
                    document.title = `(🔴)KuraSu`;
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';


               }
          } else {
               checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a link`);
               sendLinkEmbed(message, chatBoxId);
               // document.getElementById("newMessage").style.display = "block";
               document.getElementById("messageSound").play();
               document.title = `(🔴)KuraSu`;
               typingUsers.length = 0;
               document.querySelector('.roomListLink').innerHTML = ' Menu';


          }
     } else if (typeof (sId2Div) != 'undefined' && sId2Div != null) {
          const chatBoxId = `chatBox-${sId2}`;
          if (
               sId2Div.scrollHeight - sId2Div.scrollTop > sId2Div.clientHeight - 5 &&
               sId2Div.scrollHeight - sId2Div.scrollTop <= sId2Div.clientHeight + 5
          ) {
               if (document.visibilityState == "visible") {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a link`);
                    sendLinkEmbed(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sId2Div.scrollHeight
                    }, 500);
                    document.title = 'KuraSu';
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';

               } else {
                    checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a link`);
                    sendLinkEmbed(message, chatBoxId);
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sId2Div.scrollHeight
                    }, 500);
                    document.getElementById("messageSound").play();
                    document.title = `(🔴)KuraSu`;
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';

               }
          } else {
               checkNotify(`${chatBoxId}`, `${message.imageUrl}`, `${message.username}`, `Sent you a link`);
               sendLinkEmbed(message, chatBoxId);
               // document.getElementById("newMessage").style.display = "block";
               document.getElementById("messageSound").play();
               document.title = `(🔴)KuraSu`;
               typingUsers.length = 0;
               document.querySelector('.roomListLink').innerHTML = ' Menu';


          }
     } else {
          let currentChat = '';
          var x = document.querySelectorAll(".message-box");
          var i;
          for (i = 0; i < x.length; i++) {
               if (x[i].style.display !== 'none') {
                    currentChat = x[i].id;
               }
          }
          await dmClick(`${sId2}`, `${message.imageUrl}`, `${message.username}`);
          const chatBoxId = `chatBox-${sId2}`;
          sendLinkEmbed(message, chatBoxId);
          topNotify(`${message.imageUrl}`, `${message.username}`, 'A link...');
          document.getElementById(chatBoxId).style.display = 'none';
          document.getElementById(currentChat).style.display = 'block';
          document.querySelector('.roomListLink').innerHTML = ' Menu<font color="red">(New)</font>';
          document.getElementById("messageSound").play();
          document.title = `(🔴)KuraSu`;


     }

});
socket.on("getAllUsers", (users) => {
     setOnline(users);
});


socket.on("userLeave", (id) => {

})

const chatForm = document.getElementById("chat-form");


chatForm.addEventListener("submit", (e) => {

     e.preventDefault();

     const msg = e.target.elements.msg.value;
     const User = e.target.elements.User.value;
     const imageUrl = e.target.elements.imageUrl.value;
     const sId = e.target.elements.socketId.value;

     let regex = new RegExp("\\S");
     if (regex.test(msg)) {
          socket.emit("chatMessage", {
               username: User,
               imageUrl: imageUrl,
               msg: msg,
               sId: sId
          });
          e.target.elements.msg.value = "";
          const div = document.getElementById('usersTyping');
          div.innerHTML = '...';
          typingUsers.length = 0;

     }


     if (msg === "!flappy") {
          const flappyGame = "<iframe id='inlineFrameExample' title='Inline Frame Example' width='285' height='370' src='/flappybird'> </iframe>";
          const botProfile = 'https://www.vippng.com/png/full/242-2420933_discord-transparent-bot-profile-pictures-for-discord.png';

          socket.emit("chatMessage", {
               username: 'BOT',
               imageUrl: botProfile,
               msg: flappyGame,
          });
     }



});


socket.emit("joinChat", {
     userId,
     username,
     profilePic

});
function currentTime() {

     return new Date().toLocaleTimeString();
}

//broadcast messsage function
function broadcastMessage(message) {
     const div = document.createElement("div");
     div.classList.add("broadcast-message");
     div.innerHTML = `
                    <div style="display:inline;">
                    <img src="${message.imageUrl}" height="40px" width="40px"></div>
                    <div style="display:inline;">
                    <b style="color:#11E188">${message.username}</b>
                    <b style="color:#BDBBBB; font-size:12px;">${currentTime()}</b>
                    <br>${message.text}
                    </div>`;
     document.querySelector(".message-box").appendChild(div);
}

function userChat(message, chatBoxId) {
     let messageBackground = 'transparent';
     let messageBorder = 'none'
     var emoji_regex = /^(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])$/;
     const emo_test = str => emoji_regex.test(str);
     let fontSize = ''
     if (emo_test(message.text) == true) {
          fontSize = '7';

     } else {
          fontSize = '3'
     }
     const splitMessage = message.text.split(" ");
     const lowercaseMessage = splitMessage.toString().toLowerCase();
     let lowercaseUsername = username.toLowerCase();
     if (splitMessage.includes(`@${username}`) || lowercaseMessage.includes(`@${lowercaseUsername}`)) {
          let mentionUsername = `@${username}`;
          mentionUsername.fontcolor('red');
          message.text.replace(`@${username}`, mentionUsername);
          console.log('mentioned user!');
          document.getElementById("messageSound").play();
          messageBackground = 'rgba(0,0,0,0.3)';
          messageBorder = 'solid';
     }

     const div = document.createElement("div");
     div.classList.add("messages");
     div.innerHTML = `<div style="display:inline;">
                    
                    <img src="${message.imageUrl}" height="40px" width="40px"></div>
                    <div style="width: 100%; word-break: break-word;border-radius:4px; border-right-style:${messageBorder}; background-color:${messageBackground};">
                    <b style="color:#11E188">${message.username}</b>
                    <b style="color:#BDBBBB; font-size:12px;">${currentTime()}</b>
                    <br><font size="${fontSize}">${message.text}</font>
                    
                    </div>
                    </div>
                    `;
     document.getElementById(chatBoxId).appendChild(div);

}


function sendYoutubeEmbed(content, chatBoxId) {
     let messageBackground = 'transparent';
     let messageBorder = 'none'
     var emoji_regex = /^(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])$/;
     const emo_test = str => emoji_regex.test(str);
     let fontSize = ''
     if (emo_test(content.text) == true) {
          fontSize = '7';

     } else {
          fontSize = '3'
     }
     const splitMessage = content.text.split(" ");
     const lowercaseMessage = splitMessage.toString().toLowerCase();
     let lowercaseUsername = username.toLowerCase();
     if (splitMessage.includes(`@${username}`) || lowercaseMessage.includes(`@${lowercaseUsername}`)) {
          let mentionUsername = `@${username}`;
          mentionUsername.fontcolor('red');
          content.text.replace(`@${username}`, mentionUsername);
          console.log('mentioned user!');
          document.getElementById("messageSound").play();
          messageBackground = 'rgba(0,0,0,0.3)';
          messageBorder = 'solid';
     }
     const youtubeID = YouTubeGetID(content.url);
     const div = document.createElement("div");
     div.classList.add("messages");
     div.innerHTML = `<div style="display:inline;">
                    
                    <img src="${content.imageUrl}" height="40px" width="40px"></div>
                    <div style="width: 100%; word-break: break-word;border-radius:4px; border-right-style:${messageBorder}; background-color:${messageBackground};">
                    <b style="color:#11E188">${content.username}</b>
                    <b style="color:#BDBBBB; font-size:12px;">${currentTime()}</b>
                    <br><font size="${fontSize}">${content.text}</font>
                    <div style="margin-left:10px; margin-bottom: 10px; margin-top: 10px;">
                    <iframe 
                                         width="560" 
                                         height="315" 
                                        src="https://www.youtube.com/embed/${youtubeID}" 
                                        frameborder="0" 
                                        allow="accelerometer; 
                                        autoplay; 
                                       encrypted-media; 
                                       gyroscope; 
                                       picture-in-picture" 
                                      allowfullscreen>
                    </iframe>
                    </div>
                    </div>
                    
                    `;
     document.getElementById(chatBoxId).appendChild(div);

};



function sendLinkEmbed(content, chatBoxId) {
     let messageBackground = 'transparent';
     let messageBorder = 'none'
     var emoji_regex = /^(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])$/;
     const emo_test = str => emoji_regex.test(str);
     let fontSize = ''
     if (emo_test(content.text) == true) {
          fontSize = '7';

     } else {
          fontSize = '3'
     }
     const splitMessage = content.text.split(" ");
     const lowercaseMessage = splitMessage.toString().toLowerCase();
     let lowercaseUsername = username.toLowerCase();
     if (splitMessage.includes(`@${username}`) || lowercaseMessage.includes(`@${lowercaseUsername}`)) {
          let mentionUsername = `@${username}`;
          mentionUsername.fontcolor('red');
          content.text.replace(`@${username}`, mentionUsername);
          console.log('mentioned user!');
          document.getElementById("messageSound").play();
          messageBackground = 'rgba(0,0,0,0.3)';
          messageBorder = 'solid';
     }
     const div = document.createElement("div");
     div.classList.add("messages");
     div.innerHTML = `<div style="display:inline;">
                    
                    <img src="${content.imageUrl}" height="40px" width="40px"></div>
                    <div style="width: 100%; word-break: break-word;border-radius:4px; border-right-style:${messageBorder}; background-color:${messageBackground};">
                    <b style="color:#11E188">${content.username}</b>
                    <b style="color:#BDBBBB; font-size:12px;">${currentTime()}</b>
                    <br><font size="${fontSize}">${content.text}</font>
                    <br>
                    <div style="
                              margin-bottom: 10px; 
                              marg in-top: 20px;
                              background-color:rgba(0,0,0,0.2);
                              padding:10px;
                              max-width :70%;
                              border-radius:10px;
                              "
                              >
                    <a href="${content.url}"><font size="5px" color="#5f8bba"><b>${content.metaData.title}</b></font></a>
                    <br>
                    <font size="2px"><b>${content.metaData.desc}</b></font>
                    <br>
                    <br>
                    <img src="${content.metaData.image}" style="border-radius: 0px;" height="200px" onerror="this.style.display='none'">
                         

                    </div>
                    </div>
                    
                    `;
     document.getElementById(chatBoxId).appendChild(div);

};
//set user online
function setOnline(users) {
     onlineList.innerHTML = `
    
    ${users.users
               .map((user) => `<div class="onlineUser" id='${user.id}' onclick='showUser("${user.id}", "${user.profilePic}", "${user.username}")'><img style="border-radius: 50%; margin-right: 10px;" src='${user.profilePic}' height="30px" width="30px">${user.username}<br>
               </div>`)
               .join(" ")}
    `;
}


function showUser(id, pfp, username) {
     const userSid = `${id}`;
     document.getElementById('showuserBox').style.display = 'flex';
     document.getElementsByClassName('showUserDetails-pfp')[0].innerHTML = `
     <img src="${pfp}" alt="" width="230px" height="230px">
     `;
     document.getElementsByClassName('showUserDetails-desc')[0].innerHTML = `
     <h3 class="showUserDetails-username">${username}</h3>

                <button class="DmButton" onclick="dmClick('${userSid}', '${pfp}', '${username}' )">Dm</button>
     `;


     // const element = document.getElementById(`${id}`);
     // console.log(element.classList.value);
     // if (element.classList.value === 'onlineUser-big') {
     //      element.classList.replace('onlineUser-big', 'onlineUser');
     //      element.innerHTML = `
     //      <img style="border-radius: 50%; margin-right: 10px;" src='${pfp}' height="30px" width="30px">${username}<br>

     //      `;
     // } else {

     //      element.classList.replace('onlineUser', 'onlineUser-big');
     //      element.innerHTML = `
     //      <div style="
     //      margin:auto;
     //      height:200px;
     //      width:200px;
     //      ">
     //      <img 
     //      style="
     //           border-radius: 50%; 
     //           margin-left: 5px; 
     //           margin-right:5px; 
     //           margin-top:0px;" 
     //      src='${pfp}' 
     //      height="200px" 
     //      width="200px">
     //      <br>
     //      </div>
     //     <center> ${username} <button onclick="dmClick('${userSid}', '${pfp}', '${username}' )" style="border-radius: 0px; border-style:none; background-color: black; color:white;">DM</button></center>

     //      `;

     // }

};
function hideShowUserBox() {
     document.getElementById('showuserBox').style.display = 'none';
}
document.getElementsByClassName('showUserDetails')[0].addEventListener('click', (e) => {

});

function dmClick(id, pfp, username) {
     var element = document.getElementById(`chatBox-${id}`);
     //If it isn't "undefined" and it isn't "null", then it exists.
     if (typeof (element) != 'undefined' && element != null) {
          var x = document.querySelectorAll(".message-box");
          var i;
          for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";
          }
          element.style.display = 'block';
          document.getElementById('socketId').value = `${id}`;
          if (username === 'Global Chat') {
               let classCheck = '';
               if (document.getElementById('chatBox-global').classList.value === 'message-box global night-message-box') {
                    classCheck = 'logoText logoTextNight';
               } else {
                    classCheck = 'logoText';
               }

               document.getElementById('logoContainner').innerHTML = `<svg class="logoBox" width="272" height="70" viewBox="0 0 272 70" fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <g id="kuraSuText">
               <path class="${classCheck}" id="logoText" stroke="black" stroke-width="3"
               d="M0.84375 68V2.375H7.21875V68H0.84375ZM11.25 36.0312L33.8438 2.375H40.875L18.375 36.0312L41.25 68H34.2188L11.25 36.0312ZM46.5 54.7812V18.3125H52.7812V54.0312C52.7812 56.4062 54 58.5 56.4375 60.3125C58.3125 61.625 60.3438 62.2812 62.5312 62.2812V68.4688C56.5312 68.4688 51.9688 66.1562 48.8438 61.5312C47.2812 59.1562 46.5 56.9062 46.5 54.7812ZM66.5625 68.4688V62.2812C70.25 62.2812 73.0625 60.8125 75 57.875C75.8125 56.5625 76.2188 55.2812 76.2188 54.0312V18.3125H82.5V54.7812C82.5 57.5938 81.2188 60.4062 78.6562 63.2188C75.4062 66.6562 71.375 68.4062 66.5625 68.4688ZM90 68V18.2188H96.2812V25.625C97.5938 22.9375 99.7812 20.875 102.844 19.4375C104.719 18.5625 106.656 18.125 108.656 18.125H109.688L108.188 24.125C104.875 24.1875 101.938 26.0625 99.375 29.75C97.3125 32.8125 96.2812 35.9688 96.2812 39.2188V68H90ZM114.656 56.375C114.656 59.75 116.312 62.625 119.625 65C122.438 66.9375 125.75 67.9062 129.562 67.9062V62.0938C124.5 62.0938 121.5 60.375 120.562 56.9375C120.375 56.25 120.281 55.5625 120.281 54.875V51.875C120.344 50.4375 120.719 49.375 121.406 48.6875C122.344 47.75 126.062 46.5312 132.562 45.0312C137.812 43.7812 141.312 42.7188 143.062 41.8438V53.6562C143.062 58.8438 140.469 61.625 135.281 62C134.844 62.0625 134.438 62.0938 134.062 62.0938V67.9062C138.5 67.9062 141.969 66.8438 144.469 64.7188C144.531 64.6562 144.594 64.5938 144.656 64.5312C146.406 66.7812 148.719 67.9062 151.594 67.9062V62C150.031 61.875 149.219 60.8438 149.156 58.9062V32.6562C149.156 28.4688 147.594 24.9062 144.469 21.9688C141.656 19.3438 138.188 18.0312 134.062 18.0312V23.6562C137.062 23.6562 139.469 24.9062 141.281 27.4062C142.406 28.9688 142.969 30.75 142.969 32.75V34.4375C143.031 36 139.25 37.75 131.625 39.6875C124.5 41.5 120.406 42.6875 119.344 43.25C116.281 45 114.719 47.9062 114.656 51.9688V56.375ZM115.312 30.5L120.844 32.6562C120.844 29.0938 122.375 26.5 125.438 24.875C126.75 24.1875 128.156 23.8438 129.656 23.8438V18.0312C125.406 18.0312 121.781 19.5312 118.781 22.5312C116.406 24.9062 115.25 27.5625 115.312 30.5ZM187.969 53.1875L193.781 51.125C194.094 53.0625 194.719 54.75 195.656 56.1875C196.594 57.625 197.594 58.7188 198.656 59.4688C199.781 60.2188 200.844 60.8438 201.844 61.3438C202.906 61.7812 203.781 62.0625 204.469 62.1875L205.5 62.2812V68.2812C199.875 68.2812 195.188 65.9062 191.438 61.1562C189.188 58.2812 188.031 55.625 187.969 53.1875ZM188.719 20C188.719 13.375 191.625 8.34375 197.438 4.90625C200.312 3.21875 203 2.375 205.5 2.375V8.375C203.25 8.5 201.031 9.5625 198.844 11.5625C196.344 13.9375 195.062 16.8438 195 20.2812C195 24.5312 198.062 27.6562 204.188 29.6562C205.75 30.1562 208.094 30.75 211.219 31.4375C214.156 32.125 216.188 32.6562 217.312 33.0312C222.875 35.0312 226.469 37.9688 228.094 41.8438C228.906 43.8438 229.312 46.1562 229.312 48.7812C229.312 54.2188 227.219 58.9375 223.031 62.9375C219.219 66.5 214.875 68.2812 210 68.2812V62.2812C212.625 62.2188 215.344 60.9688 218.156 58.5312C221.281 55.7188 222.875 52.4062 222.938 48.5938C222.938 43.7188 219.625 40.2812 213 38.2812C211.5 37.8438 209.25 37.3125 206.25 36.6875C203.188 36.0625 201.188 35.5625 200.25 35.1875C195.062 33.125 191.688 30.4688 190.125 27.2188C189.188 25.1562 188.719 22.75 188.719 20ZM210 8.375V2.375C215.5 2.375 220.094 4.875 223.781 9.875C225.469 12.1875 226.438 14.2812 226.688 16.1562L220.688 18.125C220.312 16.4375 219.656 14.9375 218.719 13.625C217.844 12.3125 216.906 11.3438 215.906 10.7188C214.969 10.0938 214.031 9.59375 213.094 9.21875C212.219 8.78125 211.5 8.53125 210.938 8.46875L210 8.375ZM235.406 54.7812V18.3125H241.688V54.0312C241.688 56.4062 242.906 58.5 245.344 60.3125C247.219 61.625 249.25 62.2812 251.438 62.2812V68.4688C245.438 68.4688 240.875 66.1562 237.75 61.5312C236.188 59.1562 235.406 56.9062 235.406 54.7812ZM255.469 68.4688V62.2812C259.156 62.2812 261.969 60.8125 263.906 57.875C264.719 56.5625 265.125 55.2812 265.125 54.0312V18.3125H271.406V54.7812C271.406 57.5938 270.125 60.4062 267.562 63.2188C264.312 66.6562 260.281 68.4062 255.469 68.4688Z"
               fill="black" />
               <path d="M159 69.5L175.406 0.21875H181.406L165.094 69.5H159Z" fill="#FE005B" />
               </g>
               </svg>`;
          } else {
               document.getElementById('logoContainner').innerHTML = `<div class="logoBox">${username}</div>`;

          }

     } else {

          var x = document.querySelectorAll(".message-box");
          var i;
          for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";
          }
          const div = document.createElement("div");
          div.classList.add('message-box');
          div.id = `chatBox-${id}`;
          div.innerHTML = `
          <div class="whitespace" style="height: 80px; width: 100%;">.</div>


          `;

          document.querySelector(".messageBox").appendChild(div);
          div.style.display = 'block';
          document.getElementById('socketId').value = `${id}`;

          const div2 = document.createElement('div');
          div2.innerHTML = `<div class="onlineUser" onclick="dmClick('${id}', '${pfp}', '${username}' )"><img style="border-radius: 50%; margin-right: 10px;" src='${pfp}' height="30px" width="30px">${username}<br></div>`;
          document.getElementById('roomList').appendChild(div2);

          document.getElementById('logoContainner').innerHTML = `<div class="logoBox">${username}</div>`;
          if (document.querySelector('.message-box').classList.value === "message-box global night-message-box") {
               div.classList.add('night-message-box');
          }
     }
}

//functions
function YouTubeGetID(url) {
     var ID = '';
     url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
     if (url[2] !== undefined) {
          ID = url[2].split(/[^0-9a-z_\-]/i);
          ID = ID[0];
     }
     else {
          ID = url;
     }
     return ID;
};






//typing message







var messageTextField = $('#msg');
messageTextField.on('keyup', function (event) {
     var sId = document.getElementById('socketId').value;
     if (event.which <= 90 && event.which >= 48) {

          socket.emit('userTyping', {
               username: username,
               sId: sId

          });


     }




});


socket.on('typing', (message) => {
     if (document.getElementById(`chatBox-${message.sId}`).style.display !== 'none') {
          broadcastTyping(message);

     }
});

const typingUsers = [];

function broadcastTyping(message) {
     const getTypinguser = typingUsers.find((data) => data.user === message.user);

     if (!getTypinguser) {

          let data = {
               user: message.user
          };

          typingUsers.push(data);
          console.log(typingUsers.length);
          if (typingUsers.length === 1) {

               const div = document.getElementById('usersTyping');
               div.innerHTML = `
          ${typingUsers[0].user} is typing...
          `;
          }
          else if (typingUsers.length === 2) {
               const div = document.getElementById('usersTyping');
               div.innerHTML = `
          ${typingUsers[0].user} and ${typingUsers[1].user} are typing...
          `;
          } else {
               const countTypingUsers = typingUsers.length;

               const div = document.getElementById('usersTyping');
               div.innerHTML = `
          ${countTypingUsers} people are typing...
          `;
          }


     }
     // document.querySelector(".usersTyping").appendChild(div);
};



setInterval(() => {
     const div = document.getElementById('usersTyping');
     div.innerHTML = '...';
     typingUsers.length = 0;
}, 5000);



//send photo functions

window.addEventListener('paste', function (e) {
     const imageContainner = document.getElementById('chooseImage');
     imageContainner.files = e.clipboardData.files;
     var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
     if (!allowedExtensions.exec(imageContainner.value)) {
          return;
     }
     let imageData;
     imageData = imageContainner.files[0];

     document.getElementById('confirmUpload').style.display = 'block';
     document.getElementById('imageName').innerHTML = `<b> Do you want to Upload <br> ${imageData.name}?</b> `;
     setTimeout(() => {

          document.getElementById('confirmUpload').style.height = '240px';
     }, 300);
});


$('#chooseImage').bind('change', function (e) {
     var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
     if (!allowedExtensions.exec(this.value)) {
          alert('invalid file!');
          return;
     }
     let imageData;
     imageData = e.originalEvent.target.files[0];

     document.getElementById('confirmUpload').style.display = 'block';
     document.getElementById('imageName').innerHTML = `<b> Do you want to Upload<br> ${imageData.name}?</b>`;
     setTimeout(() => {

          document.getElementById('confirmUpload').style.height = '240px';
     }, 300);


});

$('.uploadNo').bind('click', function () {
     document.getElementById('chooseImage').value = "";
     document.getElementById('confirmUpload').style.height = '0px';
     setTimeout(() => {
          document.getElementById('imageName').innerHTML = ` `;
          document.getElementById('confirmUpload').style.display = 'none';
          document.getElementById('msgWithImg').value = "";

     }, 300);



})
$('.uploadYes').bind('click', async function () {
     const div = document.createElement("div");
     div.classList = 'uploadBox';
     div.id = 'uploadBox' + currentTime();
     div.innerHTML = `<div class="uploadBox">
               <svg class="uploadingContainner" width="620" height="201" viewBox="0 0 620 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="uploadingGroup">
                         <rect id="uploadingBackground" width="620" height="201" rx="39" fill="black" />
                         <rect id="Rectangle 2" x="79" y="65" width="72" height="72" fill="#868686" />
                         <path id="Polygon 1" d="M128 73L151.383 110.5H104.617L128 73Z" fill="black" />
                         <path id="Polygon 2" d="M100.5 80L118.254 110H82.7465L100.5 80Z" fill="black" />
                         <ellipse id="Ellipse 1" cx="87.5" cy="74" rx="7.5" ry="8" fill="black" />
                         <rect id="Rectangle 3" x="82" y="117" width="65" height="10" rx="5" fill="#C4C4C4" />
                         <rect id="Rectangle 4" x="106" y="128" width="17" height="3" rx="1.5" fill="#C4C4C4" />
                         <rect id="Rectangle 6" x="126" y="128" width="17" height="3" rx="1.5" fill="#C4C4C4" />
                         <rect id="Rectangle 5" x="84" y="128" width="17" height="3" rx="1.5" fill="#C4C4C4" />
                         <g id="Rectangle 7" filter="url(#filter0_d)">
                              <rect x="115.973" y="28.8282" width="102.076" height="102.076" transform="rotate(45.7723 115.973 28.8282)" stroke="white" stroke-width="4" />
                         </g>
                         <rect id="Rectangle 8" x="517" y="40" width="56" height="122" fill="#868686" />
                         <path id="Vector 1" d="M473.5 83.5L517.5 39.5V162.5H473.5V83.5Z" fill="#1F1F1F" stroke="black" />
                         <rect id="Rectangle 9" x="522" y="49" width="47" height="10" rx="5" fill="#C4C4C4" />
                         <rect id="Rectangle 10" x="522" y="89" width="15" height="3" rx="1.5" fill="#72AEBB" />
                         <rect id="Rectangle 11" x="522" y="98" width="15" height="3" rx="1.5" fill="#72AEBB" />
                         <rect id="Rectangle 12" x="522" y="107" width="15" height="3" rx="1.5" fill="#72AEBB" />
                         <rect id="Rectangle 13" x="522" y="119" width="15" height="3" rx="1.5" fill="#72AEBB" />
                         <rect id="Rectangle 14" x="522" y="131" width="15" height="3" rx="1.5" fill="#72AEBB" />
                         <rect id="Rectangle 15" x="522" y="143" width="15" height="3" rx="1.5" fill="#72AEBB" />
                         <path id="Ellipse 4" d="M506 116C506 120.841 504.962 125.175 503.333 128.261C501.68 131.393 499.569 133 497.5 133C495.431 133 493.32 131.393 491.667 128.261C490.038 125.175 489 120.841 489 116C489 111.159 490.038 106.825 491.667 103.739C493.32 100.607 495.431 99 497.5 99C499.569 99 501.68 100.607 503.333 103.739C504.962 106.825 506 111.159 506 116Z" fill="#2B2B2B" stroke="#4B93FF" stroke-width="2" />
                    </g>
                    <g id="uploading-arrow">
                         <path id="Arrow1" d="M249.414 102.414C250.195 101.633 250.195 100.367 249.414 99.5858L236.686 86.8579C235.905 86.0768 234.639 86.0768 233.858 86.8579C233.077 87.6389 233.077 88.9052 233.858 89.6863L245.172 101L233.858 112.314C233.077 113.095 233.077 114.361 233.858 115.142C234.639 115.923 235.905 115.923 236.686 115.142L249.414 102.414ZM198 103H248V99H198V103Z" fill="#4F4F4F" />
                         <path id="Arrow2" d="M433.414 102.414C434.195 101.633 434.195 100.367 433.414 99.5858L420.686 86.8579C419.905 86.0768 418.639 86.0768 417.858 86.8579C417.077 87.6389 417.077 88.9052 417.858 89.6863L429.172 101L417.858 112.314C417.077 113.095 417.077 114.361 417.858 115.142C418.639 115.923 419.905 115.923 420.686 115.142L433.414 102.414ZM382 103H432V99H382V103Z" fill="#4F4F4F" />
                    </g>
                    <path id="uploading" fill-rule="evenodd" clip-rule="evenodd" d="M347 101C347 121.435 330.435 138 310 138C289.565 138 273 121.435 273 101C273 89.3585 278.376 78.9726 286.782 72.1901C282.304 70.4097 279.461 68.1303 279.051 65.6273C269.213 74.2422 263 86.8955 263 101C263 126.957 284.043 148 310 148C335.957 148 357 126.957 357 101C357 87.6344 351.421 75.5719 342.465 67.0141C341.284 69.2086 338.207 71.1746 333.841 72.704C341.888 79.4912 347 89.6486 347 101ZM307.521 54.0643C308.474 54.0288 309.439 54.0078 310.415 54.0018C310.277 54.0006 310.139 54 310 54C309.168 54 308.342 54.0216 307.521 54.0643Z" fill="white" />
                    <defs>
                         <filter id="filter0_d" x="36" y="26" width="158" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                         </filter>
                    </defs>
               </svg>
     
     </div> `;
     var sId = document.getElementById('socketId').value;

     document.getElementById(`chatBox-${sId}`).appendChild(div);
     $("#message-box").animate({
          scrollTop: chatBox.scrollHeight
     }, 10);
     const imageMsg = document.getElementById('msgWithImg').value;
     const imageContainner = document.getElementById('chooseImage');
     if (!imageContainner.files.length) {
          return;
     }
     var firstFile = imageContainner.files[0];
     const getimageDate = new Date();
     const imageDate = getimageDate.getHours() + getimageDate.getSeconds();
     var firstFileName = `${imageDate + firstFile.name} `;
     reader = new FileReader();
     reader.onload = function (evt) {
          socket.emit('sendImage', {
               name: firstFileName,
               data: evt.target.result,
               username: username,
               profilePic: profilePic,
               msg: imageMsg,
               uploadBoxId: div.id,
               sId: sId


          });
     };
     reader.readAsDataURL(firstFile);
     document.getElementById('confirmUpload').style.height = '0px';
     setTimeout(() => {
          document.getElementById('imageName').innerHTML = ` `;
          document.getElementById('confirmUpload').style.display = 'none';
          document.getElementById('chooseImage').value = "";
          document.getElementById('msgWithImg').value = "";


     }, 300);

     // if (
     //      chatBox.scrollHeight - chatBox.scrollTop > chatBox.clientHeight - 90 &&
     //      chatBox.scrollHeight - chatBox.scrollTop <= chatBox.clientHeight + 90
     // ) {


     // } else {
     //      document.getElementById("messageSound").play();

     // }


});
socket.on('image-uploaded', async ({ name, username, profilePic, msg, uploadBoxId, sId, sId2 }) => {

     // ============================================================================

     var sIdDiv = document.getElementById(`chatBox-${sId}`);
     var sId2Div = document.getElementById(`chatBox-${sId2}`);

     //If it isn't "undefined" and it isn't "null", then it exists.
     if (typeof (sIdDiv) != 'undefined' && sIdDiv != null) {
          const chatBoxId = `chatBox-${sId}`;
          if (
               sIdDiv.scrollHeight - sIdDiv.scrollTop > sIdDiv.clientHeight - 5 &&
               sIdDiv.scrollHeight - sIdDiv.scrollTop <= sIdDiv.clientHeight + 5
          ) {
               if (document.visibilityState == "visible") {
                    sendImageMessage({ name, username, profilePic, msg, uploadBoxId, chatBoxId });
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sIdDiv.scrollHeight
                    }, 500);
                    document.title = 'KuraSu';
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';


               } else {
                    await sendImageMessage({ name, username, profilePic, msg, uploadBoxId, chatBoxId });
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sIdDiv.scrollHeight
                    }, 500);
                    document.getElementById("messageSound").play();
                    document.title = `(🔴)KuraSu`;
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';


               }
          } else {
               await sendImageMessage({ name, username, profilePic, msg, uploadBoxId, chatBoxId });
               // document.getElementById("newMessage").style.display = "block";
               document.getElementById("messageSound").play();
               document.title = `(🔴)KuraSu`;
               typingUsers.length = 0;
               document.querySelector('.roomListLink').innerHTML = ' Menu';


          }
     } else if (typeof (sId2Div) != 'undefined' && sId2Div != null) {
          const chatBoxId = `chatBox-${sId2}`;
          if (
               sId2Div.scrollHeight - sId2Div.scrollTop > sId2Div.clientHeight - 5 &&
               sId2Div.scrollHeight - sId2Div.scrollTop <= sId2Div.clientHeight + 5
          ) {
               if (document.visibilityState == "visible") {
                    await sendImageMessage({ name, username, profilePic, msg, uploadBoxId, chatBoxId });
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sId2Div.scrollHeight
                    }, 500);
                    document.title = 'KuraSu';
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';

               } else {
                    await sendImageMessage({ name, username, profilePic, msg, uploadBoxId, chatBoxId });
                    $(`#${chatBoxId}`).animate({
                         scrollTop: sId2Div.scrollHeight
                    }, 500);
                    document.getElementById("messageSound").play();
                    document.title = `(🔴)KuraSu`;
                    typingUsers.length = 0;
                    document.querySelector('.roomListLink').innerHTML = ' Menu';

               }
          } else {
               await sendImageMessage({ name, username, profilePic, msg, uploadBoxId, chatBoxId })               // document.getElementById("newMessage").style.display = "block";
               document.getElementById("messageSound").play();
               document.title = `(🔴)KuraSu`;
               typingUsers.length = 0;
               document.querySelector('.roomListLink').innerHTML = ' Menu';


          }
     } else {
          let currentChat = '';
          var x = document.querySelectorAll(".message-box");
          var i;
          for (i = 0; i < x.length; i++) {
               if (x[i].style.display !== 'none') {
                    currentChat = x[i].id;
               }
          }
          await dmClick(`${sId2}`, `${profilePic}`, `${username}`);
          const chatBoxId = `chatBox-${sId2}`;
          await sendImageMessage({ name, username, profilePic, msg, uploadBoxId, chatBoxId })               // document.getElementById("newMessage").style.display = "block";
          topNotify(`${profilePic}`, `${username}`, `An image...`);

          document.getElementById(chatBoxId).style.display = 'none';
          document.getElementById(currentChat).style.display = 'block';
          document.querySelector('.roomListLink').innerHTML = ' Menu<font color="red">(New)</font>';
          document.getElementById("messageSound").play();
          document.title = `(🔴)KuraSu`;


     }

});

function sendImageMessage({ name, username, profilePic, msg, uploadBoxId, chatBoxId }) {
     let imagesrc = `${name}`;
     const getUploadPlaceholder = document.getElementById(uploadBoxId);
     if (getUploadPlaceholder) {
          getUploadPlaceholder.remove();
     }
     let messageBackground = 'transparent';
     let messageBorder = 'none'
     var emoji_regex = /^(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])$/;
     const emo_test = str => emoji_regex.test(str);
     let fontSize = ''
     if (emo_test(msg) == true) {
          fontSize = '7';

     } else {
          fontSize = '3'
     }
     const splitMessage = msg.split(" ");
     const lowercaseMessage = splitMessage.toString().toLowerCase();
     let lowercaseUsername = username.toLowerCase();
     if (splitMessage.includes(`@${username} `) || lowercaseMessage.includes(`@${lowercaseUsername} `)) {
          let mentionUsername = `@${username} `;
          mentionUsername.fontcolor('red');
          msg.replace(`@${username} `, mentionUsername);
          console.log('mentioned user!');
          document.getElementById("messageSound").play();
          messageBackground = 'rgba(0,0,0,0.3)';
          messageBorder = 'solid';
     }

     const div = document.createElement("div");
     div.classList.add("messages");
     div.innerHTML = `<div style="display:inline;">
                    
                    <img src="${profilePic}" height="40px" width="40px"></div>
                    <div style="width: 100%; word-break: break-word;border-radius:4px; border-right-style:${messageBorder}; background-color:${messageBackground};">
                    <b style="color:#11E188">${username}</b>
                    <b style="color:#BDBBBB; font-size:12px;">${currentTime()}</b>
                    <br><font size="${fontSize}">${msg}</font>
                    <br>
                    <img onclick="getBigImage('${name}')" src="${imagesrc}" style="cursor: pointer;max-height:200px; max-width:90%; border-radius: 0px;">
                    </div>
                    
                    `;
     document.getElementById(chatBoxId).appendChild(div);
}
function getBigImage(src) {
     document.getElementById("showBigImage").style.width = '100%';

     const div = document.createElement('div');
     div.innerHTML = `
     <img src="${src}" style="max-width:100%; max-height:100vh;cursor: pointer;">
                                   `;
     document.querySelector(".showBigImage").appendChild(div);
}
function hideBigImage() {
     document.getElementById("showBigImage").style.width = '0px';
     document.getElementById("showBigImage").innerHTML = '';
}
//check notify
function checkNotify(chatBoxId, pfp, username, message) {
     if (chatBoxId !== 'chatBox-global' && document.getElementById(chatBoxId).style.display !== 'block') {
          topNotify(pfp, username, message);
     } else {
          return;
     }
}
//top notify
function topNotify(pfp, username, message) {
     document.getElementById('topNotify-pfp').src = `${pfp}`;
     document.getElementById('topNotify-username').innerHTML = `${username}`;
     document.getElementById('topNotify-message').innerHTML = `${message}`;
     anime({
          targets: '.topNotify',
          top: '0px',

     });

     setTimeout(() => {
          anime({
               targets: '.topNotify',
               top: '-50px',
               easing: 'easeInOutSine',
               duration: 300,

          });
     }, 5000);
}

//themes socket send
document.getElementById('darkTheme').addEventListener('click', () => {
     socket.emit('setTheme', {
          theme: 'DarkMode',
          userId: userId,
     });
});
document.getElementById('whiteTheme').addEventListener('click', () => {
     socket.emit('setTheme', {
          theme: 'LightMode',
          userId: userId,
     });
});