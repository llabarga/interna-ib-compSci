(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6ea14267469ce59dd093":function(e,t,n){"use strict";n.r(t);var a=n("8af190b70a6bc55c6f1b"),r=n.n(a),c=n("6ca6a6bf6a00549f8531"),i=n("d7dd51e1bf6bfc2c9c3d"),o=n("a28fc3c963a1d4d1a2e5"),u=n("41c9f1bdd49dd417b493"),l=n("adc20f99e57c573c589c"),s=n("d95b0cf107403b178365"),d=n("01e2cd22dd17a35e4094"),b={},f=Object(d.a)((function(e,t){t.type}),b),p=function(e){return e.visual||b},m=function(){return Object(o.a)(p,(function(e){return e}))},y=n("7f32b0c526f770b9ab85"),g=regeneratorRuntime.mark(h);function h(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),g)}var E=Object(c.defineMessages)({header:{id:"".concat("app.containers.Visual",".header"),defaultMessage:"Good luck!"}}),j=n("7b99bc7c7ee280a323b0"),v=(Object(c.defineMessages)({header:{id:"".concat("app.components.TimerCard",".header"),defaultMessage:"This is the TimerCard component!"}}),n("967b94ebed23a727eca2"));function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var w=Object(v.htmlIdGenerator)()(),T=[{id:"".concat(w,"0"),label:"Align left",iconType:"refresh"},{id:"".concat(w,"1"),label:"Align center",iconType:"play"},{id:"".concat(w,"2"),label:"Align right",iconType:"pause"}];function A(e){var t=e.item,n=Object(a.useRef)(null),c=O(Object(a.useState)("".concat(w,"0")),2),i=c[0],o=c[1],l=O(Object(a.useState)(),2),s=(l[0],l[1],O(Object(a.useState)(60*t.duration),2)),d=s[0],b=s[1],f=O(Object(a.useState)(!1),2),p=f[0],m=f[1];Object(a.useEffect)((function(){setTimeout((function(){p&d>1&&(b(d-1),50===d&&n.current.play(),30===d&&n.current.play()),1===d&&(m(!1),b(0),n.current.play(),console.log("se acabo el tiempo"))}),1e3)}));var y,g;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.EuiCard,{title:t.subject,isDisabled:!1,icon:r.a.createElement(u.EuiIcon,{size:"xl",type:t.icon}),description:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.EuiTitle,null,r.a.createElement(u.EuiTextColor,{color:"default"},(y=d,g=new Date(0),g.setSeconds(y),g.toISOString().substr(11,8))," ")),r.a.createElement("div",null,r.a.createElement(u.EuiButtonGroup,{legend:"Text align",name:"textAlign",options:T,idSelected:i,onChange:function(e){return function(e){switch(e){case"".concat(w,"0"):m(!1),b(t.duration);break;case"".concat(w,"1"):m(!0);break;case"".concat(w,"2"):m(!1)}o(e)}(e)},isIconOnly:!0})))}),r.a.createElement("audio",{ref:n,id:"beep",preload:"auto",src:"https://soundbible.com/grab.php?id=1746&type=mp3"}))}A.propTypes={};var k=A,x=Object(o.b)({visual:m(),admin:Object(y.a)()});function I(){Object(s.a)({key:"visual",reducer:f}),Object(l.a)({key:"visual",saga:h});var e=Object(i.useSelector)(x),t=(e.visual,e.admin),n=(Object(i.useDispatch)(),t.items.map((function(e,t){return r.a.createElement(u.EuiFlexItem,{key:t},r.a.createElement(k,{item:e}))})));return r.a.createElement(j.a,{title:r.a.createElement(c.FormattedMessage,E.header)},r.a.createElement(r.a.Fragment,null,r.a.createElement(u.EuiFlexGrid,{gutterSize:"l",columns:2},n)))}I.propTypes={};t.default=I}}]);