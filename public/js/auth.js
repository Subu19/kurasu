function onSignIn(googleUser) {
     var profile = googleUser.getBasicProfile();
     const name = profile.getName();
     const image = profile.getImageUrl();
     const form = document.getElementById("login-form");
    document.cookie = `username= ${name}`;
     form.innerHTML = `
    <input
    type="hidden"
    value="${name}"
    name="username"
    placeholder="Username"
    />

    <input 
    type="hidden"
    value="${image}"
    name="imageUrl"
    />
    `;

     // form.submit();

     console.log(name);
     var button = document.createElement("BUTTON");
     button.className = "button";
     button.innerHTML = "JOIN CHAT";
     form.appendChild(button);
     var logout = document.createElement("p");
     logout.innerHTML = `<a href="#" onclick="signOut();">Sign out</a>`;
     form.appendChild(logout);
}

function signOut() {
     var auth2 = gapi.auth2.getAuthInstance();
     auth2.signOut().then(function () {
          console.log("User signed out.");
     });
     location.reload();
}
