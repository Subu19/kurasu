
const onlineUsers = [];


function userJoin(id, username, profilePic) {
     const user = { id, username, profilePic };
     onlineUsers.push(user);
     return user;
}

//get user

function getCurrentUser(id) {
     return onlineUsers.fine((user) => user.id === id);
}

//user leave
function userLeave(id) {
     const index = onlineUsers.findIndex((user) => user.id === id);
     if (index !== -1) {
          return onlineUsers.splice(index, 1)[0];
     };
}

//get all users
function getOnlineUsers() {
     //  const allUsers = [...users];
     return onlineUsers;
}

module.exports = {
     getCurrentUser,
     userLeave,
     getOnlineUsers,
     userJoin
};
