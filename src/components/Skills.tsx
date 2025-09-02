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
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Red Hat Enterprise Linux", level: 88 },
        { name: "Ansible", level: 82 },
        { name: "CI/CD Pipelines", level: 85 }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Google Cloud Platform", level: 70 },
        { name: "Terraform", level: 78 }
      ]
    },
    {
      title: "Version Control & Collaboration",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub Actions", level: 85 },
        { name: "GitLab CI", level: 80 },
        { name: "Jenkins", level: 75 }
      ]
    },
    {
      title: "Programming & Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Bash Scripting", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 80 }
      ]
    },
    {
      title: "Monitoring & Security",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Prometheus", level: 75 },
        { name: "Grafana", level: 78 },
        { name: "ELK Stack", level: 72 },
        { name: "Cybersecurity Fundamentals", level: 80 }
      ]
    },
    {
      title: "Networking & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Network Operations", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Redis", level: 72 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-primary";
    if (level >= 80) return "bg-primary-light";
    if (level >= 70) return "bg-primary/70";
    return "bg-primary/50";
  };

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

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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