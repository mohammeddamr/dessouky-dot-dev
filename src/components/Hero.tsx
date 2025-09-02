import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(262, 80%, 60%, 0.1), rgba(280, 70%, 65%, 0.1)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-fadeInUp">
            <div className="relative inline-block">
              <img
                src={profilePhoto}
                alt="Mohammed Amr Dessouky"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-purple border-4 border-primary/20 animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Mohammed Amr Dessouky
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              DevOps Engineer Trainee
            </p>
            <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
              <MapPin size={18} />
              Cairo / Mansoura, Egypt
            </p>
          </div>

          {/* Brief Description */}
          <div className="mb-8 animate-fadeInUp">
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Computer & Communication Engineering student at Mansoura University with a 
              <span className="text-primary font-semibold"> 3.94 GPA</span>. 
              Passionate about DevOps, Cloud Computing, and building scalable infrastructure solutions.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fadeInUp">
            <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail size={20} />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <Github size={20} />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fadeInUp">
            <a
              href="https://linkedin.com/in/mohammed-amr-dessouky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/mohammed-dessouky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:mohammed.dessouky@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;