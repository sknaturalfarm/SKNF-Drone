import Head from "next/head";
import Link from "next/link";
// import Head from "next/head";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { UserCircleIcon } from '@heroicons/react/24/outline';
import {
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ArrowLeftIcon,
  WrenchScrewdriverIcon,
  EyeIcon,
  ChartBarIcon,
  SparklesIcon,
  TrophyIcon,
  UsersIcon,
  BuildingOffice2Icon,
  BeakerIcon,
  CpuChipIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import {
  PricingSection,
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

      {/* Technology Excellence */}

      <div class="max-w-7xl mx-auto px-6 py-16 text-gray-800 pt-20">

         {/* Services Overview */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Service Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering end-to-end solutions across agriculture and defense sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <WrenchScrewdriverIcon className="h-10 w-10 text-blue-600" />, 
                  title: "Advanced Manufacturing", 
                  desc: "Custom drone solutions with precision engineering",
                  color: "blue"
                },
                { 
                  icon: <EyeIcon className="h-10 w-10 text-purple-600" />, 
                  title: "Surveillance Systems", 
                  desc: "Comprehensive aerial monitoring and reconnaissance",
                  color: "purple"
                },
                { 
                  icon: <ChartBarIcon className="h-10 w-10 text-green-600" />, 
                  title: "Analytics Platform", 
                  desc: "Data-driven crop health and yield optimization",
                  color: "green"
                },
                { 
                  icon: <ShieldCheckIcon className="h-10 w-10 text-red-600" />, 
                  title: "Defense Solutions", 
                  desc: "Strategic mapping and security applications",
                  color: "red"
                },
                { 
                  icon: <SparklesIcon className="h-10 w-10 text-yellow-600" />, 
                  title: "AI Integration", 
                  desc: "Intelligent flight systems and automation",
                  color: "yellow"
                },
                { 
                  icon: <RocketLaunchIcon className="h-10 w-10 text-indigo-600" />, 
                  title: "Custom Solutions", 
                  desc: "Tailored applications for specific requirements",
                  color: "indigo"
                },
              ].map((service, i) => (
                <div key={i} className={`group p-8 bg-white rounded-2xl shadow-lg border border-${service.color}-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className={`p-4 bg-${service.color}-50 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>


          <section className="mb-20 bg-gradient-to-r from-slate-900 to-gray-900 p-12 rounded-3xl shadow-2xl text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 opacity-10">
              <CpuChipIcon className="h-48 w-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <ShieldCheckIcon className="h-8 w-8 text-green-400" />
                </div>
                <h2 className="text-4xl font-bold">Technology & Innovation</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-xl mb-6 text-gray-300">
                    Our AI-powered drone systems represent the pinnacle of agricultural technology:
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: "🎯", text: "Precision GPS navigation with terrain-following capabilities" },
                      { icon: "🧠", text: "Advanced AI obstacle detection and auto-stabilization" },
                      { icon: "📊", text: "Real-time crop health analytics and cloud synchronization" },
                      { icon: "🔋", text: "Intelligent power management for extended flight operations" }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="text-gray-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Flight Time", value: "45+ min", icon: <CloudIcon className="h-6 w-6 text-blue-400" /> },
                      { title: "Coverage", value: "100+ acres", icon: <ChartBarIcon className="h-6 w-6 text-green-400" /> },
                      { title: "Accuracy", value: "±2cm", icon: <EyeIcon className="h-6 w-6 text-purple-400" /> },
                      { title: "Data Points", value: "1M+/flight", icon: <CpuChipIcon className="h-6 w-6 text-orange-400" /> }
                    ].map((stat, i) => (
                      <div key={i} className="p-4 bg-white/10 rounded-xl backdrop-blur-sm text-center">
                        <div className="flex justify-center mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

      </div>

     <PricingSection
        id="categories"
        title="Drone Categories"
        description="drone categories, grouped by application and function."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "CATEGORIES",
        }}
        pricing={pricing}
      />

    </>
  )}


