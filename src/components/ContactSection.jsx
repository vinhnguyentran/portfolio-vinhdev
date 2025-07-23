import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message, I Will get back to you soon",
      });
      setIsSubmiting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center mb-12 text-muted-foreground mx-auto max-w-2xl">
          If you have any ideas or want to cooperate, please leave your contact
          information in the form below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Infomation</h3>
            <div className="space-y-6 justify-center">
              <div className="items-start flex space-x-6">
                <div className="rounded-full p-3 bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email:</h4>
                  <a
                    href="mailto:vinh.nguyentrandev@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-color"
                  >
                    vinh.nguyentrandev@gmail.com
                  </a>
                </div>
              </div>
              <div className="items-start flex space-x-6">
                <div className="rounded-full p-3 bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone:</h4>
                  <a
                    href="tel:+84773897599"
                    className="text-muted-foreground hover:text-primary transition-color"
                  >
                    (+84) 77-389-7599
                  </a>
                </div>
              </div>
              <div className="items-start flex space-x-6">
                <div className="rounded-full p-3 bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location:</h4>
                  <a
                    href="https://www.google.com/maps/place/Ho%C3%A0+Li%C3%AAn,+H%C3%B2a+Vang,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.1041714,108.0311643,10123m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31421f94b738b5f7:0xf8d5705747c357a3!8m2!3d16.1048414!4d108.07765!16s%2Fg%2F1hb_h5fwc?hl=vi&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                    className="text-muted-foreground hover:text-primary transition-color"
                  >
                    Hoa Lien-Hoa Vang-Da Nang City
                  </a>
                </div>
              </div>
              <div className="pt-8 text-left">
                <h4 className="font-medium mb-4">Contact Me</h4>
                <div className="space-x-4 justify-start flex">
                  <a href="" target="_blank">
                    <Facebook />
                  </a>
                  <a href="" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="" target="_blank">
                    <Twitter />
                  </a>
                  <a href="" target="_blank">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
            <div className="text-2xl font-semibold mb-6">
              <h3 className="text-center">Send a messge</h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-left font-medium mb-2"
                  >
                    Your name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Vinh Nguyen..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-left font-medium mb-2"
                  >
                    Your Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                    placeholder="vinh.nguyentrandev@gmail.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-left font-medium mb-2"
                  >
                    Your Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="I have some ideas..."
                  />
                </div>
                <button
                  disabled={isSubmiting}
                  type="submit"
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmiting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
