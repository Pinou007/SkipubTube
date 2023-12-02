                                                 
//    _____ _    _             _   _____     _             ___  ___                        
//   /  ___| |  (_)           | | |_   _|   | |            |  \/  |                        
//   \ `--.| | ___ _ __  _   _| |__ | |_   _| |__   ___    | .  . | __ _ _ __   __ _  ___  
//    `--. \ |/ / | '_ \| | | | '_ \| | | | | '_ \ / _ \   | |\/| |/ _` | '_ \ / _` |/ _ \ 
//   /\__/ /   <| | |_) | |_| | |_) | | |_| | |_) |  __/   | |  | | (_| | | | | (_| | (_) |
//   \____/|_|\_\_| .__/ \__,_|_.__/\_/\__,_|_.__/ \___|   \_|  |_/\__,_|_| |_|\__, |\___/ 
//                | |    By Pinou007                                            __/ |      
//                |_|    github.com/Pinou007/SkipubTube-extension              |___/       
//

// ---------------------------------------------------------------------------------- //
// Cette pages pas utiliser car les serive de fond ne fonctione pas sur FireFox       //
// Il est donc inutille de la modifiée elle sera probablement suprimée                //
//                                       Merci <3                                     //
// ---------------------------------------------------------------------------------- //


chrome.action.onClicked.addListener(function(tab) {
    var skipScriptDetails = {
        target: { tabId: tab.id },
        function: () => {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: async () => {
                    try {
                        const response = await fetch(chrome.runtime.getURL('action/skipPub.js'));
                        const scriptText = await response.text();
                        eval(scriptText);
                    } catch (error) {
                        console.error("Erreur lors de l'exécution de skipPub.js : " + error);
                    }
                }
            });
        }
    };

    var skipScriptDetails = {
        target: { tabId: tab.id },
        function: () => {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: async () => {
                    try {
                        const response = await fetch(chrome.runtime.getURL('action/banner-right.js'));
                        const scriptText = await response.text();
                        eval(scriptText);
                    } catch (error) {
                        console.error("Erreur lors de l'exécution de banner-right.js : " + error);
                    }
                }
            });
        }
    };


    var mastheadScriptDetails = {
        target: { tabId: tab.id },
        function: () => {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: async () => {
                    try {
                        const response = await fetch(chrome.runtime.getURL('action/masthead-ad.js'));
                        const scriptText = await response.text();
                        eval(scriptText);
                    } catch (error) {
                        console.error("Erreur lors de l'exécution de masthead-ad.js : " + error);
                    }
                }
            });
        }
    };


    chrome.scripting.executeScript(skipScriptDetails);


    chrome.scripting.executeScript(mastheadScriptDetails);
});
