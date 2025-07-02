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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4 sm:mb-6 fade-in leading-tight">
            Find Your Path to
            <span className="block text-primary">Healing & Growth</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto slide-up px-4 sm:px-0 leading-relaxed">
            Compassionate, evidence-based therapy to help you overcome anxiety, 
            strengthen relationships, and heal from trauma in Los Angeles
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center slide-up px-4 sm:px-0">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-hover px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium shadow-lg w-full sm:w-auto"
            >
              Book a Free Consultation
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground fade-in px-4 sm:px-0">
            <p className="mb-1">Dr. Serena Blake, PsyD • Licensed Clinical Psychologist</p>
            <p>8+ years experience • 500+ successful sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;