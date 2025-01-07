
const portal = 'https://portal.kaist.ac.kr/kaist/portal/board/ntc/';

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(portal)) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['scripts/content.js']
        });
    }
});
