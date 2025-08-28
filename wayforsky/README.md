## 🔹 1. Frontend (No/Minimal Backend)

**Options**:

* **Static Site Generator**: Next.js (React-based, SEO-friendly), Gatsby, or Astro.
* **Simple React/Vue SPA**: Fine if SEO is not a top priority, but given this is a student-focused site → I’d recommend Next.js for SSR/SEO.

**Pages to include in Phase 1**:

* **Home/Landing** → Hero banner, highlights, Apply Now button, webinar ticker.
* **About Us** → Vision, partnerships, global presence.
* **Programs Offered** → Courses with overview, fees, and CTAs to apply.
* **Admissions** → Step-by-step process (Eligibility → Counselling → Offer Letter → Visa → Departure).
* **Contact** → Basic form + office locations.
* **Apply Now** → Calls backend.

You can fill other sections later (gallery, career support, blog, etc.).

---

## 🔹 2. Backend (Only for “Apply for Courses”)

Keep it lightweight.

* **Backend Stack Options**:

  * Node.js (Express/NestJS) → easy REST API.
  * Python (FastAPI) → simple and scalable.
  * Or Firebase / Supabase → if you want to skip writing backend code for now.

**Features Needed for Apply Now**:

* API endpoint: `/apply`
* Stores applicant data (name, email, phone, course interested, country preference).
* Sends confirmation email (via SendGrid/Mailgun/SES).
* Optional: Admin gets email notification or stores data in a simple DB (PostgreSQL/MongoDB/Firestore).

---

## 🔹 3. Hosting & Deployment

* **Frontend**: Vercel or Netlify (instant deployment, free tier).
* **Backend**:

  * If using Node/FastAPI → deploy on Render, Railway, or AWS Lightsail.
  * If Firebase/Supabase → backend is already managed.
* **Database**: If you need storage now, start with free-tier PostgreSQL (Supabase) or MongoDB Atlas.

---

## 🔹 4. Suggested Tech Stack for Phase 1

* **Frontend**: Next.js + TailwindCSS (for speed + SEO).
* **Backend**: Node.js + Express (small API).
* **DB**: Supabase (PostgreSQL) or MongoDB Atlas.
* **Email**: SendGrid (free tier).
* **Hosting**: Vercel (frontend) + Railway (backend).

---

## 🔹 5. Next Steps (MVP Roadmap)

1. **Set up project repo** → monorepo (frontend + backend).
2. **Build static pages** → Home, About, Programs, Admissions, Contact.
3. **Integrate Apply Now form** → API + DB + Email confirmation.
4. **Deploy** → One-click deployment pipeline (Vercel + Railway).
5. **Track Applications** → Simple admin view (Phase 2).

---

👉 My advice: Start with **frontend static site + Apply form API**, then later integrate the **Student Portal** and **Admin Panel**. This keeps scope small, but gets you something functional quickly.
