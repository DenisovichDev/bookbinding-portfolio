# Bookbinding Portfolio

A personal bookbinding portfolio built with Eleventy and hosted on GitHub Pages.

## Requirements

- Node.js 24 LTS
- npm
- Git

## Install

```sh
npm install
```

Commit the generated `package-lock.json`. For subsequent installations, use `npm ci`.

## Develop

```sh
npm start
```

Open http://localhost:8080.

## Check and Build

```sh
npm run check
npm run build
```

The generated site is written to `_site/`.

## Edit Content

- `src/_data/site.json`: site name, introduction, and contact details.
- `src/about.md`: About page.
- `src/projects/`: project Markdown files.
- `src/assets/images/`: project photographs.
- `src/assets/style.css`: site styles.

## Add a Project

Copy an existing file in `src/projects/`. Update its metadata and writeup, then add photographs to `src/assets/images/`.

- `order`: lower numbers appear first.
- `draft: true`: excludes the project from the generated site.
- `sample: false`: removes the sample-project notice.

The filename determines the URL. For example, `my-binding.md` becomes `/projects/my-binding/`.

Insert captioned images using:

```njk
{% figure "/assets/images/my-binding/detail.jpg", "Description of the image", "Caption" %}
```

Resize and compress photographs before adding them. The site does not automatically optimize images.

## Deploy

In the GitHub repository, set **Settings → Pages → Source** to **GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` builds and publishes changes pushed to `main`.

```sh
npm run check
npm run build
git add .
git commit -m "Update portfolio"
git push
```

Do not commit `node_modules/` or `_site/`.
