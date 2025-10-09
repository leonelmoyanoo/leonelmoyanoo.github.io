"use client"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        title: "Bakery",
        description:
            "Landing page for an artisanal bakery. Showcases featured products, store information, and a contact form.",
        media: [
            "/assets/projects/bakery/bakery.png",
            "/assets/projects/bakery/bakery2.png",
            "/assets/projects/bakery/fullpage_web.png",
        ],
        technologies: ["TypeScript", "HTML", "CSS", "JavaScript"],
        liveUrl: "https://bocconcino-panaderia.vercel.app/",
        topic: "Publish page"
    },
    {
        title: "Buffet App",
        description:
            "Application for a buffet that allows users to browse the menu, place product orders, and get information about the store.",
        media: [
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
        topic: "Restaurant"
    },
    {
        title: "Recycle App",
        description:
            "Mobile application for collecting and recycling waste, connecting users with recycling centers and providing information on sustainable practices",
        media: [
            "/assets/projects/recycle/recycle.webp",
            "/assets/projects/recycle/items.jpeg",
            "/assets/projects/recycle/map.jpeg",
            "/assets/projects/recycle/filter.jpeg",
        ],
        imageMaxWidth: "50%",
        technologies: ["React", "JavaScript"],
        topic: "Ecologist"

    },
    {
        title: "No entendí",
        description:
            "A minimalist web app that lets students anonymously signal when they're feeling lost in class. With a single click, they can express confusion pressure-free, giving the teacher an instant pulse-check on the group's overall understanding.",
        media: [
            "/assets/projects/noentendi/4.png",
            "/assets/projects/noentendi/1.png",
            "/assets/projects/noentendi/2.png",
            "/assets/projects/noentendi/3.png",
            "/assets/projects/noentendi/4.png",
            "/assets/projects/noentendi/5.png",
            "/assets/projects/noentendi/6.png"
        ],
        technologies: ["TypeScript", "HTML", "CSS", "JavaScript"],
        liveUrl: "https://noentendi.app/",
        topic: "Education"
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
        const images = projects[activeProject].media
        setActiveImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        if (activeProject === null) return
        const images = projects[activeProject].media
        setActiveImage((prev) => (prev - 1 + images.length) % images.length)
    }
    return (
        <section id="projects" className="pt-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
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
                                        src={project.media[0]}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {project.topic && <Badge className="absolute top-4 right-4 bg-primary">{project.topic}</Badge>}
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                            </CardContent>
                            <CardFooter className="gap-2 mt-auto">
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
                        {projects[activeProject].media[activeImage].endsWith('.mp4') ? (
                            <video
                                src={projects[activeProject].media[activeImage]}
                                controls
                                className="rounded-lg shadow-lg"
                                style={{maxWidth: projects[activeProject].imageMaxWidth || '100%'}}
                            />
                        ) : (
                            <Image
                                src={projects[activeProject].media[activeImage]}
                                alt={projects[activeProject].title}
                                width={800}
                                height={600}
                                style={{maxWidth: projects[activeProject].imageMaxWidth || '100%'}}
                                className="rounded-lg shadow-lg"
                            />
                        )}
                        <div className="text-white mt-4">
                            {activeImage + 1} / {projects[activeProject].media.length}
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
