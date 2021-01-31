const clientTheme = document.getElementById('clientTheme').value;
if (clientTheme === 'DarkMode') {
    DarkTheme();
} else if (clientTheme === 'LightMode') {
    LightTheme();
}

function toggleNightMode() {

    var x = document.querySelectorAll(".messageBox");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.toggle('night-theme-box');
    }
    // var messageBox = document.querySelectorAll('.message-box');
    // messageBox.classList.toggle('night-message-box');

    var onlineList = document.getElementById('sideMenu');
    onlineList.classList.toggle('night-theme-box');

    var InputBox = document.getElementById('inputBox');
    InputBox.classList.toggle('night-input-box');
    var InputContents = document.getElementById('addPhotoIcon');
    InputContents.classList.toggle('night-input-icons');

    var nav = document.querySelector('.nav');
    nav.classList.toggle('navNight');

    var userTypingToggle = document.getElementById('usersTyping');
    userTypingToggle.classList.toggle('userTypingNight');

    var inputTextBox = document.getElementById('msg');
    inputTextBox.classList.toggle('night-input-text');

    var onlineuserBox = document.querySelectorAll(".onlineUser");
    var y;
    for (y = 0; y < onlineuserBox.length; y++) {
        onlineuserBox[y].classList.toggle('night-online-user');
    }

    var roomList = document.getElementById('logoText');
    roomList.classList.toggle('logoTextNight');


};

const colorPicker = document.getElementsByClassName('colorPicker')[0];
colorPicker.addEventListener('change', (e) => {

    var RHex = e.target.value.match(/[A-Za-z0-9]{2}/g)[0];
    var GHex = e.target.value.match(/[A-Za-z0-9]{2}/g)[1];
    var BHex = e.target.value.match(/[A-Za-z0-9]{2}/g)[2];
    var Rcolor = parseInt(RHex, 16);
    var Gcolor = parseInt(GHex, 16);
    var Bcolor = parseInt(BHex, 16);
    // .map(function (v) { return parseInt(v, 16) }).join(",") + ")";

    var T_Nav = document.querySelector(".nav");
    // background-color: rgb(255, 255, 255);
    T_Nav.style.backgroundColor = `rgb(${Rcolor}, ${Gcolor}, ${Bcolor})`;
    T_Nav.style.borderColor = `${e.target.value}`;
    T_Nav.style.boxShadow = `black 0px 0px 10px`;

    var T_messageBox = document.querySelector(".messageBox");
    // background-color: rgba(255, 255, 255, 0.856);
    T_messageBox.style.backgroundColor = `rgba(${Rcolor}, ${Gcolor}, ${Bcolor}, 0.5)`;
    T_messageBox.style.borderColor = `${e.target.value}`;
    T_messageBox.style.boxShadow = `black 0px 0px 5px`;

    var T_inputBox = document.querySelector(".inputBox");
    // background-color: rgba(216, 216, 216,0.8);
    T_inputBox.style.backgroundColor = `rgba(${Rcolor}, ${Gcolor}, ${Bcolor}, 0.5)`;
    T_inputBox.style.borderColor = `${e.target.value}`;
    T_inputBox.style.boxShadow = `black 0px 0px 5px`;

    var T_sideMenu = document.querySelector(".sideMenu");
    // background-color: rgba(255, 255, 255,0.8);
    T_sideMenu.style.backgroundColor = `rgba(${Rcolor}, ${Gcolor}, ${Bcolor}, 0.8)`;
    T_sideMenu.style.borderColor = `${e.target.value}`;
    T_sideMenu.style.boxShadow = `black 0px 0px 5px`;

});

function textColorBlack() {
    var T_messageBox = document.querySelector(".messageBox");
    T_messageBox.style.color = 'black';
    var T_onlineUserList = document.getElementsByClassName('onlineList')[0];
    T_onlineUserList.style.color = 'black';
    var T_roomUserList = document.getElementsByClassName('roomList')[0];
    T_roomUserList.style.color = 'black';
    var T_icons = document.getElementsByClassName('icons')[0];
    T_icons.style.color = 'black';

}
function textColorWhite() {
    var T_messageBox = document.querySelector(".messageBox");
    T_messageBox.style.color = 'White';
    var T_onlineUserList = document.getElementsByClassName('onlineList')[0];
    T_onlineUserList.style.color = 'white';
    var T_roomUserList = document.getElementsByClassName('roomList')[0];
    T_roomUserList.style.color = 'white';
    var T_icons = document.getElementsByClassName('icons')[0];
    T_icons.style.color = 'white';
}

