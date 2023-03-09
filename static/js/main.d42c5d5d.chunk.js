(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(16),s=a.n(r),l=(a(26),a(3)),o=a(0),c=a(5);a(28);function m(e){var t=e.socials,a=e.className;return i.a.createElement("div",{className:a},i.a.createElement("div",{className:"contactInfo"},t.map(function(e){return i.a.createElement("div",{key:e.id},i.a.createElement("a",{href:e.link},i.a.createElement("img",{className:"thumbnail",src:e.src,alt:e.alt})))})))}function d(e){var t=e.socials;return i.a.createElement("div",{className:"App-section fancybg"},i.a.createElement("div",{className:"App-anchor",id:"contact"}),i.a.createElement("h3",null,"Interested in working with me?"),i.a.createElement("p",{className:"main-text c"},"Check out my Github, LinkedIn, or reach out over email!"),i.a.createElement(m,{socials:t}))}a(30),a(32);a(34);function u(e){var t=e.className,a=e.title,n=e.description,r=e.photo,s=e.link,l=e.newTab;return i.a.createElement("div",{className:t},l?i.a.createElement("a",{href:s,className:"projectCard",target:"_blank"},i.a.createElement("img",{src:r,alt:a}),i.a.createElement("h3",null,a),i.a.createElement("div",{className:"hr"}),i.a.createElement("p",null,n)):i.a.createElement(c.b,{to:s,className:"projectCard"},i.a.createElement("img",{src:r,alt:a}),i.a.createElement("h3",null,a),i.a.createElement("div",{className:"hr"}),i.a.createElement("p",null,n)))}var h={profile:"./res/images/profile.jpg",name:"Macintyre Sunde",title:"Software Developer and Creative",bio:"Macintyre is a recent graduate from Haverford College with academic and personal experience in software development, computer graphics and technical art. They majored in Computer Science at Haverford and took many courses in visual studies and traditional arts. They are driven by the mission to help people and the planet with their technical knowledge and creative spirit.",socials:[{link:"https://www.linkedin.com/in/macintyre-sunde-82b13b1a6/",src:"./res/thumbnails/linkedin-w.png",alt:"LinkedIn"},{link:"https://github.com/msunde137",src:"./res/thumbnails/github-w.png",alt:"GitHub"},{link:"mailto:imacsunde@gmail.com",src:"./res/thumbnails/gmail-w.png",alt:"Gmail"},{link:"./res/documents/Resume 2023.pdf",src:"./res/thumbnails/document.png",alt:"Resume"}]};function p(){return h}function g(e){var t=e.projects,a=e.height;return i.a.createElement("div",{className:"App-section",style:{height:a}},i.a.createElement("div",{className:"App-anchor",id:"work"}),i.a.createElement("h2",null,"Work"),i.a.createElement("div",{className:"App-work"},t.map(function(e){return i.a.createElement(u,{title:e.title,description:e.description,photo:e.image,link:e.link,newTab:e.newTab})})))}function f(e){var t=e.person,a=e.width,n=e.height,r=a<1.5*n||a<800;return i.a.createElement("div",{className:"App-header",style:{flexDirection:"column",alignItems:"center",justifyContent:"center",height:n}},i.a.createElement("div",{className:"App-section",style:r?{padding:"0px"}:{padding:"0px 200px"}},i.a.createElement("h1",null,t.name),i.a.createElement("p",null,t.title),i.a.createElement("div",{className:"hr"}),i.a.createElement("p",{className:"App-subsection"},t.bio)))}function E(e){var t=e.person,a=e.projects,n=e.width,r=e.height;return i.a.createElement("div",{className:"App"},i.a.createElement(f,{person:t,width:n,height:r}),i.a.createElement("main",null,i.a.createElement(g,{projects:a,height:r})),i.a.createElement("div",{className:"App-section fancybg"},i.a.createElement("div",{className:"hr"}),i.a.createElement(d,{socials:p().socials}),i.a.createElement("div",{className:"hr"})))}var w=E;var v=[{id:0,title:"Shape Grammars for Architectural Reconstruction",description:"How can we test hypotheses for the look and feel of ancient cities?",link:"/shape-grammars-for-architectural-reconstruction",element:function(){var e={height:"200px",width:"auto"},t={display:"flex",flexDirection:"row",padding:"0px 10px",width:"100vm",justifyContent:"center",flexWrap:"wrap"};return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Shape Grammars for Archeological Reconstruction"),i.a.createElement("div",{className:"App-section"},i.a.createElement("h2",null,"Abstract"),i.a.createElement("p",{className:"main-text"},"Many ancient cities have been reduced to foundations, losing their architectural style and hints as to their usage. Today, Archaeologists use digital reconstructions to communicate their theories, but these models can often take a long time to fabricate, so the theories need to be well formed before they enter the stage of visualization. ",i.a.createElement("em",null,"Shape Grammar")," are a tool that provides a tool for formalizing hypotheses visually, in a way that can be rapidly tested and compared. They do this by encoding similar complex forms- like the windows of buildings-to a set of text rules. When properly defined, these rules can define the look of an ancient city and can generate many stylistically similar variations of theory with little extra work. Shape grammars can start to bring to life long ruined cities, and help paint a more accurate picture of how their inhabitants might have lived.")),i.a.createElement("div",{style:t},i.a.createElement("a",{className:"menuItem1",style:{width:"fit-content"},href:".\\res\\documents\\Procedural_architecture_using_grammars.pdf"},"View Full Paper"),i.a.createElement("a",{className:"menuItem1",style:{width:"fit-content"},href:"https://github.com/msunde137/Thesis-2022"},"Git Repository")),i.a.createElement("div",{className:"App-section"},i.a.createElement("h2",null,"Examples"),i.a.createElement("p",{className:"main-text"},"Shape grammars are a method of encoding shapes in text. Simple shape grammars can encode branching structures that look like trees. More complicated grammars can construct houses and other architecture."),i.a.createElement("div",{style:t},i.a.createElement("img",{src:".\\res\\images\\Tree1-text.JPG",alt:"shapeGrammarCode",style:e}),i.a.createElement("img",{src:".\\res\\images\\Tree1.JPG",alt:"treeModel",style:e})),i.a.createElement("div",{style:t},i.a.createElement("img",{src:"./res/images/House1.PNG",alt:"houseModel1",style:e}),i.a.createElement("img",{src:"./res/images/House.PNG",alt:"houseModel",style:e}))))},image:"./res/images/House1.PNG"},{id:1,title:"noise-tools",description:"A Unity package for generating pseudorandom textures on the GPU",link:"/noise-tools",element:function(e){e.width;var t=e.height;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"noise-tools"),i.a.createElement("div",{className:"App-section"},i.a.createElement("h2",null,"About"),i.a.createElement("p",{className:"main-text"},"This Package was designed with inspiration from ",i.a.createElement("a",{className:"text-link",href:"https://www.youtube.com/@SebastianLague/",target:"_blank"},"Sebastian Lague"),". I used compute shaders to experiment with rendering simplex and perlin noise in 2D. The noise is generated with both hash tables and pseudorandom functions. I also designed a modular UI to manipulate and add different noise types together in realtime. Finally, I implemented the marching cube algorithm to make meshes out of textures.")),i.a.createElement("div",{className:"App-section"},i.a.createElement("div",{className:"imageRowStyle"},i.a.createElement("img",{className:"imageStyle",src:"./res/images/noise-tools1.jpg",alt:"noise-tools-example"}),i.a.createElement("img",{className:"imageStyle",src:"./res/images/noise-tools2.jpg",alt:"noise-tools-example"})),i.a.createElement("div",{className:"imageRowStyle"},i.a.createElement("img",{className:"imageStyle",style:{width:"300px",height:"auto"},src:"./res/images/noise-tools_menu2.JPG",alt:"noise-tools-example"}),i.a.createElement("img",{className:"imageStyle",style:{width:"300px",height:"auto"},src:"./res/images/noise-tools_menu1.JPG",alt:"noise-tools-example"}))),i.a.createElement("div",{id:"noise-tools-unblur",style:{height:.7*t}}))},image:"./res/images/noise-tools2.jpg"},{id:2,title:"Ray Tracing",description:"A raytracer written in C++ using OpenGL and GLSL. Developed for a compouter graphics course.",link:"https://github.com/msunde137/raytracer",image:"./res/images/ray-tracer.JPG",newTab:!0},{id:3,title:"Nim",description:"The mathematical game of Nim implemented for my intro CS class using pygame.",link:"https://github.com/msunde137/nim",image:"./res/images/nim.JPG",newTab:!0},{id:4,title:"Particle Systems",description:"Particle system written in C++ using OpenGL. Developed for a compouter graphics course.",link:"https://github.com/msunde137/particles",image:"./res/images/particles.JPG",newTab:!0}];function y(){return v}function b(e,t){var a=0;do{if(e==t)break;isNaN(e.offsetTop)||(a+=e.offsetTop)}while(e=e.offsetParent);return a}var N=function(e){var t=e.width,a=e.height,n=i.a.useState(1),r=Object(l.a)(n,2),s=r[0],c=r[1],m=Object(o.n)();return i.a.useEffect(function(){var e=document.getElementById("bottom"),t=document.getElementById("top");do{if(!(t=t.parentNode))break;t.scrollTop||(t.scrollTop=1)}while(0==t.scrollTop);var a=function(){var a=document.getElementById("noise-tools-unblur");if(null!=a){var n=Math.abs(b(a,t)-window.scrollY);n<=100&&c(n/100)}else null==a&&c(1);b(e,t)<=window.scrollY&&m("/")};return window.addEventListener("scroll",a,{passive:!0}),function(){window.removeEventListener("scroll",a)}},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("video",{id:"background-video",autoPlay:!0,loop:!0,style:{filter:"blur(".concat(s,"vw) brightness(").concat(100-60*s,"%)")}},i.a.createElement("source",{src:"res/videos/CoolBackground.mp4",type:"video/mp4"})),i.a.createElement("div",{id:"top"}),i.a.createElement(o.a,null),i.a.createElement("div",{id:"bottom"}),i.a.createElement(E,{person:p(),projects:y(),width:t,height:a}))},k=y(),x=function(e){var t=Object(o.l)();return i.a.useEffect(function(){window.history.scrollRestoration="manual",document.getElementById("top").scrollIntoView()},[t]),i.a.createElement(i.a.Fragment,null,e.children)};function A(e){var t=e.person,a=i.a.useState(0),n=Object(l.a)(a,2),r=n[0],s=n[1],m=i.a.useState(0),d=Object(l.a)(m,2),u=d[0],h=d[1],p=function(){var e=window.innerWidth,t=window.innerHeight;s(e),h(t)};return i.a.useEffect(function(){return p(),window.addEventListener("resize",p),function(){return window.removeEventListener("resize",p)}},[]),i.a.createElement(c.a,{window:window},i.a.createElement(x,null,i.a.createElement(o.d,null,i.a.createElement(o.b,{path:"/",element:i.a.createElement(N,{width:r,height:u})},i.a.createElement(o.b,{index:!0,element:i.a.createElement(w,{person:t,projects:k,width:r,height:u})}),k.map(function(e){return i.a.createElement(o.b,{path:e.link,element:i.a.createElement(e.element,{width:r,height:u})})})))))}s.a.createRoot(document.getElementById("root")).render(i.a.createElement("div",{className:"idx"},i.a.createElement(A,{person:p()})))}},[[17,2,1]]]);
//# sourceMappingURL=main.d42c5d5d.chunk.js.map