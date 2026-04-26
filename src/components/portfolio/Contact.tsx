import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Download } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:kowshikanandnomula@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your mail client…", description: "Thanks for reaching out!" });
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great together.">
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            Open to QA Automation, Full-Stack, and ML engineering roles. Drop a message — I usually
            reply within 24 hours.
          </p>

          {[
            { icon: Mail, label: "Email", value: "kowshikanandnomula@gmail.com", href: "mailto:kowshikanandnomula@gmail.com" },
            { icon: MapPin, label: "Location", value: "Hyderabad, India" },
          ].map((it) => (
            <a
              key={it.label}
              href={it.href}
              className="card-surface rounded-xl p-4 flex items-center gap-4 group block"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <it.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{it.label}</div>
                <div className="text-sm group-hover:text-primary transition-colors">{it.value}</div>
              </div>
            </a>
          ))}

          <div className="flex gap-3 pt-2">
            <a
              href="https://github.com/anand-173"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full card-surface flex items-center justify-center hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kowshik-anand-nomula-78aa0a403"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full card-surface flex items-center justify-center hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="/Kowshik_Anand_Nomula_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 rounded-full card-surface text-sm hover:text-primary"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 card-surface rounded-2xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project or opportunity…"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform glow-shadow"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
