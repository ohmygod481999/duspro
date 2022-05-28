import Logo from "./extensions/logo-duspro.jpg";

const brandName = "Duspro"
export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: Logo,
    },
    // Replace the favicon
    head: {
      favicon: Logo,
    },
    // Add a new locale, other than 'en'
    locales: ["vi"],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: Logo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
    // Disable video tutorials
    tutorials: false,
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": `${brandName} Dashboard`,
        "app.components.HomePage.welcomeBlock.content.again": `Welcome to ${brandName} Admin`,
        "Auth.form.welcome.subtitle": `Log in to your ${brandName} account`,
        "Auth.form.welcome.title": `Welcome to ${brandName}!`,
        "Auth.form.button.login.strapi": `Log in via ${brandName}`,
        "Settings.permissions.users.listview.header.subtitle": `All the users who have access to the ${brandName} admin panel`,
      },
    },
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
