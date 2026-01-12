import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Ensure you have react-icons installed

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Process", href: "/process" },
    { name: "Team", href: "/team" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black mt-32">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Guide-AR
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              A spatial computing indoor navigation solution for Meta Quest 3 and mobile platforms.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect / Socials */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/BerkBelhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/berkbelhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Guide-AR. All rights reserved.
          </p>
          <div className="text-xs text-gray-500 flex gap-6">
            <span>Senior Project</span>
            <span>Ankara, TR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}