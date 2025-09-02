import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, Users, Heart, Briefcase } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      role: "DevOps Engineer Trainee",
      company: "DEPI (Digital Egypt Pioneers Initiative)",
      location: "Egypt",
      period: "2024 - Present",
      type: "Internship",
      description: "Intensive training program focused on modern DevOps practices and cloud infrastructure.",
      achievements: [
        "Hands-on experience with Docker, Kubernetes, and container orchestration",
        "Automated CI/CD pipeline development using Jenkins and GitLab CI",
        "Infrastructure as Code implementation with Ansible and Terraform",
        "Cloud platform management and monitoring setup",
        "Collaborative project work in agile development environment"
      ],
      technologies: ["Docker", "Kubernetes", "Jenkins", "Ansible", "AWS", "Linux"]
    },
    {
      role: "Network Operations Intern",
      company: "GASCO (Egyptian Natural Gas Company)",
      location: "Egypt", 
      period: "Summer 2023",
      type: "Internship",
      description: "Gained practical experience in network infrastructure management and operations.",
      achievements: [
        "Network monitoring and troubleshooting using enterprise tools",
        "Assisted in network configuration and maintenance tasks",
        "Documentation of network procedures and protocols",
        "Learned enterprise-level network security practices",
        "Collaborated with senior engineers on infrastructure projects"
      ],
      technologies: ["Cisco", "Network Monitoring", "TCP/IP", "SNMP", "Network Security"]
    }
  ];

  const volunteerRoles = [
    {
      role: "Academic Advisor",
      organization: "Mansoura University",
      period: "2023 - Present",
      description: "Mentoring junior students in academic planning and career guidance",
      impact: "Guided 20+ students in course selection and study strategies"
    },
    {
      role: "HR Team Member",
      organization: "Luminous Team",
      period: "2023 - 2024",
      description: "Recruitment, onboarding, and team development activities",
      impact: "Helped recruit and onboard 15+ new team members"
    },
    {
      role: "Outgoing Global Volunteer",
      organization: "AIESEC Egypt",
      period: "2022 - 2023",
      description: "International volunteer program coordination and management",
      impact: "Facilitated cultural exchange programs for 30+ participants"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="bg-hero-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and community involvement
          </p>
        </div>

        {/* Internships */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-2xl font-semibold">Professional Experience</h3>
          </div>

          <div className="space-y-8">
            {internships.map((internship, index) => (
              <Card key={index} className="p-8 bg-card-gradient border border-primary/10 shadow-card hover:shadow-hover transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Building className="h-5 w-5 text-primary mr-2" />
                      <h4 className="text-xl font-semibold">{internship.role}</h4>
                    </div>
                    <p className="text-primary font-medium text-lg mb-2">{internship.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{internship.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{internship.location}</span>
                      </div>
                      <Badge variant="secondary">{internship.type}</Badge>
                    </div>
                  </div>
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  {internship.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {internship.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">Technologies & Tools:</h5>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-skill">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div>
          <div className="flex items-center mb-8">
            <Heart className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-2xl font-semibold">Volunteer & Leadership</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="p-6 bg-card-gradient border border-primary/10 shadow-card hover:shadow-hover transition-all">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  <h4 className="font-semibold text-lg">{role.role}</h4>
                </div>
                
                <p className="text-primary font-medium mb-2">{role.organization}</p>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{role.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {role.description}
                </p>
                
                <div className="bg-skill rounded-lg p-3">
                  <p className="text-sm font-medium text-primary">Impact:</p>
                  <p className="text-sm text-foreground">{role.impact}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;