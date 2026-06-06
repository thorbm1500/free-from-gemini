function processPage(element) {
    if (!!element) {
        element.remove();
        console.log('[FFG] Gemini removed :)');
    }
}

processPage(document.querySelector("#docs-sidekick-gen-ai-promo-button-container"));