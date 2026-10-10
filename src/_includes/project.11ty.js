import { asset, escape, photo } from './helpers.js';
export default class {
    data() { return { layout: 'base.11ty.js' }; }
    render(data) {
        const projects = data.collections.projects || [];
        const index = projects.findIndex(p => p.url === data.page.url);
        const next = projects.length > 1 && index >= 0 ? projects[(index + 1) % projects.length] : null;
        const details = [['Finished In', data.finished], ['Binding', data.structure], ['Materials', data.materials], ['Size', data.size]];
        return `<a class="back-link" href="${asset('/')}"> All work</a><header class="project-header">
        <h1>${escape(data.title)}</h1>
        <p class="lede">${escape(data.description)}</p>
        </header>
<figure class="hero-figure"><a href="${asset(data.cover)}" aria-label="View opening image at full size">${photo(data.cover, data.coverAlt, true)}</a>${data.coverCaption ? `<figcaption>${escape(data.coverCaption)}</figcaption>` : ''}</figure>
<div class="project-body"><aside aria-label="Project details"><dl>${details.filter(([, v]) => v).map(([k, v]) => `<div><dt>${k}</dt><dd>${escape(v)}</dd></div>`).join('')}</dl></aside><div class="prose">${data.content}</div></div>
<nav class="project-navigation" aria-label="Project navigation"><a href="${asset('/')}">Back to the collection</a>${next ? `<a href="${asset(next.url)}"><span class="eyebrow">Next project</span>${escape(next.data.title)}</a>` : ''}</nav>`;
    }
}
