"use client"
import {Card, CardContent} from "@/components/ui/card"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faReact,
    faJs,
    faPhp,
    faLaravel,
    faSymfony,
    faDrupal,
    faHtml5,
    faCss,
    faGitAlt,
    faDocker
} from '@fortawesome/free-brands-svg-icons'
import {faDatabase, faPlug} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

const skills = [
    {
        category: "Frontend",
        technologies: [
            {name: "React", icon: faReact, color: "#61DAFB"},
            {name: "JavaScript", icon: faJs, color: "#F7DF1E"},
            {name: "TypeScript", icon: faJs, color: "#007ACC"},
            {name: "HTML", icon: faHtml5, color: "#E34F26"},
            {name: "CSS", icon: faCss, color: "#2965F1"},
        ],
    },
    {
        category: "Backend",
        technologies: [
            {name: "Laravel", icon: faLaravel, color: "#FF2D20"},
            {name: "Symfony", icon: faSymfony, color: "#000000"},
            {name: "Drupal", icon: faDrupal, color: "#0678BE"},
            {name: "PHP", icon: faPhp, color: "#777BB4"},
        ],
    },
    {
        category: "Tools & Others",
        technologies: [
            {name: "Docker", icon: faDocker, color: "#2496ED"},
            {name: "MySQL", icon: faDatabase, color: "#4479A1"},
            {name: "MongoDB", icon: faDatabase, color: "#4479A1"},
            {name: "Git", icon: faGitAlt, color: "#F05032"},
            {name: "REST APIs", icon: faPlug, color: "#6E6E6E"},
        ],
    },
]

const SkillCategory = ({skillGroup}) => (
    <div className="space-y-4">
        {skillGroup.technologies.map((tech) => (
            <div
                key={tech.name}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
                <FontAwesomeIcon style={{color: tech.color, width: '15%'}} icon={tech.icon}
                                 size="2x" className="text-primary"/>
                <span className="font-medium">{tech.name}</span>
            </div>
        ))}
    </div>
);


export function Skills() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (category) => {
        setOpenAccordion(openAccordion === category ? null : category);
    };
    
    return (
        <section id="skills" className="pt-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Skills & Technologies</h2>

                {/* Desktop View */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skills.map((skillGroup) => (
                        <Card key={skillGroup.category} className="border-2">
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
                                <SkillCategory skillGroup={skillGroup}/>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Mobile Accordion View */}
                <div className="md:hidden max-w-6xl mx-auto">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="border-2 rounded-lg mb-4 overflow-hidden">
                            <button
                                className="flex justify-between items-center w-full p-4 cursor-pointer bg-card hover:bg-muted/50 transition-colors"
                                onClick={() => toggleAccordion(skillGroup.category)}
                            >
                                <h3 className="text-xl font-bold text-primary">{skillGroup.category}</h3>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${openAccordion === skillGroup.category ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {openAccordion === skillGroup.category && (
                                <div className="p-4 border-t bg-card">
                                    <SkillCategory skillGroup={skillGroup}/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
