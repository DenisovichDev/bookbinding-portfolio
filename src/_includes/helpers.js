export function escape(value = '') {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
export function asset(path = '/') {
  const prefix = '/' + (process.env.PATH_PREFIX || '').replace(/^\/+|\/+$/g, '');
  return escape((prefix === '/' ? '' : prefix) + '/' + String(path).replace(/^\/+/, ''));
}
export function photo(src, alt, eager = false) {
  return `<img src="${asset(src)}" alt="${escape(alt)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
}
