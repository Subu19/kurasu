const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const multer = require("multer");
const fs = require("fs");
const app = express();
const session = require("express-session");
const server = http.createServer(app);
const path = require("path");
const mongoose = require('mongoose');

const connection = require('./utils/connection.js');

const userModel = mongoose.model('User');


const { formatMessages, formatYTMessages, formatTyping, formatLinkMessages } = require("./utils/messages.js");
const { checkYoutubeLink, getMeta } = require("./utils/manageUrl.js");
const { getCurrentUser, getOnlineUsers, userLeave, userJoin } = require("./utils/users.js");
const { Mongoose } = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));

// const userControl = require('./utils/users');

// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb' }));
const upload = multer({ dest: "public/ProfilePic" });
app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     next();
});

app.use(
     session({
          name: "sid",
          resave: false,
          saveUninitialized: false,
          secret: "craftnepal",
          cookie: {
               maxAge: 86400000,
               sameSite: true,
               secure: false,
          },
     })
);

const redirectNonregisterd = (req, res, next) => {
     if (!req.session.userId) {
          res.redirect("/login");
     } else {
          next();
     }
};
//static folder
app.use(express.static(path.join(__dirname, "public")));
//socket
const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.set("views", "htmlfiles");
app.get("/", (req, res, next) => {
     if (!req.session.userId) {
          res.redirect("/login");
     } else {
          res.redirect("/themes");
     }
});
app.get("/home", (req, res, next) => {
     res.render("home");
});
app.get("/downloadexe", (req, res, next) => {
     const exeFile = `${__dirname}/public/KuraKani.exe`;

     res.download(exeFile);
     // res.redirect('/home');
});

app.get("/register", (req, res, next) => {
     res.render('form', {
          alert: ''
     });
});
app.get("/login", (req, res, next) => {
     res.render('form', {
          alert: false
     });
});
app.post("/login", upload.single("avatar"), (req, res, next) => {

     let imageUrl = '';
     if (!req.file) {
          imageUrl = 'default';
     } else {

          imageUrl = req.file.filename;
     }
     const username = req.body.username;
     const email = req.body.email;
     const password = req.body.password;
     const usersData = fs.readFileSync("users.json");
     // let users = JSON.parse(usersData);

     userModel.findOne({ username: username }, (err, objectFound) => {
          if (err) {
               // userModel.findOne({ email: email }, (err, objectFound) => {
               //      if (err) {
               //           //register new user

               //           let generateId = Date.now() + Math.floor(Math.random() * 1000);
               //           let newUserId = generateId.toString();
               //           bcrypt.hash(password, saltRounds, function (err, hash) {

               //                const addUser = new userModel();
               //                addUser.id = newUserId;
               //                addUser.username = username;
               //                addUser.email = email;
               //                addUser.password = hash;
               //                addUser.imageUrl = imageUrl;
               //                addUser.save().then(() => {
               //                     console.log(`${username} just registered!`);
               //                     res.redirect('/login');
               //                });

               //           });
               //      } else if (!objectFound) {
               //           res.redirect('/');
               //           console.log('nothing! found!!!');
               //      } else {
               //           res.render('form', {
               //                alert: 'Email already exists.'
               //           });
               //      }
               // });
               console.log(err);
          } else if (!objectFound) {
               userModel.findOne({ email: email }, (err, objectFound) => {
                    if (err) {
                         //register new user

                         // let generateId = Date.now() + Math.floor(Math.random() * 1000);
                         // let newUserId = generateId.toString();
                         // bcrypt.hash(password, saltRounds, function (err, hash) {

                         //      const addUser = new userModel();
                         //      addUser.id = newUserId;
                         //      addUser.username = username;
                         //      addUser.email = email;
                         //      addUser.password = hash;
                         //      addUser.imageUrl = imageUrl;
                         //      addUser.save().then(() => {
                         //           console.log(`${username} just registered!`);
                         //           res.redirect('/login');
                         //      });

                         // });
                         console.log(err);
                    } else if (!objectFound) {
                         console.log('nothing! found!!!');
                         let generateId = Date.now() + Math.floor(Math.random() * 1000);
                         let newUserId = generateId.toString();
                         bcrypt.hash(password, saltRounds, function (err, hash) {

                              const addUser = new userModel();
                              addUser.id = newUserId;
                              addUser.username = username;
                              addUser.email = email;
                              addUser.password = hash;
                              addUser.imageUrl = imageUrl;
                              addUser.theme = 'LightMode';
                              addUser.save().then(() => {
                                   console.log(`${username} just registered!`);
                                   res.redirect('/login');
                              });

                         });
                    } else {
                         res.render('form', {
                              alert: 'Email already exists.'
                         });
                    }
               });

          } else {
               res.render('form', {
                    alert: 'Username already exists.'
               });
          }
     });
     // if (
     //      userModel.find((user) => user.email === email) &&
     //      userModel.find((user) => user.username === username)
     // ) {
     //      res.render('form', {
     //           alert: 'User already exists.'
     //      });
     // } else {
     //      let generateId = Date.now() + Math.floor(Math.random() * 1000);
     //      let newUserId = generateId.toString();
     //      bcrypt.hash(password, saltRounds, function (err, hash) {
     //           // const newUser = {
     //           //      id: newUserId,
     //           //      username: username,
     //           //      email: email,
     //           //      password: hash,
     //           //      imageUrl: imageUrl,
     //           // };
     //           const addUser = new userModel();
     //           addUser.id = newUserId;
     //           addUser.username = username;
     //           addUser.email = email;
     //           addUser.password = hash;
     //           addUser.imageUrl = imageUrl;
     //           addUser.save();

     //           console.log(`${username} just registered!`);
     //           // users.push(newUser);
     //           // const stringifiedUsers = JSON.stringify(users);
     //           fs.writeFile("users.json", stringifiedUsers, (next) => {
     //                res.redirect("/login");
     //           });
     //      });
     // }
});

