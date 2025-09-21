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
      label: "Home",
      href: "/",
    },
     {
      label: "About Us",
      href: "/learn-more",
    },
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Products",
      href: "/categories",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "FAQs",
      href: "/faq",
    },
    {
      label: "Contact Us",
      href: "/contact",
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
