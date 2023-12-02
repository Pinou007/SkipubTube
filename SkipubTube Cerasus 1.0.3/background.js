
//    _____ _    _             _   _____     _              _____                              
//   /  ___| |  (_)           | | |_   _|   | |            /  __ \                             
//   \ `--.| | ___ _ __  _   _| |__ | |_   _| |__   ___    | /  \/ ___ _ __ __ _ ___ _   _ ___ 
//    `--. \ |/ / | '_ \| | | | '_ \| | | | | '_ \ / _ \   | |    / _ \ '__/ _` / __| | | / __|
//   /\__/ /   <| | |_) | |_| | |_) | | |_| | |_) |  __/   | \__/\  __/ | | (_| \__ \ |_| \__ \
//   \____/|_|\_\_| .__/ \__,_|_.__/\_/\__,_|_.__/ \___|    \____/\___|_|  \__,_|___/\__,_|___/
//                | |    By Pinou007                                                                  
//                |_|    github.com/Pinou007/SkipubTube-extension                                                          
//


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
