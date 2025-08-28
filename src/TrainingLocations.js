"use client"

import { useEffect, useRef } from "react"
import "./TrainingLocation.css"

export default function TrainingLocations() {
  const progressBarsRef = useRef([])
  const panelsRef = useRef([])
  const timelineRef = useRef(null)
  const stageRef = useRef(null) // Ref for the stage container

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // DOM elements
    const progressBars = progressBarsRef.current
    const panels = panelsRef.current
    const stage = stageRef.current

    // Initialize GSAP and ScrollTrigger if motion is allowed
    if (!prefersReducedMotion && typeof window !== "undefined") {
      Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, ScrollTriggerModule]) => {
        const gsap = gsapModule.default
        const ScrollTrigger = ScrollTriggerModule.default

        gsap.registerPlugin(ScrollTrigger)

        // Create timeline for scroll-driven animations
        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".wayforsky-feature-tour-tl",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            // Add callbacks to toggle visibility of the fixed stage
            onEnter: () => stage.classList.add("is-visible"),
            onLeave: () => stage.classList.remove("is-visible"),
            onEnterBack: () => stage.classList.add("is-visible"),
            onLeaveBack: () => stage.classList.remove("is-visible"),
            onUpdate: (self) => {
              const progress = self.progress
              updateProgressAndPanels(progress)
            },
          },
        })

        timelineRef.current = scrollTimeline

        function updateProgressAndPanels(progress) {
          const totalProgress = Math.max(0, Math.min(1, progress))
          const section1Progress = Math.max(0, Math.min(1, totalProgress * 3))
          const section2Progress = Math.max(0, Math.min(1, (totalProgress - 0.33) * 3))
          const section3Progress = Math.max(0, Math.min(1, (totalProgress - 0.66) * 3))

          gsap.set(progressBars[0], { scaleX: section1Progress })
          gsap.set(progressBars[1], { scaleX: section2Progress })
          gsap.set(progressBars[2], { scaleX: section3Progress })

          let activePanel = 0
          if (totalProgress >= 0.66) {
            activePanel = 2
          } else if (totalProgress >= 0.33) {
            activePanel = 1
          }

          panels.forEach((panel, index) => {
            const isActive = index === activePanel
            gsap.to(panel, {
              opacity: isActive ? 1 : 0,
              duration: 0,
              ease: "power1.inOut",
            })
          })
        }

        gsap.set(progressBars, { scaleX: 0 })
        panels.forEach((panel, index) => {
          gsap.set(panel, { opacity: index === 0 ? 1 : 0 })
        })
      })
    } else {
      progressBars.forEach((bar) => {
        if (bar) bar.style.display = "none"
      })
      panels.forEach((panel, index) => {
        if (panel) panel.style.opacity = index === 0 ? "1" : "0"
      })
    }

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
      if (typeof window !== "undefined" && window.ScrollTrigger) {
        window.ScrollTrigger.killAll()
      }
    }
  }, [])

  return (
    <>
      <main className="wayforsky-feature-tour-tl" role="main">
        <header className="wayforsky-sticky-header-tl">
          {/* MODIFIED: The h1 is now a direct child of the padded header */}
          <h1 className="wayforsky-main-headline-tl">Training Locations</h1>
          {/* MODIFIED: This new container will center the grid of features */}
          <div className="wayforsky-centered-content-tl">
            <div className="wayforsky-features-grid-tl">
              {/* Feature 1 */}
              <div className="wayforsky-feature-item-tl">
                <h2 className="wayforsky-feature-title-tl">South Africa Flight Training</h2>
                <p className="wayforsky-feature-description-tl">
                  300+ clear flying days, world-class instructors, and globally recognized pilot licenses — all in one
                  of the most affordable aviation destinations
                </p>
                <div className="wayforsky-progress-container-tl">
                  <div className="wayforsky-progress-bar-tl" ref={(el) => (progressBarsRef.current[0] = el)}></div>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="wayforsky-feature-item-tl">
                <h2 className="wayforsky-feature-title-tl">Hungary Aviation Excellence</h2>
                <p className="wayforsky-feature-description-tl">
                  European-standard pilot training under EASA, the chance to live in the EU, and access to cutting-edge
                  PharmaFlight simulators.
                </p>
                <div className="wayforsky-progress-container-tl">
                  <div className="wayforsky-progress-bar-tl" ref={(el) => (progressBarsRef.current[1] = el)}></div>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="wayforsky-feature-item-tl">
                <h2 className="wayforsky-feature-title-tl">India Ground Training & Prep</h2>
                <p className="wayforsky-feature-description-tl">
                  Pre-training guidance, ground classes, visa and documentation support — plus personality development
                  and airline preparation.
                </p>
                <div className="wayforsky-progress-container-tl">
                  <div className="wayforsky-progress-bar-tl" ref={(el) => (progressBarsRef.current[2] = el)}></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="wayforsky-stage-tl" ref={stageRef}>
          {/* Panel A: South Africa */}
          <section className="wayforsky-panel-tl wayforsky-panel-demo-tl" ref={(el) => (panelsRef.current[0] = el)}>
            <div className="wayforsky-demo-webpage-tl">
              <div className="wayforsky-demo-header-tl">
                <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>🇿🇦</div>
                <nav className="wayforsky-demo-nav-tl">
                  <span>South Africa</span>
                  <span>Weather</span>
                  <span>Licenses</span>
                  <span>Training</span>
                </nav>
              </div>
              <div className="wayforsky-demo-content-tl">
                <h3 className="wayforsky-demo-title-tl">South Africa 🇿🇦</h3>
                <p className="wayforsky-demo-text-tl">300+ flying days per year, clear weather conditions</p>
                <p className="wayforsky-demo-text-tl">Globally recognized licenses &amp; fast training timelines</p>
                <p className="wayforsky-demo-text-tl">Affordable, high-quality flight training environment</p>
              </div>
            </div>
            <div className="wayforsky-image-container-tl">
              <img
                src="https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="View from a plane wing over the clouds"
              />
            </div>
          </section>

          {/* Panel B: Hungary */}
          <section className="wayforsky-panel-tl wayforsky-panel-demo-tl" ref={(el) => (panelsRef.current[1] = el)}>
            <div className="wayforsky-demo-webpage-tl">
              <div className="wayforsky-demo-header-tl">
                <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>🇭🇺</div>
                <nav className="wayforsky-demo-nav-tl">
                  <span>Hungary</span>
                  <span>EASA</span>
                  <span>EU Life</span>
                  <span>Simulators</span>
                </nav>
              </div>
              <div className="wayforsky-demo-content-tl">
                <h3 className="wayforsky-demo-title-tl">Hungary 🇭🇺</h3>
                <p className="wayforsky-demo-text-tl">European-standard aviation training under EASA framework</p>
                <p className="wayforsky-demo-text-tl">Opportunity to train &amp; live in the EU</p>
                <p className="wayforsky-demo-text-tl">
                  Access to PharmaFlight&apos;s advanced simulators &amp; aviation technology
                </p>
              </div>
            </div>
            <div className="wayforsky-image-container-tl">
              <img
                src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cockpit of a modern airplane"
              />
            </div>
          </section>

          {/* Panel C: India */}
          <section className="wayforsкы-panel-tl wayforsky-panel-demo-tl" ref={(el) => (panelsRef.current[2] = el)}>
            <div className="wayforsky-demo-webpage-tl">
              <div className="wayforsky-demo-header-tl">
                <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>🇮🇳</div>
                <nav className="wayforsky-demo-nav-tl">
                  <span>India</span>
                  <span>Guidance</span>
                  <span>Support</span>
                  <span>Preparation</span>
                </nav>
              </div>
              <div className="wayforsky-demo-content-tl">
                <h3 className="wayforsky-demo-title-tl">India 🇮🇳</h3>
                <p className="wayforsky-demo-text-tl">
                  Pre-training guidance and ground classes for aspiring pilots before departure
                </p>
                <p className="wayforsky-demo-text-tl">Local counselling and support with documentation</p>
                <p className="wayforsky-demo-text-tl">
                  Personality development classes, visas, and airline preparation
                </p>
              </div>
            </div>
            <div className="wayforsky-image-container-tl">
              <img
                src="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="An airplane flying into the sunset"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}