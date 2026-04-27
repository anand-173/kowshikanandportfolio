import { motion } from "framer-motion";
import Section from "./Section";

const jobs = [
  {
    role: "Automation Test Analyst",
    company: "Cognizant Technology Solutions",
    period: "Sep 2025 – Present",
    location: "Hyderabad",
    points: [
      "Architected & scaled a Selenium-TestNG hybrid framework across 4+ apps, cutting regression cycle ~45% via parallel execution and data-driven design.",
      "Integrated automated suites into CI/CD, enabling zero-touch regression on every build deployment.",
      "Delivered 300+ maintainable scripts targeting critical journeys, reducing manual QA effort 60% per sprint.",
    ],
  },
  {
    role: "Programmer Analyst Trainee — Automation QA",
    company: "Cognizant Technology Solutions",
    period: "May 2025 – Sep 2025",
    location: "Hyderabad",
    points: [
      "Engineered a hybrid BDD framework with Selenium WebDriver, TestNG & Cucumber — reusable step definitions and POM across 3 modules.",
      "Automated REST API validation with Postman + Java scripts, reaching 95%+ coverage on critical endpoints.",
      "Authored 150+ BDD feature files translating business requirements into executable scenarios.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Kansbe",
    period: "Nov 2024 – May 2025",
    location: "Hyderabad",
    points: [
      "Delivered 12+ reusable Angular 16 components on an ASP.NET Core + MySQL backend, accelerating HRMS feature delivery by 30%.",
      "Designed RESTful API contracts powering full CRUD across 5 employee modules.",
      "Optimized SQL & EF data access, reducing avg API response time by 25% on high-volume endpoints.",
    ],
  },
];

const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Where I've shipped impact.">
    <div className="relative">
      <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />
      <div className="space-y-12">
        {jobs.map((job, i) => (
          <motion.div
            key={job.role + i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-12 md:pl-16"
          >
            <div className="absolute left-0 top-2 w-7 h-7 md:w-9 md:h-9 rounded-full bg-card border-2 border-primary flex items-center justify-center glow-shadow">
              <span className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="card-surface rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-xl md:text-2xl font-semibold">{job.role}</h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {job.period}
                </span>
              </div>
              <div className="text-primary text-sm mb-4">
                {job.company} · <span className="text-muted-foreground">{job.location}</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {job.points.map((p, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default Experience;
