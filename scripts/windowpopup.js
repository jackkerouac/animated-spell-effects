Hooks.once('ready', async function () {
    if (game.settings.get("animated-spell-effects","runonlyonce") == false) {
        let d = new Dialog({
            title: "Module Activated!",
            content: `<div style="text-align: justify;"><h2>Jack Kerouac's Animated Spell Effects - Cartoon</h2><p>Cartoony animated effects for spells for use with various VTT's in the top-down/overhead perspective. All files are in transparent webm format. If you like my work, consider saying thanks on Discord: jackkerouac#0624.</p><hr><p>No Patreon.</p><p>No fees or subscriptions.</p><p> Just free. Always.</p><hr><div style="font-style:italic;">You can deactivate this annoying pop-up by clicking the <strong>Don't Show Again button</strong>!</div></p></div>`,
            buttons: {
                one: {
                    icon: '<i class="fas fa-clipboard-list"></i>',
                    label: "OK",                    
                },
                two: {
                    icon: '<i class="fas fa-clipboard-check"></i>',
                    label: "Don't show again",
                    callback: () => game.settings.set("animated-spell-effects", "runonlyonce", true)                     
                },               
            },
                  
        });
        d.render(true);
    }
})