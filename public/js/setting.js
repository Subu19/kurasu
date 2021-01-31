
function openSettings() {
    document.getElementsByClassName('settings')[0].classList.add('toggleSetting');
    const placeholder = document.getElementsByClassName('profileSetting')[0];
    showProfileSetting();
}
function closeSettings() {
    document.getElementsByClassName('settings')[0].classList.remove('toggleSetting');
}

function chooseNewProfilePicture() {
    document.getElementById("chooseImage").click();
}
document.getElementById("chooseImage").addEventListener("change", () => {
    let imgInput = document.getElementById("chooseImage");
    var reader = new FileReader();
    reader.onload = function (e) {
        $('#profilePic2').attr('src', e.target.result);
        // $('#profilePic').attr('value', e.target.result);
    }
    reader.readAsDataURL(imgInput.files[0]);
});

async function showProfileSetting() {
    await removeSelection();
    const currentSetting = document.getElementsByClassName('profileSetting')[0];
    currentSetting.classList.add('settingSelected');
    document.getElementsByClassName('themeContent')[0].style.display = 'none';
    document.getElementsByClassName('settProfile')[0].style.display = 'flex';
}


async function showThemeSetting() {
    await removeSelection();
    document.getElementsByClassName('settProfile')[0].style.display = 'none';
    document.getElementsByClassName('themeContent')[0].style.display = 'block';
    document.getElementsByClassName('themeSetting')[0].classList.add('settingSelected');
}
function removeSelection() {
    const settings = document.getElementsByClassName('setting');
    for (let i = 0; i < settings.length; i++) {
        const element = settings[i];
        element.classList.remove('settingSelected');

    }
}