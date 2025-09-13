/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SocialLinks } from "../SocialLinks";
import { cn } from "@/lib/utils";

export function Footer({ copyright, logo, links, social, ...rest }) {
  return (
    <>
      {/* Farm Illustration Divider */}
      <div className="w-full overflow-hidden">
        <img
          src="/farmfooter.png"
          alt="Farm divider"
          className="w-full h-auto object-cover"
          style={{ marginBottom: "-1px" }}
        />
      </div>

      {/* Footer Content */}
      <footer {...rest} className="bg-[#143317] text-white pt-0">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-green-100">
          {/* Logo + Company */}
          <div className="md:col-span-2">
            
            <p className="mb-1">&copy; {copyright}</p>
            <p className="italic text-green-200">SKNF-SkyCult Solutions</p>
            <a
              href="https://forms.gle/your-career-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 bg-white text-[#143317] font-semibold rounded-full shadow hover:bg-gray-200 transition"
            >
              Join the team
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-3">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:connect@sknaturalfarm.in"
                  className="hover:text-white"
                >
                  connect@sknaturalfarm.in
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@sknaturalfarm.in"
                  className="hover:text-white"
                >
                  hr@sknaturalfarm.in
                </a>
              </li>
              <li>
                <a href="tel:+917827335954" className="hover:text-white">
                  +91-7827335954
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Others */}
          <div>
            <h4 className="font-bold text-white mb-3">Follow Us</h4>
            <SocialLinks links={social} />
            
          </div>
        </div>
      </footer>
    </>
  );
}
