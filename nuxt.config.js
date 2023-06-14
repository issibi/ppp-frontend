export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "PPP - home",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "PPP ist eine Kooperation der unabhängigen Kanzleien Polak & Partner sowie Preslmayr Rechtsanwälte. ",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/assets/fonts/fonts.css" },
      { rel: "stylesheet", type: "text/css", href: "/assets/css/styles.css" },
    ],
    script: [
      { type: "text/javascript", src: "/assets/js/setup.js", body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/i18n",
    // {
    //   locales: ["de", "en"],
    //   defaultLocale: "de",
    // },
  ],

  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    parsePages: false,
    pages: {
      "kanzlei/index": {
        de: "/kanzlei/:slug",
        en: "/law-firm/:slug",
      },
      "team/index": {
        de: "/team/:slug",
        en: "/team-en/:slug",
      },
      "rechtsgebiete/index": {
        de: "/rechtsgebiete/:slug",
        en: "/law-area/:slug",
      },
      "karriere/index": {
        de: "/karriere/:slug",
        en: "/career/:slug",
      },
      "news/index": {
        de: "/news",
        en: "/news",
      },
      kontakt: {
        de: "/kontakt",
        en: "/contact",
      },
      impressum: {
        de: "/impressum",
        en: "/imprint",
      },
      agb: {
        de: "/agb",
        en: "/t-and-c",
      },
      datenschutzerklaerung: {
        de: "/datenschutzrechtliche-aufkl-ae-rung",
        en: "/data-protection-clarification",
      },
    },
    vueI18n: {
      fallbackLocale: "de",
      messages: {
        de: {
          ppp: "Als Wirtschaftsanwälte haben wir vieles erreicht. Jetzt wollen wir weitergeben, was <br>uns erfolgreich gemacht hat.",
          kanzlei:
            "Wer wir sind, sieht man an denen, die <br />uns ihr Vertrauen schenken über viele Jahre<br />und Jahrzehnte.",
          team: "Es teamworkt. Horizontal wie vertikal: wir hieven einander höher. Die Gedankenbälle fliegen wie beim Vierertischtennis.",
          rechtsgebiete:
            "Spezialistentum beginnt aus Zufall, wächst durch Erfahrung und endet in nicht immer nachvollziehbarer Begeisterung.",
          karriere:
            "Egal wo Sie „einmal hin wollen“ – wir <br />sind die Kaderschmiede für die Top- Wirtschaftsanwält*innen von Morgen.",
          kontakt: "KONTAKT",
          impressum: "IMPRESSUM",
          agb: "AGB",
          datenschutz: "DATENSCHUTZERKLÄRUNG",
          test: "test de",
        },
        en: {
          ppp: "As business lawyers, we have achieved a lot. Now we want to pass on what has made us successful.",
          kanzlei:
            "Who we are is seen in those who <br />give us their trust over many years<br />and decades.",
          team: "It's teamwork. Horizontally and vertically: we lift each other higher. The thought balls fly like in four-person table tennis.",
          rechtsgebiete:
            "Specialism begins by accident, grows through experience, and ends in enthusiasm that is not always comprehensible.",
          karriere:
            'No matter where you "want to go one day" - we <br />are the cadre school for the top business lawyers of tomorrow.',
          kontakt: "CONTACT",
          impressum: "IMPRINT",
          agb: "T&C",
          datenschutz: "PRIVACY POLICY",
          test: "test en",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    base: "/",
    routeNameSplitter: "/",
    linkActiveClass: "active",
    linkExactActiveClass: "active",
  },
};
