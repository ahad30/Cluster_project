(()=>{var e={};e.id=542,e.ids=[542],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},27522:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(8775),r(320),r(68295),r(52615),r(56341),r(54864);var s=r(23191),a=r(88716),i=r(37922),o=r.n(i),l=r(95231),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);r.d(t,n);let c=["",{children:["(pages)",{children:["Support",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8775)),"C:\\Users\\mohim\\OneDrive\\Desktop\\PH-Projects\\Cluster_project\\src\\app\\(pages)\\Support\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,320)),"C:\\Users\\mohim\\OneDrive\\Desktop\\PH-Projects\\Cluster_project\\src\\app\\(pages)\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,68295)),"C:\\Users\\mohim\\OneDrive\\Desktop\\PH-Projects\\Cluster_project\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(r.bind(r,52615)),"C:\\Users\\mohim\\OneDrive\\Desktop\\PH-Projects\\Cluster_project\\src\\app\\error.jsx"],loading:[()=>Promise.resolve().then(r.bind(r,56341)),"C:\\Users\\mohim\\OneDrive\\Desktop\\PH-Projects\\Cluster_project\\src\\app\\loading.jsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,54864)),"C:\\Users\\mohim\\OneDrive\\Desktop\\PH-Projects\\Cluster_project\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\mohim\\OneDrive\\Desktop\\PH-Projects\\Cluster_project\\src\\app\\(pages)\\Support\\page.jsx"],p="/(pages)/Support/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/Support/page",pathname:"/Support",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},54291:(e,t,r)=>{Promise.resolve().then(r.bind(r,40561)),Promise.resolve().then(r.bind(r,73155)),Promise.resolve().then(r.bind(r,64531))},42980:(e,t,r)=>{Promise.resolve().then(r.bind(r,93756))},73155:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(10326),a=r(17577);let i={src:"/_next/static/media/facebook.7942e726.svg",height:20,width:11,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/linkedin.e73a515b.svg",height:20,width:20,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/youtube.7fe8e390.svg",height:20,width:27,blurWidth:0,blurHeight:0};var n=r(46226),c=r(40381);let d=()=>{let[e,t]=(0,a.useState)({firstName:"",lastName:"",email:"",telephone:"",message:"",file:"null",template:"two"}),[r,d]=(0,a.useState)(!1),p=(0,a.useRef)(null),u=r=>{let{name:s,value:a}=r.target;t({...e,[s]:a})},m=async r=>{r.preventDefault(),d(!0);let s=new FormData;for(let[t,r]of Object.entries(e))s.append(t,r);try{let e=await fetch("/api/email",{method:"POST",body:s});if(!e.ok){let t=await e.text();throw Error(`Response status: ${e.status} - ${t}`)}await e.json(),c.Am.success("Message successfully sent"),d(!1),t({firstName:"",lastName:"",email:"",telephone:"",message:"",file:null,template:"two"}),p.current&&(p.current.value="")}catch(e){console.error("Error:",e),c.Am.error("Error, please try resubmitting the form")}};return(0,s.jsxs)("div",{className:"max-w-[90%] lg:max-w-7xl lg:px-10 mx-auto mb-16",children:[s.jsx(c.x7,{position:"top-center",reverseOrder:!1}),(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"lg:text-2xl text-center lg:text-start font-semibold mb-2",children:"We are on Social networks"}),(0,s.jsxs)("div",{className:"flex justify-center lg:justify-start items-center space-x-4 mt-8",children:[s.jsx("div",{className:"bg-green-500 p-2 rounded",children:s.jsx(n.default,{src:i,alt:"Facebook",className:"w-5 h-5"})}),s.jsx("div",{className:"bg-green-500 p-2 rounded",children:s.jsx(n.default,{src:o,alt:"LinkedIn",className:"w-5 h-5"})}),s.jsx("div",{className:"bg-green-500 p-2 rounded",children:s.jsx(n.default,{src:l,alt:"YouTube",className:"w-5 h-5"})})]}),s.jsx("p",{className:"mt-4 mb-3 text-center lg:text-start",children:"Everything we do is for our users"})]}),s.jsx("div",{className:"lg:flex lg:justify-end lg:-mt-[540px]",children:s.jsx("form",{className:"lg:max-w-[45%] border-2 lg:border-8 border-primary lg:px-5 py-5 bg-white",onSubmit:m,children:(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"lg:text-3xl text-center lg:text-start font-semibold mb-2",children:"Feedback"}),(0,s.jsxs)("div",{className:"py-8 px-5 text-base gap-8 text-gray-700 sm:text-lg grid grid-cols-1 sm:grid-cols-1",children:[(0,s.jsxs)("div",{className:"relative",children:[s.jsx("label",{htmlFor:"firstName",children:"First name *"}),s.jsx("input",{id:"firstName",name:"firstName",type:"text",required:!0,value:e.firstName,onChange:u,className:"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"})]}),(0,s.jsxs)("div",{className:"relative",children:[s.jsx("label",{htmlFor:"lastName",children:"Last name *"}),s.jsx("input",{id:"lastName",name:"lastName",type:"text",required:!0,value:e.lastName,onChange:u,className:"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"})]}),(0,s.jsxs)("div",{className:"relative",children:[s.jsx("label",{htmlFor:"email",children:"Email *"}),s.jsx("input",{id:"email",name:"email",required:!0,type:"text",value:e.email,onChange:u,className:"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"})]}),(0,s.jsxs)("div",{className:"relative",children:[s.jsx("label",{htmlFor:"telephone",children:"Telephone *"}),s.jsx("input",{id:"telephone",name:"telephone",type:"number",required:!0,value:e.telephone,onChange:u,className:"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-b-primary"})]}),s.jsx("div",{className:"relative",children:s.jsx("textarea",{id:"message",required:!0,name:"message",value:e.message,onChange:u,className:"peer h-24 w-full border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-primary p-2",placeholder:"Message *"})}),(0,s.jsxs)("div",{className:"relative",children:[s.jsx("label",{htmlFor:"file",children:"Add file and press 'Upload'"}),s.jsx("div",{className:" flex items-center mt-3",children:s.jsx("input",{id:"file",name:"file",type:"file",ref:p,onChange:r=>{t({...e,file:r.target.files[0]})},className:"ms-1"})})]})]}),s.jsx("div",{className:"flex justify-center mb-5 px-5",children:s.jsx("button",{type:"submit",className:"bg-primary disabled:cursor-not-allowed disabled:bg-blue-200 text-white py-1 cursor-pointer w-full flex items-center justify-center",disabled:r,children:r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("svg",{className:"w-5 h-5 mr-2 text-white animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[s.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),s.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 0116 0h-2a6 6 0 10-12 0H4z"})]}),"Submitting..."]}):"Submit"})})]})})})]})}},93756:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(10326);r(17577),r(23824);var a=r(99805),i=r(98233),o=r(36249);let l=({children:e})=>s.jsx(s.Fragment,{children:(0,s.jsxs)(o.m,{children:[s.jsx(a.Z,{}),s.jsx("div",{className:"min-h-screen",children:e}),s.jsx(i.Z,{})]})})},64531:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var s=r(10326),a=r(79740),i=r(17577);let o=({text:e,children:t,windowTitle:r})=>((0,i.useEffect)(()=>{},[r]),s.jsx(a.Card,{className:"p-3",children:(0,s.jsxs)("h2",{className:"text-xl font-Poppins",children:[e," ",t]})}))},8775:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(19510);r(71159);let a={src:"/_next/static/media/Banner.a3df78b1.png"},i=()=>(0,s.jsxs)("section",{className:"bg-primary -z-40 text-white py-20 relative h-[400px] hidden lg:block mb-10",children:[(0,s.jsxs)("div",{className:"lg:max-w-7xl lg:px-10 mx-auto",children:[s.jsx("h2",{className:"lg:text-2xl font-normal mb-6",children:"Welcome to Cluster Antivirus Support"}),(0,s.jsxs)("div",{className:"mt-10",children:[s.jsx("p",{children:"Mail:"}),s.jsx("p",{children:"help@clusterantivirus.com"}),s.jsx("p",{className:"mt-3",children:"Phone:"}),s.jsx("p",{className:"",children:"+8809614502010"})]})]}),s.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-20",style:{backgroundImage:`url(${a.src})`}})]});var o=r(68570);let l=(0,o.createProxy)(String.raw`C:\Users\mohim\OneDrive\Desktop\PH-Projects\Cluster_project\src\app\(pages)\Support\SupportForm.jsx`),{__esModule:n,$$typeof:c}=l;l.default;let d=(0,o.createProxy)(String.raw`C:\Users\mohim\OneDrive\Desktop\PH-Projects\Cluster_project\src\app\(pages)\Support\SupportForm.jsx#default`),p=(0,o.createProxy)(String.raw`C:\Users\mohim\OneDrive\Desktop\PH-Projects\Cluster_project\src\components\DashboardTitle.jsx`),{__esModule:u,$$typeof:m}=p;p.default;let h=(0,o.createProxy)(String.raw`C:\Users\mohim\OneDrive\Desktop\PH-Projects\Cluster_project\src\components\DashboardTitle.jsx#default`),x=()=>(0,s.jsxs)("div",{className:"relative",children:[s.jsx(h,{windowTitle:"Support"}),s.jsx(i,{}),s.jsx("div",{className:"",children:s.jsx(d,{})})]})},320:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>l});var s=r(68570);let a=(0,s.createProxy)(String.raw`C:\Users\mohim\OneDrive\Desktop\PH-Projects\Cluster_project\src\app\(pages)\layout.jsx`),{__esModule:i,$$typeof:o}=a;a.default;let l=(0,s.createProxy)(String.raw`C:\Users\mohim\OneDrive\Desktop\PH-Projects\Cluster_project\src\app\(pages)\layout.jsx#default`)},40561:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s={src:"/_next/static/media/Banner.a3df78b1.png",height:600,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAMFBMVEXk7PCzqqLOsp3b1tOWhHPDx8eKeWjAv7u3lHvW3uK5uLduVEOEalbM09WbkYjr7/GdB1siAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg52Rg5WXi5mJgYOXjYWHkYGZgYGdjYWNkYgYACOIAjpSqr2wAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},40381:(e,t,r)=>{"use strict";r.d(t,{x7:()=>ec,Am:()=>F});var s,a=r(17577);let i={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let r="",s="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":s+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=d(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=d.p?d.p(i,o):i+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+s},p={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e},m=(e,t,r,s,a)=>{let i=u(e),o=p[i]||(p[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!p[o]){let t=i!==e?e:(e=>{let t,r,s=[{}];for(;t=l.exec(e.replace(n,""));)t[4]?s.shift():t[3]?(r=t[3].replace(c," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(c," ").trim();return s[0]})(e);p[o]=d(a?{["@keyframes "+o]:t}:t,r?"":"."+o)}let m=r&&p.g?p.g:null;return r&&(p.g=p[o]),((e,t,r,s)=>{s?t.data=t.data.replace(s,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(p[o],t,s,m),o},h=(e,t,r)=>e.reduce((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return m(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,o(t.target),t.g,t.o,t.k)}x.bind({g:1});let g,f,b,y=x.bind({k:1});function v(e,t){let r=this||{};return function(){let s=arguments;function a(i,o){let l=Object.assign({},i),n=l.className||a.className;r.p=Object.assign({theme:f&&f()},l),r.o=/ *go\d+/.test(n),l.className=x.apply(r,s)+(n?" "+n:""),t&&(l.ref=o);let c=e;return e[0]&&(c=l.as||e,delete l.as),b&&c[0]&&b(l),g(c,l)}return t?t(a):a}}var j=e=>"function"==typeof e,w=(e,t)=>j(e)?e(t):e,N=(()=>{let e=0;return()=>(++e).toString()})(),P=(()=>{let e;return()=>e})(),A=new Map,C=e=>{if(A.has(e))return;let t=setTimeout(()=>{A.delete(e),O({type:4,toastId:e})},1e3);A.set(e,t)},k=e=>{let t=A.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&k(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?D(e,{type:1,toast:r}):D(e,{type:0,toast:r});case 3:let{toastId:s}=t;return s?C(s):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},E=[],_={toasts:[],pausedAt:void 0},O=e=>{_=D(_,e),E.forEach(e=>{e(_)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},H=(e={})=>{let[t,r]=(0,a.useState)(_);(0,a.useEffect)(()=>(E.push(r),()=>{let e=E.indexOf(r);e>-1&&E.splice(e,1)}),[t]);let s=t.toasts.map(t=>{var r,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},$=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||N()}),q=e=>(t,r)=>{let s=$(t,e,r);return O({type:2,toast:s}),s.id},F=(e,t)=>q("blank")(e,t);F.error=q("error"),F.success=q("success"),F.loading=q("loading"),F.custom=q("custom"),F.dismiss=e=>{O({type:3,toastId:e})},F.remove=e=>O({type:4,toastId:e}),F.promise=(e,t,r)=>{let s=F.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(F.success(w(t.success,e),{id:s,...r,...null==r?void 0:r.success}),e)).catch(e=>{F.error(w(t.error,e),{id:s,...r,...null==r?void 0:r.error})}),e};var U=(e,t)=>{O({type:1,toast:{id:e,height:t}})},M=()=>{O({type:5,time:Date.now()})},I=e=>{let{toasts:t,pausedAt:r}=H(e);(0,a.useEffect)(()=>{if(r)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),r)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,r]);let s=(0,a.useCallback)(()=>{r&&O({type:6,time:Date.now()})},[r]),i=(0,a.useCallback)((e,r)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:i}=r||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...s?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:U,startPause:M,endPause:s,calculateOffset:i}}},W=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${G} 1s linear infinite;
`,R=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,X=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=v("div")`
  position: absolute;
`,Z=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Q=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?a.createElement(J,null,t):t:"blank"===r?null:a.createElement(Z,null,a.createElement(L,{...s}),"loading"!==r&&a.createElement(V,null,"error"===r?a.createElement(Y,{...s}):a.createElement(X,{...s})))},ee=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,et=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,er=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,es=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ea=(e,t)=>{let r=e.includes("top")?1:-1,[s,a]=P()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ee(r),et(r)];return{animation:t?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ei=a.memo(({toast:e,position:t,style:r,children:s})=>{let i=e.height?ea(e.position||t||"top-center",e.visible):{opacity:0},o=a.createElement(Q,{toast:e}),l=a.createElement(es,{...e.ariaProps},w(e.message,e));return a.createElement(er,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof s?s({icon:o,message:l}):a.createElement(a.Fragment,null,o,l))});s=a.createElement,d.p=void 0,g=s,f=void 0,b=void 0;var eo=({id:e,className:t,style:r,onHeightUpdate:s,children:i})=>{let o=a.useCallback(t=>{if(t){let r=()=>{s(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return a.createElement("div",{ref:o,className:t,style:r},i)},el=(e,t)=>{let r=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...s}},en=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ec=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:i,containerStyle:o,containerClassName:l})=>{let{toasts:n,handlers:c}=I(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(r=>{let o=r.position||t,l=el(o,c.calculateOffset(r,{reverseOrder:e,gutter:s,defaultPosition:t}));return a.createElement(eo,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?en:"",style:l},"custom"===r.type?w(r.message,r):i?i(r):a.createElement(ei,{toast:r,position:o}))}))}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,517,572],()=>r(27522));module.exports=s})();