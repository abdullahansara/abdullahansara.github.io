# Abdullah Ansar Academic Site

Personal academic website and essay archive built with Jekyll for GitHub Pages.

## Editing Content

- Blog posts live in `_posts/`.
- Publication records live in `_publications/`.
- Homepage text lives in `_data/home.yml`.
- Public profile and link settings live in `_data/settings.yml`.
- Uploaded images should go in `assets/uploads/`.
- PDFs should go in `assets/pdfs/`.

## Admin Backend

The Decap CMS admin is configured at `/admin/`.

The CMS is set to use the GitHub backend for:

```yaml
repo: abdullahansara/abdullahansara.github.io
branch: main
```

To make browser login work on the live site, configure Decap CMS GitHub authentication with an OAuth provider or host through a service such as Netlify with Identity/Git Gateway.
