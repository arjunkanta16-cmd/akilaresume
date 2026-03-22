"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Info,
  Mail,
  Menu,
  Sparkles,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems, profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const iconMap = {
  about: Info,
  experience: BriefcaseBusiness,
  skills: Sparkles,
  projects: FolderKanban,
  education: GraduationCap,
  certifications: BadgeCheck,
  contact: Mail
} as const;

export function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);

  const sections = useMemo(() => [...navItems], []);

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 160;
      const scrollPosition = window.scrollY + offset;

      const positions = sections
        .map((section) => {
          const element = document.getElementById(section);
          if (!element) {
            return null;
          }

          return {
            id: section,
            top: element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight
          };
        })
        .filter((section): section is { id: string; top: number; bottom: number } => Boolean(section));

      const currentSection = positions.find((section, index) => {
        const nextTop = positions[index + 1]?.top ?? Number.POSITIVE_INFINITY;
        return scrollPosition >= section.top && scrollPosition < nextTop;
      });

      if (currentSection) {
        setActive(currentSection.id);
        return;
      }

      if (scrollPosition < (positions[0]?.top ?? 0)) {
        setActive(sections[0]);
        return;
      }

      setActive(positions[positions.length - 1]?.id ?? sections[0]);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
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

        <div className="relative flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-elevated/80 shadow-premium md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute right-0 top-14 z-50 w-48 origin-top-right overflow-hidden rounded-[1.45rem] border border-white/20 bg-white/60 p-2 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.48)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/72 md:hidden"
              >
                <div className="mb-2 rounded-2xl border border-white/25 bg-white/40 px-3 py-2 dark:border-white/10 dark:bg-white/5">
                  <p className="truncate font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    Navigation
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  {sections.map((item) => {
                    const Icon = iconMap[item];
                    const isActive = active === item;

                    return (
                      <a
                        key={item}
                        href={`#${item}`}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium capitalize transition ${
                          isActive
                            ? "bg-accent/12 text-accent ring-1 ring-accent/20 dark:bg-accent/15"
                            : "bg-white/40 text-text hover:bg-white/75 dark:bg-white/5 dark:hover:bg-white/10"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <span
                          className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
                            isActive
                              ? "bg-accent text-white"
                              : "bg-white/70 text-muted dark:bg-white/10 dark:text-slate-300"
                          }`}
                        >
                          <Icon size={14} />
                        </span>
                        <span>{item}</span>
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
