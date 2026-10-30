import{c as p,p as d,n as u}from"./index-Dlo3Hmi3.js";import{a as y}from"./addDays-C2n51qxk.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=p("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);function f(e,a){if(!a)return e.map((i,t)=>({...i,dayNumber:t+1}));const c=d(a);return e.map((i,t)=>({...i,dayNumber:t+1,date:u(y(c,t),"yyyy-MM-dd")}))}function x(e,a,c,i){const t=[...e],[s]=t.splice(a,1);return t.splice(c,0,s),f(t,i)}function A(e,a,c,i,t){const s=e.map(r=>({...r,activities:[...r.activities]})),n=s[a],o=n.activities.findIndex(r=>r.id===c);if(o===-1)return null;const[m]=n.activities.splice(o,1);return s[i].activities.splice(t,0,m),s}export{h as A,x as a,A as m,f as r};
