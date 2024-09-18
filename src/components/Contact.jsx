import React, { useState } from "react";
import { Button } from "./ui/button";
import { AnimatedText, FadeIn, HoverScale } from "./Animations";
const Contact = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="title-container">
          <AnimatedText text="Get in Touch" />
        </div>
        <FadeIn delay={0.3}>
          <form
            className="space-y-6"
            name="feedback"
            onSubmit={handleFormSubmit}
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
                className="px-4 bg-[#D4ADFC]/5 rounded-sm border border-[#D4ADFC] block w-full py-2  placeholder:text-gray-400 sm:text-sm"
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
                className="px-4 bg-[#D4ADFC]/5 rounded-sm border border-[#D4ADFC] block w-full py-2  placeholder:text-gray-400 sm:text-sm"
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
                className="px-4 bg-[#D4ADFC]/5 rounded-sm border border-[#D4ADFC] block w-full py-2  placeholder:text-gray-400 sm:text-sm"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <HoverScale>
              <Button type="submit" variant="secondary" className="w-full">
                SEND MESSAGE
              </Button>
            </HoverScale>
            {status === "ok" && (
              <div className="alert alert-success">
                <SuccessIcon />
                Submitted!
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-error">
                <ErrorIcon />
                {error}
              </div>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
function ErrorIcon(success) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
export default Contact;
