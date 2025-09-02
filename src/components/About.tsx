import { Card } from '@/components/ui/card';
import { GraduationCap, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and driven by continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-foreground leading-relaxed">
                I'm a dedicated Computer & Communication Engineering student at Mansoura University, 
                currently maintaining a <span className="font-semibold text-primary">3.94 GPA</span> and 
                set to graduate in 2026. My journey in technology has led me to specialize in DevOps 
                engineering, where I combine my passion for automation, cloud infrastructure, and 
                system optimization.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Through hands-on experience with industry-leading tools like Docker, Kubernetes, 
                Red Hat Enterprise Linux, and Ansible, I've developed a strong foundation in 
                modern DevOps practices. My goal is to bridge the gap between development and 
                operations, creating efficient, scalable, and reliable systems.
              </p>

              <p className="text-foreground leading-relaxed">
                Beyond technical skills, I'm actively involved in community service and leadership 
                roles, having served as an Academic Advisor and HR member at various organizations. 
                I believe in the power of collaboration and continuous learning to drive innovation 
                in the technology sector.
              </p>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-card-gradient border border-primary/10 shadow-card hover:shadow-hover transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-skill rounded-lg p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education Excellence</h3>
                  <p className="text-muted-foreground">
                    Maintaining a 3.94 GPA in Computer & Communication Engineering at Mansoura University
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card-gradient border border-primary/10 shadow-card hover:shadow-hover transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-skill rounded-lg p-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Career Focus</h3>
                  <p className="text-muted-foreground">
                    Specializing in DevOps engineering with focus on cloud infrastructure and automation
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card-gradient border border-primary/10 shadow-card hover:shadow-hover transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-skill rounded-lg p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovation Drive</h3>
                  <p className="text-muted-foreground">
                    Passionate about learning cutting-edge technologies and implementing best practices
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;