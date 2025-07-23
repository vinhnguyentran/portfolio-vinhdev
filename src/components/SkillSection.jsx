import { useState } from "react";
import { cn } from "../lib/utils";

const Skills = [
  // front-end
  {
    name: "HTML/CSS",
    level: 50,
    category: "front-end",
  },
  {
    name: "JavaScript",
    level: 20,
    category: "front-end",
  },
  {
    name: "ReacJS",
    level: 60,
    category: "front-end",
  },
  {
    name: "VueJS",
    level: 30,
    category: "front-end",
  },
  {
    name: "Tailwind CSS",
    level: 20,
    category: "front-end",
  },

  //   back-end
  {
    name: "NodeJS",
    level: 30,
    category: "back-end",
  },
  {
    name: "MongoDB",
    level: 30,
    category: "back-end",
  },

  //  tools
  {
    name: "Github",
    level: 70,
    category: "tools",
  },
  {
    name: "VS code",
    level: 60,
    category: "tools",
  },
  {
    name: "AI ChatGPT",
    level: 30,
    category: "tools",
  },
  {
    name: "Photoshop",
    level: 40,
    category: "tools",
  },
  {
    name: "Capcut",
    level: 40,
    category: "tools",
  },
];
const categories = ["all", "front-end", "back-end", "tools"];
export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = Skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skill" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foregeound"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rouded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondery/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level} %
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
