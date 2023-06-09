fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name").then((function(o){if(!o.ok)throw new Error(o.status);return o.json()})).then((function(o){console.log(o)})).catch((function(o){console.log(o)}));
//# sourceMappingURL=fetch.cdf76bc2.js.map
