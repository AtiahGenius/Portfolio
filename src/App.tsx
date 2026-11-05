import { useEffect, useRef, useState } from "react"
const portrait = `${import.meta.env.BASE_URL}atiag-portrait.webp`

type Project = {
  title: string
  category: string
  year: string
  status: string
  role: string
  scope: string
  tags: string[]
  description: string
  image: string
  color: string
}

const projects: Project[] = [
  {
    title: "Anon",
    category: "Product Design",
    year: "2025",
    status: "Product case study",
    role: "Product & UI/UX Lead",
    scope: "Strategy · User flows · Interface system",
    tags: ["Product strategy", "UI/UX"],
    description:
      "An anonymous advice platform designed around privacy, accessibility, and low-friction conversation.",
    image: "/images/ui/Anon.png",
    color: "#d9ff43",
  },
  {
    title: "IHelp Africa",
    category: "Websites",
    year: "2025",
    status: "Client project",
    role: "UI/UX Designer",
    scope: "Web design · Development · Content structure",
    tags: ["Web design", "Front-end"],
    description:
      "A clear, story-led website for IHelp Africa, built to improve the organization's visibility and trust.",
    image: "/images/ui/3.png",
  
    color: "#e3a76f",
  },
  {
    title: "Algorithmic Explorers",
    category: "UI Design",
    year: "2025",
    status: "Enterprise project",
    role: "UI/UX Designer",
    scope: "Research · Wireframes · UI documentation",
    tags: ["UX flows", "Interface"],
    description:
      "A website for Algorithmic Explorers, a blockchain research company, designed to make complex information clear and actionable.",
    image: "/images/ui/0.png",
    color: "#c5bbff",
  },
  {
    title: "Didi",
    category: "Packaging",
    year: "2024",
    status: "Independent exploration",
    role: "Brand & Packaging Designer",
    scope: "Art direction · Packaging · Illustration",
    tags: ["Packaging", "Illustration"],
    description:
      "A warm artisan packaging direction for a fruit juice brand, Didi, with a focus on natural cues and playful illustration.",
    image: "/images/Packaging/Didi.png",
    color: "#ff9c74",
  },
  {
    title: "MomBro",
    category: "Brand Design",
    year: "2024",
    status: "Independent exploration",
    role: "Brand Designer",
    scope: "Strategy · Identity · Visual system",
    tags: ["Identity", "Logo system"],
    description:
      "A complete visual identity concept for a wellness brand, balancing natural cues with a precise modern system.",
    image: "/images/Brand%20&%20Logos/MomBro.jpg",
    color: "#9ed5a3",
  },
  {
    title: "CWPF",
    category: "Books & Editorial",
    year: "2024",
    status: "Independent exploration",
    role: "Editorial Designer",
    scope: "Art direction · Grid · Typography",
    tags: ["Editorial", "Typography"],
    description:
      "Book design and layout for a church publication, Clothed with power, with a focus on typographic hierarchy and clear information flow.",
    image: "/images/Packaging/CWPF.png",
    color: "#f1dfcd",
  },
  {
    title: "FC",
    category: "Flyers",
    year: "2024",
    status: "Independent exploration",
    role: "Graphic Designer",
    scope: "Campaign concept · Print · Social",
    tags: ["Campaign", "Print"],
    description:
      "Logo and flyer design for a football club, Area Boyz FC, with a bold, energetic visual identity.",
    image: "/images/flyers/Area%20Boyz%20FC.jpg",
    color: "#ffbcf0",
  },
  {
    title: "Geniuz",
    category: "Social Content",
    year: "2024",
    status: "Independent exploration",
    role: "Visual Designer",
    scope: "Content system · Templates · Art direction",
    tags: ["Social media", "Templates"],
    description:
      "A social content system for the Geniuz Atiah personal brand, focused on bold typography and clear visual hierarchy.",
    image: "/images/flyers/Geniuz%20Atiah.png",
    color: "#a7d49b",
  },
]

const categories = ["All", "Real Projects", "Explorations"]

type ServiceStep = {
  title: string
  description: string
}

type Service = {
  slug: string
  title: string
  text: string
  image: string
  headline: string
  overview: string
  deliverables: ServiceStep[]
  process: ServiceStep[]
  projectTitles: string[]
}

