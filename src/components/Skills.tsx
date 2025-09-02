import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Server, 
  Container, 
  Cloud, 
  Settings, 
  GitBranch, 
  Monitor, 
  Code, 
  Shield,
  Database,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Infrastructure",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "Docker",
        "Kubernetes", 
        "Red Hat Enterprise Linux",
        "Ansible",
        "CI/CD Pipelines"
      ]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        "AWS",
        "Azure",
        "Google Cloud Platform",
        "Terraform"
      ]
    },
    {
      title: "Version Control & Collaboration",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        "Git",
        "GitHub Actions",
        "GitLab CI",
        "Jenkins"
      ]
    },
    {
      title: "Programming & Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "Python",
        "Bash Scripting",
        "JavaScript",
        "HTML/CSS"
      ]
    },
    {
      title: "Monitoring & Security",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        "Prometheus",
        "Grafana",
        "ELK Stack",
        "Cybersecurity Fundamentals"
      ]
    },
    {
      title: "Networking & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "Network Operations",
        "MySQL",
        "PostgreSQL",
        "Redis"
      ]
    }
  ];


  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps engineering and cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card-gradient border border-primary/10 shadow-card hover:shadow-hover transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-skill rounded-lg p-3 mr-3">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile Methodologies", "Scrum", "Problem Solving", "Team Leadership", 
              "Technical Documentation", "System Architecture", "Performance Optimization",
              "Troubleshooting", "Project Management", "Cross-functional Collaboration"
            ].map((skill, index) => (
              <Button key={index} variant="skill" size="sm" className="pointer-events-none">
                {skill}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;