import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Linkedin } from "lucide-react";
import Section from "./Section";

const Contact = () => {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great together.">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 w-full"
        >
          <p className="text-muted-foreground leading-relaxed text-lg max-w-lg mb-8">
            Open to QA Automation, Full-Stack, and ML engineering roles. I am currently available for new opportunities and always excited to connect!
          </p>

          <div className="flex flex-col gap-4 max-w-md">
            {[
              { icon: Mail, label: "Email Me directly", value: "kowshikanandnomula@gmail.com", href: "mailto:kowshikanandnomula@gmail.com" },
              { icon: Linkedin, label: "Connect on LinkedIn", value: "kowshik-anand-nomula", href: "https://www.linkedin.com/in/kowshik-anand-nomula-78aa0a403" },
              { icon: MapPin, label: "Location", value: "Hyderabad, India" },
            ].map((it) => (
              <a
                key={it.label}
                href={it.href}
                className="group relative overflow-hidden rounded-2xl bg-surface border border-border p-6 flex items-center gap-6 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <it.icon className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{it.label}</div>
                  <div className="text-base sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors">{it.value}</div>
                </div>
                {it.href && (
                  <ArrowRight className="absolute right-6 w-5 h-5 text-muted-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-500" />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="relative rounded-3xl overflow-hidden bg-surface border border-border p-10 md:p-14 text-center group hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h3>
              <p className="text-muted-foreground mb-10 text-lg max-w-sm mx-auto">
                I'm just an email away. Let's discuss how I can help your team succeed.
              </p>
              
              <a
                href="mailto:kowshikanandnomula@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)]"
              >
                Say Hello <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
