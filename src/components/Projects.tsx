import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Folder, Server, Code, Network } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      category: "DevOps",
      icon: <Server className="h-6 w-6" />,
      projects: [
        {
          title: "Microservices CI/CD Pipeline",
          description: "Automated deployment pipeline for microservices architecture using Docker, Kubernetes, and Jenkins. Includes automated testing, security scanning, and multi-environment deployment.",
          technologies: ["Docker", "Kubernetes", "Jenkins", "Ansible", "AWS", "Prometheus"],
          github: "https://github.com/mohammed-dessouky/microservices-pipeline",
          demo: null,
          featured: true
        },
        {
          title: "Infrastructure as Code with Terraform",
          description: "Complete infrastructure automation for a 3-tier web application on AWS using Terraform, including VPC, load balancers, auto-scaling groups, and RDS database.",
          technologies: ["Terraform", "AWS", "CloudFormation", "Docker", "Nginx"],
          github: "https://github.com/mohammed-dessouky/terraform-aws-infrastructure",
          demo: null,
          featured: true
        },
        {
          title: "Monitoring Stack Setup",
          description: "Comprehensive monitoring solution using Prometheus, Grafana, and ELK stack for real-time application and infrastructure monitoring with custom dashboards.",
          technologies: ["Prometheus", "Grafana", "ELK Stack", "Docker", "AlertManager"],
          github: "https://github.com/mohammed-dessouky/monitoring-stack",
          demo: "https://monitoring-demo.example.com",
          featured: false
        }
      ]
    },
    {
      category: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      projects: [
        {
          title: "Task Management Dashboard",
          description: "Modern React-based task management application with real-time updates, drag-and-drop functionality, and responsive design. Built with TypeScript and Tailwind CSS.",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Vite"],
          github: "https://github.com/mohammed-dessouky/task-dashboard",
          demo: "https://task-dashboard-demo.netlify.app",
          featured: true
        },
        {
          title: "E-commerce Landing Page",
          description: "Responsive e-commerce landing page with modern design, product showcase, and optimized performance. Includes animations and interactive elements.",
          technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Webpack"],
          github: "https://github.com/mohammed-dessouky/ecommerce-landing",
          demo: "https://ecommerce-landing-demo.vercel.app",
          featured: false
        },
        {
          title: "Weather Dashboard",
          description: "Real-time weather application with location-based forecasts, interactive maps, and historical data visualization using external APIs.",
          technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
          github: "https://github.com/mohammed-dessouky/weather-dashboard",
          demo: "https://weather-dashboard-demo.netlify.app",
          featured: false
        }
      ]
    },
    {
      category: "Networking",
      icon: <Network className="h-6 w-6" />,
      projects: [
        {
          title: "Network Security Analyzer",
          description: "Python-based network security tool for packet analysis, vulnerability scanning, and network topology mapping with detailed reporting capabilities.",
          technologies: ["Python", "Scapy", "Nmap", "Wireshark", "NetworkX"],
          github: "https://github.com/mohammed-dessouky/network-security-analyzer",
          demo: null,
          featured: true
        },
        {
          title: "Campus Network Design",
          description: "Complete network design project for university campus including VLAN configuration, routing protocols, and security implementation using Cisco Packet Tracer.",
          technologies: ["Cisco Packet Tracer", "OSPF", "VLAN", "DHCP", "NAT"],
          github: "https://github.com/mohammed-dessouky/campus-network-design",
          demo: null,
          featured: false
        },
        {
          title: "Network Monitoring Tool",
          description: "Real-time network monitoring solution with bandwidth analysis, device discovery, and automated alerting system for network administrators.",
          technologies: ["Python", "SNMP", "Flask", "SQLite", "Chart.js"],
          github: "https://github.com/mohammed-dessouky/network-monitor",
          demo: null,
          featured: false
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      DevOps: "from-blue-500 to-blue-600",
      "Frontend Development": "from-purple-500 to-purple-600", 
      Networking: "from-green-500 to-green-600"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="projects" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of technical projects demonstrating expertise across DevOps, development, and networking
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`bg-gradient-to-r ${getCategoryColor(category.category)} rounded-lg p-3 mr-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <Card 
                    key={projectIndex} 
                    className={`p-6 bg-card-gradient border transition-all hover:shadow-hover ${
                      project.featured 
                        ? 'border-project shadow-purple' 
                        : 'border-primary/10 shadow-card'
                    }`}
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <Folder className="h-8 w-8 text-primary flex-shrink-0" />
                      {project.featured && (
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      )}
                    </div>

                    {/* Project Title */}
                    <h4 className="text-xl font-semibold mb-3 text-foreground">
                      {project.title}
                    </h4>

                    {/* Project Description */}
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-xs bg-skill border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} />
                        Code
                      </Button>
                      {project.demo && (
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink size={16} />
                          Demo
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card-gradient border border-primary/10 rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold mb-4">Interested in my work?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects represent just a portion of my technical journey. I'm always working on new 
              challenges and exploring emerging technologies in the DevOps and cloud computing space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://github.com/mohammed-dessouky', '_blank')}
              >
                <Github size={20} />
                View All Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;