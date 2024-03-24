console.log(browser.menus);

browser.menus.create({
    id: "Translate",
    title: "Translate",
    onclick: function(info, tab) {
        console.log(info.selectionText);
        browser.tabs.create({
            url: "https://translate.google.com/#view=home&op=translate&sl=auto&tl=fr&text=" + info.selectionText
        });
    },
    contexts: ["selection"]
});