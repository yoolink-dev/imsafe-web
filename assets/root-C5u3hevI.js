import{w as a,q as i,p as t,M as c,L as l,S as p,t as d,O as u,i as h}from"./chunk-EPOLDU6W-Cbkwubdd.js";const x=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function f({children:s}){return t.jsxs("html",{lang:"zh-TW",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx("script",{dangerouslySetInnerHTML:{__html:`
          (function() {
            var redirect = sessionStorage.getItem("redirect");
            if (redirect) {
              sessionStorage.removeItem("redirect");
              history.replaceState(null, "", redirect);
            }
          })();
        `}}),t.jsx(c,{}),t.jsx(l,{})]}),t.jsxs("body",{children:[s,t.jsx(p,{}),t.jsx(d,{})]})]})}const j=a(function(){return t.jsx(u,{})}),g=i(function({error:e}){let o="Oops!",r="An unexpected error occurred.",n;return h(e)&&(o=e.status===404?"404":"Error",r=e.status===404?"The requested page could not be found.":e.statusText||r),t.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[t.jsx("h1",{children:o}),t.jsx("p",{children:r}),n]})});export{g as ErrorBoundary,f as Layout,j as default,x as links};
