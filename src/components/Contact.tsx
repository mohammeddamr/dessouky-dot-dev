import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Languages, 
  Download, 
  Send,
  Phone,
  Globe
} from 'lucide-react';

const Contact = () => {
  const languages = [
    { name: "Arabic", level: "Native", proficiency: 100 },
    { name: "English", level: "Near Fluent", proficiency: 95 }
  ];

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "mohammed.dessouky@example.com",
      action: "mailto:mohammed.dessouky@example.com",
      primary: true
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "Mohammed Amr Dessouky",
      action: "https://linkedin.com/in/mohammed-amr-dessouky",
      primary: true
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub", 
      value: "@mohammed-dessouky",
      action: "https://github.com/mohammed-dessouky",
      primary: false
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Cairo / Mansoura, Egypt",
      action: null,
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting DevOps projects or discuss opportunities in cloud infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index} 
                    className={`p-6 bg-card-gradient border transition-all hover:shadow-hover cursor-pointer ${
                      method.primary ? 'border-project shadow-purple' : 'border-primary/10 shadow-card'
                    }`}
                    onClick={() => method.action && window.open(method.action, '_blank')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-skill rounded-lg p-3">
                        <div className="text-primary">
                          {method.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{method.label}</p>
                        <p className="text-muted-foreground text-sm">{method.value}</p>
                      </div>
                      {method.action && (
                        <Send className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="p-8 bg-card-gradient border border-primary/10 shadow-card">
              <h3 className="text-xl font-semibold mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always interested in discussing new opportunities, especially in DevOps engineering, 
                cloud infrastructure, and automation projects. Whether you're looking for an intern, 
                trainee, or collaboration partner, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.open('mailto:mohammed.dessouky@example.com', '_blank')}
                >
                  <Mail size={20} />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    // Create a fake download link for demo purposes
                    const link = document.createElement('a');
                    link.href = '#';
                    link.download = 'Mohammed_Amr_Dessouky_CV.pdf';
                    link.click();
                  }}
                >
                  <Download size={20} />
                  Download CV
                </Button>
              </div>
            </Card>
          </div>

          {/* Languages & Additional Info */}
          <div className="space-y-8">
            {/* Languages */}
            <div>
              <div className="flex items-center mb-6">
                <Languages className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <Card key={index} className="p-4 bg-card-gradient border border-primary/10 shadow-card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{language.name}</span>
                      <Badge variant="secondary">{language.level}</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${language.proficiency}%` }}
                      ></div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="p-6 bg-skill border border-primary/20">
              <h3 className="font-semibold mb-3 flex items-center">
                <Globe className="h-5 w-5 text-primary mr-2" />
                Current Status
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Available for internships</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Open to freelance projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Graduation: 2026</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Remote & On-site ready</span>
                </div>
              </div>
            </Card>

            {/* Response Time */}
            <Card className="p-6 bg-card-gradient border border-primary/10 shadow-card">
              <h3 className="font-semibold mb-3">Response Time</h3>
              <p className="text-muted-foreground text-sm mb-4">
                I typically respond to emails and LinkedIn messages within 24 hours during weekdays.
              </p>
              <div className="flex items-center justify-center p-3 bg-skill rounded-lg">
                <span className="text-primary font-medium">📧 Usually responds in a few hours</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;