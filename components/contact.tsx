import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react"

const contactMethods = [
  {
    name: "Email",
    value: "leonelmoyano1809@gmail.com",
    href: "mailto:leonelmoyano1809@gmail.com",
    icon: Mail,
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    value: "/in/leonelmoyano",
    href: "https://www.linkedin.com/in/leonelmoyano/",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    value: "/leonelmoyanoo",
    href: "https://github.com/leonelmoyanoo",
    icon: Github,
    color: "hover:text-foreground",
  },
  {
    name: "Twitter",
    value: "@leonelmoyanoo",
    href: "https://twitter.com/leonelmoyanoo",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    value: "@leonelmoyanoo",
    href: "https://www.instagram.com/leonelmoyanoo/",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <Card key={method.name} className="border-2 hover:border-primary/50 transition-all group">
                <CardContent className="pt-6">
                  <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                    <div className={`transition-colors ${method.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-muted-foreground">{method.name}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{method.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a href="mailto:leonelmoyano1809@gmail.com">
              <Mail className="h-5 w-5 mr-2" />
              Send Me an Email
            </a>
          </Button>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Leonel Moyano. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