app.post("/loggingIn", (req, res, next) => {
     const username = req.body.username;
     const password = req.body.password;
     // const usersData = fs.readFileSync("users.json");
     // let users = JSON.parse(usersData);
     // let getuser = users.find((user) => user.username === username);
     userModel.findOne({ username: username }, (err, objectFound) => {
          if (err) {
               // res.render('form', {
               //      alert: 'User not found'
               // });
               console.log('something went wrong!');
          } else if (!objectFound) {
               res.render('form', {
                    alert: 'User not found'
               });
          } else {
               //check password
               bcrypt.compare(password, objectFound.password, function (err, result) {
                    if (result == true) {
                         req.session.userId = objectFound.id;
                         console.log(`${objectFound.username} just logged in!`);
                         res.redirect("/chat/KaKT");
                    } else {
                         res.render('form', {
                              alert: 'Wrong Password!'
                         });

                    }
               });
          }
     });

     // if (!getuser) {
     //      res.render('form', {
     //           alert: 'User not found'
     //      });
     // } else {
     //      bcrypt.compare(password, getuser.password, function (err, result) {
     //           if (result == true && users.find((user) => user.username === username)) {
     //                const user = users.find((user) => user.username === username);
     //                req.session.userId = user.id;
     //                console.log(`${user.username} just logged in!`);
     //                res.redirect("/chat/KaKT");
     //           } else {
     //                res.redirect("/login");
     //           }
     //      });
     // }
});
app.get("/", (req, res, next) => {
     if (!req.session.userId) {
          res.render("login");
     } else {
          res.redirect("/themes");
     }
});

