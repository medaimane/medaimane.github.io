# Aimane Skhairi

Personal website for Mohamed Aimane Skhairi, Senior Software Engineer focused on mobile product engineering.

## Local preview

This is a static site with no build step or dependency installation. Serve the repository root with any local HTTP server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Content updates

Edit `src/data.js` to update the proof points, capabilities, principles, engagements, contact details, social profiles, or selected projects. Project entries are intentionally empty until verified project details are available. The contact CTA currently opens the supplied LinkedIn profile; set `site.email` to use a direct email link instead.

The canonical site URL and social metadata currently target `https://medaimane.github.io`. Update those references in `index.html`, `src/data.js`, `robots.txt`, and `sitemap.xml` if the site moves to a custom domain.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the repository root to GitHub Pages whenever `main` is updated. In the repository settings, choose **GitHub Actions** as the Pages build and deployment source. No build secrets or third-party analytics are used.

## Visual assets

The hero uses an original CSS illustration rather than a stock or generated portrait. Replace it with an approved portrait by editing the `.hero-art` element in `index.html`; preserve the mobile text-first order and add meaningful alt text. `og-image.svg` and `favicon.svg` are editable, source-native brand assets. Typography uses system fonts, so the page does not wait on a third-party font service.
