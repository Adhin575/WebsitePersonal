import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Globe, Send, CheckCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Construct mailto link
    const mailtoLink = `mailto:${resumeData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    // Open mail client
    window.location.href = mailtoLink;

    setIsSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: [getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()]
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4">Get In Touch</h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mx-auto rounded-full" 
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.h3 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="text-3xl font-bold mb-6"
            >
              Let's build something amazing together.
            </motion.h3>
            <motion.p 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="text-lg text-text-sub mb-12 leading-relaxed"
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
                { icon: Linkedin, label: 'LinkedIn', value: resumeData.contact.linkedin, href: resumeData.contact.linkedin },
                { icon: Github, label: 'GitHub', value: resumeData.contact.github, href: resumeData.contact.github },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ 
                    x: 10,
                    borderColor: "var(--color-accent)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="flex items-center gap-6 p-6 bg-bg-main rounded-[2rem] border border-border-main hover:shadow-accent-sm transition-all group"
                >
                  <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-bold text-text-main">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="bg-bg-main p-10 rounded-[3rem] border border-border-main hover:border-accent/20 transition-all shadow-accent-sm"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: 1 }}
                  className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-8"
                >
                  <CheckCircle size={56} />
                </motion.div>
                <h4 className="text-3xl font-display font-black mb-4">Message Sent!</h4>
                <p className="text-text-sub text-lg">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-mono font-bold text-accent uppercase tracking-[0.2em] ml-2">Name</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: "var(--color-accent)" }}
                        required
                        name="name"
                        type="text"
                        className="w-full px-8 py-5 bg-bg-sub border border-border-main rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all text-text-main placeholder:text-text-sub/40"
                        placeholder="XXX123"
                      />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-mono font-bold text-accent uppercase tracking-[0.2em] ml-2">Email</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: "var(--color-accent)" }}
                        required
                        name="email"
                        type="email"
                        className="w-full px-8 py-5 bg-bg-sub border border-border-main rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all text-text-main placeholder:text-text-sub/40"
                        placeholder="x123@example.com"
                      />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold text-accent uppercase tracking-[0.2em] ml-2">Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "var(--color-accent)" }}
                    required
                    name="subject"
                    type="text"
                    className="w-full px-8 py-5 bg-bg-sub border border-border-main rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all text-text-main placeholder:text-text-sub/40"
                    placeholder="Project Inquiry / Employment"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold text-accent uppercase tracking-[0.2em] ml-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, borderColor: "var(--color-accent)" }}
                    required
                    name="message"
                    rows={5}
                    className="w-full px-8 py-5 bg-bg-sub border border-border-main rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all resize-none text-text-main placeholder:text-text-sub/40"
                    placeholder="I would love to contact and talk to you"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(var(--accent-rgb), 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-6 bg-accent text-white rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-4 transition-all"
                >
                  Send Message <Send size={24} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
