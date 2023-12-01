import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ["vuetify"],
  },
  css: ["@/assets/scss/global.scss"],
  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
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