const services: Service[] = [
  {
    slug: "product-ui-ux",
    title: "Product & UI/UX design",
    text: "Research-led interfaces, user flows, wireframes, prototypes, and design systems that turn complex ideas into clear products.",
    image: "/images/ui/Order%20Page.png",
    headline: "Design for the decisions people make every day.",
    overview:
      "A product experience needs more than polished screens. I map the user's goal, shape the flow, and build a visual system that stays clear as the product grows.",
    deliverables: [
      { title: "Product discovery", description: "Clarify the audience, goals, constraints, and questions the design needs to answer." },
      { title: "UX architecture", description: "Organize journeys, information, and task flows around how people actually use the product." },
      { title: "Wireframes & prototypes", description: "Make structure and interactions tangible early, before committing to polished UI." },
      { title: "Interface systems", description: "Create responsive components and patterns that keep the experience consistent." },
    ],
    process: [
      { title: "Discover", description: "Align on the problem, audience, and product context." },
      { title: "Structure", description: "Map the information and core user journeys." },
      { title: "Prototype", description: "Explore visual directions and test key interactions." },
      { title: "Refine", description: "Polish details, states, and handoff documentation." },
    ],
    projectTitles: ["Anon", "CRM Sales System"],
  },
  {
    slug: "brand-graphic-design",
    title: "Brand & graphic design",
    text: "Identity systems, logos, packaging, editorial layouts, flyers, and social content with a strong visual point of view.",
    image: "/images/flyers/Divinity%20Fashion.png",
    headline: "A visual identity with a point of view.",
    overview:
      "From the first identity decision to campaign applications, I create visual systems that stay recognizable across packaging, print, and digital touchpoints.",
    deliverables: [
      { title: "Brand foundations", description: "Define the audience, positioning, tone, and visual direction for the identity." },
      { title: "Visual identity", description: "Build a flexible language across marks, type, color, imagery, and graphic elements." },
      { title: "Campaign & print", description: "Translate the identity into flyers, editorial layouts, packaging, and campaign pieces." },
      { title: "Digital toolkit", description: "Prepare reusable assets and templates for consistent day-to-day communication." },
    ],
    process: [
      { title: "Align", description: "Understand the brief, audience, and practical requirements." },
      { title: "Explore", description: "Develop visual territories and choose a clear direction." },
      { title: "Systemize", description: "Turn the chosen direction into a usable design system." },
      { title: "Deliver", description: "Prepare final artwork and guidance for real-world use." },
    ],
    projectTitles: ["Noon Kitchen", "Verdant", "Amplify Festival"],
  },
  {
    slug: "front-end-development",
    title: "Front-end development",
    text: "Responsive, accessible websites that translate thoughtful design into fast and polished digital experiences.",
    image: "/images/ui/Landing%20Page.png",
    headline: "Responsive front ends, built to feel as good as they look.",
    overview:
      "I translate approved designs into responsive interfaces, with careful attention to accessibility, interaction details, and the practicalities of maintaining the code.",
    deliverables: [
      { title: "Responsive implementation", description: "Build layouts that adapt cleanly across desktop, tablet, and mobile screens." },
      { title: "Reusable components", description: "Create consistent interface patterns that are easier to extend and maintain." },
      { title: "Interaction states", description: "Implement clear hover, focus, loading, and feedback states for key workflows." },
      { title: "Accessibility & polish", description: "Check keyboard access, semantic structure, performance, and visual details." },
    ],
    process: [
      { title: "Plan", description: "Review the design, content, assets, and technical requirements." },
      { title: "Build", description: "Implement the page structure, styles, and interactive components." },
      { title: "Validate", description: "Check behavior, responsive layouts, and accessibility details." },
      { title: "Ship", description: "Polish the final experience and prepare it for handoff or launch." },
    ],
    projectTitles: ["Kukuom Cocoa", "Urban Jungle"],
  },
]

function getRoutePath() {
  // Strip Vite's deployment base so service routes work both locally and when hosted in a subpath.
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "")
  const pathname = window.location.pathname
  const appPath = basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname
  return appPath.replace(/\/$/, "") || "/"
}

