import React, { useState } from "react";
import { Button } from "./ui/button";
import { AnimatedText, FadeIn, HoverScale } from "./Animations";
import ThankYouAnimation from "./ThankYouAnimation";
import ContactFormError from "./ContactFormError";
const Contact = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Simulate an API call
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Randomly succeed or fail
          if (Math.random() > 0.5) {
            resolve({ ok: true });
            setSuccess(true);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          } else {
            reject(new Error("Failed to submit form"));
            setErrorMessage(true);
          }
        }, 1000);
      });

      if (response.ok) {
        setShowThankYou(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      setError("Oops! Something went wrong. Please try again later.");
    }
  };
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     setStatus("pending");
  //     setError(null);
  //     const myForm = event.target;
  //     const formData = new FormData(myForm);
  //     const res = await fetch("/__forms.html", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: new URLSearchParams(formData).toString(),
  //     });
  //     if (res.status === 200) {
  //       setStatus("ok");
  //       setSuccess(true);
  //       setFormData({
  //         name: "",
  //         email: "",
  //         message: "",
  //       });
  //     } else {
  //       setStatus("error");
  //       setError(`${res.status} ${res.statusText}`);
  //       setErrorMessage(true);
  //     }
  //   } catch (e) {
  //     setStatus("error");
  //     setError(`${e}`);
  //     console.error(e);
  //   }
  // };
  return (
    <section id="contact">
      <div className="container">
        <div className="title-container">
          <AnimatedText text="Get in Touch" />
        </div>
        <FadeIn delay={0.3}>
          <form
            className="space-y-6"
            name="contact"
            onSubmit={handleSubmit}
            method="POST"
            data-netlify="true"
          >
            {" "}
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
            {success && (
              <div className="alert alert-success">
                <ThankYouAnimation onClose={() => setSuccess(false)} />
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-error">
                <ContactFormError
                  message="Oops! Something went wrong. Please try again later."
                  onClose={() => setErrorMessage(false)}
                />
              </div>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
