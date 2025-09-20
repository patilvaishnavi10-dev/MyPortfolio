# Student Website (React)

A personal portfolio website built with React. It includes a home page, portfolio, blog, contact form, and two practical apps (Library Practicals and an FS Shopping Cart UI). The app is configured to work locally and when deployed to GitHub Pages under a subpath.

## Live/Local URLs
- Local base path (shown in terminal when you run it): `http://localhost:3000/MyPortfolio`
- Home: `/` → Profile page
- Portfolio: `/portfolio`
- Blog: `/blog`
- Contact: `/contact`
- FS App (Shopping Cart): `/fsapp`
- Practicals (Library app): `/practicals`

If you want local development at plain `/` (no `/MyPortfolio`), temporarily remove the `homepage` field from `package.json` during local work.

## Features
- React Router v6 navigation with a sticky `Navbar`
- Clean, responsive UI with inline styles for simplicity
- Assets served from `public/` using `process.env.PUBLIC_URL` (works with GitHub Pages subpath)
- Separate pages: Profile, Portfolio, Blog, Contact
- Practical apps: Library borrow simulator and Shopping Cart UI
- Web Vitals integration (optional) via `reportWebVitals.js`

## Tech Stack
- React 18 (Create React App structure)
- React Router DOM v6
- Web Vitals (optional metrics)

## Project Structure (key files)
```
src/
  index.js                # Router bootstrap with basename
  App.js                  # Top-level routes + 404
  components/
    Navbar.js             # Top nav
    Profile.js            # Home page (profile)
    Portfolio.js          # Projects grid, links to practicals
    Blog.js               # Static blog-like posts
    Contact.js            # Simple contact form
  practicals/
    FSApp.js              # Shopping cart UI
    PracticalApp.js       # Library borrow simulator
public/
  index.html
  profile.png             # Profile picture
  screenshots/            # Place screenshots here (see below)
```

## Getting Started
1. Install dependencies:
```bash
npm install
```
2. Start the dev server:
```bash
npm start
```
3. Open the URL shown in the terminal, e.g. `http://localhost:3000/MyPortfolio`.

## Available Scripts
- `npm start`: Start dev server
- `npm run build`: Create production build
- `npm test`: Run tests (CRA default)

## Routing
- Routing is configured in `src/index.js` and `src/App.js`.
- `BrowserRouter` uses `basename={process.env.PUBLIC_URL}` so paths work under the GitHub Pages subpath from `package.json` → `homepage`.
- `Navbar` provides links to all primary pages.

## Assets and PUBLIC_URL
- Images in `public/` are referenced with `${process.env.PUBLIC_URL}/...`.
- Example in `Profile.js`:
```jsx
<img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Profile" />
```
This ensures images load both locally and on GitHub Pages.

## Design Decisions
- **Simple styling with inline styles**: Keeps the project lightweight and easy to read for coursework; avoids extra CSS tooling.
- **Single source of truth for routes**: All routes live in `App.js` to make navigation obvious and maintainable.
- **GitHub Pages compatibility**: `homepage` in `package.json` and `basename` in the router ensure correct URLs in development and production.
- **Public assets pattern**: Using `process.env.PUBLIC_URL` prevents broken image paths on subpaths.

## React Features Used
- **Function components + Hooks** (`useState`): State for forms (Contact), lists/cart (FSApp), and interactions.
- **React Router v6**: `BrowserRouter`, `Routes`, `Route`, `Link` for SPA-style navigation.
- **Dynamic lists and events**: Rendering arrays (projects, posts, products) with interactivity.
- **Code-splitting-ready**: CRA default + optional `reportWebVitals` dynamic import.

## Additional Libraries / APIs
- **Web Vitals** (`web-vitals`): Imported lazily in `reportWebVitals.js` (optional performance metrics).
- Ideas for future integrations:
  - Weather section using OpenWeather API
  - Contact form backend (serverless function or service like Formspree)
  - Projects sourced from GitHub API

## Screenshots
Create a `public/screenshots/` folder and add images named like below. The README will render them automatically.

- Home (Profile)
  - `public/screenshots/home.png`
  - `public/screenshots/home-mobile.png`
- Portfolio
  - `public/screenshots/portfolio.png`
- Blog
  - `public/screenshots/blog.png`
- Contact
  - `public/screenshots/contact.png`
- FS App (Shopping Cart)
  - `public/screenshots/fsapp.png`
- Practicals (Library)
  - `public/screenshots/practicals.png`

Markdown embeds (render if files exist):

![Home](public/screenshots/home.png)
![Portfolio](public/screenshots/portfolio.png)
![Blog](public/screenshots/blog.png)
![Contact](public/screenshots/contact.png)
![FS App](public/screenshots/fsapp.png)
![Practicals](public/screenshots/practicals.png)

## Deployment (GitHub Pages)
1. Ensure `package.json` has:
```json
{
  "homepage": "https://yourusername.github.io/MyPortfolio"
}
```
2. Build the app:
```bash
npm run build
```
3. Deploy the `build/` folder to your `gh-pages` branch or set up an action/tool of your choice. Because the router uses `basename={process.env.PUBLIC_URL}`, routes will resolve correctly under `/MyPortfolio`.

## Notes
- If images don’t load on GitHub Pages, confirm they are referenced with `${process.env.PUBLIC_URL}` and that filenames match exactly (case-sensitive on some hosts).
- For local development at the root path, you can remove the `homepage` field temporarily.

---

Maintained by Vaishnavi Patil. Feel free to customize styling or extend features as needed.