const experience = [
  ["2025 — 2026", "Product & UI/UX Lead, Co-Founder", "Qoderaven"],
  ["2025 — 2026", "Head of Product Design", "Algorithmic Explorers"],
  ["2025", "UI/UX & IT Intern", "TGTS Africa"],
  ["2025", "UI/UX & IT Intern", "3S Spring"],
  ["2024 — 2025", "Supervisor & Senior Graphic Designer", "Leofat Ghana"],
  ["2023 — 2024", "Director of IT", "Africa Institute of Mines & Safety"],
  ["2021 — 2022", "UI/UX Designer", "Nepptek Ghana"],
]

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  )
}

function SectionLabel({
  number,
  children,
}: {
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      <b>{children}</b>
    </div>
  )
}

function ServiceDetailPage({
  service,
  relatedProjects,
  onProjectOpen,
  onNavigate,
}: {
  service: Service
  relatedProjects: Project[]
  onProjectOpen: (project: Project) => void
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  const serviceNumber = String(services.indexOf(service) + 1).padStart(2, "0")
  const homeUrl = import.meta.env.BASE_URL

  return (
    <article className="service-detail-page" id="service-details">
      <div className="service-detail-hero section-shell">
        <div className="service-detail-copy">
          <a className="service-back-link" href={`${homeUrl}#capabilities`} onClick={onNavigate}>
            <span aria-hidden="true">←</span> All services
          </a>
          <p className="service-detail-kicker">SERVICE / {serviceNumber}</p>
          <h1>{service.headline}</h1>
          <p className="service-detail-intro">{service.overview}</p>
          <a className="primary-action" href={`${homeUrl}#contact`} onClick={onNavigate}>
            Start a conversation <Arrow />
          </a>
        </div>
        <figure className="service-detail-image">
          <img src={service.image} alt={`${service.title} project example`} />
          <figcaption>{service.title}</figcaption>
        </figure>
      </div>

      <section className="service-detail-section" aria-labelledby="service-scope-title">
        <div className="section-shell">
          <div className="service-detail-section-heading">
            <SectionLabel number="01">Scope</SectionLabel>
            <div>
              <p className="eyebrow">What I can help with</p>
              <h2 id="service-scope-title">The right pieces for your next step.</h2>
            </div>
          </div>
          <div className="service-deliverables">
            {service.deliverables.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-section service-process-section" aria-labelledby="service-process-title">
        <div className="section-shell">
          <div className="service-detail-section-heading">
            <SectionLabel number="02">Process</SectionLabel>
            <div>
              <p className="eyebrow">How the work moves</p>
              <h2 id="service-process-title">A considered process, from brief to delivery.</h2>
            </div>
          </div>
          <ol className="service-process-list">
            {service.process.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="service-detail-section service-related-section" aria-labelledby="service-work-title">
          <div className="section-shell">
            <div className="service-detail-section-heading">
              <SectionLabel number="03">Selected work</SectionLabel>
              <div>
                <p className="eyebrow">Related projects</p>
                <h2 id="service-work-title">A few examples in practice.</h2>
              </div>
            </div>
            <div className="service-related-work">
              {relatedProjects.map((project) => (
                <button key={project.title} onClick={() => onProjectOpen(project)}>
                  <span className="service-related-image" style={{ backgroundColor: project.color }}>
                    <img src={project.image} alt="" loading="lazy" />
                  </span>
                  <span className="service-related-meta">
                    <span>{project.category} / {project.year}</span>
                    <strong>{project.title}</strong>
                  </span>
                  <Arrow />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="service-detail-cta">
        <div className="section-shell">
          <p>Have a project in mind?</p>
          <h2>Let’s make the next step clear.</h2>
          <a className="contact-button" href={`${homeUrl}#contact`} onClick={onNavigate}>
            Start a conversation <span><Arrow /></span>
          </a>
        </div>
      </section>
    </article>
  )
}

export default function App() {
  const [loaderVisible, setLoaderVisible] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  const [loaderLeaving, setLoaderLeaving] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState("All")
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [activeService, setActiveService] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [currentPath, setCurrentPath] = useState(getRoutePath)
  const previousPath = useRef(currentPath)

  const currentService = services.find(
    (service) => currentPath === `/services/${service.slug}`,
  )
  const isServicePage = Boolean(currentService)
  const relatedProjects = currentService
    ? projects.filter((project) => currentService.projectTitles.includes(project.title))
    : []

  const navigateTo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Keep browser defaults for external links and modified clicks; route only same-origin links.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return

    const destination = new URL(event.currentTarget.href, window.location.href)
    if (destination.origin !== window.location.origin) return

    event.preventDefault()
    window.history.pushState(null, "", destination.href)
    setCurrentPath(getRoutePath())
    setMenuOpen(false)
    setActiveProject(null)
    window.scrollTo(0, 0)
    if (destination.hash) {
      window.setTimeout(
        () => document.querySelector(destination.hash)?.scrollIntoView({ behavior: "smooth" }),
        50,
      )
    }
  }

  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (!favicon) return

    favicon.href = portrait
    favicon.type = "image/webp"
  }, [])

  useEffect(() => {
    if (!loaderVisible) return

    const startExit = window.setTimeout(() => setLoaderLeaving(true), 1450)
    const finishExit = window.setTimeout(() => setLoaderVisible(false), 1900)
    return () => {
      window.clearTimeout(startExit)
      window.clearTimeout(finishExit)
    }
  }, [loaderVisible])

  useEffect(() => {
    // Re-scan when filtering, expanding work, or changing routes so new content is not left hidden.
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    const returningHome = previousPath.current !== currentPath && currentPath === "/"
    previousPath.current = currentPath
    if (returningHome) {
      revealElements.forEach((element) => element.classList.add("is-visible"))
    }
    if (showAll) {
      revealElements
        .filter((element) => element.classList.contains("project-card"))
        .forEach((element) => element.classList.add("is-visible"))
    }

    const revealVisibleElements = () => {
      const viewportHeight = window.innerHeight
      revealElements.forEach((element) => {
        const bounds = element.getBoundingClientRect()
        if (bounds.top < viewportHeight * 0.88 && bounds.bottom > 0) {
          element.classList.add("is-visible")
        }
      })
    }

    const initialRevealFrame = window.requestAnimationFrame(revealVisibleElements)
    window.addEventListener("scroll", revealVisibleElements, { passive: true })
    window.addEventListener("resize", revealVisibleElements)
    return () => {
      window.cancelAnimationFrame(initialRevealFrame)
      window.removeEventListener("scroll", revealVisibleElements)
      window.removeEventListener("resize", revealVisibleElements)
    }
  }, [filter, currentPath, showAll])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(getRoutePath())
      setMenuOpen(false)
      setActiveProject(null)
      window.scrollTo(0, 0)
      if (window.location.hash) {
        window.setTimeout(
          () => document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "smooth" }),
          50,
        )
      }
    }
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  useEffect(() => {
    document.title = currentService
      ? `${currentService.title} — Geniuz Atiah`
      : "Geniuz Atiah — Product, Visual & Front-end Designer"
  }, [currentService])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let activeTarget: HTMLElement | null = null
    let activeBounds: DOMRect | null = null
    const resetMagnet = () => {
      activeTarget?.style.removeProperty("--magnetic-x")
      activeTarget?.style.removeProperty("--magnetic-y")
      activeTarget = null
      activeBounds = null
    }
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        resetMagnet()
        return
      }

      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("button, a[href]")
          : null

      if (target !== activeTarget) {
        resetMagnet()
        if (!target) return
        activeTarget = target
        activeBounds = target.getBoundingClientRect()
      }

      if (!activeTarget || !activeBounds) return
      const offsetX = (event.clientX - activeBounds.left - activeBounds.width / 2) * 0.08
      const offsetY = (event.clientY - activeBounds.top - activeBounds.height / 2) * 0.08
      activeTarget.style.setProperty(
        "--magnetic-x",
        `${Math.max(-5, Math.min(5, offsetX))}px`,
      )
      activeTarget.style.setProperty(
        "--magnetic-y",
        `${Math.max(-5, Math.min(5, offsetY))}px`,
      )
    }

    document.addEventListener("pointermove", onPointerMove)
    document.addEventListener("pointerleave", resetMagnet)
    return () => {
      document.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("pointerleave", resetMagnet)
      resetMagnet()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || activeProject || loaderVisible ? "hidden" : ""
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        setActiveProject(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [menuOpen, activeProject, loaderVisible])

  const closeAndGo = (id: string) => {
    setMenuOpen(false)
    if (isServicePage) {
      window.history.pushState(null, "", `${import.meta.env.BASE_URL}${id}`)
      setCurrentPath("/")
    }
    window.setTimeout(
      () => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }),
      50,
    )
  }

  const visibleProjects =
    filter === "All"
      ? projects
      : filter === "Explorations"
        ? projects.filter((project) => project.status.includes("Independent"))
        : projects.filter((project) => !project.status.includes("Independent"))

  return (
    <>
      {loaderVisible && (
        <div
          className={`intro-loader ${loaderLeaving ? "is-leaving" : ""}`}
          role="status"
          aria-label="Loading GeniuzTek portfolio"
        >
          <div className="loader-wordmark" aria-hidden="true">
            {Array.from("GeniuzTek", (letter, index) => (
              <span key={`${letter}-${index}`} style={{ animationDelay: `${index * 65}ms` }}>
                {letter}
              </span>
            ))}
          </div>
          <div className="loader-progress" aria-hidden="true">
            <i />
          </div>
          <p>DESIGN · TECHNOLOGY · EXPERIENCE</p>
        </div>
      )}
      <main aria-hidden={loaderVisible} inert={loaderVisible}>
      <a className="skip-link" href={isServicePage ? "#service-details" : "#work"}>
        Skip to {isServicePage ? "service details" : "selected work"}
      </a>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        {isServicePage && (
          <a className="service-home-link" href={import.meta.env.BASE_URL} onClick={navigateTo}>
            Portfolio
          </a>
        )}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href={isServicePage ? `${import.meta.env.BASE_URL}#work` : "#work"} onClick={navigateTo}>
            Work
          </a>
          <a href={isServicePage ? `${import.meta.env.BASE_URL}#capabilities` : "#capabilities"} onClick={navigateTo}>
            Service
          </a>
          <a href={isServicePage ? `${import.meta.env.BASE_URL}#experience` : "#experience"} onClick={navigateTo}>Experience</a>
          <a href={isServicePage ? `${import.meta.env.BASE_URL}#contact` : "#contact"} onClick={navigateTo}>Contact</a>
        </nav>
        <div className="header-right">
          <a className="nav-cta" href={isServicePage ? `${import.meta.env.BASE_URL}#contact` : "#contact"} onClick={navigateTo}>
            Let’s talk <Arrow />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        id="mobile-menu"
        className={`menu-overlay ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-top">
          <span>Navigation</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            Close
          </button>
        </div>
        <div className="menu-links">
          {[
            ["01", "Home", "#home"],
            ["02", "Selected work", "#work"],
            ["03", "Service", "#capabilities"],
            ["04", "Experience", "#experience"],
            ["05", "Contact", "#contact"],
          ].map(([num, label, id]) => (
            <button key={id} onClick={() => closeAndGo(id)}>
              <small>{num}</small>
              {label}
              <Arrow />
            </button>
          ))}
        </div>
        <p>Accra, Ghana · Open to global collaborations</p>
      </nav>

      {currentService ? (
        <ServiceDetailPage
          service={currentService}
          relatedProjects={relatedProjects}
          onProjectOpen={setActiveProject}
          onNavigate={navigateTo}
        />
      ) : (
        <>
      <section className="hero" id="home">
        <div className="hero-grid">
          <h1 className="hero-name">
            <span>GENIUZ</span> ATIAH
          </h1>
          <div className="hero-copy">
            <h2>Product & Visual Designer</h2>
            <p className="hero-summary">
              Designing clear, usable, and memorable experiences across digital
              products and visual identity.
            </p>
            <a className="primary-action" href="#contact">
              Let’s collaborate <Arrow />
            </a>
          </div>
          <div className="portrait-wrap">
            <img
              src={portrait}
              alt="Geniuz Atiah, multidisciplinary designer and front-end developer"
            />
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a
              href="https://github.com/AtiahGenius?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/prosper-nsohlebna-atiah-geniuz-atiah-51bb28251/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>
            <a href="/Prosper-Atiah-CV.pdf" download>
              Résumé <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-shell">
          <div className="showcase-heading reveal">
            <span>Portfolio</span>
            <h2>/SELECTED WORK</h2>
          </div>
          <div className="work-toolbar">
            <div
              className="filters"
              role="tablist"
              aria-label="Filter projects"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className={filter === category ? "active" : ""}
                  onClick={() => {
                    setFilter(category)
                    setShowAll(false)
                  }}
                  aria-pressed={filter === category}
                >
                  {category}
                </button>
              ))}
            </div>
            <button className="view-all" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show selected" : "View all work"} ↗
            </button>
          </div>
          <div className="project-grid">
            {(showAll ? visibleProjects : visibleProjects.slice(0, 4)).map(
              (project) => (
                <article className="project-card reveal" key={project.title}>
                  <button
                    onClick={() => setActiveProject(project)}
                    aria-label={`View ${project.title} project`}
                  >
                    <div
                      className="project-image"
                      style={{ backgroundColor: project.color }}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} visual direction`}
                        loading="lazy"
                      />
                      <span className="project-arrow">
                        <Arrow />
                      </span>
                      <span className="view-label">View project</span>
                    </div>
                    <div className="project-meta">
                      <div>
                        <small>
                          {project.status} / {project.category}
                        </small>
                        <h3>{project.title}</h3>
                      </div>
                      <span>{project.year}</span>
                    </div>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </button>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="services section-pad" id="capabilities">
        <div className="section-shell">
          <div className="service-heading reveal">
            <span>/SERVICE</span>
            <p>From first idea to final interface.</p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <a
                key={service.title}
                className={`service-row ${activeService === index ? "active" : ""}`}
                href={`${import.meta.env.BASE_URL}services/${service.slug}`}
                onClick={navigateTo}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <div className="service-preview" aria-hidden="true">
                  <img src={service.image} alt="" loading="lazy" />
                </div>
                <b>{activeService === index ? "×" : "↗"}</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-shell">
          <div className="section-grid">
            <SectionLabel number="03">Experience</SectionLabel>
            <div className="section-heading reveal">
              <p className="eyebrow">Selected career</p>
              <h2>
                Building products, brands, and teams through thoughtful design.
              </h2>
            </div>
          </div>
          <div className="experience-list">
            {experience.map(([year, role, company], index) => (
              <div className="experience-row reveal" key={`${role}-${company}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{year}</p>
                <h3>{role}</h3>
                <b>{company}</b>
              </div>
            ))}
          </div>
          <a className="resume-link" href="/Prosper-Atiah-CV.pdf" download>
            Download full résumé <Arrow />
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-bg">LET’S TALK</div>
        <div className="section-shell contact-inner">
          <SectionLabel number="04">Contact</SectionLabel>
          <p>Open to product, brand, and front-end opportunities</p>
          <h2>Let’s build work people remember.</h2>
          <a className="contact-button" href="mailto:prospernsoh@gmail.com">
            Start a conversation
            <span>
              <Arrow />
            </span>
          </a>
          <div className="contact-meta">
            <a href="mailto:prospernsoh@gmail.com">prospernsoh@gmail.com</a>
            <div>
              <a
                href="https://github.com/AtiahGenius?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/prosper-nsohlebna-atiah-geniuz-atiah-51bb28251/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://wa.me/233550356837"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Geniuz Atiah</span>
        <span>Designed & built with intention</span>
        <a href="#home">Back to top ↑</a>
      </footer>
        </>
      )}

      {activeProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
        >
          <button
            className="modal-close"
            onClick={() => setActiveProject(null)}
          >
            Close
          </button>
          <div
            className="modal-image"
            style={{ backgroundColor: activeProject.color }}
          >
            <img src={activeProject.image} alt="" />
          </div>
          <div className="modal-content">
            <small>
              {activeProject.status} · {activeProject.year}
            </small>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
            <dl className="project-details">
              <div>
                <dt>My role</dt>
                <dd>{activeProject.role}</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>{activeProject.scope}</dd>
              </div>
            </dl>
            <div className="tag-row">
              {activeProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a
              href={`https://wa.me/233550356837?text=${encodeURIComponent(`Hi Geniuz, I’d like to ask about the ${activeProject.title} project.`)}`}
              target="_blank"
              rel="noreferrer"
            >
              Ask about this project <Arrow />
            </a>
          </div>
        </div>
      )}
      </main>
    </>
  )
}
