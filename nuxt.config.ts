import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ["vuetify"],
  },
  css: ["@/assets/scss/global.scss"],
  modules: [
    "@nuxtjs/eslint-module",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
    server: {
      fs: {
        strict: false,
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
