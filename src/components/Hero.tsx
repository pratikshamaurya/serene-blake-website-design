import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      {/* Hero Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 fade-in">
            Find Your Path to
            <span className="block text-primary">Healing & Growth</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto slide-up">
            Compassionate, evidence-based therapy to help you overcome anxiety, 
            strengthen relationships, and heal from trauma in Los Angeles
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4 text-lg font-medium shadow-lg"
            >
              Book a Free Consultation
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted-foreground fade-in">
            <p>Dr. Serena Blake, PsyD • Licensed Clinical Psychologist</p>
            <p>8+ years experience • 500+ successful sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;