app.get("/themes", redirectNonregisterd, (req, res, next) => {
     res.render("themeChoose");
});
app.get('/chat/:themeID', redirectNonregisterd, (req, res, next) => {
     if (req.params.themeID === "KaKT") {
          // const usersData = fs.readFileSync("users.json");
          // let users = JSON.parse(usersData);
          // const user = users.find((user) => user.id === req.session.userId);
          userModel.findOne({ id: req.session.userId }, (err, objectFound) => {
               if (err) {
                    console.log('cant let user login into chat');

               } else {
                    res.render("original-theme-index", {
                         userId: req.session.userId,
                         User: objectFound.username,
                         imageUrl: objectFound.imageUrl,
                         clientTheme: objectFound.theme,
                    });
               }

          })
          // res.render("original-theme-index", {
          //      userId: req.session.userId,
          //      User: user.username,
          //      imageUrl: user.imageUrl,
          // });
     } else if (req.params.themeID === "DcDT") {
          const usersData = fs.readFileSync("users.json");
          let users = JSON.parse(usersData);
          const user = users.find((user) => user.id === req.session.userId);
          res.render("index", {
               userId: req.session.userId,
               User: user.username,
               imageUrl: user.imageUrl,
          });
     } else {
          res.redirect("/themes");
     }
});

// app.get('/chat/dm/:id', redirectNonregisterd, (req, res, next) => {
//      const getSocketId = res.params.id;
//      const usersData = fs.readFileSync("users.json");
//      let users = JSON.parse(usersData);
//      const user = users.find((user) => user.id === req.session.userId);
//      res.render("dm", {
//           User: user.username,
//           imageUrl: user.imageUrl,
//           socketId: getSocketId
//      });
// });
app.get("/logout", redirectNonregisterd, (req, res, next) => {
     req.session.destroy(function (err) {
          // cannot access session here
          res.redirect("/login");
     });
});

app.get("/flappybird", (req, res, next) => {
     res.render("flappy");
});
app.get("/rocket", (req, res, next) => {
     res.render("rocket");
});
// app.get('/chat/:username', (req,res,next)=>{
//     res.render('index',{
//         User: req.params.username
//     });
// });

// const testArray = [ { id: 'HJsnru9c4F6fRntgAAAC', username: 'SUBU' }, { id: 'e8QzPcs4PZtZmd_3AAAD', username: 'Code' } ]
// console.log(testArray.map(user => user.username).join(" "));
//on user connect

