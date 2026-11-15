
import "./App.css";

const skills = [
  "Python",
  "Scikit-learn",
  "Supervised Machine Learning",
  "XGBoost",
  "Streamlit",
  "Model Evaluation",
  "Feature Engineering",
  "LLM"
];

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING COMPARISON",
    title: "Early Classification of Short-form Video Virality ",
    description:
      "An early-classification project comparing machine learning models to predict video virality from early engagement signals.",
    tags: ["Scikit-learn", "Classification", "Feature Engineering", "Model Evaluation", "Machine Learning"],
    link: "https://github.com/Kiyotaka-07/YT-shorts-virality-prediction---Comparison-of-machine-learning-models"
  },

  {
    number: "02",
    category: "MACHINE LEARNING PREDICTOR",
    title: "CO₂ Vehicle Emission Predictor ",
    description:
      "A team machine learning project with five members that estimating vehicle emission based on vehicle characteristics.",
    tags: ["Python", "XGBoost", "Streamlit", "Model Evaluation", "Feature Engineering", "Sci-kit Learn"],
    link: "https://machine-learning-co2-vehicle-prediction.streamlit.app",
  },

  {
    number: "03",
    category: "AI AGENT",
    title: "AI Stock Market Analyst",
    description:
      "An AI-powered application exploring Indonesian stock data, market trends, and financial news to support stock analysis.",
    tags: ["Python", "LLM", "yfinance", "Streamlit"],
    link: "https://stock-analyzer-ai-agent.streamlit.app",
  },
];

function App() {
  return (
    <div className="site-wrapper">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">J</span>
          <span>PORTFOLIO</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Connect <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              COMPUTER SCIENCE STUDENT
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              An aspiring
              <br />
              <span className="gradient-text">AI Engineer.</span>
            </h1>

            <p className="hero-description">
              I build practical AI and machine learning solutions,
              turning data into useful insights and real-world applications.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore Projects <span>↗</span>
              </a>
              <a className="button button-secondary" href="/cv_jovin.pdf" target="_blank" rel="noreferrer">
                View My CV <span>↗</span>
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/Kiyotaka-07/" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <span className="social-divider">|</span>
              <a href="https://linkedin.com/in/jovin-amadeus/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>

              <span className="social-divider">|</span>
              <a href="https://wa.me/6281377588660/" target="_blank" rel="noreferrer">
                WhatsApp ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-glow" />
            <div className="photo-frame">
              <img
                src="/profile.png"
                alt="Profile portrait"
                className="profile-photo"
              />
              <div className="photo-caption">
                <span className="caption-line" />
                <div>
                  <span className="caption-label">CURRENT FOCUS</span>
                  <strong>Computer Science | Intelligence System</strong>
                </div>
              </div>
            </div>

            {/* <div className="floating-tag tag-top">
              <span className="tag-icon">✳</span>
              <span>Machine Learning</span>
            </div>
            <div className="floating-tag tag-bottom">
              <span className="tag-icon">⌘</span>
              <span>Building & Learning</span>
            </div> */}

            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
          </div>
        </section>

        <section className="intro-strip">
          <div className="section-container intro-inner">
            <span className="intro-label">MY INTERESTS</span>
            <div className="interest-list">
              <span>Machine Learning</span>
              <span className="interest-dot">✳</span>
              <span>Predictive Analytics</span>
              <span className="interest-dot">✳</span>
              <span>Applied AI</span>
            </div>
          </div>
        </section>

        <section className="content-section section-container" id="about">
          <div className="section-heading">
            <p className="eyebrow">ABOUT ME</p>
            <h2>
              Curious about data.
              <br />
              <span className="muted-heading">Driven to build with AI.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                 I am a Computer Science student in Bina Nusantara University, 
                 passionate about Artificial Intelligence and its real-world applications.
              </p>
              <p className="body-copy">
                I enjoy exploring how data and machine learning can solve
                practical problems. Through my projects, I've worked on
                predictive modeling, NLP, and AI-powered applications,
                from preparing datasets and evaluating models to building
                interfaces that make results easier to use.
              </p>
              <p className="body-copy">
                I am continually expanding my technical skill set
                and am currently looking for professional
                opportunities to grow in the AI field.
              </p>
            </div>

            <div className="about-side">
              <div className="info-card">
                <span className="info-index">01 / APPROACH</span>
                <h3>Learn by building</h3>
                <p>
                  I turn concepts into practical projects and improve through
                  experimentation and evaluation.
                </p>
              </div>
              <div className="info-card">
                <span className="info-index">02 / DIRECTION</span>
                <h3>Applied AI</h3>
                <p>
                  I'm interested in building useful AI systems, not just
                  training models in isolation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">TOOLS I WORK WITH</p>
              <h2>
                My technical <span className="gradient-text">toolkit.</span>
              </h2>
              <p className="section-subtitle">
                Technologies I've used across my projects and continue to develop.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{skill}</span>
                  <span className="skill-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-container" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>
                Projects built with
                <br />
                <span className="muted-heading">curiosity and purpose.</span>
              </h2>
            </div>
            <p className="projects-intro">
              A selection of projects where I explore machine learning,
              data-driven prediction, and applied AI.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  aria-label={`View ${project.title}`}
                  rel="noreferrer"
                  title="Project details (Github/Web page)"
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-container contact-inner">
            <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
            <h2>
              Let's build something
              <br />
              <span className="gradient-text">meaningful.</span>
            </h2>
            <p>
              I'm open to connecting with people working on AI, machine
              learning, and interesting technical projects.
            </p>
            
            <div className="get-in-touch">
              <a>Get in Touch</a>
            </div>


            <div className="hero-socials-2">
              <a href="https://github.com/Kiyotaka-07/" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <span className="social-divider">|</span>
              <a href="https://linkedin.com/in/jovin-amadeus/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>

              <span className="social-divider">|</span>
              <a href="https://wa.me/6281377588660/" target="_blank" rel="noreferrer">
                WhatsApp ↗
              </a> 

            </div>
            
            <div className="hero-socials-2">
              <a >
                Email: jovin.christovel@binus.ac.id
              </a> 
            </div>

          </div>
        </section>
      </main>

      <footer className="footer section-container">
        <a className="brand" href="#home">
          <span className="brand-mark">J</span>
          <span>PORTFOLIO</span>
        </a>
        <p>Designed & built with curiosity.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;