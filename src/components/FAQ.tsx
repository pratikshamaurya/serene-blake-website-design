import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, I do not accept insurance directly. However, I provide a superbill (detailed receipt) that you can submit to your insurance company for potential reimbursement. Many clients find they can receive partial reimbursement for out-of-network mental health services. I recommend checking with your insurance provider about your out-of-network benefits before we begin."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes! I offer virtual therapy sessions via secure Zoom on Mondays, Wednesdays, and Fridays from 1 PM–5 PM. Online therapy is just as effective as in-person sessions for many clients and offers the convenience of receiving care from the comfort of your own space. All virtual sessions are conducted through HIPAA-compliant platforms to ensure your privacy and confidentiality."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for all cancellations or rescheduling requests. This allows me to potentially offer that time slot to another client who may need it. Cancellations made with less than 24 hours notice will be charged the full session fee. Emergency situations are always considered on a case-by-case basis."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes long, while couples sessions are 80 minutes. This allows sufficient time to explore issues in depth while maintaining a structured therapeutic frame. I find these durations provide the optimal balance for meaningful therapeutic work."
    },
    {
      question: "How often should I attend therapy sessions?",
      answer: "Most clients begin with weekly sessions to establish momentum and build therapeutic rapport. As progress is made, we may reduce frequency to bi-weekly or monthly sessions. The frequency depends on your specific needs, goals, and current life circumstances. We'll work together to determine what schedule best supports your healing journey."
    },
    {
      question: "What should I expect in our first session?",
      answer: "The first session is all about getting to know you and understanding what brings you to therapy. We'll discuss your current concerns, goals for therapy, relevant history, and any questions you have about the process. I'll explain my approach and we'll begin to develop a treatment plan together. It's normal to feel nervous before your first session – that's completely understandable and we can talk about those feelings too."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about therapy, sessions, and my practice
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have more questions? I'm here to help.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary hover:text-primary-hover font-medium underline transition-colors"
            >
              Get in touch with me directly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;