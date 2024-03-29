import{s as X,e as I,t as H,a as G,c as y,k as S,l as K,d as g,b as W,f as $,j as V,i as _,m as ee,n as U,o as te,u as ue,S as C,T as le,Q as re,U as Ce,V as fe,W as qe,g as Ae,y as Ge,r as We,v as De}from"../chunks/scheduler.Ds7F8-We.js";import{S as Y,i as x,b as F,d as Q,m as Z,a as A,g as se,c as ie,t as N,e as J}from"../chunks/index.C2t33DAs.js";import{c as ne,e as T}from"../chunks/number-format.DT7yE_pp.js";import{t as R,p as he}from"../chunks/words.CvDssxqn.js";import{w as Ne}from"../chunks/index.C5UCwSHb.js";import{c as Ve}from"../chunks/set.store.DVF3kOos.js";const ze=Ve("betweenle:wins"),oe=()=>{const l=he[Math.floor(Math.random()*he.length)],t=R.indexOf(l);return{targetIndex:t,lowerIndex:0,upperIndex:R.length,targetWord:l,upperWord:"aaaaa",lowerWord:"zzzzz",attempt:"",currentGuess:1,maxGuesses:15,distanceUpper:t,distanceLower:R.length-t,win:!1,lose:!1,incorrect:!1,correct:"",visible:!1,ended:!1}},Te=()=>{const{subscribe:l,set:t,update:n}=Ne(oe());return{subscribe:l,reset:()=>t(oe()),submit(){n(e=>{if(e.win||e.lose)return oe();if(e.attempt.length===5){if(e.attempt===e.targetWord)return e.win=!0,e.ended=!0,ze.addWin(e.targetWord),e;const r=e.attempt.localeCompare(e.upperWord),i=e.attempt.localeCompare(e.lowerWord);if(r<=0||i>=0||!R.includes(e.attempt))return e.incorrect=!0,setTimeout(()=>{n(o=>(o.incorrect=!1,o))},300),e;const s=e.attempt.localeCompare(e.targetWord);if(s!==0)return e.currentGuess>=e.maxGuesses?(e.lose=!0,e.ended=!0,e):(e.visible=!0,e.currentGuess=e.currentGuess+1,s>0&&(e.lowerWord=e.attempt,e.lowerIndex=R.indexOf(e.attempt),e.distanceLower=e.lowerIndex-e.targetIndex,e.correct="down",setTimeout(()=>{n(o=>(o.correct="",o.attempt="",o))},300)),s<0&&(e.upperWord=e.attempt,e.upperIndex=R.indexOf(e.attempt),e.distanceUpper=e.targetIndex-e.upperIndex,e.correct="up",setTimeout(()=>{n(o=>(o.correct="",o.attempt="",o))},300)),e)}return e})},addLetter(e){n(r=>(r.attempt.length<5&&e.length===1&&e.match(/[a-zA-Z]/)&&(r.attempt+=e.toLowerCase()),r))},removeLetter(){n(e=>(e.attempt=e.attempt.slice(0,-1),e))}}},M=Te();function pe(l){let t;return{c(){t=I("div"),this.h()},l(n){t=y(n,"DIV",{class:!0,style:!0}),S(t).forEach(g),this.h()},h(){$(t,"class","marker svelte-vnb8sq"),ue(t,"top",l[3]+"%")},m(n,e){V(n,t,e)},p(n,e){e&8&&ue(t,"top",n[3]+"%")},d(n){n&&g(t)}}}function Ue(l){let t,n,e=(l[0].visible?ne(l[2]):"?")+"",r,i,s,o,h,f,d,a=(l[0].visible?ne(l[1]):"?")+"",b,v=l[0].visible&&pe(l);return{c(){t=I("div"),n=I("span"),r=H(e),i=G(),s=I("div"),o=I("div"),h=G(),v&&v.c(),f=G(),d=I("span"),b=H(a),this.h()},l(z){t=y(z,"DIV",{class:!0});var L=S(t);n=y(L,"SPAN",{class:!0});var D=S(n);r=K(D,e),D.forEach(g),i=W(L),s=y(L,"DIV",{class:!0});var m=S(s);o=y(m,"DIV",{class:!0}),S(o).forEach(g),h=W(m),v&&v.l(m),m.forEach(g),f=W(L),d=y(L,"SPAN",{class:!0});var j=S(d);b=K(j,a),j.forEach(g),L.forEach(g),this.h()},h(){$(n,"class","svelte-vnb8sq"),$(o,"class","line"),$(s,"class","connector svelte-vnb8sq"),$(d,"class","svelte-vnb8sq"),$(t,"class","meter svelte-vnb8sq")},m(z,L){V(z,t,L),_(t,n),_(n,r),_(t,i),_(t,s),_(s,o),_(s,h),v&&v.m(s,null),_(t,f),_(t,d),_(d,b)},p(z,[L]){L&5&&e!==(e=(z[0].visible?ne(z[2]):"?")+"")&&ee(r,e),z[0].visible?v?v.p(z,L):(v=pe(z),v.c(),v.m(s,null)):v&&(v.d(1),v=null),L&3&&a!==(a=(z[0].visible?ne(z[1]):"?")+"")&&ee(b,a)},i:U,o:U,d(z){z&&g(t),v&&v.d()}}}function Be(l,t,n){let e,r,i,s;return te(l,M,o=>n(0,s=o)),l.$$.update=()=>{l.$$.dirty&1&&n(3,e=s.distanceUpper/(s.distanceUpper+s.distanceLower)*100),l.$$.dirty&1&&n(2,r=s.distanceUpper/R.length*100),l.$$.dirty&1&&n(1,i=s.distanceLower/R.length*100)},[s,i,r,e]}class Oe extends Y{constructor(t){super(),x(this,t,Be,Ue,X,{})}}function Pe(l){let t,n;return{c(){t=I("span"),n=H(l[0]),this.h()},l(e){t=y(e,"SPAN",{class:!0});var r=S(t);n=K(r,l[0]),r.forEach(g),this.h()},h(){$(t,"class","svelte-107gnvl"),C(t,"win",l[1].win),C(t,"lose",l[1].lose),C(t,"incorrect",l[1].incorrect),C(t,"up",l[1].correct==="up"),C(t,"down",l[1].correct==="down"),C(t,"empty",l[0]==="•"||l[0]===" "),C(t,"impossible",l[2])},m(e,r){V(e,t,r),_(t,n)},p(e,[r]){r&1&&ee(n,e[0]),r&2&&C(t,"win",e[1].win),r&2&&C(t,"lose",e[1].lose),r&2&&C(t,"incorrect",e[1].incorrect),r&2&&C(t,"up",e[1].correct==="up"),r&2&&C(t,"down",e[1].correct==="down"),r&1&&C(t,"empty",e[0]==="•"||e[0]===" "),r&4&&C(t,"impossible",e[2])},i:U,o:U,d(e){e&&g(t)}}}function je(l,t,n){let e,r;te(l,M,h=>n(1,r=h));let{letter:i}=t,{index:s}=t;const o=(h,f,d,a,b)=>d.substring(0,b)===a.substring(0,b)?d[b]<=h&&a[b]>=h:d.substring(0,b)===f.substring(0,b)?d[b]<=h:a.substring(0,b)===f.substring(0,b)?a[b]>=h:!0;return l.$$set=h=>{"letter"in h&&n(0,i=h.letter),"index"in h&&n(3,s=h.index)},l.$$.update=()=>{l.$$.dirty&11&&n(2,e=i!=="•"&&i!==" "&&!o(i,r.attempt,r.upperWord,r.lowerWord,s))},[i,r,e,s]}class Me extends Y{constructor(t){super(),x(this,t,je,Pe,X,{letter:0,index:3})}}function He(l){let t,n;return{c(){t=I("span"),n=H(l[0]),this.h()},l(e){t=y(e,"SPAN",{class:!0});var r=S(t);n=K(r,l[0]),r.forEach(g),this.h()},h(){$(t,"class","svelte-ynm1tz")},m(e,r){V(e,t,r),_(t,n)},p(e,[r]){r&1&&ee(n,e[0])},i:U,o:U,d(e){e&&g(t)}}}function Ke(l,t,n){let{letter:e}=t;return l.$$set=r=>{"letter"in r&&n(0,e=r.letter)},[e]}class Se extends Y{constructor(t){super(),x(this,t,Ke,He,X,{letter:0})}}function de(l,t,n){const e=l.slice();return e[3]=t[n],e}function me(l,t,n){const e=l.slice();return e[3]=t[n],e[7]=n,e}function ge(l,t,n){const e=l.slice();return e[3]=t[n],e}function _e(l){let t,n;return t=new Se({props:{letter:l[3]}}),{c(){F(t.$$.fragment)},l(e){Q(t.$$.fragment,e)},m(e,r){Z(t,e,r),n=!0},p(e,r){const i={};r&1&&(i.letter=e[3]),t.$set(i)},i(e){n||(A(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function ve(l){let t,n;return t=new Me({props:{letter:l[3],index:l[7]}}),{c(){F(t.$$.fragment)},l(e){Q(t.$$.fragment,e)},m(e,r){Z(t,e,r),n=!0},p(e,r){const i={};r&2&&(i.letter=e[3]),t.$set(i)},i(e){n||(A(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function be(l){let t,n;return t=new Se({props:{letter:l[3]}}),{c(){F(t.$$.fragment)},l(e){Q(t.$$.fragment,e)},m(e,r){Z(t,e,r),n=!0},p(e,r){const i={};r&1&&(i.letter=e[3]),t.$set(i)},i(e){n||(A(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){J(t,e)}}}function Fe(l){let t,n,e,r,i,s,o,h,f,d,a,b,v,z,L;n=new Oe({});let D=T(l[0].upperWord),m=[];for(let u=0;u<D.length;u+=1)m[u]=_e(ge(l,D,u));const j=u=>N(m[u],1,1,()=>{m[u]=null});let B=T(l[1]),w=[];for(let u=0;u<B.length;u+=1)w[u]=ve(me(l,B,u));const q=u=>N(w[u],1,1,()=>{w[u]=null});let E=T(l[0].lowerWord),k=[];for(let u=0;u<E.length;u+=1)k[u]=be(de(l,E,u));const Le=u=>N(k[u],1,1,()=>{k[u]=null});return{c(){t=I("section"),F(n.$$.fragment),e=G(),r=I("div"),i=I("div");for(let u=0;u<m.length;u+=1)m[u].c();s=G(),o=I("div");for(let u=0;u<w.length;u+=1)w[u].c();f=G(),d=I("div");for(let u=0;u<k.length;u+=1)k[u].c();a=G(),b=I("div"),this.h()},l(u){t=y(u,"SECTION",{class:!0});var p=S(t);Q(n.$$.fragment,p),e=W(p),r=y(p,"DIV",{class:!0});var c=S(r);i=y(c,"DIV",{class:!0});var O=S(i);for(let P=0;P<m.length;P+=1)m[P].l(O);O.forEach(g),s=W(c),o=y(c,"DIV",{class:!0});var ce=S(o);for(let P=0;P<w.length;P+=1)w[P].l(ce);ce.forEach(g),f=W(c),d=y(c,"DIV",{class:!0});var ae=S(d);for(let P=0;P<k.length;P+=1)k[P].l(ae);ae.forEach(g),c.forEach(g),a=W(p),b=y(p,"DIV",{class:!0}),S(b).forEach(g),p.forEach(g),this.h()},h(){$(i,"class","upper svelte-19ghp5z"),$(o,"class",h="attempt "+l[0].correct+" svelte-19ghp5z"),C(o,"incorrect",l[0].incorrect),$(d,"class","lower svelte-19ghp5z"),$(r,"class","board svelte-19ghp5z"),C(r,"win",l[0].win),C(r,"lose",l[0].lose),$(b,"class","svelte-19ghp5z"),$(t,"class","game svelte-19ghp5z")},m(u,p){V(u,t,p),Z(n,t,null),_(t,e),_(t,r),_(r,i);for(let c=0;c<m.length;c+=1)m[c]&&m[c].m(i,null);_(r,s),_(r,o);for(let c=0;c<w.length;c+=1)w[c]&&w[c].m(o,null);_(r,f),_(r,d);for(let c=0;c<k.length;c+=1)k[c]&&k[c].m(d,null);_(t,a),_(t,b),v=!0,z||(L=le(t,"click",l[2]),z=!0)},p(u,[p]){if(p&1){D=T(u[0].upperWord);let c;for(c=0;c<D.length;c+=1){const O=ge(u,D,c);m[c]?(m[c].p(O,p),A(m[c],1)):(m[c]=_e(O),m[c].c(),A(m[c],1),m[c].m(i,null))}for(se(),c=D.length;c<m.length;c+=1)j(c);ie()}if(p&2){B=T(u[1]);let c;for(c=0;c<B.length;c+=1){const O=me(u,B,c);w[c]?(w[c].p(O,p),A(w[c],1)):(w[c]=ve(O),w[c].c(),A(w[c],1),w[c].m(o,null))}for(se(),c=B.length;c<w.length;c+=1)q(c);ie()}if((!v||p&1&&h!==(h="attempt "+u[0].correct+" svelte-19ghp5z"))&&$(o,"class",h),(!v||p&1)&&C(o,"incorrect",u[0].incorrect),p&1){E=T(u[0].lowerWord);let c;for(c=0;c<E.length;c+=1){const O=de(u,E,c);k[c]?(k[c].p(O,p),A(k[c],1)):(k[c]=be(O),k[c].c(),A(k[c],1),k[c].m(d,null))}for(se(),c=E.length;c<k.length;c+=1)Le(c);ie()}(!v||p&1)&&C(r,"win",u[0].win),(!v||p&1)&&C(r,"lose",u[0].lose)},i(u){if(!v){A(n.$$.fragment,u);for(let p=0;p<D.length;p+=1)A(m[p]);for(let p=0;p<B.length;p+=1)A(w[p]);for(let p=0;p<E.length;p+=1)A(k[p]);v=!0}},o(u){N(n.$$.fragment,u),m=m.filter(Boolean);for(let p=0;p<m.length;p+=1)N(m[p]);w=w.filter(Boolean);for(let p=0;p<w.length;p+=1)N(w[p]);k=k.filter(Boolean);for(let p=0;p<k.length;p+=1)N(k[p]);v=!1},d(u){u&&g(t),J(n),re(m,u),re(w,u),re(k,u),z=!1,L()}}}function Qe(l,t,n){let e,r;te(l,M,s=>n(0,r=s));function i(s){Ce.call(this,l,s)}return l.$$.update=()=>{l.$$.dirty&1&&n(1,e=(r.attempt+"•").padEnd(5).substring(0,5))},[r,e,i]}class Ze extends Y{constructor(t){super(),x(this,t,Qe,Fe,X,{})}}function $e(l,t,n){const e=l.slice();return e[3]=t[n],e}function we(l){let t,n;return{c(){t=I("span"),this.h()},l(e){t=y(e,"SPAN",{class:!0}),S(t).forEach(g),this.h()},h(){$(t,"class",n=fe(l[3])+" svelte-j7gqsg")},m(e,r){V(e,t,r)},p(e,r){r&1&&n!==(n=fe(e[3])+" svelte-j7gqsg")&&$(t,"class",n)},d(e){e&&g(t)}}}function Je(l){let t,n=T(l[0]),e=[];for(let r=0;r<n.length;r+=1)e[r]=we($e(l,n,r));return{c(){t=I("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=y(r,"DIV",{class:!0});var i=S(t);for(let s=0;s<e.length;s+=1)e[s].l(i);i.forEach(g),this.h()},h(){$(t,"class","svelte-j7gqsg")},m(r,i){V(r,t,i);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null)},p(r,[i]){if(i&1){n=T(r[0]);let s;for(s=0;s<n.length;s+=1){const o=$e(r,n,s);e[s]?e[s].p(o,i):(e[s]=we(o),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}},i:U,o:U,d(r){r&&g(t),re(e,r)}}}function Re(l,t,n){let e;te(l,M,s=>n(1,e=s));const r=s=>s<e.currentGuess?"past":s===e.currentGuess?e.win?"win":e.lose?"lose":"current":"future";let i=Array.from({length:e.maxGuesses},(s,o)=>o+1).map(r);return l.$$.update=()=>{l.$$.dirty&2&&n(0,i=Array.from({length:e.maxGuesses},(s,o)=>o+1).map(r))},[i,e]}class Xe extends Y{constructor(t){super(),x(this,t,Re,Je,X,{})}}function ke(l,t,n){const e=l.slice();return e[4]=t[n],e}function Ee(l){let t,n,e,r,i,s;function o(){return l[3](l[4])}return{c(){t=I("button"),n=H(l[4]),e=G(),this.h()},l(h){t=y(h,"BUTTON",{class:!0});var f=S(t);n=K(f,l[4]),e=W(f),f.forEach(g),this.h()},h(){t.disabled=r=!l[2](l[4],l[0].attempt,l[0].upperWord,l[0].lowerWord),$(t,"class","svelte-1240ro5")},m(h,f){V(h,t,f),_(t,n),_(t,e),i||(s=le(t,"click",o),i=!0)},p(h,f){l=h,f&1&&r!==(r=!l[2](l[4],l[0].attempt,l[0].upperWord,l[0].lowerWord))&&(t.disabled=r)},d(h){h&&g(t),i=!1,s()}}}function Ye(l){let t,n=T("abcdefghijklmnopqrstuvwxyz"),e=[];for(let r=0;r<n.length;r+=1)e[r]=Ee(ke(l,n,r));return{c(){t=I("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=y(r,"DIV",{class:!0});var i=S(t);for(let s=0;s<e.length;s+=1)e[s].l(i);i.forEach(g),this.h()},h(){$(t,"class","svelte-1240ro5")},m(r,i){V(r,t,i);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null)},p(r,[i]){if(i&7){n=T("abcdefghijklmnopqrstuvwxyz");let s;for(s=0;s<n.length;s+=1){const o=ke(r,n,s);e[s]?e[s].p(o,i):(e[s]=Ee(o),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}},i:U,o:U,d(r){r&&g(t),re(e,r)}}}function xe(l,t,n){let e;te(l,M,o=>n(0,e=o));const r=qe();return[e,r,(o,h,f,d)=>{const a=h.length;return f.substring(0,a)===d.substring(0,a)?f[a]<=o&&d[a]>=o:f.substring(0,a)===h.substring(0,a)?f[a]<=o:d.substring(0,a)===h.substring(0,a)?d[a]>=o:!0},o=>r("keypress",{key:o})]}class et extends Y{constructor(t){super(),x(this,t,xe,Ye,X,{})}}function Ie(l,t,n){const e=l.slice();return e[1]=t[n],e}function ye(l){let t,n=l[1]+"",e;return{c(){t=I("li"),e=H(n),this.h()},l(r){t=y(r,"LI",{class:!0});var i=S(t);e=K(i,n),i.forEach(g),this.h()},h(){$(t,"class","svelte-1628q7m")},m(r,i){V(r,t,i),_(t,e)},p(r,i){i&1&&n!==(n=r[1]+"")&&ee(e,n)},d(r){r&&g(t)}}}function tt(l){let t,n=(l[0].size||"no")+"",e,r,i,s,o=T(l[0].values()),h=[];for(let f=0;f<o.length;f+=1)h[f]=ye(Ie(l,o,f));return{c(){t=I("h3"),e=H(n),r=H(" wins"),i=G(),s=I("ol");for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){t=y(f,"H3",{});var d=S(t);e=K(d,n),r=K(d," wins"),d.forEach(g),i=W(f),s=y(f,"OL",{class:!0});var a=S(s);for(let b=0;b<h.length;b+=1)h[b].l(a);a.forEach(g),this.h()},h(){$(s,"class","svelte-1628q7m")},m(f,d){V(f,t,d),_(t,e),_(t,r),V(f,i,d),V(f,s,d);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(s,null)},p(f,[d]){if(d&1&&n!==(n=(f[0].size||"no")+"")&&ee(e,n),d&1){o=T(f[0].values());let a;for(a=0;a<o.length;a+=1){const b=Ie(f,o,a);h[a]?h[a].p(b,d):(h[a]=ye(b),h[a].c(),h[a].m(s,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=o.length}},i:U,o:U,d(f){f&&(g(t),g(i),g(s)),re(h,f)}}}function rt(l,t,n){let e;return te(l,ze,r=>n(0,e=r)),[e]}class nt extends Y{constructor(t){super(),x(this,t,rt,tt,X,{})}}function lt(l){let t,n,e,r,i="Betweenle",s,o,h,f,d,a,b,v,z=l[1].ended?"Next":"Guess",L,D,m,j,B,w;return o=new Xe({}),f=new Ze({}),f.$on("click",l[5]),a=new et({}),a.$on("keypress",l[6]),m=new nt({}),{c(){t=I("section"),n=I("input"),e=G(),r=I("h1"),r.textContent=i,s=G(),F(o.$$.fragment),h=G(),F(f.$$.fragment),d=G(),F(a.$$.fragment),b=G(),v=I("button"),L=H(z),D=G(),F(m.$$.fragment),this.h()},l(q){t=y(q,"SECTION",{class:!0});var E=S(t);n=y(E,"INPUT",{type:!0,class:!0}),e=W(E),r=y(E,"H1",{class:!0,"data-svelte-h":!0}),Ae(r)!=="svelte-1s4cc3"&&(r.textContent=i),s=W(E),Q(o.$$.fragment,E),h=W(E),Q(f.$$.fragment,E),d=W(E),Q(a.$$.fragment,E),b=W(E),v=y(E,"BUTTON",{id:!0,class:!0});var k=S(v);L=K(k,z),k.forEach(g),D=W(E),Q(m.$$.fragment,E),E.forEach(g),this.h()},h(){$(n,"type","text"),$(n,"class","hidden svelte-193bkd4"),$(r,"class","svelte-193bkd4"),$(v,"id","main-button"),$(v,"class","svelte-193bkd4"),$(t,"class","page svelte-193bkd4")},m(q,E){V(q,t,E),_(t,n),l[4](n),_(t,e),_(t,r),_(t,s),Z(o,t,null),_(t,h),Z(f,t,null),_(t,d),Z(a,t,null),_(t,b),_(t,v),_(v,L),_(t,D),Z(m,t,null),j=!0,B||(w=[le(n,"keydown",l[3]),le(v,"click",l[7])],B=!0)},p(q,[E]){(!j||E&2)&&z!==(z=q[1].ended?"Next":"Guess")&&ee(L,z)},i(q){j||(A(o.$$.fragment,q),A(f.$$.fragment,q),A(a.$$.fragment,q),A(m.$$.fragment,q),j=!0)},o(q){N(o.$$.fragment,q),N(f.$$.fragment,q),N(a.$$.fragment,q),N(m.$$.fragment,q),j=!1},d(q){q&&g(t),l[4](null),J(o),J(f),J(a),J(m),B=!1,Ge(w)}}}function st(l,t,n){let e;te(l,M,a=>n(1,e=a));let r;const i=a=>{r.focus(),s(new KeyboardEvent("keypress",{key:a}))},s=a=>{if(a.key==="Enter"){M.submit();return}if(a.key==="Backspace"&&!e.ended){M.removeLetter();return}M.addLetter(a.key)};We(()=>{r.focus()});function o(a){De[a?"unshift":"push"](()=>{r=a,n(0,r)})}return[r,e,i,s,o,()=>r.focus(),a=>i(a.detail.key),()=>i("Enter")]}class ht extends Y{constructor(t){super(),x(this,t,st,lt,X,{})}}export{ht as component};