fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name").then((o=>{if(!o.ok)throw new Error(o.status);return o.json()})).then((o=>{console.log(o)})).catch((o=>{console.log(o)}));
//# sourceMappingURL=fetch.b6feec30.js.map
