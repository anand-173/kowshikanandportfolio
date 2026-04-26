const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <div>© {new Date().getFullYear()} Nomula Kowshik Anand. Crafted with precision.</div>
      <div>Hyderabad, India</div>
    </div>
  </footer>
);

export default Footer;
