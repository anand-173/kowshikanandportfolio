import { motion } from "framer-motion";
import Section from "./Section";

const stats = [
  { value: "450+", label: "Automation scripts" },
  { value: "60%", label: "Manual QA reduction" },
  { value: "0.96", label: "Model R² score" },
  { value: "12+", label: "Production components" },
];

const About = () => (
  <Section id="about" eyebrow="About" title="Engineer driven by quality, speed, and intelligent systems.">
    <div className="grid md:grid-cols-5 gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:col-span-3 text-lg text-muted-foreground leading-relaxed space-y-4"
      >
        <p>
          I'm a results-driven engineer specializing in test automation frameworks and full-stack
          web development, with an applied background in AI/ML. My work spans Selenium-TestNG
          hybrid frameworks, Angular + ASP.NET Core platforms, and deep learning pipelines.
        </p>
        <p>
          I care about shipping fast without breaking things — through CI/CD-integrated
          regression suites, scalable architectures, and clean, reusable code.
        </p>
      </motion.div>

      <div className="md:col-span-2 grid grid-cols-2 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-surface rounded-2xl p-6"
          >
            <div className="text-3xl font-bold text-glow">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default About;
