import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-32 pb-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 noise pointer-events-none" />
      
      <div className="container relative z-10 flex flex-col items-center justify-center gap-8 mb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
          Kowshik Anand
        </h2>
        
        <p className="font-display italic text-muted-foreground text-lg md:text-xl">
          "It's not who I am underneath, but what I do that defines me."
        </p>
        
        <div className="flex items-center gap-4 mt-2">
          <a href="https://github.com/anand-173" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-border bg-surface hover:border-primary/50 transition-colors">
            <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/kowshik-anand-nomula-78aa0a403" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-border bg-surface hover:border-primary/50 transition-colors">
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="mailto:kowshikanand@example.com" className="p-3 rounded-xl border border-border bg-surface hover:border-primary/50 transition-colors">
            <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="mt-6 flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/30 text-primary text-xs font-semibold tracking-[0.2em] hover:bg-primary/10 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
          BACK TO TOP
        </button>
      </div>

      <div className="container relative z-10">
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          <div className="flex items-center gap-3 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
            SYSTEM ONLINE · GOTHAM NODE
          </div>
          
          <div className="font-semibold">
            © {new Date().getFullYear()} NOMULA KOWSHIK ANAND
          </div>
          
          <div className="font-semibold">
            HYDERABAD · INDIA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
