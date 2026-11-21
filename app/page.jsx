import Image from "next/image";
import Header from "../components/Header";
import TechMarquee from "../components/TechMarquee";
import portrait from "../src/assets/profile.png";
import dataInsightLogo from "../src/assets/datainsight.jpeg";
import tackoomLogo from "../src/assets/tackoom.png";

const companyProjects = [
  {
    id: "tenant-screening-project",
    name: "HomeInsight Screening",
    type: "Tenant screening platform",
    url: "https://screening.homeinsight.cloud",
    host: "screening.homeinsight.cloud",
    image: "/projects/screening-live.png",
    imageAlt: "HomeInsight tenant screening landing page",
    imageCaption: "HomeInsight tenant screening",
    description: "An application and screening flow for property managers and renters.",
    work: [
      "Built applicant forms and signed screening links",
      "Connected property selection, address lookup and form state",
      "Worked on Stripe payments, application status and screening reports",
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "Stripe", "TanStack Query", "Zustand"],
  },
  {
    id: "homeinsight-project",
    name: "HomeInsight",
    type: "Real estate platform",
    url: "https://homeinsight.cloud",
    host: "homeinsight.cloud",
    image: "/projects/homeinsight-live.png",
    imageAlt: "HomeInsight homepage with property search and real estate services",
    imageCaption: "HomeInsight property search",
    description: "A real estate website for finding properties, rentals, agents and useful home-buying tools.",
    work: [
      "Built and improved rental listing and property detail pages",
      "Added tour request and email workflows",
      "Worked on agent pages, navigation and responsive layouts",
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "TanStack Query", "Google Maps"],
  },
  {
    id: "website-builder-project",
    name: "HomeInsight Luxury",
    type: "No-code website builder",
    url: "https://luxury.homeinsight.cloud",
    host: "luxury.homeinsight.cloud",
    image: "/projects/luxury-live.png",
    imageAlt: "HomeInsight Luxury website builder homepage for real estate agents",
    imageCaption: "HomeInsight Luxury website builder",
    description: "A no-code website builder that lets real estate agents create and publish their own websites.",
    work: [
      "Built parts of the page editor and reusable website sections",
      "Connected agent and property data with dynamic subdomains",
      "Worked on Stripe checkout, domain settings and the FastAPI backend",
    ],
    stack: ["Next.js", "TypeScript", "GrapesJS", "FastAPI", "PostgreSQL", "Stripe", "AWS"],
  },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />

      <main id="main-content">
        <section className="hero shell" id="top">
          <div className="hero-grid">
            <article className="intro-card">
              <div className="availability"><span /> Software developer · Remote</div>
              <h1>Hi, I&apos;m Saurav <span aria-hidden="true">👋</span></h1>
              <p className="hero-role">Full-stack developer building useful products for real estate and rental operations.</p>
              <p className="hero-summary">
                I build end-to-end web applications, from responsive interfaces and backend services to cloud deployment, with a focus on performance and reliability.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="#work">See my work</a>
                <a className="secondary-link" href="mailto:sauravkunwar63@gmail.com">Email me</a>
              </div>
            </article>

            <article className="portrait-card">
              <Image src={portrait} alt="Saurav Kunwar" priority sizes="(max-width: 760px) 100vw, 34vw" />
              <div className="portrait-caption"><strong>Saurav Kunwar</strong><span>Software Developer</span></div>
            </article>

            <article className="current-card small-card">
              <span className="card-kicker">Currently</span>
              <div className="company-logo data-insight-logo">
                <Image src={dataInsightLogo} alt="DataInsight logo" sizes="46px" />
              </div>
              <div><strong>DataInsight</strong><p>Software Developer · May 2025 - present</p></div>
            </article>

            <article className="experience-card small-card">
              <span className="card-kicker">Experience</span>
              <strong className="big-number">1.5<span>+</span></strong>
              <p>years building production web applications</p>
            </article>

            <article className="featured-work-card small-card">
              <span className="card-kicker">Selected company work</span>
              <div className="featured-work-links">
                <a href="#tenant-screening-project"><strong>Tenant Screening</strong><span>Application platform</span></a>
                <a href="#homeinsight-project"><strong>HomeInsight</strong><span>Real estate platform</span></a>
                <a href="#website-builder-project"><strong>Agent Site Builder</strong><span>No-code platform</span></a>
              </div>
            </article>
          </div>
        </section>

        <section className="section shell" id="experience">
          <div className="section-title">
            <div><span className="section-index">Experience</span><h2>Where I&apos;ve worked</h2></div>
            <p>My professional journey so far.</p>
          </div>

          <div className="experience-list">
            <article className="job-card">
              <div className="job-logo data-insight-logo">
                <Image src={dataInsightLogo} alt="DataInsight logo" sizes="52px" />
              </div>
              <div className="job-main">
                <div className="job-heading"><div><h3>Software Developer</h3><p>DataInsight · Remote</p></div><time>May 2025 - Present</time></div>
                <p className="job-description">Building and maintaining connected rental-management products for property managers, applicants, and tenants. I work across responsive interfaces, application flows, Next.js APIs, Firebase data, payment workflows, and third-party integrations.</p>
                <div className="tag-row"><span>Next.js</span><span>TypeScript</span><span>Firebase</span><span>Stripe</span><span>Full-time</span></div>
              </div>
            </article>

            <article className="job-card">
              <div className="job-logo tackoom-logo">
                <Image src={tackoomLogo} alt="Tackoom logo" sizes="52px" />
              </div>
              <div className="job-main">
                <div className="job-heading"><div><h3>Web Developer Intern</h3><p>Tackoom</p></div><time>Feb 2025 - Apr 2025</time></div>
                <p className="job-description">Contributed to web development work in a team environment and strengthened my foundation in responsive interfaces, implementation, debugging, and delivery.</p>
                <div className="tag-row"><span>React</span><span>JavaScript</span><span>Responsive UI</span><span>Internship</span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="section shell" id="work">
          <div className="section-title">
            <div><span className="section-index">Company projects</span><h2>Products I&apos;ve worked on</h2></div>
            
          </div>

          <div className="simple-project-list">
            {companyProjects.map((project) => (
              <article className="simple-project" id={project.id} key={project.id}>
                <figure className="project-media">
                  <div className="project-media-frame">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 760px) calc(100vw - 20px), (max-width: 1100px) 58vw, 760px"
                      className={project.imageFit === "contain" ? "is-contained" : undefined}
                    />
                  </div>
                  <figcaption>{project.imageCaption}</figcaption>
                </figure>

                <div className="project-copy">
                  <header className="simple-project-heading">
                    <span>{project.type}</span>
                    <div className="simple-project-title-row">
                      <h3>{project.name}</h3>
                      <a
                        className="project-live-link"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${project.name} live site at ${project.host}`}
                        title={project.host}
                      >
                        Live site
                      </a>
                    </div>
                  </header>
                  <div className="simple-project-body">
                    <p className="simple-project-description">{project.description}</p>
                    <ul className="project-work-list">
                      {project.work.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <dl className="project-stack">
                      <dt>Built with</dt>
                      <dd>{project.stack.join(" · ")}</dd>
                    </dl>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="stack">
          <div className="section-title">
            <div><span className="section-index">Stack</span><h2>Tools I use day to day</h2></div>
            
          </div>

          <TechMarquee />

          <div className="profile-notes">
            

            <article className="about-card" id="about">
              <span className="card-kicker">Outside work</span>
              <h3>Still curious when the laptop closes.</h3>
              <p>I spend time reading, playing futsal, watching anime, listening to music, making art, and slowly learning Japanese.</p>
              <div className="interest-row"><span>本 Japanese</span><span>⚽ Futsal</span><span>ア Anime</span><span>♫ Music</span><span>◌ Art</span></div>
            </article>

            <article className="contact-card" id="contact">
              <span className="card-kicker">Get in touch</span>
              <h3>Have something interesting to build?</h3>
              <a href="mailto:sauravkunwar63@gmail.com">sauravkunwar63@gmail.com</a>
              <div className="social-row"><a href="https://www.linkedin.com/in/saurav-kunwar-83b23933b" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Sauravkunwar321" target="_blank" rel="noreferrer">GitHub</a></div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner"><span>Saurav Kunwar</span><span>Software Developer · {new Date().getFullYear()}</span></div>
      </footer>
    </>
  );
}
