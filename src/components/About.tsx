import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import drSerenaBlake from '@/assets/dr-serena-blake.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0">
              About Dr. Serena Blake
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Creating a safe, supportive space where healing happens naturally
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={drSerenaBlake}
                  alt="Dr. Serena Blake, Clinical Psychologist"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 sm:space-y-6 order-first lg:order-last px-4 sm:px-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground mb-3 sm:mb-4">
                  Dr. Serena Blake, PsyD
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                  with eight years of experience and over 500 client sessions. She blends evidence-based 
                  approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                  personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                  Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
              </div>

              {/* Credentials & Experience */}
              <Card className="p-6 bg-card border-border">
                <h4 className="font-serif font-semibold text-lg mb-4 text-foreground">
                  Credentials & Experience
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      License
                    </Badge>
                    <span className="text-muted-foreground">Licensed Clinical Psychologist (PsyD)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-therapeutic/10 text-therapeutic">
                      Experience
                    </Badge>
                    <span className="text-muted-foreground">8+ years of practice</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      Sessions
                    </Badge>
                    <span className="text-muted-foreground">500+ successful client sessions</span>
                  </div>
                </div>
              </Card>

              {/* Office Information */}
              <Card className="p-6 bg-card border-border">
                <h4 className="font-serif font-semibold text-lg mb-4 text-foreground">
                  Office & Availability
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
                  <p><strong className="text-foreground">In-person:</strong> Tuesday & Thursday, 10 AM–6 PM</p>
                  <p><strong className="text-foreground">Virtual (Zoom):</strong> Monday, Wednesday & Friday, 1 PM–5 PM</p>
                  <p><strong className="text-foreground">Contact:</strong> (323) 555-0192</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;