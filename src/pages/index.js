import Head from "next/head";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  PricingSection,
  LargeFeatureSection,
  CtaSection,
} from "../components/sections";

import {
  header,
  faqs,
  testimonials,
  features,
  pricing,
  clients,
  footer,
} from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sk Natural Farm</title>
      </Head>

      <Header
        logo={header.logo}
        links={header.links}
        buttons={header.buttons}
      />

      <HeroSection
        id="home"
        badge={{
          // href: "#",
          // icon: "tabler:arrow-right",
          label: "SK Natural Farm presents",
        }}
        title="Smart Drone "
        description="We are pioneering a future where cutting-edge drone technology meets the grounded needs of agriculture and national defense. Our mission is simple yet impactful — to revolutionize how we grow food and protect our borders."
        // buttons={[
        //   {
        //     href: "https://www.instagram.com/sknaturalfarm/?igshid=NzZlODBkYWE4Ng%3D%3D,",
        //     // target: "_blank",
        //     label: "follow us",
        //     color: "dark",
        //   },
        //   {
        //     href: "/learn-more",
        //     label: "Learn More",
        //     color: "transparent",
        //     variant: "link",
        //     icon: "tabler:arrow-right",
        //   },
        // ]}
          //  image={{
          //     src: "./sknf_photo.svg",
          //     alt: "Product Screenshot on Tablet",
          //     className: "w-full sm:w-3/4 lg:w-1/2 h-auto mx-auto pb-10",
          //   }}
        clientsLabel="Trusted by "
        clients={clients}
      />

      {/* <FeatureSection
        id="features"
        title="Discover Our Amazing Drone Tech Solution"
        description="Explore the wide range of powerful features that our product offers. From advanced Drone to seamless integrations, we have everything you need to solve the problems."
        features={features}
      />

      <LargeFeatureSection
        title="Smart Drone for Agriculture"
        description="In the agriculture sector, we empower farmers with intelligent drone systems that offer precision spraying, real-time crop monitoring, soil health analysis, and yield optimization. Our AI-powered drones reduce labor, save time, and enhance sustainability — making farming more efficient and eco-friendly."
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />

      <LargeFeatureSection
        reverse={true}
        title="Advance Drone for National Defense "
        description="On the defense front, our specialized drones support surveillance, reconnaissance, and tactical operations. Built for rugged environments, they provide high-resolution imaging, thermal tracking, and autonomous mission capability — offering our armed forces reliable eyes in the sky during critical operations."
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup1.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      /> */}

      {/* <PricingSection
        id="categories"
        title="Drone Categories"
        description="drone categories, grouped by application and function."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "CATEGORIES",
        }}
        pricing={pricing}
      /> */}

      <TestimonialSection
        id="testimonials"
        title="Love from our customers"
        description="Trusted client of SK Natural Farm "
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: "TESTIMONIALS",
        }}
        testimonials={testimonials}
        button={{
          icon: "tabler:brand-x",
          label: "Share Your Feedback on",
          href: "https://x.com/Adil15433744?t=snvaXN5aoYEP-gsbl1t37g&s=09",
          color: "white",
        }}
      />

      {/* <FaqSection
        id="faqs"
        title="Frequently Asked Questions"
        description="Here are some of our most frequently asked questions. If you have a question that isn't answered here, please feel free to contact us."
        buttons={[
          {
            label: "Contact Support",
            href: "https://x.com/Adil15433744?t=snvaXN5aoYEP-gsbl1t37g&s=09",
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
        mapImage={{
          src: "/public/map.png", // Make sure this image exists in /public folder
          alt: "https://maps.app.goo.gl/zqC4HUrEtYuL8DUEA",
        }}
      /> */}

      {/* Original CTA */}
      <CtaSection
        title="Ready to get started?"
        description="Click on start Now fill the details for communication"
        buttons={[
          {
            label: "Start Now",
            href: "/auth",
            color: "dark",
          },
        ]}
      />

      <Footer
        id="footer"
        copyright={footer.copyright}
        logo={footer.logo}
        social={footer.social}
        links={footer.links}
      />
    </>
  );
}
