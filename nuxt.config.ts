// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: "https://awards.infcdn.net/2024/circle_v3.css",
          rel: "stylesheet",
        },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
      meta: [
        {
          name: "yandex-verification",
          content: "7abb6cf63906c8d6",
        },
      ],
      script: [
        {
          src: "https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU",
          async: true,
          defer: true,
        },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@vueuse/motion/nuxt"],
  plugins: [
    { src: "src/shared/plugins/kinesis.js", mode: "client" },
    { src: "src/shared/plugins/mask.js", mode: "client" },
  ],
  devtools: { enabled: true },

  alias: {
    "@": "/src",
  },

  compatibilityDate: "2025-03-25",
});
