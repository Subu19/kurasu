const request = require("request");
const base64Credentials = Buffer.from("subuacharya19@gmail.com:l7bBwauVcGICbdZHp9B5").toString(
     "base64"
);

let meta;
// function callback(error, response, body) {
//      if (!error && response.statusCode === 200) {
//           let data = JSON.parse(body);

//           if (data.result.status == "OK") {
//                meta = {
//                     desc: data.meta.description,
//                     image: data.meta.image,
//                     title: data.meta.title,
//                };
//           } else {
//                meta = false;
//           }
//      } else {
//           meta = false;
//      }
// }

const checkYoutubeLink = (url) => {
    
     if (url.startsWith("https://www.youtube.com/watch")) {
          return true;
     } else if (url.startsWith("https://youtu.be")) {
          return true;
     }else{
          return false;
     }
};

const getMeta = (url) => {
     return new Promise((resolve, reject) => {
          const options = {
               url: `https://api.urlmeta.org/?url=${url}`,
               headers: {
                    Authorization: "Basic " + base64Credentials,
               },
          };

          request(options, (error, response, body) => {
               if (!error && response.statusCode === 200) {
                    let data = JSON.parse(body);

                    if (data.result.status == "OK") {
                         meta = {
                              desc: data.meta.description,
                              image: data.meta.image,
                              title: data.meta.title,
                         };
                         resolve(meta);
                    } else {
                         meta = false;
                    }
               } else {
                    meta = false;
               }
          });
     });
};
module.exports = {
     checkYoutubeLink,
     getMeta,
};