io.on("connection", (socket) => {
     //join chat
     socket.on("joinChat", ({ userId, username, profilePic }) => {
          const onlineUserCheck = getOnlineUsers().find((user) => user.username === username);
          const botProfile =
               "https://www.vippng.com/png/full/242-2420933_discord-transparent-bot-profile-pictures-for-discord.png";
          if (!onlineUserCheck) {
               onlineUser = userJoin(socket.id, username, profilePic);

               socket.emit("message", formatMessages("BOT", `${botProfile}`, "Welcome to chat!"));
               socket.broadcast.emit(
                    "message",
                    formatMessages("BOT", `${botProfile}`, `${onlineUser.username} has joined.`)
               );
               io.emit("getAllUsers", {
                    users: getOnlineUsers(),
               });
          } else {
               console.log(`${username} joined from another device.`);
               io.emit("getAllUsers", {
                    users: getOnlineUsers(),
               });
          }

          socket.on("disconnect", () => {
               const onlineUser = userLeave(socket.id);
               if (onlineUser) {
                    io.emit(
                         "message",
                         formatMessages("BOT", `${botProfile}`, `${onlineUser.username} has left.`)
                    );
                    io.emit("getAllUsers", {
                         users: getOnlineUsers(),
                    });
               }
          });
     });

     socket.on("chatMessage", async ({ username, imageUrl, msg, sId }) => {
          if (sId === 'global') {
               const message = msg;
               const splittedMessage = msg.split(" ");
               const sentUrl = splittedMessage.filter(function (str) {
                    if (str.startsWith("https://")) {
                         return str;
                    } else {
                         return undefined;
                    }
               });
               if (sentUrl.length != 0) {
                    const url = sentUrl.toString();
                    const check = await checkYoutubeLink(url);
                    if (check == true) {
                         io.emit("youtubeEmbed", formatYTMessages(username, imageUrl, msg, sId, socket.id, url));
                    } else {
                         const meta = await getMeta(url);
                         console.log(meta);
                         io.emit("linkEmbed", formatLinkMessages(username, imageUrl, msg, sId, socket.id, url, meta));
                    }
               } else {
                    io.emit("chat", formatMessages(username, imageUrl, msg, sId, socket.id));
               }
          } else {
               const message = msg;
               const splittedMessage = msg.split(" ");
               const sentUrl = splittedMessage.filter(function (str) {
                    if (str.startsWith("https://")) {
                         return str;
                    } else {
                         return undefined;
                    }
               });


               if (sentUrl.length != 0) {
                    const url = sentUrl.toString();
                    const check = await checkYoutubeLink(url);
                    if (check == true) {
                         io.to(socket.id).emit("youtubeEmbed", formatYTMessages(username, imageUrl, msg, sId, socket.id, url));
                         io.to(sId).emit("youtubeEmbed", formatYTMessages(username, imageUrl, msg, sId, socket.id, url));
                    } else {
                         const meta = await getMeta(url);
                         console.log(meta);
                         io.to(socket.id).emit("linkEmbed", formatLinkMessages(username, imageUrl, msg, sId, socket.id, url, meta));
                         io.to(sId).emit("linkEmbed", formatLinkMessages(username, imageUrl, msg, sId, socket.id, url, meta));
                    }
               } else {
                    io.to(socket.id).emit("chat", formatMessages(username, imageUrl, msg, sId, socket.id));
                    io.to(sId).emit("chat", formatMessages(username, imageUrl, msg, sId, socket.id));

               }
          }

     });
     socket.on('setTheme', ({ theme, userId }) => {
          userModel.findOne({ id: userId }, (err, objectFound) => {
               if (err) {
                    console.log(err);
               } else if (!objectFound) {
                    console.log('cant find user!');
               } else {
                    objectFound.theme = theme;
                    objectFound.save();
               }

          })
     });
     socket.on("userTyping", ({ username, sId }) => {
          if (sId === 'global') {
               io.emit("typing", formatTyping(username, sId));
          } else {
               io.to(sId).emit("typing", formatTyping(username, socket.id));
          }
     });

     socket.on("sendImage", (imageData) => {
          // var writer = fs.createWriteStream(path.resolve(__dirname, './public/uploads/images/' + imageData.name), {
          //      encoding: 'base64'
          // });
          // writer.write(imageData.data);
          // writer.end();
          // writer.on('finish', function () {
          if (imageData.sId === 'global') {
               io.emit('image-uploaded', {
                    // name: '/uploads/images/' + imageData.name,
                    name: imageData.data,
                    username: imageData.username,
                    profilePic: imageData.profilePic,
                    msg: imageData.msg,
                    uploadBoxId: imageData.uploadBoxId,
                    sId: imageData.sId,
                    sId2: socket.id

               });
          } else {

               io.to(imageData.sId).emit('image-uploaded', {
                    name: imageData.data,
                    username: imageData.username,
                    profilePic: imageData.profilePic,
                    msg: imageData.msg,
                    uploadBoxId: imageData.uploadBoxId,
                    sId: imageData.sId,
                    sId2: socket.id

               });
               io.to(socket.id).emit('image-uploaded', {
                    name: imageData.data,
                    username: imageData.username,
                    profilePic: imageData.profilePic,
                    msg: imageData.msg,
                    uploadBoxId: imageData.uploadBoxId,
                    sId: imageData.sId,
                    sId2: socket.id

               });
          }
     });


});

// }
// );
server.listen(process.env.PORT || 3000);
