import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Globe, Send, CheckCircle, Radio, ShieldCheck, Zap } from 'lucide-react';
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
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Contact</span>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter italic">Get in <span className="text-accent">Touch.</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
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
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                <Mail size={24} />
              </div>
              <h3 className="text-3xl font-black tracking-tight">Connect with Me.</h3>
            </div>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="text-xl text-text-sub mb-12 leading-relaxed font-medium"
            >
              I'm always open to discussing new projects, creative ideas, or research opportunities. Reach out using the channels below or the form.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
                { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: resumeData.contact.linkedin },
                { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: resumeData.contact.github },
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
                    backgroundColor: "rgba(var(--accent-rgb), 0.05)"
                  }}
                  className="flex items-center gap-6 p-8 bg-bg-sub/40 backdrop-blur-xl rounded-[2.5rem] border border-border-main hover:shadow-accent-sm transition-all duration-500 group"
                >
                  <div className="p-5 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-black text-text-main text-lg tracking-tight">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-accent/5 rounded-3xl border border-accent/10 flex items-center gap-4">
              <ShieldCheck size={20} className="text-accent" />
              <p className="text-xs font-mono text-text-sub uppercase tracking-widest">Available for collaboration across global timezones</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-[4rem] opacity-50" />
            
            <div className="relative bg-bg-sub/60 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] border border-border-main hover:border-accent/20 transition-all duration-500 shadow-accent-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: 1 }}
                    className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-10"
                  >
                    <CheckCircle size={64} />
                  </motion.div>
                  <h4 className="text-4xl font-display font-black mb-4 tracking-tighter">Message Sent.</h4>
                  <p className="text-text-sub text-xl font-medium">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-mono font-bold text-accent uppercase tracking-[0.3em] ml-4">Full Name</label>
                        <motion.input
                          whileFocus={{ scale: 1.02, borderColor: "var(--color-accent)" }}
                          required
                          name="name"
                          type="text"
                          className="w-full px-8 py-6 bg-bg-sub/50 border border-border-main rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all text-text-main placeholder:text-text-sub/20 font-bold"
                          placeholder="Your Name"
                        />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-mono font-bold text-accent uppercase tracking-[0.3em] ml-4">Email Address</label>
                        <motion.input
                          whileFocus={{ scale: 1.02, borderColor: "var(--color-accent)" }}
                          required
                          name="email"
                          type="email"
                          className="w-full px-8 py-6 bg-bg-sub/50 border border-border-main rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all text-text-main placeholder:text-text-sub/20 font-bold"
                          placeholder="email@example.com"
                        />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-bold text-accent uppercase tracking-[0.3em] ml-4">Subject</label>
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "var(--color-accent)" }}
                      required
                      name="subject"
                      type="text"
                      className="w-full px-8 py-6 bg-bg-sub/50 border border-border-main rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all text-text-main placeholder:text-text-sub/20 font-bold"
                      placeholder="Collaboration / Project / Question"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-bold text-accent uppercase tracking-[0.3em] ml-4">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02, borderColor: "var(--color-accent)" }}
                      required
                      name="message"
                      rows={4}
                      className="w-full px-8 py-6 bg-bg-sub/50 border border-border-main rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all resize-none text-text-main placeholder:text-text-sub/20 font-bold"
                      placeholder="How can I help?"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(var(--accent-rgb), 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-7 bg-accent text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 transition-all shadow-lg"
                  >
                    Send Message <Send size={24} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
