const App = () => {
  return (
    <div>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          }
          
          .blog-section-container {
            background-color: #f5f5ff5;
            min-height: 80vh;
            padding: 3rem 1.5rem; /* Default padding */
          }
          
          /* ADDED: Flex container for the header */
          .blog-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem; /* Spacing below the header line */
          }

          .blog-main-headline {
            font-size: 3.75rem;
            font-weight: 700;
            color: #000000;
            letter-spacing: -0.025em;
            line-height: 1;
            margin-bottom: 0; /* Removed margin, now on parent */
          }

          .max-w-7xl {
            max-width: 80rem;
          }

          .mx-auto {
            margin-left: auto;
            margin-right: auto;
          }

          .text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }

          .text-gray-600 {
            color: #4b5563;
          }

          .mb-16 {
            margin-bottom: 4rem;
          }

          .font-light {
            font-weight: 300;
          }

          .relative {
            position: relative;
          }

          .mb-8 {
            margin-bottom: 2rem;
          }

          .flex {
            display: flex;
          }

          .justify-end {
            justify-content: flex-end;
          }

          .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }

          .bg-black {
            background-color: #000000;
          }

          .text-white {
            color: #ffffff;
          }

          .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          .font-medium {
            font-weight: 500;
          }

          .rounded-full {
            border-radius: 9999px;
          }

          .z-10 {
            z-index: 10;
          }

          .grid {
            display: grid;
          }

          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .gap-4 {
            gap: 1rem;
          }

          .justify-items-center {
            justify-items: center;
          }

          .group {
            /* group class for hover effects */
          }

          .cursor-pointer {
            cursor: pointer;
          }

          .w-full {
            width: 100%;
          }

          .blog-card {
            width: 8cm;
            height: 8cm;
          }

          .max-w-8cm {
            max-width: 8cm;
          }

          .bg-white {
            background-color: #ffffff;
          }

          .rounded-xl {
            border-radius: 0.75rem;
          }

          .overflow-hidden {
            overflow: hidden;
          }

          .shadow-sm {
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          }

          .h-full {
            height: 100%;
          }

          .object-cover {
            object-fit: cover;
          }

          .text-gray-400 {
            color: #9ca3af;
          }

          .mb-2 {
            margin-bottom: 0.5rem;
          }

          .font-normal {
            font-weight: 400;
          }

          .tracking-wide {
            letter-spacing: 0.025em;
          }

          .text-gray-900 {
            color: #111827;
          }

          .leading-tight {
            line-height: 1.25;
          }

          /* Hover effects */
          .explore-btn {
            transition: all 0.3s ease-out;
            transform: translateZ(0);
            white-space: nowrap; /* Prevent button text from wrapping */
          }

          .explore-btn:hover {
            background-color: #374151;
            transform: scale(1.05) translateY(-0.25rem);
            box-shadow: 0 10px 25px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);
          }

          .explore-btn:active {
            transform: scale(0.95);
          }

          .blog-card {
            transition: all 0.3s ease;
          }

          .group:hover .blog-card {
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06);
          }

          .blog-image {
            transition: transform 0.3s ease;
          }

          .group:hover .blog-image {
            transform: scale(1.05);
          }

          /* Responsive design */
          @media (min-width: 640px) {
            .sm\\:gap-6 {
              gap: 1.5rem;
            }
          }
          
          @media (min-width: 1024px) {
            .lg\\:grid-cols-4 {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }

            .blog-section-container {
               padding-top: 3rem;
               padding-bottom: 3rem;
               padding-left: 56.7px;
               padding-right: 56.7px;
            }
            
            .blog-main-headline {
              font-size: 3rem;
              font-weight: 600;
              line-height: 1.1;
            }
          }

          @media (max-width: 639px) {
            .mobile-responsive-card {
              width: 100%;
              max-width: none;
              height: auto;
              aspect-ratio: 1;
            }
            
            .mobile-grid {
              grid-template-columns: 1fr 1fr;
              gap: 0.75rem;
              padding: 0 0.5rem;
            }
            
            .mobile-text-content {
              padding: 0.5rem 0.25rem 0;
            }
            
            .blog-main-headline {
              font-size: 2.5rem;
              line-height: 1.1;
            }

            .blog-section-container {
              padding: 2rem 1rem;
            }
            
            .text-xl {
              font-size: 1rem;
              line-height: 1.5;
            }
            
            .mb-16 {
              margin-bottom: 2rem;
            }
          }
        `}
      </style>

      <div className="blog-section-container">
        {/* MODIFIED: New header container for title and button */}
        <div className="blog-header">
          <h1 className="blog-main-headline">Blog</h1>
          <button className="explore-btn px-6 py-3 bg-black text-white text-sm font-medium rounded-full z-10">
            Explore All
          </button>
        </div>

        <p className="text-xl text-gray-600 mb-16 font-light">From the Sky – Insights & Stories</p>

        <div className="max-w-7xl mx-auto">
          {/* MODIFIED: The button has been moved, so its old container is removed */}
          <div className="relative mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center mobile-grid">
              {/* Blog Post 1 */}
              <article className="group cursor-pointer w-full max-w-8cm">
                <div className="blog-card mobile-responsive-card bg-white rounded-xl overflow-hidden shadow-sm w-full">
                  <img
                    src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Top 5 Reasons to Train in South Africa as a Pilot"
                    className="blog-image w-full h-full object-cover"
                  />
                </div>
                <div className="text-content mobile-text-content">
                  <p className="text-gray-400 text-sm font-normal mb-2 tracking-wide">Aug 20, 2025</p>
                  <h2 className="text-gray-900 text-sm font-medium leading-tight">
                    Top 5 Reasons to Train in South Africa as a Pilot
                  </h2>
                </div>
              </article>

              {/* Blog Post 2 */}
              <article className="group cursor-pointer w-full max-w-8cm">
                <div className="blog-card mobile-responsive-card bg-white rounded-xl overflow-hidden shadow-sm w-full">
                  <img
                    src="https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Hungary vs. South Africa – Which Training Path is Right for You?"
                    className="blog-image w-full h-full object-cover"
                  />
                </div>
                <div className="text-content mobile-text-content">
                  <p className="text-gray-400 text-sm font-normal mb-2 tracking-wide">Aug 20, 2025</p>
                  <h2 className="text-gray-900 text-sm font-medium leading-tight">
                    Hungary vs. South Africa – Which Training Path is Right for You?
                  </h2>
                </div>
              </article>

              {/* Blog Post 3 */}
              <article className="group cursor-pointer w-full max-w-8cm">
                <div className="blog-card mobile-responsive-card bg-white rounded-xl overflow-hidden shadow-sm w-full">
                  <img
                    src="https://images.pexels.com/photos/1078850/pexels-photo-1078850.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Visa Tips for Pilot Students"
                    className="blog-image w-full h-full object-cover"
                  />
                </div>
                <div className="text-content mobile-text-content">
                  <p className="text-gray-400 text-sm font-normal mb-2 tracking-wide">Aug 20, 2025</p>
                  <h2 className="text-gray-900 text-sm font-medium leading-tight">Visa Tips for Pilot Students</h2>
                </div>
              </article>

              {/* Blog Post 4 */}
              <article className="group cursor-pointer w-full max-w-8cm">
                <div className="blog-card mobile-responsive-card bg-white rounded-xl overflow-hidden shadow-sm w-full">
                  <img
                    src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Life of a Pilot in Training: Student Stories"
                    className="blog-image w-full h-full object-cover"
                  />
                </div>
                <div className="text-content mobile-text-content">
                  <p className="text-gray-400 text-sm font-normal mb-2 tracking-wide">Aug 20, 2025</p>
                  <h2 className="text-gray-900 text-sm font-medium leading-tight">
                    Life of a Pilot in Training: Student Stories
                  </h2>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App