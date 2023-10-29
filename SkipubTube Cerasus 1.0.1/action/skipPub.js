
//    _____ _    _             _   _____     _              _____                              
//   /  ___| |  (_)           | | |_   _|   | |            /  __ \                             
//   \ `--.| | ___ _ __  _   _| |__ | |_   _| |__   ___    | /  \/ ___ _ __ __ _ ___ _   _ ___ 
//    `--. \ |/ / | '_ \| | | | '_ \| | | | | '_ \ / _ \   | |    / _ \ '__/ _` / __| | | / __|
//   /\__/ /   <| | |_) | |_| | |_) | | |_| | |_) |  __/   | \__/\  __/ | | (_| \__ \ |_| \__ \
//   \____/|_|\_\_| .__/ \__,_|_.__/\_/\__,_|_.__/ \___|    \____/\___|_|  \__,_|___/\__,_|___/
//                | |    By Pinou007                                                                  
//                |_|    github.com/Pinou007/SkipubTube-extension                                                          
//


let attempts = 0;
const maxAttempts = 10; 

function clickSkipButton() {
    const skipButton = document.querySelector('.ytp-ad-skip-button-container');

    if (skipButton) {
        skipButton.click();
        console.log('Cliqué sur le bouton "Passer la pub".');
    } else {
        attempts++;
        console.log('Bouton "Passer la pub" introuvable, tentative n°' + attempts);

        if (attempts < maxAttempts) {
            setTimeout(clickSkipButton, 2000);
        } else {
            console.log('Arrêt des tentatives, le bouton "Passer la pub" est introuvable.');
        }
    }
}

setInterval(clickSkipButton, 1000);
