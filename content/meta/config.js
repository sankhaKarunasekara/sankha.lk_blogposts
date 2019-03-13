const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Sankha Lakshan Karunasekara", // <title>
  shortSiteTitle: "sankha.lk", // <title> ending for posts and pages
  siteDescription:
    "Smart Things I Learned Doing Stupid Stuff",
  siteUrl: "https://sankha.lk",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Sankha Karunasekara",
  authorTwitterAccount: "sankhalk",
  // info
  infoTitle: "Sankha Karunasekara",
  infoTitleNote: "Engineer | Astronomer | Traveler",
  // manifest.json
  manifestName: "Web Developer, Engineer, Astronomer, Traveler",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "sankhadlk@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/sankhaKarunasekara" },
    { name: "twitter", url: "https://twitter.com/sankhalk" },
    { name: "facebook", url: "https://facebook.com/sankhalakshan.karunasekara.1" }
  ]
};
