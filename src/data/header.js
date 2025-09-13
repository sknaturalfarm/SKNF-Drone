// header.js
export const header = {
  logo: {
    src: "./main_logo.svg",
    // src: "./newLogo.jpg",
    // src: "./logo-mark.png",
    alt: "logo",
    href: "/",
  },
  center: {
    email: "contact@sknaturalfarm.in", // You can change this email
  },
  links: [
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Categories",
      href: "#categories",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "FAQs",
      href: "#faqs",
    },
  ],
  buttons: [
    // {
    //   label: "Sign In",
    //   href: "/auth",
    //   color: "transparent",
    //   size: "small",
    // },
    {
      label: "Sign Up",
      href: "/auth",
      color: "dark",
      size: "small",
    },
  ],
};
