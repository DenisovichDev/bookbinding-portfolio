import { asset, escape, photo } from './_includes/helpers.js';
export default class {
  data() { return { layout: 'base.11ty.js', title: 'Work' }; }
  render({ site, collections }) {
    const projects = collections.projects || [];
    return `<section class="introduction"><p class="eyebrow">A personal portfolio</p><h1>${escape(site.intro)}</h1><p class="lede">${escape(site.description)}</p></section>
<section aria-labelledby="work-title"><div class="section-heading"><h2 id="work-title">The collection</h2><span>${String(projects.length).padStart(2, '0')} projects</span></div>
${site.demo ? '<p class="demo-note">Sample collection · Illustrations and text are placeholders for your own work.</p>' : ''}
<div class="project-grid">${projects.map((item, i) => `<article class="project-card"><a href="${asset(item.url)}"><div class="card-image">${photo(item.data.cover, item.data.coverAlt, i < 2)}</div><div class="card-heading"><h3>${escape(item.data.title)}</h3><span aria-hidden="true">↗</span></div></a><p class="card-meta">${escape(item.data.structure)} <span>·</span> ${escape(item.data.year)}</p></article>`).join('')}</div>
${!projects.length ? '<p>New work will be added here soon.</p>' : ''}</section>`;
  }
}
