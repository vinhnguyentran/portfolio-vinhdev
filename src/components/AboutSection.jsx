import { Code, Dock, User } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              TRAINING COOPERATION WITH DANANG VOCATIONAL TRAINING COLLEGE
            </h3>
            <p className="text-muted-foreground ">
              Add basic and necessary knowledge to bring value to the company.
              Update new technologies to help yourself and your business keep up
              with the times
            </p>
            <p className="text-muted-foreground ">
              Add basic and necessary knowledge to bring value to the company.
              Update new technologies to help yourself and your business keep up
              with the times
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://www.topcv.vn/xem-cv/VVNUBwIHU1pRBgZUBV0ABVNZUVICA1JRAVQOBQd2a8"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="gird gird-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Freelance Brand Designer
                  </h4>
                  <p className="text-muted-foreground">
                    Autonomous in taking on projects from individuals, startups,
                    or businesses to build their brand identity
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Dock className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Content Creater</h4>
                  <p className="text-muted-foreground">
                    writing articles, making TikTok videos, taking Instagram
                    photos, to building website content, YouTube, podcasts,@.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
