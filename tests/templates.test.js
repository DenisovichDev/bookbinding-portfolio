import test from 'node:test';
import assert from 'node:assert/strict';
import { asset, escape } from '../src/_includes/helpers.js';
import Project from '../src/_includes/project.11ty.js';
import config from '../eleventy.config.js';

test('repository subpaths and escaped attribute values', () => {
    process.env.PATH_PREFIX = '/portfolio/';

    assert.equal(asset('/assets/a.svg'), '/portfolio/assets/a.svg');
    assert.equal(asset('/'), '/portfolio/');
    assert.equal(escape('<book "one">'), '&lt;book &quot;one&quot;&gt;');

    delete process.env.PATH_PREFIX;
});

test('draft exclusion and manual project ordering', () => {
    const hooks = {};

    config({
        addPassthroughCopy() { },
        addCollection(n, fn) {
            hooks.collection = fn;
        },
        addPreprocessor(n, e, fn) {
            hooks.pre = fn;
        },
        addShortcode() { },
    });

    const input = [
        { data: { order: 2 }, date: 0 },
        { data: { draft: true, order: 0 }, date: 0 },
        { data: { order: 1 }, date: 0 },
    ];

    assert.deepEqual(
        hooks.collection({ getFilteredByTag: () => input }).map(x => x.data.order),
        [1, 2]
    );

    assert.equal(hooks.pre({ draft: true }), false);
    assert.equal(hooks.pre({ draft: false }), undefined);
});

test('single project omits next link and missing optional details', () => {
    const html = new Project().render({
        title: 'A book',
        description: '',
        page: { url: '/projects/a/' },
        collections: {
            projects: [{ url: '/projects/a/' }],
        },
        cover: '/a.svg',
        coverAlt: 'Book',
        content: '<p>Notes</p>',
    });

    assert.ok(!html.includes('Next project'));
    assert.ok(!html.includes('<dt>Dimensions'));
    assert.ok(html.includes('<p>Notes</p>'));
});
