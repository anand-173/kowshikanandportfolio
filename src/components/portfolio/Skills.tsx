import { motion } from "framer-motion";
import Section from "./Section";

const groups = [
  {
    name: "Automation",
    items: ["Selenium WebDriver", "TestNG", "Cucumber BDD", "Postman", "REST Assured", "Page Object Model"],
  },
  {
    name: "Languages",
    items: ["Java", "Python", "TypeScript", "C/C++", "SQL", "C#"],
  },
  {
    name: "Web / Backend",
    items: ["Angular 16", "ASP.NET Core", "Entity Framework", "Bootstrap", "REST APIs", "HTML / CSS"],
  },
  {
    name: "AI / ML",
    items: ["LSTM", "NLP", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "JIRA", "Maven", "VS Code", "MySQL", "Oracle"],
  },
];

const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="Tools and technologies in my arsenal.">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {groups.map((g, i) => (
        <motion.div
          key={g.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="card-surface rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <h3 className="text-sm uppercase tracking-[0.2em] text-foreground font-semibold">
              {g.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {g.items.map((it) => (
              <span
                key={it}
                className="text-sm px-3 py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                {it}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 grid md:grid-cols-2 gap-5"
    >
      <div className="card-surface rounded-2xl p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Education</div>
        <h4 className="text-lg font-semibold">B.Tech — Computer Science (AI & ML)</h4>
        <p className="text-muted-foreground text-sm mt-1">
          CMR Engineering College, Hyderabad · CGPA 7.58 / 10 · 2021 – 2025
        </p>
      </div>
      <div className="card-surface rounded-2xl p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Certifications</div>
        <ul className="text-muted-foreground text-sm space-y-1">
          <li>• Generative AI for QEA — 201 Intermediate</li>
          <li>• AWS Academy Cloud Foundations (Credly)</li>
          <li>• Python for Machine Learning (Udemy)</li>
          <li>• MySQL — Beginner to Expert (Udemy)</li>
        </ul>
      </div>
    </motion.div>
  </Section>
);

export default Skills;
