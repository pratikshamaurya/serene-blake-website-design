import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import anxietyImage from '@/assets/anxiety-service.jpg';
import relationshipImage from '@/assets/relationship-service.jpg';
import traumaImage from '@/assets/trauma-service.jpg';

const Services = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn evidence-based techniques to manage anxiety, reduce stress, and develop healthy coping strategies. Through cognitive-behavioral therapy and mindfulness practices, we'll work together to help you regain control and find peace in your daily life.",
      image: anxietyImage,
      price: "$200 / session",
      badges: ["CBT", "Mindfulness", "Individual"]
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your connections and improve communication with your partner. Using proven therapeutic approaches, we'll address conflict resolution, intimacy issues, and help you build a stronger, more fulfilling relationship together.",
      image: relationshipImage,
      price: "$240 / couples session",
      badges: ["Couples", "Communication", "Intimacy"]
    },
    {
      title: "Trauma Recovery",
      description: "Heal from past experiences with compassionate, trauma-informed care. Using specialized therapeutic techniques, we'll work at your pace to process difficult experiences and help you reclaim your sense of safety and empowerment.",
      image: traumaImage,
      price: "$200 / session",
      badges: ["Trauma-Informed", "EMDR", "Individual"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0">
              Specialized Services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Personalized therapy approaches tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {service.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {service.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-accent rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground mb-3 sm:mb-4 px-4 sm:px-0">
                Ready to Begin Your Healing Journey?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4 sm:px-0 leading-relaxed">
                Every healing journey starts with a single step. Let's take that step together 
                in a safe, supportive environment designed for your growth and well-being.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground hover:bg-primary-hover px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto max-w-sm sm:max-w-none"
              >
                Schedule Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;