function DarkTheme() {
    var T_messageBox = document.querySelector(".messageBox");
    T_messageBox.style.backgroundColor = `rgba(0, 0, 0, 0.8)`;
    T_messageBox.style.borderColor = `black`;
    T_messageBox.style.boxShadow = `black 0px 0px 5px`;
    var T_Nav = document.querySelector(".nav");
    T_Nav.style.backgroundColor = `rgb(0, 0, 0)`;
    T_Nav.style.borderColor = `black`;
    T_Nav.style.boxShadow = `black 0px 0px 10px`;
    var T_inputBox = document.querySelector(".inputBox");
    T_inputBox.style.backgroundColor = `rgba(0, 0, 0, 0.6)`;
    T_inputBox.style.borderColor = `black`;
    T_inputBox.style.boxShadow = `black 0px 0px 5px`;

    var T_sideMenu = document.querySelector(".sideMenu");
    T_sideMenu.style.backgroundColor = `rgba(0, 0, 0, 0.8)`;
    T_sideMenu.style.borderColor = `black`;
    T_sideMenu.style.boxShadow = `black 0px 0px 5px`;
    var LogoText = document.getElementById('logoText');
    LogoText.classList.add('logoTextNight');
    var userTypingToggle = document.getElementById('usersTyping');
    userTypingToggle.classList.toggle('userTypingNight');
    var T_messageBox = document.querySelector(".messageBox");
    T_messageBox.style.color = 'White';
    var T_onlineUserList = document.getElementsByClassName('onlineList')[0];
    T_onlineUserList.style.color = 'white';
    var T_roomUserList = document.getElementsByClassName('roomList')[0];
    T_roomUserList.style.color = 'white';
    var T_icons = document.getElementsByClassName('icons')[0];
    T_icons.style.color = 'white';
}
function LightTheme() {
    var T_messageBox = document.querySelector(".messageBox");
    T_messageBox.style.backgroundColor = `rgba(255, 255, 255, 0.7)`;
    T_messageBox.style.borderColor = `white`;
    T_messageBox.style.boxShadow = ` rgb(223, 223, 223) 0px 0px 50px`;
    var T_Nav = document.querySelector(".nav");
    T_Nav.style.backgroundColor = `rgb(255, 255, 255)`;
    T_Nav.style.borderColor = `white`;
    T_Nav.style.boxShadow = `rgb(223, 223, 223) 0px 0px 50px;`;
    var T_inputBox = document.querySelector(".inputBox");
    T_inputBox.style.backgroundColor = `rgba(216, 216, 216,0.8)`;
    T_inputBox.style.borderColor = `white`;
    T_inputBox.style.boxShadow = ` rgb(175, 175, 175) 0px 0px 10px`;

    var T_sideMenu = document.querySelector(".sideMenu");
    T_sideMenu.style.backgroundColor = ` rgba(255, 255, 255,0.8)`;
    T_sideMenu.style.borderColor = `white`;
    T_sideMenu.style.boxShadow = `rgb(223, 223, 223) 0px 0px 50px`;
    var LogoText = document.getElementById('logoText');
    LogoText.classList.remove('logoTextNight');
    var userTypingToggle = document.getElementById('usersTyping');
    userTypingToggle.classList.remove('userTypingNight');
    var T_messageBox = document.querySelector(".messageBox");
    T_messageBox.style.color = 'black';
    var T_onlineUserList = document.getElementsByClassName('onlineList')[0];
    T_onlineUserList.style.color = 'black';
    var T_roomUserList = document.getElementsByClassName('roomList')[0];
    T_roomUserList.style.color = 'black';
    var T_icons = document.getElementsByClassName('icons')[0];
    T_icons.style.color = 'black';
}


