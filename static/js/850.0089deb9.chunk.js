"use strict";(self.webpackChunkkidgame2=self.webpackChunkkidgame2||[]).push([[850],{850:(e,t,r)=>{r.d(t,{LiveAudioVisualizer:()=>l});var n,a=r(791),o={exports:{}},i={};o.exports=function(){if(n)return i;n=1;var e=a,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var a,i={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,a)&&!l.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===i[a]&&(i[a]=r[a]);return{$$typeof:t,type:e,key:c,ref:u,props:i,_owner:s.current}}return i.Fragment=r,i.jsx=c,i.jsxs=c,i}();var s=o.exports;const l=e=>{let{mediaRecorder:t,width:r="100%",height:n="100%",barWidth:o=2,gap:i=1,backgroundColor:l="transparent",barColor:c="rgb(160, 198, 255)",fftSize:u=1024,maxDecibels:f=-10,minDecibels:h=-90,smoothingTimeConstant:d=.4}=e;const[g]=(0,a.useState)((()=>new AudioContext)),[m,p]=(0,a.useState)(),y=(0,a.useRef)(null);(0,a.useEffect)((()=>{if(!t.stream)return;const e=g.createAnalyser();p(e),e.fftSize=u,e.minDecibels=h,e.maxDecibels=f,e.smoothingTimeConstant=d,g.createMediaStreamSource(t.stream).connect(e)}),[t.stream]),(0,a.useEffect)((()=>{m&&"recording"===t.state&&b()}),[m,t.state]);const b=(0,a.useCallback)((()=>{if(!m)return;const e=new Uint8Array(null==m?void 0:m.frequencyBinCount);"recording"===t.state?(null==m||m.getByteFrequencyData(e),w(e),requestAnimationFrame(b)):"paused"===t.state?w(e):"inactive"===t.state&&"closed"!==g.state&&g.close()}),[m,g.state]),w=e=>{if(!y.current)return;const t=((e,t,r,n)=>{let a=t/(r+n),o=Math.floor(e.length/a);a>e.length&&(a=e.length,o=1);const i=[];for(let s=0;s<a;s++){let t=0;for(let r=0;r<o&&s*o+r<e.length;r++)t+=e[s*o+r];i.push(t/o)}return i})(e,y.current.width,o,i);((e,t,r,n,a,o)=>{const i=t.height/2,s=t.getContext("2d");s&&(s.clearRect(0,0,t.width,t.height),"transparent"!==a&&(s.fillStyle=a,s.fillRect(0,0,t.width,t.height)),e.forEach(((e,t)=>{s.fillStyle=o;const a=t*(r+n),l=i-e/2,c=r,u=e||1;s.beginPath(),s.roundRect?(s.roundRect(a,l,c,u,50),s.fill()):s.fillRect(a,l,c,u)})))})(t,y.current,o,i,l,c)};return s.jsx("canvas",{ref:y,width:r,height:n,style:{aspectRatio:"unset"}})},c=function(e,t,r,n,a,o,i){let s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1;const c=t.height/2,u=t.getContext("2d");if(!u)return;u.clearRect(0,0,t.width,t.height),"transparent"!==a&&(u.fillStyle=a,u.fillRect(0,0,t.width,t.height));const f=(s||0)/l;e.forEach(((t,a)=>{const s=a/e.length,l=f>s;u.fillStyle=l&&i?i:o;const h=a*(r+n),d=c+t.min,g=r,m=c+t.max-d;u.beginPath(),u.roundRect?(u.roundRect(h,d,g,m,50),u.fill()):u.fillRect(h,d,g,m)}))};(0,a.forwardRef)(((e,t)=>{let{blob:r,width:n,height:o,barWidth:i=2,gap:l=1,currentTime:u,style:f,backgroundColor:h="transparent",barColor:d="rgb(184, 184, 184)",barPlayedColor:g="rgb(160, 198, 255)"}=e;const m=(0,a.useRef)(null),[p,y]=(0,a.useState)([]),[b,w]=(0,a.useState)(0);return(0,a.useImperativeHandle)(t,(()=>m.current),[]),(0,a.useEffect)((()=>{(async()=>{if(!m.current)return;if(!r){const e=Array.from({length:100},(()=>({max:0,min:0})));return void c(e,m.current,i,l,h,d,g)}const e=await r.arrayBuffer();await(new AudioContext).decodeAudioData(e,(e=>{if(!m.current)return;w(e.duration);const t=((e,t,r,n,a)=>{const o=e.getChannelData(0),i=r/(n+a),s=Math.floor(o.length/i),l=t/2;let c=[],u=0;for(let f=0;f<i;f++){const t=[];let r=0;const n=[];let a=0;for(let c=0;c<s&&f*s+c<e.length;c++){const e=o[f*s+c];e<=0&&(t.push(e),r++),e>0&&(n.push(e),a++)}const i=t.reduce(((e,t)=>e+t),0)/r,l={max:n.reduce(((e,t)=>e+t),0)/a,min:i};l.max>u&&(u=l.max),Math.abs(l.min)>u&&(u=Math.abs(l.min)),c.push(l)}if(.8*l>u*l){const e=.8*l/u;c=c.map((t=>({max:t.max*e,min:t.min*e})))}return c})(e,o,n,i,l);y(t),c(t,m.current,i,l,h,d,g)}))})()}),[r,m.current]),(0,a.useEffect)((()=>{m.current&&c(p,m.current,i,l,h,d,g,u,b)}),[u,b]),s.jsx("canvas",{ref:m,width:n,height:o,style:{...f}})})).displayName="AudioVisualizer"}}]);
//# sourceMappingURL=850.0089deb9.chunk.js.map