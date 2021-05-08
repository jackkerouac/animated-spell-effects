Hooks.on("init", () => {
    // Register a client setting
    game.settings.register("animated-spell-effects", "runonlyonce", { // game.setting.register("NameOfTheModule", "VariableName",
      name: "Jack Kerouac - Settings",                  // Register a module setting with checkbox
      hint: "Disable startup window popup",               // Description of the settings
      scope: "client",                                    // This specifies a client-stored setting
      config: true,                                       // This specifies that the setting appears in the configuration view
      type: Boolean, 
      default: false,                                     // The default value for the setting
    });
});