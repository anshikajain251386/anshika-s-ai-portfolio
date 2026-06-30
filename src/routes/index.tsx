import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowUpRight, Download, Mail, Github, Linkedin, MapPin, Phone,
  Sparkles, Brain, Code2, Database, Wrench, GraduationCap,
  Award, Briefcase, ExternalLink, Send, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anshika Jain — AI & ML Student | Web Developer" },
      { name: "description", content: "Portfolio of Anshika Jain — building intelligent solutions with AI, Machine Learning and Web Development." },
    ],
  }),
  component: Portfolio,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const } }),
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certs", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--paper)_75%,transparent)] border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-display font-semibold">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent inline-flex items-center justify-center text-primary-foreground text-xs">AJ</span>
          <span>Anshika</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition">
          Let's talk <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} id="top" className="relative pt-32 pb-24 grain-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div style={{ y }} className="absolute -top-10 right-0 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <motion.div style={{ y }} className="absolute top-40 -left-10 w-80 h-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0} className="chip mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for internships · 2026
        </motion.div>

        <motion.h1
          initial="hidden" animate="show" variants={fadeUp} custom={1}
          className="text-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] max-w-4xl"
        >
          Anshika Jain.<br />
          <span className="italic text-primary">Building</span> intelligent<br />
          <span className="text-accent">solutions</span> with AI.
        </motion.h1>

        <motion.p initial="hidden" animate="show" variants={fadeUp} custom={2} className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          AI & Machine Learning student, AI enthusiast and web developer crafting
          real-world projects at the intersection of intelligence and design.
        </motion.p>

        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={3} className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:gap-3">
            View Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card hover:bg-muted transition">
            <Download className="w-4 h-4" /> Download Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card hover:bg-muted transition">
            <Mail className="w-4 h-4" /> Contact Me
          </a>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={fadeUp} custom={4} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            { k: "B.Tech", v: "AI & ML" },
            { k: "2028", v: "Graduating" },
            { k: "5+", v: "Certifications" },
            { k: "Open", v: "to opportunities" },
          ].map((s) => (
            <div key={s.k} className="border-l border-border pl-4">
              <div className="text-display text-2xl font-semibold">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-sm text-accent font-medium tracking-wide uppercase mb-3">{eyebrow}</div>
            <h2 className="text-display text-4xl md:text-5xl font-medium max-w-2xl">{title}</h2>
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title={<>A quick learner, eager to build <em className="text-primary">impactful</em> things.</>}>
      <div className="grid md:grid-cols-3 gap-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="md:col-span-2 space-y-5 text-lg text-ink-soft leading-relaxed">
          <p>
            I'm currently pursuing a <span className="text-foreground font-medium">B.Tech in Artificial Intelligence and Machine Learning</span> at Acropolis Institute of Technology and Research. I'm passionate about AI, ML, software development and web development.
          </p>
          <p>
            I enjoy building real-world projects, learning emerging technologies, and continuously sharpening my technical and problem-solving skills. As a quick learner and adaptable individual, I'm eager to contribute to innovative and impactful projects.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1} className="space-y-4">
          {[
            { label: "Hometown", value: "India" },
            { label: "Currently", value: "Indore, MP" },
            { label: "Focus", value: "AI · ML · Web" },
            { label: "Status", value: "Open to internships" },
          ].map(d => (
            <div key={d.label} className="flex justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">{d.label}</span>
              <span className="font-medium">{d.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title={<>Foundations in <em className="text-accent">intelligence</em>.</>}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="bg-card border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-shadow">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shrink-0">
          <GraduationCap className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <h3 className="text-2xl font-display font-semibold">B.Tech — Artificial Intelligence & Machine Learning</h3>
            <span className="chip">2024 – 2028</span>
          </div>
          <p className="text-ink-soft">Acropolis Institute of Technology and Research</p>
          <p className="text-sm text-muted-foreground mt-1">Affiliated with RGPV University · Expected Graduation 2028</p>
        </div>
      </motion.div>
    </Section>
  );
}

const skillGroups = [
  { icon: Brain, title: "AI & Machine Learning", items: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision"] },
  { icon: Code2, title: "Programming Languages", items: ["Python", "Java", "JavaScript", "PHP"] },
  { icon: Sparkles, title: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
  { icon: Database, title: "Database", items: ["MySQL"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub"] },
  { icon: Award, title: "Interests", items: ["Cybersecurity", "Software Development"] },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>A toolkit shaped by <em className="text-primary">curiosity</em>.</>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => (
          <motion.div key={g.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
            className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <g.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map(it => <span key={it} className="chip">{it}</span>)}
            </div>
          </motion.div>
        ))}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl p-6 md:col-span-2 lg:col-span-3">
          <h3 className="font-display text-lg font-semibold mb-4 opacity-90">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["Problem Solving", "Quick Learner", "Adaptability", "Teamwork", "Continuous Learning"].map(s => (
              <span key={s} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-sm backdrop-blur">
                <span className="w-1 h-1 rounded-full bg-current" />{s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Deep Learning-Based Autonomous Shoplifting Detection System",
      desc: "A real-time computer vision system that detects suspicious shoplifting behavior in retail surveillance footage using deep learning models trained on action-recognition datasets.",
      tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Computer Vision"],
      features: [
        "Real-time video stream analysis",
        "Action recognition with CNN + LSTM",
        "Alert system for suspicious behavior",
        "Trained on custom annotated dataset",
      ],
      github: "https://github.com/",
      demo: null,
    },
  ];
  return (
    <Section id="projects" eyebrow="Selected Work" title={<>Projects where AI meets <em className="text-accent">the real world</em>.</>}>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.article key={p.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i}
            className="group relative bg-card border border-border rounded-3xl p-8 md:p-10 overflow-hidden">
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl group-hover:bg-accent/20 transition" />
            <div className="relative grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <div className="chip mb-4"><Briefcase className="w-3.5 h-3.5" /> Featured Project</div>
                <h3 className="text-display text-3xl md:text-4xl font-medium mb-4 leading-tight">{p.title}</h3>
                <p className="text-ink-soft leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
                    <Github className="w-4 h-4" /> View on GitHub
                  </a>
                  {p.demo && (
                    <a href={p.demo} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="text-sm font-medium uppercase tracking-wide text-accent mb-4">Key Features</div>
                <ul className="space-y-3">
                  {p.features.map(f => (
                    <li key={f} className="flex gap-3 text-sm text-ink-soft">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const certs = [
    { name: "Artificial Intelligence Foundation Certification", org: "Professional Credential" },
    { name: "Introduction to Artificial Intelligence", org: "Course Certificate" },
    { name: "Introduction to Natural Language Processing", org: "Course Certificate" },
    { name: "Basics of Python", org: "Programming" },
    { name: "Cybersecurity Internship", org: "IIT Jodhpur" },
  ];
  return (
    <Section id="certs" eyebrow="Certifications" title={<>Always <em className="text-primary">learning</em>.</>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div key={c.name} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
            className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <Award className="w-6 h-6 text-accent" />
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug mb-1">{c.name}</h3>
            <p className="text-sm text-muted-foreground">{c.org}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>Just <em className="text-accent">getting started</em>.</>}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="bg-gradient-to-br from-secondary to-card border border-border rounded-3xl p-8 md:p-12">
        <div className="chip mb-5">Fresher</div>
        <p className="text-xl md:text-2xl font-display leading-relaxed max-w-3xl">
          I'm currently a fresher actively seeking internship opportunities. I've gained practical experience through academic projects, certifications, and continuous self-learning in <span className="text-primary">Artificial Intelligence</span>, <span className="text-accent">Machine Learning</span>, Web Development and Software Development.
        </p>
      </motion.div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build something <em className="text-primary">together</em>.</>}>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-5">
          {[
            { icon: Mail, label: "Email", value: "anshika.jain@email.com", href: "mailto:anshika.jain@email.com" },
            { icon: Phone, label: "Phone", value: "+91 — Available on request", href: "#" },
            { icon: MapPin, label: "Location", value: "Indore, India", href: "#" },
            { icon: Github, label: "GitHub", value: "github.com/anshika-jain", href: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", value: "Coming Soon", href: "#" },
          ].map(c => (
            <a key={c.label} href={c.href} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition group">
              <div className="w-10 h-10 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                <c.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</div>
                <div className="font-medium truncate">{c.value}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
            </a>
          ))}
        </div>

        <motion.form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="md:col-span-3 bg-card border border-border rounded-3xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" id="name" placeholder="Your name" />
            <Field label="Email" id="email" type="email" placeholder="you@example.com" />
          </div>
          <Field label="Subject" id="subject" placeholder="What's this about?" />
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea required rows={5} placeholder="Tell me about your idea, internship or collaboration..."
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition resize-none" />
          </div>
          <button type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition group">
            {sent ? "Message sent ✓" : <>Send message <Send className="w-4 h-4 group-hover:translate-x-0.5 transition" /></>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">{label}</label>
      <input id={id} type={type} required placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-display text-2xl font-semibold mb-2">Anshika Jain</div>
          <p className="text-sm text-muted-foreground max-w-xs">Building intelligent solutions, one project at a time.</p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3 uppercase tracking-wide text-muted-foreground">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {["About", "Skills", "Projects", "Contact"].map(l =>
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition">{l}</a></li>
            )}
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium mb-3 uppercase tracking-wide text-muted-foreground">Connect</div>
          <div className="flex gap-3">
            <a href="https://github.com" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition"><Github className="w-4 h-4" /></a>
            <a href="mailto:anshika.jain@email.com" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition"><Mail className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Anshika Jain. All rights reserved.</div>
        <div>Designed & Developed by <span className="text-foreground">Anshika Jain</span></div>
      </div>
    </footer>
  );
}
