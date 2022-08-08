"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2196],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>u});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return r?t.createElement(f,i(i({ref:n},m),{},{components:r})):t.createElement(f,i({ref:n},m))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9729:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(7294),a=r(5321);function o(e){let{version:n,severity:r,hasConfig:o,hasFix:i,isDeprecated:s}=e;return t.createElement("div",{className:"single-rule-info"},t.createElement(a.Z,{version:n,severity:r,hasConfig:o,hasFix:i,isDeprecated:s}))}},5321:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(7294);function a(e){let{hasConfig:n,hasFix:r,isDeprecated:a}=e;return t.createElement("div",{className:"rule-options"},n&&t.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&t.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&t.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:n,version:r,hasConfig:o,hasFix:i,isDeprecated:s}=e;const l=null==n?void 0:n.toLowerCase();return t.createElement("div",{className:"rule-additional-info"},t.createElement("div",null,t.createElement("span",{className:"added-in-label"},"added in:")," ",r),t.createElement("div",{className:"rule-severity "+l},l),t.createElement(a,{hasConfig:o,hasFix:i,isDeprecated:s}))}},5217:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=r(7462),a=(r(7294),r(3905)),o=r(9729);const i={},s=void 0,l={unversionedId:"rules/common/prefer-commenting-analyzer-ignores",id:"rules/common/prefer-commenting-analyzer-ignores",title:"prefer-commenting-analyzer-ignores",description:"Warns when // ignore: comments are left without any additional description why this ignore is applied.",source:"@site/docs/rules/common/prefer-commenting-analyzer-ignores.mdx",sourceDirName:"rules/common",slug:"/rules/common/prefer-commenting-analyzer-ignores",permalink:"/docs/rules/common/prefer-commenting-analyzer-ignores",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/prefer-commenting-analyzer-ignores.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"prefer-async-await",permalink:"/docs/rules/common/prefer-async-await"},next:{title:"prefer-conditional-expressions",permalink:"/docs/rules/common/prefer-conditional-expressions"}},c={},m=[{value:"Example",id:"example",level:3}],p={toc:m};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"4.14.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns when ",(0,a.kt)("inlineCode",{parentName:"p"},"// ignore:")," comments are left without any additional description why this ignore is applied."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This rule doesn't trigger on global ",(0,a.kt)("inlineCode",{parentName:"p"},"ignore_for_file:")," comments.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// ignore: deprecated_member_use\nfinal map = Map(); // LINT\n\n// ignore: deprecated_member_use, long-method\nfinal set = Set(); // LINT\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// Ignored for some reasons\n// ignore: deprecated_member_use\nfinal list = List();\n\n// ignore: deprecated_member_use same line ignore\nfinal queue = Queue();\n\n// ignore: deprecated_member_use, long-method multiple same line ignore\nfinal linkedList = LinkedList();\n")))}d.isMDXComponent=!0}}]);