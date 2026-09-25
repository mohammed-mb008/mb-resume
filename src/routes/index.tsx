import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CircuitBoard,
  Cloud,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Languages as LanguagesIcon,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import aiIdentityImage from "@/assets/project-ai-identity.jpg";
import robotImage from "@/assets/project-line-robot.jpg";
import expenseImage from "@/assets/project-expense-tracker.jpg";
import classroomImage from "@/assets/project-classroom-new.png";
import profilePhoto from "@/assets/profile-photo.png";

const email = "mohammedbilaalbasha2005@gmail.com";
const phone = "+919944758261";
const github = "https://github.com/mohammed-mb008";
const linkedin = "https://www.linkedin.com/in/mohammed-bilaal-basha-?utm_source=share_via&utm_content=profile&utm_medium=member_android";

const navItems = ["Home", "About", "Education", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const skills = [
  { title: "Programming", icon: Code2, items: ["Python", "Java", "HTML", "C", "C++"], strong: ["Python", "C++"] },
  { title: "Cloud & AI", icon: Cloud, items: ["AWS Fundamentals", "Microsoft Azure AI", "AI-900 Certification"] },
  { title: "Engineering & Tools", icon: CircuitBoard, items: ["SolidWorks · 3D Modeling", "MS Excel", "Git", "GitHub"], strong: ["MS Excel"] },
  { title: "Core Areas", icon: Cpu, items: ["Embedded Systems", "IoT", "Deep Learning", "Natural Language Processing"] },
];

const experiences = [
{
  role: "Embedded Systems Intern",
  company: "CommonRocket",
  date: "June 2026",
  mode: "On-site",
  tags: ["Embedded Systems", "STM32", "Embedded C"],
  details: [
    "Gained hands-on experience with STM32 microcontrollers, Embedded C, STM32CubeIDE, GPIO, timers, PWM, UART, motor control, peripheral interfacing, and hardware debugging.",
    "Developed practical knowledge of DC and stepper motor control using driver modules, applying embedded concepts to industrial automation and control applications through programming, testing, and debugging.",
  ],
},
  {
    role: "AI Text Summarization Intern",
    company: "AICTE Online",
    date: "December 2025",
    mode: "Online",
    tags: ["AI", "NLP", "Machine Learning"],
    details: [
      "Developed and analyzed AI-based text summarization models utilizing machine learning algorithms.",
      "Gained hands-on experience structuring NLP pipeline architectures and model frameworks.",
    ],
  },
  {
    role: "Industrial Design Intern",
    company: "TITAN Watches",
    date: "June 2025",
    mode: "On-site",
    tags: ["Industrial Design", "Manufacturing", "Workflow"],
    details: [
      "Observed industrial-scale product design pipelines and collaborated with design teams to optimize operational workflows.",
      "Analyzed physical manufacturing layouts to identify, report, and help resolve operational bottlenecks.",
    ],
  },
  {
    role: "IT Project Intern",
    company: "Dia Infra Solutions Pvt. Ltd.",
    date: "August 2024",
    mode: "On-site",
    tags: ["Project Planning", "IT", "Documentation"],
    details: [
      "Acquired key insights into conceptual design layouts and standard IT-driven project management methodologies.",
      "Assisted in documenting structured project milestone plans and technical workflow blueprints.",
    ],
  },
  {
    role: "AWS Cloud Intern",
    company: "Internship Studio",
    date: "March 2024",
    mode: "Online",
    tags: ["AWS", "Cloud", "Networking"],
    details: [
      "Completed practical hands-on training on fundamental AWS operations and infrastructure deployment.",
      "Built and tested virtualized computing environments, databases, and secure networking architectures using AWS core services.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "AI-Powered Digital Identity Protection Application",
    category: "Artificial Intelligence / Deep Learning",
    description: "Engineered an AI application using deep learning to detect the unauthorized use of personal facial images across digital platforms. Implemented high-accuracy facial recognition models, providing user alerts to secure online identities.",
    tags: ["Deep Learning", "Facial Recognition", "AI"],
    image: aiIdentityImage,
  },
  {
    number: "02",
    title: "Line Following Robot Using Embedded Systems",
    category: "Mechatronics / Embedded Systems / IoT",
    description: "Designed and constructed an autonomous mobile robot equipped with infrared sensor-based control feedback systems. Programmed embedded control logic parameters to achieve real-time speed control and directional path correction.",
    tags: ["Embedded Systems", "IR Sensors", "Robotics", "IoT"],
    image: robotImage,
  },
  {
    number: "03",
    title: "Personal Expense Tracker Web App",
    category: "Full-Stack Web Development",
    description: "Developed a clean responsive web-based tracking dashboard for managing personal budgets and recurring expenses. Created a modern frontend with HTML and built robust backend transaction-handling algorithms in Java.",
    tags: ["HTML", "Java", "Web Development"],
    image: expenseImage,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Bilaal Basha A — Mechatronics, AI & Embedded Systems" },
      { name: "description", content: "Portfolio of Mohammed Bilaal Basha A, a final-year Mechatronics Engineering student working across AI, IoT, embedded systems, robotics, cloud, and software development." },
      { property: "og:title", content: "Mohammed Bilaal Basha A — Engineering Portfolio" },
      { property: "og:description", content: "Mechatronics Engineering, AI, IoT, embedded systems, robotics, cloud, and software projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="section-kicker"><span />{kicker}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  const links = [
    { href: github, label: "GitHub", Icon: Github },
    { href: linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${email}`, label: "Email", Icon: Mail },
    { href: `tel:${phone}`, label: "Phone", Icon: Phone },
  ];
  return (
    <div className={compact ? "social-links compact" : "social-links"}>
      {links.map(({ href, label, Icon }) => (
        <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} title={label}>
          <Icon size={18} />{compact ? null : <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openExperience, setOpenExperience] = useState(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Portfolio enquiry");
    const body = `Hello Mohammed,\n\n${String(data.get("message") || "")}\n\nFrom: ${String(data.get("name") || "")} (${String(data.get("email") || "")})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Mohammed Bilaal Basha home"><span>MB</span><i /></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-resume" href="./mohammed-bilaal-basha-resume.pdf" target="_blank" rel="noreferrer"><FileText size={15} />View Resume</a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-dark">
          <div className="tech-grid" aria-hidden="true" />
          <div className="hero-copy reveal">
            <p className="availability"><span /> Open to internships & graduate opportunities</p>
            <p className="eyebrow">Mechatronics × Intelligence × Systems</p>
            <h1>Mohammed<br /><em>Bilaal Basha A</em></h1>
            <h2>Final-Year B.E. Mechatronics Engineering Student</h2>
            <p className="hero-headline">AI & Deep Learning <b>•</b> IoT <b>•</b> Embedded Systems</p>
            <p className="hero-intro">A final-year Mechatronics Engineering student passionate about combining engineering, programming, artificial intelligence, IoT, and embedded technologies to develop practical and innovative solutions.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my projects <ArrowDown size={17} /></a>
              <a className="button secondary" href="./mohammed-bilaal-basha-resume.pdf" download><Download size={17} /> Download resume</a>
              <a className="button ghost" href="#contact">Contact me <ArrowUpRight size={17} /></a>
            </div>
            <SocialLinks />
          </div>
          <div className="hero-visual reveal delay-1">
            <div className="profile-orbit" aria-label="Profile photo of Mohammed Bilaal Basha A">
              <div className="orbit-ring" />
              <div className="profile-photo"><img src={profilePhoto} alt="Mohammed Bilaal Basha A" width={800} height={800} loading="eager" /></div>
              <span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" />
            </div>
            <div className="hero-metric metric-one"><Cpu size={17} /><span>Focus</span><strong>Intelligent Systems</strong></div>
            <div className="hero-metric metric-two"><GraduationCap size={17} /><span>CGPA</span><strong>8.40 / 10</strong></div>
            <div className="coordinate">11.0168° N<br />76.9558° E</div>
          </div>
          <a href="#about" className="scroll-cue" aria-label="Scroll to about"><span>Scroll to explore</span><ArrowDown size={16} /></a>
        </section>

        <section id="about" className="section section-alt">
          <div className="section-inner about-layout">
            <div>
              <SectionHeading kicker="01 / About" title="Engineering ideas into intelligent solutions." />
              <p className="about-lead">I’m a final-year B.E. Mechatronics Engineering student at SNS College of Technology, interested in connecting core engineering knowledge with modern computing technologies.</p>
              <p className="body-copy">My work spans physical systems and digital intelligence—from embedded control and robotics to deep learning, NLP, cloud computing, software development, and engineering design.</p>
              <div className="interest-row">
                {["Artificial Intelligence", "Deep Learning", "NLP", "IoT", "Embedded Systems", "Robotics", "Cloud Computing", "Software Development", "Engineering Design"].map((interest) => <span key={interest}>{interest}</span>)}
              </div>
            </div>
            <div className="info-grid">
              {[
                ["Education", "B.E. Mechatronics Engineering", GraduationCap],
                ["Institution", "SNS College of Technology", CircuitBoard],
                ["Academic status", "Final-Year Student", Sparkles],
                ["CGPA", "8.40 up to VI Semester", Award],
              ].map(([label, value, Icon]) => {
                const CardIcon = Icon as typeof GraduationCap;
                return <article className="info-card" key={String(label)}><CardIcon size={20} /><span>{String(label)}</span><strong>{String(value)}</strong></article>;
              })}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-inner narrow">
            <SectionHeading kicker="02 / Education" title="Academic foundation." copy="Building a multidisciplinary base across mechanics, electronics, controls, and computation." />
            <div className="education-timeline">
              <div className="timeline-track"><span /></div>
              <article className="education-entry">
                <div className="entry-year">2024 — 2027</div>
                <div><p className="entry-type">Undergraduate degree · In progress</p><h3>B.E. Mechatronics Engineering</h3><h4>SNS College of Technology</h4><p>CGPA <strong>8.40</strong> up to VI Semester</p></div>
              </article>
              <div className="future-entry"><span>+</span><p>Future education entry</p></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="section-inner">
            <SectionHeading kicker="03 / Capabilities" title="Technical skills." copy="A practical toolkit across software, intelligent systems, cloud, and engineering design." />
            <div className="skill-grid">
              {skills.map(({ title, icon: Icon, items, strong }) => (
                <article className="skill-card" key={title}>
                  <div className="skill-card-head"><Icon size={22} /><span>0{skills.findIndex((skill) => skill.title === title) + 1}</span></div>
                  <h3>{title}</h3>
                  <ul>{items.map((item) => <li key={item} className={strong?.includes(item) ? "strong-skill" : ""}><CheckCircle2 size={14} />{item}{strong?.includes(item) ? <small>Trained strength</small> : null}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="soft-skills">
              <h3>Professional strengths</h3>
              <div>
                {[["Communication", MessageSquare], ["Critical Thinking", BrainCircuit], ["Leadership", Users]].map(([name, Icon]) => {
                  const SoftIcon = Icon as typeof MessageSquare;
                  return <article key={String(name)}><SoftIcon size={21} /><strong>{String(name)}</strong><ArrowUpRight size={16} /></article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-inner experience-layout">
            <SectionHeading kicker="04 / Experience" title="Practical exposure." copy="Internships across AI, industrial design, project workflows, and cloud infrastructure." />
            <div className="experience-list">
              {experiences.map((item, index) => {
                const open = openExperience === index;
                return (
                  <article className={open ? "experience-item open" : "experience-item"} key={item.role}>
                    <button type="button" onClick={() => setOpenExperience(open ? -1 : index)} aria-expanded={open}>
                      <span className="experience-index">0{index + 1}</span>
                      <span className="experience-title"><strong>{item.role}</strong><small>{item.company}</small></span>
                      <span className="experience-date">{item.date}<small>{item.mode}</small></span>
                      <ChevronDown size={19} />
                    </button>
                    <div className="experience-details">
                      <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-projects">
          <div className="section-inner">
            <SectionHeading kicker="05 / Selected work" title="Projects built at the intersection of hardware and intelligence." />
            <div className="projects-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-image"><img src={project.image} alt="" loading="lazy" width={1408} height={912} /><span>{project.number}</span></div>
                  <div className="project-content">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="project-links"><a href={github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub profile <ArrowUpRight size={15} /></a></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="future-project">
              <div className="future-project-image"><img src={classroomImage} alt="IoT & AI Powered Intelligent Classroom Management System" loading="lazy" width={1408} height={912} /></div>
              <div className="future-project-content">
              <div className="future-project-head"><span>Next in development</span><h3>IoT & AI Powered Intelligent Classroom Management System</h3><p className="future-project-summary">Developing an IoT and AI-powered intelligent classroom management system to automate attendance, classroom monitoring, and energy management.</p></div>
              <div className="future-project-body">
                <ul>
                  <li><CheckCircle2 size={15} /> Implemented fingerprint-based attendance using a biometric sensor and Python to record and monitor student attendance in real time.</li>
                  <li><CheckCircle2 size={15} /> Designed a teacher dashboard to display attendance status, class schedules, upcoming periods, and automated notifications.</li>
                  <li><CheckCircle2 size={15} /> Integrated temperature and humidity sensors to monitor classroom conditions and automatically control lights, fans, and AC based on requirements.</li>
                  <li><CheckCircle2 size={15} /> Exploring camera-based student counting using AI/Computer Vision to estimate classroom occupancy and improve energy efficiency.</li>
                </ul>
                <div className="tag-row">{["Python", "IoT", "AI / Computer Vision", "Fingerprint Sensor", "Temperature & Humidity Sensors", "Camera", "Cloud Database", "Web Dashboard"].map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
               </div>
              <Cpu size={30} />
            </div>
          </div>
        </section>

        <section id="certifications" className="section section-alt">
          <div className="section-inner credentials-layout">
            <div>
              <SectionHeading kicker="06 / Credentials" title="Certifications & training." />
              <div className="certificate-feature">
                <div className="certificate-mark"><Award size={30} /><span>AI</span></div>
                <div><p>Microsoft Azure AI</p><h3>AI-900 Certification</h3><span>Microsoft</span></div>
              </div>
              <div className="training-grid">
                <article><Cloud size={21} /><div><span>Training</span><strong>AWS Cloud Internship / Training</strong></div></article>
                <article><BrainCircuit size={21} /><div><span>Experience</span><strong>AI / NLP Internship</strong></div></article>
              </div>
            </div>
            <div className="languages-panel">
              <p className="section-kicker"><span />Languages</p>
              <LanguagesIcon size={28} />
              <div>{["English", "Tamil", "Hindi", "Urdu"].map((language, index) => <article key={language}><span>0{index + 1}</span><strong>{language}</strong></article>)}</div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume-band">
          <div className="section-inner resume-inner">
            <div><p className="section-kicker"><span />Resume</p><h2>Want to know more<br />about my experience?</h2><p>Explore my complete resume to learn more about my education, technical skills, internships, projects, and certifications.</p></div>
            <div className="resume-actions"><FileText size={36} /><a className="button primary" href="./mohammed-bilaal-basha-resume.pdf" target="_blank" rel="noreferrer">View resume <ExternalLink size={17} /></a><a className="button secondary" href="./mohammed-bilaal-basha-resume.pdf" download><Download size={17} /> Download PDF</a></div>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="section-inner">
            <SectionHeading kicker="07 / Contact" title="Let’s build something meaningful." copy="Open to internship opportunities, graduate roles, technical collaborations, and engineering conversations." />
            <div className="contact-layout">
              <div className="contact-details">
                <a href={`mailto:${email}`}><Mail size={19} /><span>Email<strong>{email}</strong></span><ArrowUpRight size={17} /></a>
                <a href={`tel:${phone}`}><Phone size={19} /><span>Phone<strong>+91 99447 58261</strong></span><ArrowUpRight size={17} /></a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} /><span>LinkedIn<strong>Mohammed Bilaal Basha A</strong></span><ArrowUpRight size={17} /></a>
                <a href={github} target="_blank" rel="noreferrer"><Github size={19} /><span>GitHub<strong>mohammed-mb008</strong></span><ArrowUpRight size={17} /></a>
                <div className="contact-placeholder"><MapPin size={19} /><span>Location<strong>Available on request</strong></span></div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row"><label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label></div>
                <label>Subject<input name="subject" required placeholder="What would you like to discuss?" /></label>
                <label>Message<textarea name="message" required rows={5} placeholder="Write your message..." /></label>
                <button className="button primary" type="submit">Send message <Send size={17} /></button>
                <p>Opens your email app with the message ready to send.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top"><a className="brand" href="#home"><span>MB</span><i /></a><div><strong>Mohammed Bilaal Basha A</strong><span>Final-Year B.E. Mechatronics Engineering Student</span></div><SocialLinks compact /></div>
        <div className="footer-bottom"><p>© Mohammed Bilaal Basha A. All Rights Reserved.</p><nav>{["Home", "About", "Skills", "Experience", "Projects", "Resume", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav></div>
      </footer>
    </div>
  );
}
