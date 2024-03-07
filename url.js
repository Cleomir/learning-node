const url = new URL("https://example.com:3000/abc?foo=bar&baz=qux");

console.log(url.protocol); // 'https:'
console.log(url.hostname); // 'example.com'
console.log(url.port); // '3000'
console.log(url.pathname); // '/abc'
console.log(url.search); // '?foo=bar'
// origin is protocol + hostname + port
console.log(url.origin); // 'https://example.com:3000'
console.log(url.search); // '?foo=bar&baz=qux'
console.log(url.searchParams.get("foo")); // 'bar'
console.log(url.href); // 'https://example.com:3000/abc?foo=bar'
