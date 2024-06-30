import { listMetaTagDefault } from "./src/services/constant";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s",
      meta: listMetaTagDefault,
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo.png",
        },
        {
          rel: "shortcut icon",
          type: "image/png",
          href: "/images/logo.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/arial-2?styles=98401",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/justifiedGallery@3.8.1/dist/css/justifiedGallery.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
          tagPosition: "head",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/justifiedGallery@3.8.1/dist/js/jquery.justifiedGallery.min.js",
          tagPosition: "bodyClose",
        },
      ],
    },
  },
  robots: {
    // disallow: ["/vnpayment"],
    disallow: [],
  },
  experimental: {
    inlineRouteRules: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: "~/src/components",
      pathPrefix: false,
    },
  ],
  dir: {
    layouts: "src/layouts",
    pages: "src/pages",
    middleware: "src/middleware",
    modules: "src/modules",
  },
  modules: [
    "@nuxtjs/seo",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vee-validate/nuxt",
    "nuxt-simple-robots",
    "vue3-carousel-nuxt",
    "vue3-carousel-nuxt",
    "@element-plus/nuxt",
  ],
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VForm",
      Field: "VField",
      FieldArray: "VFieldArray",
      ErrorMessage: "VErrorMessage",
    },
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1600,
      target: "es2015",
    },
  },
  css: ["@/assets/scss/main.scss"],
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_END_POINT || "",
    },
  },
});
