import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const certificates = [
    {
      name: "Red Hat System Administration",
      issuer: "Red Hat",
      year: "2024",
      category: "Systems"
    },
    {
      name: "Cloud Computing Fundamentals",
      issuer: "AWS/Azure",
      year: "2024",
      category: "Cloud"
    },
    {
      name: "CS50's Introduction to Computer Science",
      issuer: "Harvard University",
      year: "2023",
      category: "Programming"
    },
    {
      name: "Frontend Web Development",
      issuer: "Meta",
      year: "2023",
      category: "Development"
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "Cisco",
      year: "2024",
      category: "Security"
    },
    {
      name: "Docker & Kubernetes Essentials",
      issuer: "Kubernetes.io",
      year: "2024",
      category: "DevOps"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Systems: "bg-red-100 text-red-800 border-red-200",
      Cloud: "bg-blue-100 text-blue-800 border-blue-200",
      Programming: "bg-green-100 text-green-800 border-green-200",
      Development: "bg-purple-100 text-purple-800 border-purple-200",
      Security: "bg-orange-100 text-orange-800 border-orange-200",
      DevOps: "bg-indigo-100 text-indigo-800 border-indigo-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section id="education" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="bg-hero-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic excellence and continuous professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <Card className="p-8 bg-card-gradient border border-primary/10 shadow-card hover:shadow-hover transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-skill rounded-lg p-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>2022 - 2026</span>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold mb-2">
                Bachelor of Computer & Communication Engineering
              </h4>
              
              <p className="text-primary font-medium mb-3">
                Mansoura University, Egypt
              </p>
              
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-primary mr-2" />
                <span className="font-semibold">GPA: 3.94/4.0</span>
              </div>
              
              <div className="space-y-2 text-muted-foreground">
                <p>• Specialization in Computer Networks and Communication Systems</p>
                <p>• Focus on Software Engineering and System Architecture</p>
                <p>• Active in academic projects and research initiatives</p>
                <p>• Expected graduation: 2026</p>
              </div>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Professional Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certificates.map((cert, index) => (
                <Card key={index} className="p-6 bg-card-gradient border border-primary/10 shadow-card hover:shadow-hover transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{cert.name}</h4>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                      <Badge className={getCategoryColor(cert.category)}>
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-skill rounded-lg border border-primary/20">
              <p className="text-sm text-center text-muted-foreground">
                🎯 <strong>Continuous Learning:</strong> Actively pursuing additional certifications in 
                Kubernetes Administration (CKA) and AWS Solutions Architecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;