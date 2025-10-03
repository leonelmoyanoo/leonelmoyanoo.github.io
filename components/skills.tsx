import { Card, CardContent } from "@/components/ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faPhp, faLaravel, faSymfony, faDrupal, faHtml5, faCss, faGitAlt, faDocker } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faPlug, faChartBar } from '@fortawesome/free-solid-svg-icons'

const skills = [
    {
        category: "Frontend",
        technologies: [
            { name: "React", icon: faReact, color: "#61DAFB" },
            { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
            { name: "TypeScript", icon: faJs, color: "#007ACC" },
            { name: "HTML", icon: faHtml5, color: "#E34F26" },
            { name: "CSS", icon: faCss, color: "#2965F1" },
        ],
    },
    {
        category: "Backend",
        technologies: [
            { name: "Laravel", icon: faLaravel, color: "#FF2D20" },
            { name: "Symfony", icon: faSymfony, color: "#000000" },
            { name: "Drupal", icon: faDrupal, color: "#0678BE" },
            { name: "PHP", icon: faPhp, color: "#777BB4" },
        ],
    },
    {
        category: "Tools & Others",
        technologies: [
            { name: "Docker", icon: faDocker, color: "#2496ED" },
            { name: "MySQL", icon: faDatabase, color: "#4479A1" },
            { name:"MongoDB", icon: faDatabase, color: "#4479A1"},
            { name: "Git", icon: faGitAlt, color: "#F05032" },
            { name: "REST APIs", icon: faPlug, color: "#6E6E6E" },
        ],
    },
]


export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                        <FontAwesomeIcon style={{ color: tech.color, width: '25%' }} icon={tech.icon} size="2x" className="text-primary" />


                        <span className="font-medium">{tech.name}</span>
                    </div>
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
