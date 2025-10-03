"use client"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Globant University",
    description:
      "Enterprise learning management system built with Opigno and Drupal, serving thousands of employees worldwide.",
    images: ["/assets/projects/globantUniversity.jpg"],
    technologies: ["Drupal", "Opigno", "PHP", "MySQL"],
    liveUrl: "https://university.globant.com/",
  },
  {
    title: "Bakery",
      description:
          "Landing page for an artisanal bakery. Showcases featured products, store information, and a contact form.",
    images: [
        "/assets/projects/bakery/bakery.png",
        "/assets/projects/bakery/bakery2.png",
        "/assets/projects/bakery/fullpage_web.png",
    ],
    technologies: ["TypeScript", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://bocconcino-panaderia.vercel.app/",
  },
    {
      title: "Buffet App",
      description:
        "Application for a buffet that allows users to browse the menu, place product orders, and get information about the store.",
      images: [
          "/assets/projects/buffrapp/logo.png",
          "/assets/projects/buffrapp/menu.jpeg",
          "/assets/projects/buffrapp/order.jpeg",
          "/assets/projects/buffrapp/order_final.jpeg",
          "/assets/projects/buffrapp/products.jpeg",
          "/assets/projects/buffrapp/profile.jpeg",
          "/assets/projects/buffrapp/schedule.jpeg",
      ],
      technologies: ["React", "JavaScript", "Laravel", "REST API"],
        imageMaxWidth: "50%",
      //liveUrl: "https://leonelmoyanoo.github.io/RickAndMortyAPI/",
      //githubUrl: "https://github.com/leonelmoyanoo/RickAndMortyAPI",
    },
  {
    title: "Recycle App",
    description:
      "Mobile application for collecting and recycling waste, connecting users with recycling centers and providing information on sustainable practices",
    images: [
        "/assets/projects/recycle/recycle.webp",
        "/assets/projects/recycle/items.jpeg",
        "/assets/projects/recycle/map.jpeg",
        "/assets/projects/recycle/filter.jpeg",
    ],
      imageMaxWidth: "50%",
      technologies: ["React", "JavaScript"],
  },
]

export function Projects() {
    const [carouselOpen, setCarouselOpen] = useState(false)
    const [activeProject, setActiveProject] = useState<number | null>(null)
    const [activeImage, setActiveImage] = useState(0)

    const openCarousel = (projectIdx: number) => {
        setActiveProject(projectIdx)
        setActiveImage(0)
        setCarouselOpen(true)
    }

    const closeCarousel = () => setCarouselOpen(false)

    const nextImage = () => {
        if (activeProject === null) return
        const images = projects[activeProject].images
        setActiveImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        if (activeProject === null) return
        const images = projects[activeProject].images
        setActiveImage((prev) => (prev - 1 + images.length) % images.length)
    }
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of projects I've worked on, ranging from enterprise applications to personal experiments. Each
            project showcases different aspects of my skills in full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group overflow-hidden"
            >
                <CardHeader className="p-0">
                    <div
                        className="relative h-48 overflow-hidden bg-muted cursor-pointer"
                        onClick={() => openCarousel(index)}
                    >
                        <Image
                            src={project.images[0]}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.liveUrl && (
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

        {/* Modal Carousel */}
        {carouselOpen && activeProject !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                <button className="absolute top-4 right-4 text-white" onClick={closeCarousel}>
                    <X size={32} />
                </button>
                <button className="absolute left-4 text-white" onClick={prevImage}>
                    <ChevronLeft size={48} />
                </button>
                <div className="max-w-2xl w-full flex flex-col items-center">
                    <Image
                        src={projects[activeProject].images[activeImage]}
                        alt={projects[activeProject].title}
                        width={800}
                        height={600}
                        style={{maxWidth:projects[activeProject].imageMaxWidth}}
                        className="rounded-lg shadow-lg"
                    />
                    <div className="text-white mt-4">
                        {activeImage + 1} / {projects[activeProject].images.length}
                    </div>
                </div>
                <button className="absolute right-4 text-white" onClick={nextImage}>
                    <ChevronRight size={48} />
                </button>
            </div>
        )}
    </section>
  )
}
