(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e){e.exports=[{id:"1",name:"amazon",src:"https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"},{id:"2",name:"plane",src:"https://cdn4.iconfinder.com/data/icons/dot/256/air_plane_airport.png"},{id:"3",name:"food",src:"https://cdn.iconscout.com/icon/premium/png-256-thumb/food-119-116206.png"},{id:"4",name:"jewelry",src:"http://www.myiconfinder.com/uploads/iconsets/256-256-97cf56c22e32a82fe2efa12b618e39e0-diamond.png"}]},,function(e,n,t){e.exports=t(13)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(2),r=t.n(c),i=(t(11),t(12),t(4)),l=function(e){return o.a.createElement("img",{src:e.src,alt:e.alt,value:e.value,onClick:e.click})},u=t(3),s=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,"score:"),o.a.createElement("p",{id:"score"},e.score),o.a.createElement("p",null,"budget:"),o.a.createElement("p",{id:"budget"},e.goal))},m=function(e){var n=Object(a.useState)(),t=Object(i.a)(n,2)[1],c=Object(a.useCallback)(function(){return t({})},[]),r=u,m=0,d=Math.floor(120*Math.random()+1);function f(){return Math.floor(10*Math.random()+1)}Object(a.useEffect)(function(){f()},[]);var p=function(e){var n=parseInt(document.getElementById("score").innerText),t=parseInt(e.target.attributes.value.value);g(m=n+t,d)},g=function(e,n){if(document.getElementById("score").innerText=e,e===n)w();else{if(!(e>n))return;E()}},w=function(){alert("win"),h()},E=function(){alert("lost"),h()},h=function(){m=0,document.getElementById("score").innerText=m,c()};return o.a.createElement("div",null,o.a.createElement(s,{score:m,goal:d}),r.map(function(e){return o.a.createElement(l,{key:e.id,src:e.src,alt:e.name,value:f(),click:p})}))},d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.88cdf420.chunk.js.map