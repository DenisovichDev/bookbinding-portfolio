import { asset } from './_includes/helpers.js';
export default class {
 data() { return {layout:'base.11ty.js', title:'Page not found', permalink:'/404.html', eleventyExcludeFromCollections:true}; }
 render() { return `<section class="introduction"><p class="eyebrow">404</p><h1>A missing leaf.</h1><p>This page could not be found.</p><a href="${asset('/')}">Return to the collection →</a></section>`; }
}
