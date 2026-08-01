const fs = require("fs");
const html = fs.readFileSync(__dirname + "/index.html", "utf8");
const src = html.split("<script>")[1].split("<\/script>")[0];
const el = () => ({ appendChild(){}, style:{}, dataset:{}, classList:{add(){},remove(){},toggle(){}}, innerHTML:"", textContent:"", onclick:null });
global.document = { getElementById: el, createElement: el, querySelectorAll: ()=>[], body:{ appendChild(){} } };
global.window = {};
eval(src + ";globalThis.GEN = GEN; globalThis.CHAL = CHAL; globalThis.PUZ = PUZ; globalThis._setLevel = v => { level = v; };");
let fails = 0, total = 0;
for (const lvl of [1, 3, 5]) {           // difficulty tiers 0, 1, 2
  _setLevel(lvl);
  for (const GENSET of [GEN, CHAL, PUZ]) for (const mode of ["A","B","C"]) {
    for (let i = 0; i < 3000; i++) {
      const q = GENSET[mode]();
      total++;
      if (q.seq) { for (const s of q.seq) if (!q.opts.includes(s)) { console.log("SEQ ITEM MISSING", lvl, mode, JSON.stringify(q)); fails++; } }
      else if (q.multi) { for (const m of q.multi) if (!q.opts.includes(m)) { console.log("MULTI ITEM MISSING", lvl, mode, JSON.stringify(q)); fails++; } }
      else if (!q.opts.includes(q.a)) { console.log("MISSING ANSWER", lvl, mode, JSON.stringify(q)); fails++; }
      if (new Set(q.opts).size !== q.opts.length) { console.log("DUP OPTIONS", lvl, mode, JSON.stringify(q)); fails++; }
      if (q.opts.length < 2) { console.log("TOO FEW OPTS", lvl, mode, JSON.stringify(q)); fails++; }
      if (fails > 5) process.exit(1);
    }
  }
}
console.log(fails === 0 ? `ALL PASS (${total} questions)` : "FAILURES: " + fails);
process.exit(fails ? 1 : 0);
