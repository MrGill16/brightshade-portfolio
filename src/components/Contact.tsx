
import React, { useState } from "react";
import AnimatedText from "./ui/animated-text";
import { CardHoverEffect } from "./ui/card-hover-effect";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically handle the form submission, e.g., send an email or store in a database
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl -z-10" />
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-1 px-3 bg-white/[0.05] rounded-full border border-white/[0.08] mb-6">
            <span className="text-sm text-white/80">Get in touch</span>
          </div>
          <AnimatedText
            text="Let's work together"
            className="text-3xl md:text-4xl font-medium leading-tight"
            as="h2"
          />
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to discuss potential opportunities?
            I'm always open to new connections and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <CardHoverEffect>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <MailIcon className="w-5 h-5" />,
                      label: "Email",
                      value: "hello@utsav.dev",
                      href: "mailto:hello@utsav.dev",
                    },
                    {
                      icon: <PhoneIcon className="w-5 h-5" />,
                      label: "Phone",
                      value: "+1 (123) 456-7890",
                      href: "tel:+11234567890",
                    },
                    {
                      icon: <MapPinIcon className="w-5 h-5" />,
                      label: "Location",
                      value: "Remote - Worldwide",
                      href: "#",
                    },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start hover:bg-white/[0.03] p-2 rounded-lg transition-colors"
                    >
                      <div className="p-2 glass-panel rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-white/60">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-4">
                  <p className="text-sm text-white/60 mb-3">Connect with me</p>
                  <div className="flex space-x-3">
                    {[
                      {
                        icon: <GithubIcon className="w-5 h-5" />,
                        href: "https://github.com/",
                        label: "GitHub",
                      },
                      {
                        icon: <LinkedinIcon className="w-5 h-5" />,
                        href: "https://linkedin.com/in/",
                        label: "LinkedIn",
                      },
                      {
                        icon: <TwitterIcon className="w-5 h-5" />,
                        href: "https://twitter.com/",
                        label: "Twitter",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors"
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CardHoverEffect>

            <CardHoverEffect>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Resume</h3>
                <p className="text-white/70 mb-4">
                  Download my resume for a detailed overview of my experience,
                  education, and skills.
                </p>
                <a
                  href="#"
                  className="inline-block px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </CardHoverEffect>
          </div>

          <CardHoverEffect>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full input-glass px-4 py-3 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full input-glass px-4 py-3 text-white"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full input-glass px-4 py-3 text-white resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-5 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </CardHoverEffect>
        </div>
      </div>
    </section>
  );
};

export default Contact;
