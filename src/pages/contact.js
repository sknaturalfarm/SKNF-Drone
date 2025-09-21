import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | SK Natural Farm</title>
      </Head>

      {/* 🔙 Back Button */}
      <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg border-b border-green-100 z-50">
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <Link href="/" passHref legacyBehavior>
            <a className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-all duration-300 hover:translate-x-1">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </a>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50 px-4 pt-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-3xl overflow-hidden h-[85vh]">
          {/* Left - Contact Info */}
          <div className="bg-green-600 text-white flex flex-col justify-center p-10">
            <h1 className="text-4xl font-bold mb-4 text-center">Get in Touch</h1>
            <p className="text-green-100 mb-6">
              We’d love to hear from you! Reach us through any of these
              channels.
            </p>

            <div className="space-y-4 text-lg">
              <p>
                📧{" "}
                <a
                  href="mailto:contact@sknaturalfarm.in"
                  className="hover:underline"
                >
                  connect@sknaturalfarm.in
                </a>
              </p>
              <p>📞 +91 7827335954</p>
              <p>📍 802, Bhama Centre ,Hinjawadi-Wakad Bridge,
                    Wakad, Pune, Maharashtra, 411057, India</p>
            </div>

            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9999999!2d73.8567437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06fbbf82e1b%3A0x1234567890abcdef!2sPune!5e0!3m2!1sen!2sin!4v1693333333333"
              className="rounded-xl mt-6 border-0 w-full h-40"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Right - Contact Form */}
          <div className="flex flex-col justify-center p-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center mt-2">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
