import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

export default function LearnMore() {
  return (
    <>
      <Head>
        <title>Learn More | SK Natural Farm - Smart Agricultural Solutions</title>
        <meta name="description" content="Discover SK Natural Farm's innovative approach to sustainable agriculture through cutting-edge technology and community empowerment." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
        
        {/* Navigation Header */}
        <div className="bg-white/80 backdrop-blur-lg border-b border-green-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link
              href="/"
              className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-all duration-300 hover:translate-x-1"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 text-gray-800">

          {/* Hero Section */}
          <section className="mb-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-3xl transform rotate-1 scale-105"></div>
            <div className="relative bg-white/70 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-green-100">
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-transparent bg-clip-text mb-6 leading-tight">
                SKNF Smart Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Pioneering the future of agriculture through intelligent technology and sustainable innovation
              </p>
            </div>
          </section>

          {/* Enhanced About Us Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 rounded-3xl shadow-2xl overflow-hidden border border-green-100/50">
              
              {/* Header with animated background */}
              <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 opacity-20">
                  <div className="flex space-x-4">
                    <UsersIcon className="h-24 w-24" />
                    <TrophyIcon className="h-20 w-20 mt-8" />
                    <BuildingOffice2Icon className="h-16 w-16 mt-12" />
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                      <UserCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight">About SKNF</h2>
                  </div>
                  <p className="text-green-100 text-lg font-light">
                    Transforming agriculture through innovation, sustainability, and community empowerment
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                
                {/* Main Description */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-6">
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                      <p className="text-xl font-medium text-green-800 mb-4">
                        Leading the Agricultural Revolution
                      </p>
                      <p>
                        <span className="font-semibold text-green-700">SK Natural Farm</span> stands at the forefront of agricultural innovation, seamlessly blending <span className="font-semibold text-emerald-600">sustainable farming practices</span> with <span className="font-semibold text-teal-600">cutting-edge technology</span>. Our mission extends beyond traditional farming to encompass community empowerment and environmental stewardship.
                      </p>
                      
                      <p>
                        Through our integrated approach combining <span className="italic text-green-600">AI-powered drone technology</span>, <span className="italic text-emerald-600">precision agriculture</span>, and <span className="italic text-teal-600">data-driven insights</span>, we&apos;re revolutionizing how farmers optimize yields while preserving our planet&apos;s precious resources.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Key Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border border-green-200">
                        <div className="text-3xl font-bold text-green-700">500+</div>
                        <div className="text-sm text-green-600 font-medium">Farmers Empowered</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl border border-emerald-200">
                        <div className="text-3xl font-bold text-emerald-700">50+</div>
                        <div className="text-sm text-emerald-600 font-medium">Projects Completed</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl border border-teal-200">
                        <div className="text-3xl font-bold text-teal-700">15+</div>
                        <div className="text-sm text-teal-600 font-medium">Technology Partners</div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl border border-cyan-200">
                        <div className="text-3xl font-bold text-cyan-700">10k+</div>
                        <div className="text-sm text-cyan-600 font-medium">Acres Monitored</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Strengths */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Core Strengths</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: <BeakerIcon className="h-8 w-8 text-green-600" />,
                        title: "Innovation Excellence",
                        description: "Cutting-edge organic horticulture and precision poultry solutions",
                        gradient: "from-green-100 to-emerald-100"
                      },
                      {
                        icon: <UsersIcon className="h-8 w-8 text-emerald-600" />,
                        title: "Strategic Partnerships",
                        description: "Collaborative networks with NGOs, government institutions, and research centers",
                        gradient: "from-emerald-100 to-teal-100"
                      },
                      {
                        icon: <TrophyIcon className="h-8 w-8 text-teal-600" />,
                        title: "Community Impact",
                        description: "Women-focused capacity building and grassroots empowerment initiatives",
                        gradient: "from-teal-100 to-cyan-100"
                      }
                    ].map((strength, index) => (
                      <div key={index} className={`bg-gradient-to-br ${strength.gradient} p-6 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-white/70 rounded-lg">
                            {strength.icon}
                          </div>
                          <h4 className="font-bold text-gray-800">{strength.title}</h4>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{strength.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mission Statement */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5 rounded-2xl transform -rotate-1"></div>
                  <div className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 border-l-4 border-green-600 p-8 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <SparklesIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-800 mb-3">Our Commitment</h4>
                        <blockquote className="text-gray-700 italic text-lg leading-relaxed font-medium">
                          &ldquo;Empowering farmers with knowledge, cutting-edge tools, and sustainable technologies to foster a self-reliant, resilient, and environmentally conscious agricultural ecosystem that benefits both present and future generations.&rdquo;
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            
            {/* Mission */}
            <section className="bg-gradient-to-br from-white to-green-50/50 p-10 rounded-3xl shadow-xl border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <GlobeAltIcon className="h-8 w-8 text-green-700" />
                </div>
                <h2 className="text-3xl font-bold text-green-800">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                To promote sustainable and ethical farming practices that empower rural communities, foster self-reliance, and preserve soil health for future generations. Through cutting-edge training, innovation, and community partnerships, we deliver quality produce while driving transformative rural development.
              </p>
            </section>

            {/* Vision */}
            <section className="bg-gradient-to-br from-white to-emerald-50/50 p-10 rounded-3xl shadow-xl border border-emerald-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-100 rounded-full">
                  <LightBulbIcon className="h-8 w-8 text-emerald-700" />
                </div>
                <h2 className="text-3xl font-bold text-emerald-800">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                To pioneer the future of agriculture by embracing continuous innovation and deploying cutting-edge smart farming technologies. We strive to transform farming practices through automation, data-driven insights, and sustainable solutions—setting new standards for intelligent, resilient, and prosperous agriculture.
              </p>
            </section>
          </div>

          {/* Technology Excellence */}
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

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-green-600 to-emerald-600 p-16 rounded-3xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">
                Ready to Transform Your Agriculture?
              </h2>
              <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
                Join the agricultural revolution with SKNF&apos;s cutting-edge smart farming solutions
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="https://forms.cloud.microsoft.com/r/EeH8xhLjBN?origin=lprLink"
                  className="inline-flex items-center px-10 py-4 bg-white text-green-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <SparklesIcon className="h-5 w-5 mr-2" />
                  Get Started Today
                </a>
                <button className="inline-flex items-center px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300">
                  <EyeIcon className="h-5 w-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center">
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-500 font-light">
                © 2024 SK Natural Farm. Crafted with innovation and sustainability in mind.
              </p>
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}