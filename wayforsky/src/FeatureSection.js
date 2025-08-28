import { useEffect, useRef } from "react"

export default function FeatureSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Check if device is mobile
    const isMobile = () => window.innerWidth <= 768

    // Only initialize GSAP animations on desktop
    if (!isMobile() && typeof window !== "undefined") {
      // Dynamically import GSAP to avoid SSR issues
      import("gsap").then(({ gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger)

          // Panel switching animation
          ScrollTrigger.create({
            trigger: ".wayforsky-feature-tour-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress
              const panelA = document.querySelector(".wayforsky-panel-a")
              const panelB = document.querySelector(".wayforsky-panel-b")

              if (progress < 0.5) {
                panelA?.classList.add("wayforsky-active")
                panelB?.classList.remove("wayforsky-active")
              } else {
                panelA?.classList.remove("wayforsky-active")
                panelB?.classList.add("wayforsky-active")
              }
            },
          })
        })
      })
    }

    // Handle window resize
    const handleResize = () => {
      if (isMobile()) {
        // Kill all ScrollTrigger instances on mobile
        if (typeof window !== "undefined" && window.ScrollTrigger) {
          window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
      } else {
        // Reload to reinitialize desktop animations
        window.location.reload()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      // Cleanup ScrollTrigger instances
      if (typeof window !== "undefined" && window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  return (
    <section className="wayforsky-section-container" ref={sectionRef}>
      {/* Main feature tour section - 200vh height */}
      <section className="wayforsky-feature-tour-section" aria-label="Feature tour showcase">
        {/* Fixed header that stays pinned */}
        <header className="wayforsky-sticky-header">
          <div className="wayforsky-header-content">
            <h1 className="wayforsky-headline">Why WayForSky?</h1>
            <button className="wayforsky-cta-button" aria-label="Start creating your project">
              Start creating
            </button>
          </div>
        </header>

        {/* Stage container for content swapping */}
        <div className="wayforsky-stage">
          {/* Panel A - Initial Features */}
          <div className="wayforsky-panel wayforsky-panel-a wayforsky-active" aria-label="Initial features panel">
            <div className="wayforsky-panel-content">
              <div className="wayforsky-cards-container">
                {/* Yellow Card - Sales Tools */}
                <article className="wayforsky-feature-card wayforsky-card-yellow" aria-labelledby="sales-title">
                  <h2 id="sales-title" className="wayforsky-card-title">
                    Pilot-Led Counselling
                  </h2>
                  <ul className="wayforsky-feature-list" role="list">
                    <li>Direct consultation with experienced pilots</li>
                    <li>Pre-enrollment guidance sessions</li>
                    <li>Career pathway discussions</li>
                  </ul>
                  <div className="wayforsky-card-module">
                    <img src="/pilot-consultation-session.png" alt="Pilot consultation session" />
                  </div>
                </article>

                {/* Beige Card - Marketing Tools */}
                <article className="wayforsky-feature-card wayforsky-card-beige" aria-labelledby="marketing-title">
                  <h2 id="marketing-title" className="wayforsky-card-title">
                    Global Training Options
                  </h2>
                  <ul className="wayforsky-feature-list" role="list">
                    <li>Training centers in South Africa</li>
                    <li>European programs in Hungary</li>
                    <li>Cost-effective options in India</li>
                  </ul>
                  <div className="wayforsky-card-module">
                    <img src="/global-training-locations-world-map.png" alt="Global training locations" />
                  </div>
                </article>

                {/* Blue Card - Analytics */}
                <article className="wayforsky-feature-card wayforsky-card-blue" aria-labelledby="analytics-title">
                  <h2 id="analytics-title" className="wayforsky-card-title">
                    Complete Support System
                  </h2>
                  <ul className="wayforsky-feature-list" role="list">
                    <li>Admission guidance and support</li>
                    <li>Training progress monitoring</li>
                    <li>Interview preparation coaching</li>
                  </ul>
                  <div className="wayforsky-card-module">
                    <img src="/support-and-guidance-team-meeting.png" alt="Support and guidance" />
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Panel B - Advanced Features */}
          <div className="wayforsky-panel wayforsky-panel-b" aria-label="Advanced features panel">
            <div className="wayforsky-panel-content">
              <div className="wayforsky-cards-container">
                {/* Green Card - Inventory */}
                <article className="wayforsky-feature-card wayforsky-card-green" aria-labelledby="inventory-title">
                  <h2 id="inventory-title" className="wayforsky-card-title">
                    Trusted Partnerships
                  </h2>
                  <ul className="wayforsky-feature-list" role="list">
                    <li>Accolade Flying Wings partnership</li>
                    <li>PharmaFlight collaboration</li>
                    <li>Industry-recognized training providers</li>
                  </ul>
                  <div className="wayforsky-card-module">
                    <img src="/partnership-collaboration-handshake.png" alt="Partnership collaboration" />
                  </div>
                </article>

                {/* Purple Card - Customer Support */}
                <article className="wayforsky-feature-card wayforsky-card-purple" aria-labelledby="support-title">
                  <h2 id="support-title" className="wayforsky-card-title">
                    Transparent Guidance
                  </h2>
                  <ul className="wayforsky-feature-list" role="list">
                    <li>Clear and upfront fee structures</li>
                    <li>Detailed student contracts</li>
                    <li>Realistic training timelines</li>
                  </ul>
                  <div className="wayforsky-card-module">
                    <img src="/transparent-communication-documents.png" alt="Transparent communication" />
                  </div>
                </article>

                {/* Orange Card - Marketing Automation */}
                <article className="wayforsky-feature-card wayforsky-card-orange" aria-labelledby="automation-title">
                  <h2 id="automation-title" className="wayforsky-card-title">
                    Career-Driven Approach
                  </h2>
                  <ul className="wayforsky-feature-list" role="list">
                    <li>Focus on aviation career success</li>
                    <li>Beyond just license acquisition</li>
                    <li>Industry-relevant skill development</li>
                  </ul>
                  <div className="wayforsky-card-module">
                    <img src="/career-success-in-aviation-pilot-uniform.png" alt="Career success in aviation" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only section showing all 6 cards in simple scroll layout */}
        <div className="wayforsky-mobile-all-cards">
          <div className="wayforsky-mobile-cards-container">
            {/* All 6 cards for mobile with unique class names */}
            <article className="wayforsky-feature-card wayforsky-card-yellow" aria-labelledby="mobile-sales-title">
              <h2 id="mobile-sales-title" className="wayforsky-card-title">
                Pilot-Led Counselling
              </h2>
              <ul className="wayforsky-feature-list" role="list">
                <li>Direct consultation with experienced pilots</li>
                <li>Pre-enrollment guidance sessions</li>
                <li>Career pathway discussions</li>
              </ul>
              <div className="wayforsky-card-module">
                <img src="/pilot-consultation-session.png" alt="Pilot consultation session" />
              </div>
            </article>

            <article className="wayforsky-feature-card wayforsky-card-beige" aria-labelledby="mobile-marketing-title">
              <h2 id="mobile-marketing-title" className="wayforsky-card-title">
                Global Training Options
              </h2>
              <ul className="wayforsky-feature-list" role="list">
                <li>Training centers in South Africa</li>
                <li>European programs in Hungary</li>
                <li>Cost-effective options in India</li>
              </ul>
              <div className="wayforsky-card-module">
                <img src="/global-training-locations-world-map.png" alt="Global training locations" />
              </div>
            </article>

            <article className="wayforsky-feature-card wayforsky-card-blue" aria-labelledby="mobile-analytics-title">
              <h2 id="mobile-analytics-title" className="wayforsky-card-title">
                Complete Support System
              </h2>
              <ul className="wayforsky-feature-list" role="list">
                <li>Admission guidance and support</li>
                <li>Training progress monitoring</li>
                <li>Interview preparation coaching</li>
              </ul>
              <div className="wayforsky-card-module">
                <img src="/support-and-guidance-team-meeting.png" alt="Support and guidance" />
              </div>
            </article>

            <article className="wayforsky-feature-card wayforsky-card-green" aria-labelledby="mobile-inventory-title">
              <h2 id="mobile-inventory-title" className="wayforsky-card-title">
                Trusted Partnerships
              </h2>
              <ul className="wayforsky-feature-list" role="list">
                <li>Accolade Flying Wings partnership</li>
                <li>PharmaFlight collaboration</li>
                <li>Industry-recognized training providers</li>
              </ul>
              <div className="wayforsky-card-module">
                <img src="/partnership-collaboration-handshake.png" alt="Partnership collaboration" />
              </div>
            </article>

            <article className="wayforsky-feature-card wayforsky-card-purple" aria-labelledby="mobile-support-title">
              <h2 id="mobile-support-title" className="wayforsky-card-title">
                Transparent Guidance
              </h2>
              <ul className="wayforsky-feature-list" role="list">
                <li>Clear and upfront fee structures</li>
                <li>Detailed student contracts</li>
                <li>Realistic training timelines</li>
              </ul>
              <div className="wayforsky-card-module">
                <img src="/transparent-communication-documents.png" alt="Transparent communication" />
              </div>
            </article>

            <article className="wayforsky-feature-card wayforsky-card-orange" aria-labelledby="mobile-automation-title">
              <h2 id="mobile-automation-title" className="wayforsky-card-title">
                Career-Driven Approach
              </h2>
              <ul className="wayforsky-feature-list" role="list">
                <li>Focus on aviation career success</li>
                <li>Beyond just license acquisition</li>
                <li>Industry-relevant skill development</li>
              </ul>
              <div className="wayforsky-card-module">
                <img src="/career-success-in-aviation-pilot-uniform.png" alt="Career success in aviation" />
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  )
}

