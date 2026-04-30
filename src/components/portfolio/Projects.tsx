import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import Section from "./Section";

const projects = [
  {
    title: "Stock Market Prediction — Multi-Filtered LSTM",
    tags: ["Python", "LSTM", "NLP", "Scikit-learn", "NSE Data"],
    description:
      "Hybrid deep learning pipeline combining LSTM time-series modeling, RSI/Bollinger Band indicators, and NLP sentiment analysis on NSE equity data. Achieved R² of 0.96, outperforming baseline ARIMA by 23% directional accuracy. Implemented GFS multi-level filtering for stock selection.",
    link: "https://github.com/anand-173/Stock-market-future-forecasting",
    metric: "R² 0.96",
  },
  {
    title: "HealthElite — Health & Nutrition Platform",
    tags: ["HTML", "CSS", "JavaScript", "REST APIs"],
    description:
      "Responsive health platform featuring an interactive symptom checker and nutrition calculator with real-time third-party nutrition API integration. Built with WCAG-compliant UI/UX for broad accessibility.",
    link: "https://github.com/anand-173/HealthElite",
    metric: "WCAG AA",
  },
];

const Projects = () => (
  <Section id="projects" eyebrow="Projects" title="Selected work I'm proud of.">
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="card-surface rounded-2xl p-8 group flex flex-col"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
              {p.metric}
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-glow transition-all">
            {p.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{p.description}</p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Github className="w-3.5 h-3.5" /> View on GitHub
          </div>
        </motion.a>
      ))}
    </div>
  </Section>
);

export default Projects;
