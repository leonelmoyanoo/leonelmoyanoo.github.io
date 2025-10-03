export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">Who am I?</h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Hi, I'm Leonel Moyano, an Argentinian Full Stack Developer specializing in building modern web applications.
            I work with <span className="text-foreground font-semibold">Laravel</span> for robust backend systems,{" "}
            <span className="text-foreground font-semibold">React</span> for dynamic user interfaces, and{" "}
            <span className="text-foreground font-semibold">TypeScript</span> for type-safe, maintainable code.
          </p>
          <p>
            I'm passionate about creating experiences
            that not only look great but are meticulously built for performance and accessibility.
          </p>
          <p>
            I'm also studying Data Science and constantly learning new technologies in my free time. Check out what I'm
            learning on{" "}
            <a
              href="https://platzi.com/@leonelmoyanoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Platzi
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  )
}
