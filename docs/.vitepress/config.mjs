import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cap",
  description: "A modern, lightning-quick PoW captcha",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/guide" },
      { text: "Dashboard", link: "/dashboard" },
    ],

    sidebar: [
      { text: "Get started", link: "/guide/index.md" },
      { text: "Effectiveness", link: "/guide/effectiveness.md"},
      { text: "Demo", link: "../demo/" },
      {
        text: "Modules",
        items: [
          { text: "Floating", link: "/guide/floating.md" },
          { text: "Interstitial", link: "/guide/interstitial.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/tiagorangel1/cap" },
    ],
    search: {
      provider: "local",
    },

    footer: {
      message: "Released under the AGPLv3 License.",
      copyright: "Copyright © 2024-present <a href='https://tiagorangel.com' target='_blank'>Tiago Rangel</a>",
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  ssr: {
    noExternal: ['vitepress-plugin-nprogress']
  },
  base: '/docs/'
});
