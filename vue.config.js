const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Murilo Pereira";
      return args;
    });
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_variables.scss"
        `,
      },
    },
  },
});
