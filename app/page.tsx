import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import {
  aboutPoints,
  certifications,
  education,
  experiences,
  languages,
  professionalSkills,
  profile,
  projects,
  technicalSkills
} from "@/lib/data";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-surface">
      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,134,11,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(184,134,11,0.14),transparent_26%)]" />
          <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-50" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-28">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-elevated/90 px-4 py-2 text-sm text-muted">
                <ShieldCheck size={16} className="text-accent" />
                Electronics, Quality Inspection, Testing & Production
              </div>

              <div className="space-y-5">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  Peddagolla Akhila
                </p>
                <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
                  Electronics & Quality Control Professional
                </h1>
                <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  {profile.summary}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/resume/peddagolla-akhila-resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/70 bg-elevated/90 px-6 py-3.5 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  Contact
                  <ArrowRight size={18} />
                </a>
              </div>

              <dl className="grid gap-4 sm:grid-cols-3">
                <div className="section-shell p-5">
                  <dt className="text-xs uppercase tracking-[0.22em] text-muted">
                    Location
                  </dt>
                  <dd className="mt-3 flex items-center gap-2 text-sm font-medium text-text">
                    <MapPin size={16} className="text-accent" />
                    {profile.location}
                  </dd>
                </div>
                <div className="section-shell p-5">
                  <dt className="text-xs uppercase tracking-[0.22em] text-muted">
                    Email
                  </dt>
                  <dd className="mt-3 flex items-center gap-2 text-sm font-medium text-text">
                    <Mail size={16} className="text-accent" />
                    {profile.email}
                  </dd>
                </div>
                <div className="section-shell p-5">
                  <dt className="text-xs uppercase tracking-[0.22em] text-muted">
                    Phone
                  </dt>
                  <dd className="mt-3 flex items-center gap-2 text-sm font-medium text-text">
                    <Phone size={16} className="text-accent" />
                    {profile.phone}
                  </dd>
                </div>
              </dl>
            </div>

            <aside className="section-shell flex flex-col justify-between gap-8 p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  Career Objective
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {profile.objective}
                </p>
              </div>

              <div className="space-y-5">
                <div className="gold-divider h-px w-full" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl bg-surface p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">
                      Core Strength
                    </p>
                    <p className="mt-2 text-sm font-medium text-text">
                      Quality-focused execution with strong team coordination
                    </p>
                  </div>
                  <div className="rounded-2xl bg-surface p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">
                      Domain Exposure
                    </p>
                    <p className="mt-2 text-sm font-medium text-text">
                      Industrial manufacturing and defence-sector apprenticeship
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-8 px-6 py-10 lg:px-8 lg:py-14">
          <SectionReveal id="about" className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="About"
              title="Engineering discipline with practical quality control experience"
              description="A concise profile for recruiters looking for electronics, inspection, and production support capability."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {aboutPoints.map((point) => (
                <article
                  key={point}
                  className="rounded-2xl border border-border/70 bg-surface p-5 text-sm leading-7 text-muted"
                >
                  {point}
                </article>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal id="experience" className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="Experience"
              title="Career timeline across quality, testing, and production"
              description="Experience entries are based on the resume data and arranged in a recruiter-friendly timeline layout."
            />
            <div className="mt-10 space-y-6">
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="grid gap-4 rounded-3xl border border-border/70 bg-surface p-6 lg:grid-cols-[56px_1fr]"
                >
                  <div className="relative flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      <BriefcaseBusiness size={22} />
                    </div>
                    {index !== experiences.length - 1 ? (
                      <div className="absolute left-1/2 top-16 hidden h-[calc(100%+1.5rem)] w-px -translate-x-1/2 bg-border lg:block" />
                    ) : null}
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-text">
                          {experience.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-accent">
                          {experience.company}
                        </p>
                      </div>
                      <div className="text-sm text-muted sm:text-right">
                        <p>{experience.duration}</p>
                        <p>{experience.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm leading-7 text-muted">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <Star size={16} className="mt-1 shrink-0 text-accent" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal id="skills" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="section-shell p-8 sm:p-10">
              <SectionHeading
                eyebrow="Skills"
                title="Balanced technical and professional capability"
                description="Focused on the competencies most relevant to inspection, testing, process support, and manufacturing quality roles."
              />
              <div className="mt-8 rounded-3xl border border-border/70 bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  Languages
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="section-shell p-8">
                <h3 className="font-heading text-xl font-semibold text-text">
                  Technical Skills
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {technicalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/70 bg-surface px-4 py-2 text-sm text-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>

              <article className="section-shell p-8">
                <h3 className="font-heading text-xl font-semibold text-text">
                  Professional Skills
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {professionalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/70 bg-surface px-4 py-2 text-sm text-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </SectionReveal>

          <SectionReveal id="projects" className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="Projects"
              title="Academic projects grounded in automation and efficiency"
              description="Selected projects from the resume showing practical electronics application and engineering problem-solving."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-3xl border border-border/70 bg-surface p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-text">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{project.duration}</p>
                    </div>
                    <div className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Project
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl bg-elevated px-4 py-4 text-sm leading-7 text-muted">
                    <span className="font-semibold text-text">Impact:</span> {project.impact}
                  </p>
                </article>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal
            id="education"
            className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="section-shell p-8 sm:p-10">
              <SectionHeading
                eyebrow="Education"
                title="Academic progression in Electronics and Communication"
                description="Education timeline presented in a clear ATS-friendly structure."
              />
              <div className="mt-10 space-y-5">
                {education.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-border/70 bg-surface p-6"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-text">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-accent">
                          {item.institution}
                        </p>
                      </div>
                      <div className="text-sm text-muted sm:text-right">
                        <p>{item.duration}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div id="certifications" className="section-shell p-8 sm:p-10">
              <SectionHeading
                eyebrow="Certifications"
                title="Training and apprenticeship credentials"
                description="Professional learning that reinforces manufacturing process awareness and technical adaptability."
              />
              <div className="mt-8 space-y-4">
                {certifications.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-border/70 bg-surface p-6"
                  >
                    <h3 className="font-heading text-lg font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-accent">
                      {item.issuer}
                    </p>
                    <p className="mt-2 text-sm text-muted">{item.duration}</p>
                    <p className="mt-4 text-sm leading-7 text-muted">{item.details}</p>
                  </article>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal id="contact" className="section-shell p-8 sm:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Let's connect for quality, testing, and production opportunities"
              description="Direct contact details are included below for recruiters and hiring teams to reach out quickly."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 rounded-3xl border border-border/70 bg-surface p-5 transition hover:border-accent/40"
                >
                  <div className="rounded-2xl bg-accent-soft p-3 text-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-medium text-text">
                      {profile.email}
                    </p>
                  </div>
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 rounded-3xl border border-border/70 bg-surface p-5 transition hover:border-accent/40"
                >
                  <div className="rounded-2xl bg-accent-soft p-3 text-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-medium text-text">
                      {profile.phone}
                    </p>
                  </div>
                </a>
                <div className="rounded-3xl border border-border/70 bg-surface p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">
                    Availability
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Open to quality control, testing, inspection, and production support opportunities. Email and phone are the primary contact channels for now.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
