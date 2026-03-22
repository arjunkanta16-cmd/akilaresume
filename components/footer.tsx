import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-elevated/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            {profile.name}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold text-text">
            {profile.role}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted">
            Electronics and quality-focused professional website designed for
            recruiters, hiring managers, and engineering opportunities.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm capitalize text-muted transition hover:text-accent"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-accent" />
              <span>{profile.location}</span>
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 transition hover:text-accent"
            >
              <Mail size={16} className="text-accent" />
              <span>{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 transition hover:text-accent"
            >
              <Phone size={16} className="text-accent" />
              <span>{profile.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>Built as a professional resume portfolio.</p>
        </div>
      </div>
    </footer>
  );
}
