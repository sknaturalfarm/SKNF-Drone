import Head from "next/head";
// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
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


export default function Features() {
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

     <FeatureSection
        id="features"
        title="Discover Our Amazing Drone Tech Solution"
        description="Explore the wide range of powerful features that our product offers. From advanced Drone to seamless integrations, we have everything you need to solve the problems."
        features={features}
      />

      <LargeFeatureSection
        title="Smart drone for Agriculture"
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
        title="Advance Drone for national defense "
        description="On the defense front, our specialized drones support surveillance, reconnaissance, and tactical operations. Built for rugged environments, they provide high-resolution imaging, thermal tracking, and autonomous mission capability — offering our armed forces reliable eyes in the sky during critical operations."
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup1.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />

    </>
  )}


