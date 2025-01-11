
// Tem o URL do site 

const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: { 
        experimentalStudio:true,
        experimentalRunAllSpecs:true,
        video:true,
        setupNodeEvents(on, config) {
            // implement node events listeners here
        },
},

env:{
    url_leya: "https://www.leyaonline.com/pt/",
}
});
