import{c as l,a_ as h}from"./index-Dlo3Hmi3.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=l("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=l("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);async function u(t,r){const o=n=>new Promise(c=>t.toBlob(c,n,r)),e=await o("image/webp");if(e&&e.type==="image/webp")return e;const a=await o("image/jpeg");if(!a)throw new Error("encode failed");return a}async function p(t,r,o){const e=await createImageBitmap(t),a=Math.min(1,r/Math.max(e.width,e.height)),n=Math.round(e.width*a),c=Math.round(e.height*a),i=document.createElement("canvas");i.width=n,i.height=c;const s=i.getContext("2d");if(!s)throw new Error("canvas unavailable");return s.fillStyle="#ffffff",s.fillRect(0,0,n,c),s.drawImage(e,0,0,n,c),e.close(),u(i,o)}async function d(t,r,o="photos"){const e=t.type==="image/webp"?"image/webp":"image/jpeg",a=await h(r,e,o);if(a.error||!a.uploadUrl)return{error:a.error||"uploadUrlFailed"};try{return(await fetch(a.uploadUrl,{method:"PUT",headers:{"Content-Type":e},body:t})).ok?{url:a.publicUrl}:{error:"uploadFailed"}}catch{return{error:"uploadFailed"}}}async function m(t,r){try{const o=await p(t,1200,.8);return d(o,r)}catch{return{error:"decodeFailed"}}}async function g(t,r){try{const e=await(await fetch(t)).blob();return d(e,r,"avatars")}catch{return{error:"decodeFailed"}}}export{w as C,f as T,m as a,g as u};
