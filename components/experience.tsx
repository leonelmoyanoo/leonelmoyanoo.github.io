import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const experiences = [
  {
    company: "Globant",
    position: "PHP Developer",
    logo: "/assets/work/globant.jpg",
    description:
      "Working on large-scale enterprise projects, developing and maintaining Drupal-based solutions for international clients.",
    technologies: ["Drupal", "PHP", "Laravel", "Symfony", "MySQL"],
  },
  {
    company: "Solventa",
    position: "Laravel Developer",
    logo: "/assets/work/solventa.png",
    description:
      "Build tools for a Fintech startup.",
    technologies: ["Laravel", "PHP", "JavaScript", "MySQL"],
  },
  {
    company: "Mobility Power System",
    position: "Full Stack Web Developer",
    logo: "/assets/work/mps.png",
    description:
      "Vehicle booking, delivery, and management system.",
    technologies: ["React", "PHP", "React Native", "JavaScript", "MySQL"],
  },
  {
    company: "El Rey de la Papa Frita",
    position: "Freelance Developer",
    logo: "/assets/work/elreydelapapafrita.png",
    description:
      "Control panel and stock control for a local business.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative w-20 h-20 flex-shrink-0 bg-background rounded-lg p-2">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={exp.company}
                      width={100}
                      height={100}
                      className="object-contain"
                      style={{ backgroundColor: "white" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.position}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
