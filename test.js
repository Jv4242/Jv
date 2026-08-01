const fs = require("fs");
const html = fs.readFileSync(__dirname + "/index.html", "utf8");
const src = html.split("<script>")[1].split("<\/script>")[0];
const el = () => ({ appendChild(){}, style:{}, dataset:{}, classList:{add(){},remove(){}}, innerHTML:"", textContent:"", onclick:null });
global.document = { getElementById: el, createElement: el, querySelectorAll: ()=>[], body:{ appendChild(){} } };
global.window = {};
eval(src + ";globalThis.GEN = GEN;");
let fails = 0;
for (const mode of ["A","B","C"]) {
  for (let i = 0; i < 5000; i++) {
    const q = GEN[mode]();
    if (!q.opts.includes(q.a)) { console.log("MISSING ANSWER", mode, JSON.stringify(q)); fails++; }
    if (new Set(q.opts).size !== q.opts.length) { console.log("DUP OPTIONS", mode, JSON.stringify(q)); fails++; }
    if (q.opts.length < 2) { console.log("TOO FEW OPTS", mode, JSON.stringify(q)); fails++; }
    if (fails > 5) process.exit(1);
  }
}
console.log(fails === 0 ? "ALL PASS (15000 questions)" : "FAILURES: " + fails);
