import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(formData.phone) && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'Please tell us what brings you here';
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll respond within 24 hours to schedule your free consultation.",
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        reason: '',
        preferredTime: '',
        consent: false
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again or call directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to take the first step? Reach out for a free consultation to see how I can support your journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full ${errors.name ? 'border-destructive' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`w-full ${errors.phone ? 'border-destructive' : ''}`}
                      placeholder="(323) 555-0192"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full ${errors.email ? 'border-destructive' : ''}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What brings you here? *
                    </label>
                    <Textarea
                      value={formData.reason}
                      onChange={(e) => handleChange('reason', e.target.value)}
                      className={`w-full min-h-[120px] ${errors.reason ? 'border-destructive' : ''}`}
                      placeholder="Please share what you're hoping to work on or any questions you have about therapy..."
                    />
                    {errors.reason && (
                      <p className="text-destructive text-sm mt-1">{errors.reason}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred time to reach you *
                    </label>
                    <Input
                      type="text"
                      value={formData.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      className={`w-full ${errors.preferredTime ? 'border-destructive' : ''}`}
                      placeholder="e.g., Weekday mornings, evenings after 5pm"
                    />
                    {errors.preferredTime && (
                      <p className="text-destructive text-sm mt-1">{errors.preferredTime}</p>
                    )}
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleChange('consent', checked as boolean)}
                      className={errors.consent ? 'border-destructive' : ''}
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to be contacted by Dr. Serena Blake regarding my inquiry. 
                      I understand this is not a guarantee of treatment and that a formal therapeutic 
                      relationship has not been established.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-destructive text-sm">{errors.consent}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary-hover py-3 text-lg font-medium"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">
                    Office Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Address</h4>
                    <p className="text-muted-foreground">
                      1287 Maplewood Drive<br />
                      Los Angeles, CA 90026
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Phone</h4>
                    <p className="text-muted-foreground">(323) 555-0192</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground">serena@blakepsychology.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-foreground">
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">In-Person Sessions</h4>
                    <p className="text-muted-foreground">
                      Tuesday & Thursday<br />
                      10:00 AM – 6:00 PM
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Virtual Sessions (Zoom)</h4>
                    <p className="text-muted-foreground">
                      Monday, Wednesday & Friday<br />
                      1:00 PM – 5:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-lg bg-accent">
                <CardContent className="p-6">
                  <h4 className="font-serif font-semibold text-lg text-foreground mb-3">
                    Free Consultation
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Not sure if therapy is right for you? I offer a free 15-minute consultation 
                    to discuss your needs and answer any questions about my approach.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> I typically respond to new inquiries within 24 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;