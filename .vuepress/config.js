module.exports = {
  title: "Devnagri",
  description: "AI powered human translation platform",
  themeConfig: {
    // logo: "assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/docs/" },
      { text: "Github", link: "https://github.com/FourtekIT/devnagri-docs" }
    ],
    sidebar: {
      "/docs/": [
        {
          title: "User Guide",
          collapsable: false,
          children: ["user", "glossary"]
        },
        {
          title: "Translator Guide",
          collapsable: false,
          children: ["translator"]
        },
        {
          title: "Developer Guide",
          collapsable: false,
          children: ["Api", "IntelliJPlugin"]
        }
      ]
    }
    // sidebar: ["/", "/docs", ["/page-b", "Explicit link text"]]
  }
};
