
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Students", href: "/students" },
  { label: "Departments", href: "/departments" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link href="/students" className="brand">
          <span className="brand-icon" aria-hidden="true">
            ♧
          </span>
          <span>Campus Directory</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  isActive ? "active" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <span className="practice-label">Frontend Practice</span>
      </nav>
    </header>
  );
}
