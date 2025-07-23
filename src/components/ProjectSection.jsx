import { ArrowBigRight, ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "panda food landing page",
    description: "A beautiful landing page using react and css",
    image: "/projects/project2.png",
    tags: ["ReactJS", "CSS"],
    demoUrl: "https://vinhnguyentran.github.io/web-food-FE/",
    githubUrl: "https://github.com/vinhnguyentran/web-food-FE",
  },
  {
    id: 2,
    name: "KZ comic website",
    description: "A website to read comic using ReactJS and CSS",
    image: "/projects/project1.png",
    tags: ["ReactJS", "CSS"],
    demoUrl: "https://vinhnguyentran.github.io/comic-web/",
    githubUrl: "https://github.com/vinhnguyentran/comic-web",
  },
  {
    id: 3,
    name: "Halana e-commerce",
    description:
      "Is an e-commerce site specializing in selling mechanical equipment using VueJS, NodeJS",
    image: "/projects/project3.png",
    tags: ["VueJS", "CSS", "NodeJS"],
    demoUrl:
      "https://halana.vn/?srsltid=AfmBOorvtML7yDXTrDF25mgKkFgHbU7Thm8CVN-wrHqbJ-HST5ee68-S",
    githubUrl: "",
  },
];
export const ProjectSection = () => {
  return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent project
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                  <div className="h-48 overflow-hidden">
                    <img src={project.image} alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  
                  <h3 className="text-xl font-semibold mb-1">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-1 text-sm">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a href={project.demoUrl}
                        target="-blank"
                        className="text-foreground/80 hover:text-primary transition-color duration-300">
                          <ExternalLink size={20}/>
                        </a>
                        <a href={project.githubUrl}
                        target="-blank"
                        className="text-foreground/80 hover:text-primary transition-color duration-300">
                          <Github size={20}/>
                        </a>
                      </div>
                  </div>
                  </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
          target="-blank"
          href="https://github.com/vinhnguyentran">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
    </div>
  </section>;
};
