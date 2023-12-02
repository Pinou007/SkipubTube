                                                 
//    _____ _    _             _   _____     _             ___  ___                        
//   /  ___| |  (_)           | | |_   _|   | |            |  \/  |                        
//   \ `--.| | ___ _ __  _   _| |__ | |_   _| |__   ___    | .  . | __ _ _ __   __ _  ___  
//    `--. \ |/ / | '_ \| | | | '_ \| | | | | '_ \ / _ \   | |\/| |/ _` | '_ \ / _` |/ _ \ 
//   /\__/ /   <| | |_) | |_| | |_) | | |_| | |_) |  __/   | |  | | (_| | | | | (_| | (_) |
//   \____/|_|\_\_| .__/ \__,_|_.__/\_/\__,_|_.__/ \___|   \_|  |_/\__,_|_| |_|\__, |\___/ 
//                | |    By Pinou007                                            __/ |      
//                |_|    github.com/Pinou007/SkipubTube-extension              |___/       
//


let attempts = 0;
const maxAttempts = 10; 

function clickSkipButton() {
    const skipButton = document.querySelector('.ytp-ad-skip-button-container, .ytp-ad-skip-button-modern ytp-button');

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

setInterval(clickSkipButton, 500);
