
//    _____ _    _             _   _____     _              _____                              
//   /  ___| |  (_)           | | |_   _|   | |            /  __ \                             
//   \ `--.| | ___ _ __  _   _| |__ | |_   _| |__   ___    | /  \/ ___ _ __ __ _ ___ _   _ ___ 
//    `--. \ |/ / | '_ \| | | | '_ \| | | | | '_ \ / _ \   | |    / _ \ '__/ _` / __| | | / __|
//   /\__/ /   <| | |_) | |_| | |_) | | |_| | |_) |  __/   | \__/\  __/ | | (_| \__ \ |_| \__ \
//   \____/|_|\_\_| .__/ \__,_|_.__/\_/\__,_|_.__/ \___|    \____/\___|_|  \__,_|___/\__,_|___/
//                | |    By Pinou007                                                                  
//                |_|    github.com/Pinou007/SkipubTube-extension                                                          
//


let maxAttemptsCount = 0;

function supprimerElements() {
    console.log("Début de la suppression des éléments...");

    const elementsASupprimer = document.querySelectorAll(".ytp-flyout-cta, .ytd-engagement-panel-title-header-renderer, .ytp-ad-player-overlay-flyout-cta ytp-ad-player-overlay-flyout-cta-rounded, .ytd-action-companion-ad-renderer, .ytd-text-image-no-button-layout-renderer, .ytp-ad-player-overlay-instream-info, .tp-yt-paper-dialog, .ytd-rich-section-renderer, .yt-mealbar-promo-renderer, .masthead-ad, .action-companion-click-target, .ytd-ad-slot-renderer, .ytd-action-companion-ad-renderer");

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
