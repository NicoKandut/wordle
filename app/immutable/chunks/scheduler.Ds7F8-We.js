function S(){}function T(t,n){for(const e in n)t[e]=n[e];return t}function C(t){return t()}function G(){return Object.create(null)}function D(t){t.forEach(C)}function J(t){return typeof t=="function"}function K(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function H(t,...n){if(t==null){for(const i of n)i(void 0);return S}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function V(t,n,e){t.$$.on_destroy.push(H(n,e))}function X(t,n,e,i){if(t){const l=N(t,n,e,i);return t[0](l)}}function N(t,n,e,i){return t[1]&&i?T(e.ctx.slice(),t[1](i(n))):e.ctx}function Y(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const u=[],c=Math.max(n.dirty.length,l.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|l[s];return u}return n.dirty|l}return n.dirty}function Z(t,n,e,i,l,u){if(l){const c=N(n,e,i,u);t.p(c,l)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function tt(t){return t??""}let m=!1;function nt(){m=!0}function et(){m=!1}function P(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function B(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let r=0;r<n.length;r++){const o=n[r].claim_order,a=(l>0&&n[e[l]].claim_order<=o?l+1:P(1,l,j=>n[e[j]].claim_order,o))-1;i[r]=e[a]+1;const E=a+1;e[E]=r,l=Math.max(E,l)}const u=[],c=[];let s=n.length-1;for(let r=e[l]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);s>=r;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<c.length;r++){for(;o<u.length&&c[r].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(c[r],a)}}function L(t,n){if(m){for(B(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function it(t,n,e){m&&!e?L(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function ct(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function M(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function rt(){return g(" ")}function st(){return g("")}function ut(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ot(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function at(t){return t.dataset.svelteH}function ft(t){return Array.from(t.childNodes)}function O(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function w(t,n,e,i,l=!1){O(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const r=e(s);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const r=e(s);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function q(t,n,e,i){return w(t,l=>l.nodeName===n,l=>{const u=[];for(let c=0;c<l.attributes.length;c++){const s=l.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>l.removeAttribute(c))},()=>i(n))}function _t(t,n,e){return q(t,n,e,M)}function z(t,n){return w(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>g(n),!0)}function dt(t){return z(t," ")}function ht(t,n){n=""+n,t.data!==n&&(t.data=n)}function mt(t,n){t.value=n??""}function pt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function bt(t,n,e){t.classList.toggle(n,!!e)}function F(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function yt(t,n){const e=[];let i=0;for(const l of n.childNodes)if(l.nodeType===8){const u=l.textContent.trim();u===`HEAD_${t}_END`?(i-=1,e.push(l)):u===`HEAD_${t}_START`&&(i+=1,e.push(l))}else i>0&&e.push(l);return e}function gt(t,n){return new t(n)}let h;function p(t){h=t}function x(){if(!h)throw new Error("Function called outside component initialization");return h}function xt(t){x().$$.on_mount.push(t)}function Et(t){x().$$.after_update.push(t)}function vt(){const t=x();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const u=F(n,e,{cancelable:i});return l.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}function kt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],v=[];let _=[];const k=[],A=Promise.resolve();let y=!1;function I(){y||(y=!0,A.then(U))}function Nt(){return I(),A}function R(t){_.push(t)}const b=new Set;let f=0;function U(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),W(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;v.length;)v.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;k.length;)k.pop()();y=!1,b.clear(),p(t)}function W(t){if(t.fragment!==null){t.update(),D(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(R)}}function wt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{U as A,J as B,Q as C,R as D,wt as E,h as F,p as G,C as H,d as I,I as J,nt as K,et as L,X as M,Z as N,$ as O,Y as P,ct as Q,mt as R,bt as S,ut as T,kt as U,tt as V,vt as W,rt as a,dt as b,_t as c,lt as d,M as e,ot as f,at as g,yt as h,L as i,it as j,ft as k,z as l,ht as m,S as n,V as o,st as p,Et as q,xt as r,K as s,g as t,pt as u,v,gt as w,Nt as x,D as y,G as z};