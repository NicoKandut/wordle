function x(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function z(){return Object.create(null)}function j(t){t.forEach(w)}function D(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(E(n,e))}function U(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function A(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const i=[],f=Math.max(n.dirty.length,r.length);for(let s=0;s<f;s+=1)i[s]=n.dirty[s]|r[s];return i}return n.dirty|r}return n.dirty}function B(t,n,e,o,r,i){if(r){const f=y(n,e,o,i);t.p(f,r)}}function C(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){return t??""}let a;function _(t){a=t}function p(){if(!a)throw new Error("Function called outside component initialization");return a}function H(t){p().$$.on_mount.push(t)}function I(t){p().$$.after_update.push(t)}function J(t){p().$$.on_destroy.push(t)}const l=[],b=[];let u=[];const g=[],m=Promise.resolve();let h=!1;function v(){h||(h=!0,m.then(q))}function K(){return v(),m}function O(t){u.push(t)}const d=new Set;let c=0;function q(){if(c!==0)return;const t=a;do{try{for(;c<l.length;){const n=l[c];c++,_(n),M(n.$$)}}catch(n){throw l.length=0,c=0,n}for(_(null),l.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(l.length);for(;g.length;)g.pop()();h=!1,d.clear(),_(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function L(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{U as a,A as b,S as c,I as d,b as e,J as f,C as g,G as h,z as i,q as j,D as k,P as l,O as m,x as n,H as o,L as p,a as q,j as r,F as s,K as t,B as u,_ as v,w,l as x,v as y};
