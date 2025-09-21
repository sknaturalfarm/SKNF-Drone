import Head from "next/head";
import Link from "next/link";
// import Head from "next/head";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
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

export default function Categories() {
  return (
    <>
      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-green-100 fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-all duration-300 hover:translate-x-1"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <FaqSection
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
      />
    </>
  );
}
