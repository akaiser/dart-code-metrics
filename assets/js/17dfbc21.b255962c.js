"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[8045],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,y=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2131:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={},d="Avoid unnecessary setState",l={unversionedId:"rules/flutter/avoid-unnecessary-setstate",id:"rules/flutter/avoid-unnecessary-setstate",title:"Avoid unnecessary setState",description:"Rule id",source:"@site/docs/rules/flutter/avoid-unnecessary-setstate.md",sourceDirName:"rules/flutter",slug:"/rules/flutter/avoid-unnecessary-setstate",permalink:"/docs/rules/flutter/avoid-unnecessary-setstate",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/flutter/avoid-unnecessary-setstate.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Avoid shrink wrap in lists",permalink:"/docs/rules/flutter/avoid-shrink-wrap-in-lists"},next:{title:"Avoid use Expanded widget instead of Spacer",permalink:"/docs/rules/flutter/avoid-use-expanded-as-spacer"}},c={},u=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"avoid-unnecessary-setstate"},"Avoid unnecessary setState"),(0,a.kt)("h2",{id:"rule-id"},"Rule id"),(0,a.kt)("p",null,"avoid-unnecessary-setstate"),(0,a.kt)("h2",{id:"severity"},"Severity"),(0,a.kt)("p",null,"Warning"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Warns when ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," is called inside ",(0,a.kt)("inlineCode",{parentName:"p"},"initState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"didUpdateWidget")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," methods and when it's called from a ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," method that is called inside those methods."),(0,a.kt)("p",null,"Calling setState in those cases will lead to an additional widget rerender which is bad for performance."),(0,a.kt)("p",null,"Consider changing state directly without calling ",(0,a.kt)("inlineCode",{parentName:"p"},"setState"),"."),(0,a.kt)("p",null,"Additional resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/53363774/importance-of-calling-setstate-inside-initstate/53373017#53373017"},"https://stackoverflow.com/questions/53363774/importance-of-calling-setstate-inside-initstate/53373017#53373017"))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'class MyWidget extends StatefulWidget {\n  @override\n  _MyWidgetState createState() => _MyWidgetState();\n}\n\nclass _MyWidgetState extends State<MyWidget> {\n  String myString = \'\';\n\n  @override\n  void initState() {\n    super.initState();\n\n    // LINT\n    setState(() {\n      myString = "Hello";\n    });\n\n    if (condition) {\n      // LINT\n      setState(() {\n        myString = "Hello";\n      });\n    }\n\n    myStateUpdateMethod(); // LINT\n  }\n\n  @override\n  void didUpdateWidget(MyWidget oldWidget) {\n    // LINT\n    setState(() {\n      myString = "Hello";\n    });\n  }\n\n  void myStateUpdateMethod() {\n    setState(() {\n      myString = "Hello";\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    // LINT\n    setState(() {\n      myString = "Hello";\n    });\n\n    if (condition) {\n      // LINT\n      setState(() {\n        myString = "Hello";\n      });\n    }\n\n    myStateUpdateMethod(); // LINT\n\n    return ElevatedButton(\n      onPressed: () => myStateUpdateMethod(),\n      onLongPress: () {\n        setState(() {\n          myString = data;\n        });\n      },\n      child: Text(\'PRESS\'),\n    );\n  }\n}\n')),(0,a.kt)("p",null,"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'class MyWidget extends StatefulWidget {\n  @override\n  _MyWidgetState createState() => _MyWidgetState();\n}\n\nclass _MyWidgetState extends State<MyWidget> {\n  String myString = \'\';\n\n  final classWithMethod = SomeClassWithMethod();\n\n  @override\n  void initState() {\n    super.initState();\n\n    myString = "Hello";\n\n    classWithMethod.myMethod();\n    myAsyncMethod();\n  }\n\n  @override\n  void didUpdateWidget(MyWidget oldWidget) {\n    myString = "Hello";\n  }\n\n  void myStateUpdateMethod() {\n    setState(() {\n      myString = "Hello";\n    });\n  }\n\n  Future<void> myAsyncMethod() async {\n    final data = await service.fetchData();\n\n    setState(() {\n      myString = data;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    myAsyncMethod();\n\n    return ElevatedButton(\n      onPressed: () => myStateUpdateMethod(),\n      onLongPress: () {\n        setState(() {\n          myString = data;\n        });\n      },\n      child: Text(\'PRESS\'),\n    );\n  }\n}\n')))}m.isMDXComponent=!0}}]);