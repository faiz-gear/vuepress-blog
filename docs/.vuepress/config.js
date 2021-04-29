const path = require("path");

module.exports = {
  title: "code blog",
  dest: path.resolve(__dirname, "../../dist"),
  themeConfig: {
    author: "Lu Yao",
  },
  head: [
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-1PWBM2M60V",
        async: true,
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1PWBM2M60V');
      `,
    ],
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  plugins: [
    "permalink-pinyin", 
    '@vuepress/nprogress', 
    ['@vuepress/search', {searchMaxSuggestions: 10}], 
    '@vuepress/back-to-top'
  ],
};
