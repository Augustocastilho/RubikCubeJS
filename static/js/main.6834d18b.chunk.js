(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(f,e,t){f.exports=t(47)},39:function(f,e,t){},40:function(f,e,t){},41:function(f,e,t){},42:function(f,e,t){},43:function(f,e,t){},47:function(f,e,t){"use strict";t.r(e);var a=t(3),r=t.n(a),o=t(30),n=t.n(o),c=(t(39),t(11)),l=t(10),s=t(18),i=t(51),m=t(50),u=3,E=0,p=1,v=2,b=3,h=4,g=5;function k(f,e,t,a,r){for(var o=[],n=[],c=0;c<u;c++)o[c]=e[f][c];for(var l=0;l<u;l++)e[f][l]=r[f][l],r[f][l]=a[f][u-1-l],n[l]=t[f][u-1-l];for(var s=0;s<u;s++)t[f][s]=o[s],a[f][s]=n[s]}function d(f,e,t,a,r){for(var o=[],n=[],c=0;c<u;c++)o[c]=e[f][c];for(var l=0;l<u;l++)e[f][l]=t[f][l],t[f][l]=a[f][u-1-l],n[l]=r[f][u-1-l];for(var s=0;s<u;s++)r[f][s]=o[s],a[f][s]=n[s]}function L(f,e,t,a,r){for(var o=[],n=[],c=0;c<u;c++)o[c]=e[c][f];for(var l=0;l<u;l++)e[l][f]=r[l][f],r[l][f]=a[u-1-l][f],n[l]=t[u-1-l][f];for(var s=0;s<u;s++)t[s][f]=o[s],a[s][f]=n[s]}function C(f,e,t,a,r){for(var o=[],n=[],c=0;c<u;c++)o[c]=e[c][f];for(var l=0;l<u;l++)e[l][f]=t[l][f],t[l][f]=a[u-1-l][f],n[l]=r[u-1-l][f];for(var s=0;s<u;s++)r[s][f]=o[s],a[s][f]=n[s]}function F(f,e,t,a,r){for(var o=[],n=[],c=[],l=[],s=0;s<u;s++)o[s]=r[f][u-1-s],n[s]=e[s][f],c[s]=t[u-1-f][u-1-s],l[s]=a[s][u-1-f];for(var i=0;i<u;i++)e[i][f]=o[i],t[u-1-f][i]=n[i],a[i][u-1-f]=c[i],r[f][i]=l[i]}function w(f,e,t,a,r){for(var o=[],n=[],c=[],l=[],s=0;s<u;s++)o[s]=t[u-1-f][s],n[s]=a[u-1-s][u-1-f],c[s]=r[f][s],l[s]=e[u-1-s][f];for(var i=0;i<u;i++)e[i][f]=o[i],t[u-1-f][i]=n[i],a[i][u-1-f]=c[i],r[f][i]=l[i]}function y(f){for(var e=[[],[],[]],t=0;t<u;t++)for(var a=0;a<u;a++)e[t][a]=f[u-1-a][t];for(var r=0;r<u;r++)for(var o=0;o<u;o++)f[r][o]=e[r][o]}function B(f){for(var e=[[],[],[]],t=0;t<u;t++)for(var a=0;a<u;a++)e[t][a]=f[a][u-1-t];for(var r=0;r<u;r++)for(var o=0;o<u;o++)f[r][o]=e[r][o]}t(40),t(41);function M(f){var e=f.value,t="single-square color-".concat(e);return r.a.createElement("div",{className:t},e)}function N(f){for(var e=f.squares,t=f.face,a=[],o=0;o<e.length;o++)for(var n=0;n<e[0].length;n++)a.push(r.a.createElement(M,{value:e[o][n],key:9*t+3*o+n}));var c="cube-face face-".concat(t);return r.a.createElement("div",{className:c},a)}t(42);function R(f){for(var e=f.cube,t=[],a=0;a<e.length;a++)t.push(r.a.createElement(N,{squares:e[a],face:a,key:a}));return r.a.createElement("div",{className:"opened-cube"},t)}function j(f){var e=f.position,t=f.colors,o=Object(a.useRef)();return r.a.createElement("mesh",{position:e,ref:o},r.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.95,.95,.95]}),r.a.createElement("meshLambertMaterial",{attach:"material-0",color:t[0]}),r.a.createElement("meshLambertMaterial",{attach:"material-1",color:t[1]}),r.a.createElement("meshLambertMaterial",{attach:"material-2",color:t[2]}),r.a.createElement("meshLambertMaterial",{attach:"material-3",color:t[3]}),r.a.createElement("meshLambertMaterial",{attach:"material-4",color:t[4]}),r.a.createElement("meshLambertMaterial",{attach:"material-5",color:t[5]}))}var O=0,D=1,S=2,q=3,U=4,x=5;function A(f){switch(f){case 0:return"#2ECC71";case 1:return"#E67E22";case 2:return"#C0392B";case 3:return"#3498DB";case 4:return"#ECF0F1";case 5:return"#F1C40F"}}function I(f){var e=f.cube,t=Object(a.useRef)();console.log(A(e[D][0][0]));var o=[["#ffffff",A(e[D][0][2]),A(e[U][2][0]),"#ffffff",A(e[O][0][0]),"#ffffff"],["#ffffff","#ffffff",A(e[U][2][1]),"#ffffff",A(e[O][0][1]),"#ffffff"],[A(e[S][0][0]),"#ffffff",A(e[U][2][2]),"#ffffff",A(e[O][0][2]),"#ffffff"],["#ffffff",A(e[D][1][2]),"#ffffff","#ffffff",A(e[O][1][0]),"#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff",A(e[O][1][1]),"#ffffff"],[A(e[S][1][0]),"#ffffff","#ffffff","#ffffff",A(e[O][1][2]),"#ffffff"],["#ffffff",A(e[D][2][2]),"#ffffff",A(e[x][0][0]),A(e[O][2][0]),"#ffffff"],["#ffffff","#ffffff","#ffffff",A(e[x][0][1]),A(e[O][2][1]),"#ffffff"],[A(e[S][2][0]),"#ffffff","#ffffff",A(e[x][0][2]),A(e[O][2][2]),"#ffffff"],["#ffffff",A(e[D][0][1]),A(e[U][1][0]),"#ffffff","#ffffff","#ffffff"],["#ffffff","#ffffff",A(e[U][1][1]),"#ffffff","#ffffff","#ffffff"],[A(e[S][0][1]),"#ffffff",A(e[U][1][2]),"#ffffff","#ffffff","#ffffff"],["#ffffff",A(e[D][1][1]),"#ffffff","#ffffff","#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],[A(e[S][1][1]),"#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],["#ffffff",A(e[D][2][1]),"#ffffff",A(e[x][1][0]),"#ffffff","#ffffff"],["#ffffff","#ffffff","#ffffff",A(e[x][1][1]),"#ffffff","#ffffff"],[A(e[S][2][1]),"#ffffff","#ffffff",A(e[x][1][2]),"#ffffff","#ffffff"],["#ffffff",A(e[D][0][0]),A(e[U][0][0]),"#ffffff","#ffffff",A(e[q][0][0])],["#ffffff","#ffffff",A(e[U][0][1]),"#ffffff","#ffffff",A(e[q][0][1])],[A(e[S][0][2]),"#ffffff",A(e[U][0][2]),"#ffffff","#ffffff",A(e[q][0][2])],["#ffffff",A(e[D][1][0]),"#ffffff","#ffffff","#ffffff",A(e[q][1][0])],["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff",A(e[q][1][1])],[A(e[S][1][2]),"#ffffff","#ffffff","#ffffff","#ffffff",A(e[q][1][2])],["#ffffff",A(e[D][2][0]),"#ffffff",A(e[x][2][0]),"#ffffff",A(e[q][2][0])],["#ffffff","#ffffff","#ffffff",A(e[x][2][1]),"#ffffff",A(e[q][2][1])],[A(e[S][2][2]),"#ffffff","#ffffff",A(e[x][2][2]),"#ffffff",A(e[q][2][2])]];return r.a.createElement("mesh",{ref:t},r.a.createElement(j,{position:[-1,1,1],colors:o[0]}),r.a.createElement(j,{position:[0,1,1],colors:o[1]}),r.a.createElement(j,{position:[1,1,1],colors:o[2]}),r.a.createElement(j,{position:[-1,0,1],colors:o[3]}),r.a.createElement(j,{position:[0,0,1],colors:o[4]}),r.a.createElement(j,{position:[1,0,1],colors:o[5]}),r.a.createElement(j,{position:[-1,-1,1],colors:o[6]}),r.a.createElement(j,{position:[0,-1,1],colors:o[7]}),r.a.createElement(j,{position:[1,-1,1],colors:o[8]}),r.a.createElement(j,{position:[-1,1,0],colors:o[9]}),r.a.createElement(j,{position:[0,1,0],colors:o[10]}),r.a.createElement(j,{position:[1,1,0],colors:o[11]}),r.a.createElement(j,{position:[-1,0,0],colors:o[12]}),r.a.createElement(j,{position:[0,0,0],colors:o[13]}),r.a.createElement(j,{position:[1,0,0],colors:o[14]}),r.a.createElement(j,{position:[-1,-1,0],colors:o[15]}),r.a.createElement(j,{position:[0,-1,0],colors:o[16]}),r.a.createElement(j,{position:[1,-1,0],colors:o[17]}),r.a.createElement(j,{position:[-1,1,-1],colors:o[18]}),r.a.createElement(j,{position:[0,1,-1],colors:o[19]}),r.a.createElement(j,{position:[1,1,-1],colors:o[20]}),r.a.createElement(j,{position:[-1,0,-1],colors:o[21]}),r.a.createElement(j,{position:[0,0,-1],colors:o[22]}),r.a.createElement(j,{position:[1,0,-1],colors:o[23]}),r.a.createElement(j,{position:[-1,-1,-1],colors:o[24]}),r.a.createElement(j,{position:[0,-1,-1],colors:o[25]}),r.a.createElement(j,{position:[1,-1,-1],colors:o[26]}))}t(43);function J(){var f=Object(a.useState)(function(){for(var f=[],e=0;e<6;e++)f.push([[e,e,e],[e,e,e],[e,e,e]]);return f}()),e=Object(l.a)(f,2),t=e[0],o=e[1];function n(f){!function(f,e){switch(f.charAt(0)){case"U":k(0,e[E],e[p],e[b],e[v]),y(e[h]);break;case"u":d(0,e[E],e[p],e[b],e[v]),B(e[h]);break;case"D":d(2,e[E],e[p],e[b],e[v]),y(e[g]);break;case"d":k(2,e[E],e[p],e[b],e[v]),B(e[g]);break;case"L":C(0,e[E],e[h],e[b],e[g]),y(e[p]);break;case"l":L(0,e[E],e[h],e[b],e[g]),B(e[p]);break;case"R":L(2,e[E],e[h],e[b],e[g]),y(e[v]);break;case"r":C(2,e[E],e[h],e[b],e[g]),B(e[v]);break;case"F":y(e[E]),w(0,e[v],e[h],e[p],e[g]);break;case"f":B(e[E]),F(0,e[v],e[h],e[p],e[g]);break;case"B":B(e[b]),F(2,e[v],e[h],e[p],e[g]);break;case"b":y(e[b]),w(2,e[v],e[h],e[p],e[g])}}(f,t),o(Object(c.a)(t))}for(var u=["L","R","U","D","F","B","l","r","u","d","f","b"],M=[],N=function(f){var e=u[f];e===e.toLowerCase()&&(e=e.toUpperCase(),e+="'"),M.push(r.a.createElement("button",{className:"move-button",key:f,onClick:function(){n(u[f])}},e))},j=0;j<u.length;j++)N(j);return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Rubik's Cube"),r.a.createElement(s.a,{colormanagement:!0},r.a.createElement(i.a,null),r.a.createElement(m.a,{fade:!0,depth:1.2}),r.a.createElement("ambientLight",{intensity:.2}),r.a.createElement("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),r.a.createElement("pointLight",{position:[-10,-10,-10]}),r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(I,{cube:t}))),r.a.createElement(R,{cube:t}),r.a.createElement("div",{className:"buttons"},M))}var P=function(f){f&&f instanceof Function&&t.e(3).then(t.bind(null,52)).then(function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,n=e.getTTFB;t(f),a(f),r(f),o(f),n(f)})};n.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null))),P()}},[[31,1,2]]]);
//# sourceMappingURL=main.6834d18b.chunk.js.map