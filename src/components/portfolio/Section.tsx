import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, eyebrow, title, children }: Props) => (
  <section id={id} className="relative py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary mb-4">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gradient max-w-3xl">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

export default Section;
