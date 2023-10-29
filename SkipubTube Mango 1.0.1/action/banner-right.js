                                                 
//    _____ _    _             _   _____     _             ___  ___                        
//   /  ___| |  (_)           | | |_   _|   | |            |  \/  |                        
//   \ `--.| | ___ _ __  _   _| |__ | |_   _| |__   ___    | .  . | __ _ _ __   __ _  ___  
//    `--. \ |/ / | '_ \| | | | '_ \| | | | | '_ \ / _ \   | |\/| |/ _` | '_ \ / _` |/ _ \ 
//   /\__/ /   <| | |_) | |_| | |_) | | |_| | |_) |  __/   | |  | | (_| | | | | (_| | (_) |
//   \____/|_|\_\_| .__/ \__,_|_.__/\_/\__,_|_.__/ \___|   \_|  |_/\__,_|_| |_|\__, |\___/ 
//                | |    By Pinou007                                            __/ |      
//                |_|    github.com/Pinou007/SkipubTube-extension              |___/       
//


let maxAttemptsCount = 0;

function supprimerElements() {
    console.log("Début de la suppression des éléments...");

    const elementsASupprimer = document.querySelectorAll(".masthead-ad, .action-companion-click-target, .ytd-ad-slot-renderer, .ytd-action-companion-ad-renderer");

    elementsASupprimer.forEach((element) => {
        element.remove();
    });

    console.log("Suppression des éléments terminée.");

    setTimeout(supprimerElements, 500);

    maxAttemptsCount++;
}

function initExtension() {
    console.log("Extension activée.");

    supprimerElements();
}

window.addEventListener("load", initExtension);
