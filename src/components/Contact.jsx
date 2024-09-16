import React from "react";
import { Button } from "./ui/button";
import { AnimatedText, FadeIn, HoverScale } from "./Animations";
const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 max-w-md">
        <AnimatedText
          text="Get in Touch"
          classname="mb-6 text-4xl sm:text-5xl md:text-6xl text-[#D4ADFC] font-thin"
        />
        <FadeIn delay={0.3}>
          <form
            className="space-y-6"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="px-4 bg-[#D4ADFC]/5 rounded-sm border border-[#D4ADFC] block w-full py-2 text-white placeholder:text-gray-400 sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="px-4 bg-[#D4ADFC]/5 rounded-sm border border-[#D4ADFC] block w-full py-2 text-white placeholder:text-gray-400 sm:text-sm"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="px-4 bg-[#D4ADFC]/5 rounded-sm border border-[#D4ADFC] block w-full py-2 text-white placeholder:text-gray-400 sm:text-sm"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <HoverScale>
              <Button
                type="submit"
                className="w-full bg-[#D4ADFC] text-gray-900 hover:bg-[#D4ADFC]/90"
              >
                SEND MESSAGE
              </Button>
            </HoverScale>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
