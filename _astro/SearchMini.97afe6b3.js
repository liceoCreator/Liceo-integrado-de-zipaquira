import{r as n}from"./index.45a47ed6.js";import{j as e}from"./jsx-runtime.73bdaf71.js";function i(){const[t,s]=n.useState(""),a=r=>{s(r.target.value)},o=r=>{r.preventDefault(),window.location.href=`/busqueda?search=${t}`};return e.jsxs("form",{onSubmit:o,className:"flex w-full p-2 gap-x-2 border-b border-b-blue-950 focus-within:border-b-2 md:w-60 md:hover:border-b-2",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#172554",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-search font-extralight",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),e.jsx("label",{htmlFor:"buscar",hidden:!0,children:"Buscar:"}),e.jsx("input",{value:t,onChange:a,type:"text",placeholder:"Buscar...",id:"buscar",name:"buscar",autoComplete:"off",className:"focus:outline-none w-full font-extralight"}),e.jsxs("label",{htmlFor:"btn-buscar",hidden:!0,children:["Buscar: ",e.jsx("button",{type:"submit",name:"btn-buscar",id:"btn-buscar",children:"Buscar"})]})]})}export{i as default};
