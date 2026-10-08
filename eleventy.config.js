import { asset, escape } from './src/_includes/helpers.js';
export default function (config) {
  config.addPassthroughCopy('src/assets');
  config.addCollection('projects', api => api.getFilteredByTag('project')
    .filter(item => !item.data.draft)
    .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999) || b.date - a.date));
  // Draft pages are excluded as well as their gallery entries.
  config.addPreprocessor('drafts', 'md', data => data.draft ? false : undefined);
  config.addShortcode('figure', (src, alt, caption = '') =>
    `<figure class="essay-figure"><a href="${asset(src)}"><img src="${asset(src)}" alt="${escape(alt)}" loading="lazy" decoding="async"></a>${caption ? `<figcaption>${escape(caption)}</figcaption>` : ''}</figure>`);
  return { dir: { input: 'src', output: '_site' }, markdownTemplateEngine: 'njk',
    pathPrefix: process.env.PATH_PREFIX || '/' };
}
