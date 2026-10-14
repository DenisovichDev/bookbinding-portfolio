import { asset, escape } from './helpers.js';
export default class {
    render(data) {
        const { site, title, content, page } = data;
        const work = page.url === '/' || page.url.startsWith('/projects/');
        return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(title ? title + ' | ' : '')}${escape(site.title)}</title>
<meta name="description" content="${escape(data.description || site.description)}">
<meta name="theme-color" content="#f8f7f3"><link rel="stylesheet" href="${asset('/assets/style.css')}"><link rel="icon" type="image/png" sizes="32x32"
      href="${asset('/assets/favicon.png')}"></head>

<body><a class="skip" href="#main">Skip to content</a><div class="shell">
<header class="site-header">
<a class="identity" href="${asset('/')}">
  <img
    class="site-logo"
    src="${asset('/assets/logo.png')}"
    alt=""
    width="48"
    height="48"
  >
  <span class="identity-text">
    <span class="site-title">${escape(site.name)}</span>
    <span class="site-subtitle">${escape(site.title)}</span>
  </span>
</a>
<nav aria-label="Main navigation"><a href="${asset('/')}"${work ? ' aria-current="page"' : ''}>Work</a><a href="${asset('/about/')}"${page.url === '/about/' ? ' aria-current="page"' : ''}>About</a></nav></header>
<main id="main">${content}</main>
<footer class="site-footer"><span>© ${new Date().getUTCFullYear()} ${escape(site.name)}</span><span></span>${site.email ? `<a href="mailto:${escape(site.email)}">Get in touch</a>` : ''}</footer>
</div></body></html>`;
    }
}
