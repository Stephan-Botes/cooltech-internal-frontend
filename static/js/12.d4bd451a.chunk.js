(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{628:function(e,t,n){e.exports=n(383)},629:function(e,t,n){"use strict";function c(e,t,n,c,r,s,o){try{var i=e[s](o),a=i.value}catch(l){return void n(l)}i.done?t(a):Promise.resolve(a).then(c,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var o=e.apply(t,n);function i(e){c(o,r,s,i,a,"next",e)}function a(e){c(o,r,s,i,a,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return r}))},630:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(631);function r(e,t){if(e){if("string"===typeof e)return Object(c.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(c.a)(e,t):void 0}}},631:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}n.d(t,"a",(function(){return c}))},633:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(630);function r(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(c.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}},670:function(e,t,n){"use strict";n.r(t);var c=n(633),r=n(628),s=n.n(r),o=n(629),i=n(158),a=n(159),l=n(161),u=n(160),d=n(1),j=n(632),b=n(627),f=n(634),h=n(18),x=new j.a,O=x.get("auth-token"),p=x.get("current-user"),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).componentDidMount=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:case"end":return t.stop()}}),t)}))),e.getData=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getOus();case 2:e.ouAccess("60e705aad616322ba883c237",p,"news")&&e.setState({newsAccess:!0});case 4:case"end":return t.stop()}}),t)}))),e.getOus=Object(o.a)(s.a.mark((function t(){var n,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://stepbot-cooltech-internal-api.herokuapp.com/ous/find/all",{method:"GET",headers:{"Content-Type":"application/json","auth-token":O}});case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,e.setState({ous:c}),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])}))),e.ouAccess=function(e,t){if(t){var n,r=t.ou,s=Object(c.a)(r);try{for(s.s();!(n=s.n()).done;){if(n.value.ou_id===e)return!0}}catch(o){s.e(o)}finally{s.f()}}return!1},e.state={ous:[],loaded:!1,newsAccess:!1,softwareAccess:!1,hardwareAccess:!1,opinionAccess:!1},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.ouAccess("60e705aad616322ba883c237",p),t=this.ouAccess("60e705b7d616322ba883c239",p),n=this.ouAccess("60e705bed616322ba883c23b",p),c=this.ouAccess("60e705d0d616322ba883c23d",p);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(b.S,{children:[Object(h.jsx)(b.k,{children:Object(h.jsxs)(b.f,{children:[Object(h.jsx)(b.j,{children:"News Management"}),Object(h.jsxs)(b.g,{children:[Object(h.jsx)(b.F,{fluid:!0,children:Object(h.jsx)(b.m,{fluid:!0,children:Object(h.jsx)(f.a,{className:"c-sidebar-brand-full",src:"https://img.icons8.com/ios/100/000000/news.png",style:{display:"flex",margin:"auto"}})})}),Object(h.jsx)(b.G,{to:"/ous/news-management",style:{textDecoration:"none"},children:e?Object(h.jsx)(b.e,{block:!0,color:"info",children:"View"}):Object(h.jsx)(b.e,{block:!0,color:"secondary",disabled:!0,children:"View"})})]})]})}),Object(h.jsx)(b.k,{children:Object(h.jsxs)(b.f,{children:[Object(h.jsx)(b.j,{children:"Software Reviews"}),Object(h.jsxs)(b.g,{children:[Object(h.jsx)(b.F,{fluid:!0,children:Object(h.jsx)(b.m,{fluid:!0,children:Object(h.jsx)(f.a,{className:"c-sidebar-brand-full",src:"https://img.icons8.com/ios/100/000000/software-box.png",style:{display:"flex",margin:"auto"}})})}),Object(h.jsx)(b.G,{to:"/ous/software-reviews",style:{textDecoration:"none"},children:t?Object(h.jsx)(b.e,{block:!0,color:"info",children:"View"}):Object(h.jsx)(b.e,{block:!0,color:"secondary",disabled:!0,children:"View"})})]})]})})]}),Object(h.jsxs)(b.S,{children:[Object(h.jsx)(b.k,{children:Object(h.jsxs)(b.f,{children:[Object(h.jsx)(b.j,{children:"Hardware Reviews"}),Object(h.jsxs)(b.g,{children:[Object(h.jsx)(b.F,{fluid:!0,children:Object(h.jsx)(b.m,{fluid:!0,children:Object(h.jsx)(f.a,{className:"c-sidebar-brand-full",src:"https://img.icons8.com/wired/100/000000/video-card.png",style:{display:"flex",margin:"auto"}})})}),Object(h.jsx)(b.G,{to:"/ous/hardware-reviews",style:{textDecoration:"none"},children:n?Object(h.jsx)(b.e,{block:!0,color:"info",children:"View"}):Object(h.jsx)(b.e,{block:!0,color:"secondary",disabled:!0,children:"View"})})]})]})}),Object(h.jsx)(b.k,{children:Object(h.jsxs)(b.f,{children:[Object(h.jsx)(b.j,{children:"Opinion Pieces"}),Object(h.jsxs)(b.g,{children:[Object(h.jsx)(b.F,{fluid:!0,children:Object(h.jsx)(b.m,{fluid:!0,children:Object(h.jsx)(f.a,{className:"c-sidebar-brand-full",src:"https://img.icons8.com/windows/100/000000/same-opinion.png",style:{display:"flex",margin:"auto"}})})}),Object(h.jsx)(b.G,{to:"/ous/opinion-pieces",style:{textDecoration:"none"},children:c?Object(h.jsx)(b.e,{block:!0,color:"info",children:"View"}):Object(h.jsx)(b.e,{block:!0,color:"secondary",disabled:!0,children:"View"})})]})]})})]})]})}}]),n}(d.Component);t.default=m}}]);
//# sourceMappingURL=12.d4bd451a.chunk.js.map