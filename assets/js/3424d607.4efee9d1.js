"use strict";(self.webpackChunkyeet_docs=self.webpackChunkyeet_docs||[]).push([[4169],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>y});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),y=n,g=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return o?r.createElement(g,s(s({ref:t},p),{},{components:o})):r.createElement(g,s({ref:t},p))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9495:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7294);const n=function(e){let{src:t,alt:o,boxShadow:n="2px 2px 5px var(--y-gray__7)",label:a="",size:s="auto",previewScale:i=.2}=e;const[l,c]=(0,r.useState)(!1),p=()=>{document.body.style.overflow=l?"visible":"hidden",c(!l)};return(0,r.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),r.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},r.createElement("img",{src:t,alt:o,style:{boxShadow:n,width:s,cursor:"pointer",objectFit:"contain",display:"block"},onClick:p}),a&&r.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},a),l&&r.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},r.createElement("img",{src:t,alt:o,style:{width:`calc(${s} * ${i})`,height:"auto",objectFit:"contain",display:"block"}}),r.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:p},"\xd7")))}},5410:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7294);const n=function(e){let{src:t,boxShadow:o="2px 2px 5px var(--y-gray__7)",label:n="",size:a="40%"}=e;return r.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"25px"}},r.createElement("video",{autoPlay:!0,muted:"muted",loop:!0,playsInline:!0,controls:!0,style:{boxShadow:o,width:a,objectFit:"contain",display:"block"}},r.createElement("source",{src:t,type:"video/mp4"})),n&&r.createElement("div",{style:{fontStyle:"italic",marginTop:"8px"}},n))}},48:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7294);const n=function(e){let{images:t,boxShadow:o=!1,label:n="",size:a="100%",previewScale:s=.2,border:i=!1}=e;const[l,c]=(0,r.useState)(!1),[p,d]=(0,r.useState)(null),u={width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",margin:"25px",borderRadius:"8px",border:i?"2px solid var(--y-gray__7)":"none",boxShadow:o?"2px 2px 5px var(--y-gray__7)":"none"},y={fontStyle:"italic",marginTop:"8px"},g=function(e){void 0===e&&(e=null);document.body.style.overflow=l?"visible":"hidden",c(!l),d(e)};return(0,r.useEffect)((()=>()=>document.body.style.overflow="visible"),[]),r.createElement("div",{style:u},t.map(((e,t)=>r.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},key:t},r.createElement("img",{src:e.src,alt:e.alt,style:{width:a,cursor:"pointer",objectFit:"contain",display:"block",margin:"5px 0"},onClick:()=>g(e)}),n&&r.createElement("div",{style:y},n)))),l&&p&&r.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,backgroundColor:"var(--y-white)",overflow:"auto"}},r.createElement("img",{src:p.src,alt:p.alt,style:{width:`calc(${a} * ${s})`,height:"auto",objectFit:"contain",display:"block"}}),r.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",color:"var(--y-white)",background:"var(--y-gray__2)",borderRadius:"50%",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},onClick:()=>g()},"\xd7")))}},3152:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(7294),n=o(5999),a=o(7863);function s(e){var t;let{children:o,target:s,group:i="components",section:l="",linkName:c,className:p}=e,d=o;null==o&&(d=null==c?s:c);const u=(null==(t=a[i])?void 0:t[s])??"/error";return r.createElement("span",{className:p},r.createElement("a",{href:(0,n.I)({id:"lang.identifier",message:""})+u+(""!=l?"#":"")+l.toLowerCase()},d))}},3489:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(7294);function n(e){let{children:t}=e;const[o,n]=(0,r.useState)("https://");return r.createElement("div",{className:"domain-input"},r.createElement("input",{onChange:function(e){let t="https://";console.log("inputEvent",e),t=t+e.target.value+"/#/en-US/yeet/login",n(t)}}),r.createElement("a",{href:o},o))}},6445:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>y});var r=o(3117),n=(o(7294),o(3905)),a=(o(3489),o(9495),o(48)),s=o(5410);o(3152);const i=o.p+"assets/images/explorer_layout-f1a3a8da429f3dc6ef89d366d91c5ea4.png",l=o.p+"assets/images/explorer_components-83c5ea0f0107113d06ee428e02e32677.png",c={title:"Explorer",sidebar_position:2},p=void 0,d={unversionedId:"yeet/frontend/ui-designer/explorer/explorer",id:"yeet/frontend/ui-designer/explorer/explorer",title:"Explorer",description:"--\x3e",source:"@site/docs/yeet/frontend/ui-designer/explorer/explorer.mdx",sourceDirName:"yeet/frontend/ui-designer/explorer",slug:"/yeet/frontend/ui-designer/explorer/",permalink:"/yeet/frontend/ui-designer/explorer/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yeet/frontend/ui-designer/explorer/explorer.mdx",tags:[],version:"current",lastUpdatedBy:"Felix",sidebarPosition:2,frontMatter:{title:"Explorer",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Toolbar",permalink:"/yeet/frontend/ui-designer/toolbar/"},next:{title:"Detail Panel",permalink:"/yeet/frontend/ui-designer/detail-panel/"}},u={},y=[{value:"Components",id:"components",level:2},{value:"Layout",id:"layout",level:2},{value:"Overview",id:"overview",level:2}],g={toc:y};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Explorer has three sections that can be accessed through tabs or the More Button."),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("p",null,"In ",(0,n.kt)("strong",{parentName:"p"},"Components"),", we find all the components available for creating the UI. To do this, we select a ",(0,n.kt)("strong",{parentName:"p"},"container component"),"\nand can then add the component by clicking on the component icon. Alternatively, components can also be added to a page\nvia drag & drop using the component icon."),(0,n.kt)(a.Z,{images:[{src:i,alt:"Toolbar Layout"}],boxShadow:"none",size:"70%",previewScale:1,mdxType:"MultiImage"}),(0,n.kt)(s.Z,{src:"",boxShadow:"none",size:"60%",mdxType:"BasicVideo"}),(0,n.kt)("h2",{id:"layout"},"Layout"),(0,n.kt)("p",null,"Under Layouts, you'll find various pre-made layout templates. The group of layout modules offers simple foundational templates.\nThese can be combined to create larger, more complex layouts."),(0,n.kt)("p",null,"Page layouts are templates that include entire forms or pages."),(0,n.kt)(a.Z,{images:[{src:l,alt:"Toolbar Components"}],boxShadow:"none",size:"70%",previewScale:1,mdxType:"MultiImage"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Here, all popups and pages of the project are listed. The active page or popup is loaded in the work area."),(0,n.kt)(a.Z,{images:[{src:"data:image/png;base64,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",alt:"Toolbar Overview"}],boxShadow:"none",size:"70%",previewScale:1,mdxType:"MultiImage"}))}m.isMDXComponent=!0},7863:e=>{e.exports=JSON.parse('{"components":{"":"/docs/Components","YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker"},"essentials":{"Flexbox":"/docs/Essentials/Flexbox/","Clipboard":"/docs/Essentials/Clipboard/","BoxModel":"/docs/Essentials/Boxmodel/","OData":"/docs/Essentials/OData/"},"advanced":{"Component-Basics":"/docs/Advanced/Component-Basics"},"themes":{"theme-scraper":"/docs/Yeet/Themes/ThemeScraper/","theme-editor":"/docs/Yeet/Themes/ThemeEditor/","theme-manager":"/docs/Yeet/Themes/ThemeManager/","themes":"/docs/Yeet/Themes/"},"events":{},"properties":{"Display":"/docs/Yeet/Properties/Display/","Meta":"/docs/Yeet/Properties/Meta/","Placement":"/docs/Yeet/Properties/Placement/","Size":"/docs/Yeet/Properties/Size/"},"property-types":{"Boolean-Property":"/docs/Advanced/Property-Types/booleanProperty/","Color-Property":"/docs/Advanced/Property-Types/colorProperty/","Column-Property":"/docs/Advanced/Property-Types/columnProperty","EventFunction-Property":"/docs/Advanced/Property-Types/eventFunctionProperty","Icon-Property":"/docs/Advanced/Property-Types/iconProperty/","List-Property":"/docs/Advanced/Property-Types/listProperty/","Number-Property":"/docs/Advanced/Property-Types/numberProperty/","OptionList-Property":"/docs/Advanced/Property-Types/optionListProperty","Range-Property":"docs/Advanced/Property-Types/rangeProperty","Shadow-Property":"/docs/Advanced/Property-Types/shadowProperty/","SourceLink-Property":"/docs/Advanced/Property-Types/sourceLinkProperty/","String-Property":"/docs/Advanced/Property-Types/stringProperty/","UnitNumber-Property":"/docs/Advanced/Property-Types/unitNumberProperty/","ValidatorList-Property":"/docs/Advanced/Property-Types/validatorListProperty"},"multi-properties":{"Alignment-Property":"/docs/Advanced/Multi-Properties/alignmentProperty","Border-Property":"/docs/Advanced/Multi-Properties/borderProperty","Element-Property":"/docs/Advanced/Multi-Properties/elementProperty","Font-Property":"/docs/Advanced/Multi-Properties/fontProperty","Sizing-Property":"/docs/Advanced/Multi-Properties/sizingProperty","Spacing-Property":"/docs/Advanced/Multi-Properties/spacingProperty"},"ui-designer":{"PB1n2":"/docs/Yeet/UI-Designer/Propertybar1n2","PB3":"/docs/Yeet/UI-Designer/Propertybar3","":"/docs/Yeet/UI-Designer"},"theme-manager":{"Theme-Editor":"/docs/Yeet/Theme-Manager/Theme-Editor/"},"Data":{"":"/docs/Yeet/Data/"},"User-Manager":{},"Settings":{},"Components":{"YPage":"/docs/Components/YPage","YContainer":"/docs/Components/YContainer","YImage":"/docs/Components/YImage","YLabel":"/docs/Components/YLabel","YTextbox":"/docs/Components/YTextbox","YTable":"/docs/Components/YTable","YButton":"/docs/Components/YButton","YLinkButton":"/docs/Components/YLinkButton","YInput":"/docs/Components/YInput","YTextarea":"/docs/Components/YTextarea","YCheckbox":"/docs/Components/YCheckbox","YRadio":"/docs/Components/YRadio","YToggle":"/docs/Components/YToggle","YToggleButton":"/docs/Components/YToggleButton","YSelectionPicker":"/docs/Components/YSelectionPicker","YPopup":"/docs/Components/YPopup","YQrCode":"/docs/Components/YQrCode"},"Navigations":{"Navigations":"/docs/Yeet/Frontend/Navigations/"}}')}}]);