"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems, profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);

  const sections = useMemo(() => [...navItems], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.7]
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a href="#top" className="flex flex-col">
          <span className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            {profile.name}
          </span>
          <span className="text-xs text-muted">{profile.role}</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                active === item
                  ? "bg-accent text-white shadow-sm"
                  : "text-muted hover:bg-elevated hover:text-text"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-elevated/80 md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border/60 bg-elevated/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`rounded-2xl px-4 py-3 text-sm capitalize ${
                  active === item ? "bg-accent text-white" : "bg-surface text-text"
                }`}
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

