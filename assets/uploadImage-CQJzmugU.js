import{f as l,bx as h}from"./index-DJJS3dTG.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=l("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=l("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);async function u(a,r){const o=n=>new Promise(c=>a.toBlob(c,n,r)),e=await o("image/webp");if(e&&e.type==="image/webp")return e;const t=await o("image/jpeg");if(!t)throw new Error("encode failed");return t}async function p(a,r,o){const e=await createImageBitmap(a),t=Math.min(1,r/Math.max(e.width,e.height)),n=Math.round(e.width*t),c=Math.round(e.height*t),i=document.createElement("canvas");i.width=n,i.height=c;const s=i.getContext("2d");if(!s)throw new Error("canvas unavailable");return s.fillStyle="#ffffff",s.fillRect(0,0,n,c),s.drawImage(e,0,0,n,c),e.close(),u(i,o)}async function d(a,r,o="photos"){const e=a.type==="image/webp"?"image/webp":"image/jpeg",t=await h(r,e,o);if(t.error||!t.uploadUrl)return{error:t.error||"uploadUrlFailed"};try{return(await fetch(t.uploadUrl,{method:"PUT",headers:{"Content-Type":e},body:a})).ok?{url:t.publicUrl}:{error:"uploadFailed"}}catch{return{error:"uploadFailed"}}}async function m(a,r){try{const o=await p(a,1200,.8);return d(o,r)}catch{return{error:"decodeFailed"}}}async function g(a,r){try{const e=await(await fetch(a)).blob();return d(e,r,"avatars")}catch{return{error:"decodeFailed"}}}export{f as C,w as T,m as a,g as u};
