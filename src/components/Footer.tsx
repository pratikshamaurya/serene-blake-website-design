const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Practice Info */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">
                Dr. Serena Blake, PsyD
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Licensed Clinical Psychologist providing compassionate, 
                evidence-based therapy in Los Angeles.
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Creating safe spaces for healing, growth, and transformation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    About Dr. Blake
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-primary-foreground/80 text-sm">
                <p>1287 Maplewood Drive</p>
                <p>Los Angeles, CA 90026</p>
                <p className="mt-3">(323) 555-0192</p>
                <p>serena@blakepsychology.com</p>
                
                <div className="mt-4">
                  <p className="font-medium text-primary-foreground">Office Hours:</p>
                  <p>In-person: Tue & Thu, 10 AM–6 PM</p>
                  <p>Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved. 
              Licensed Clinical Psychologist in California.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-2">
              This website does not provide medical advice and is for informational purposes only. 
              Content is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;