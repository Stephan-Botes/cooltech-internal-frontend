/*! For license information please see 14.d469bbd2.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{632:function(e,t,n){"use strict";var a=n(637);function i(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return"undefined"===typeof t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(a){}return e}var r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"===typeof e?a.parse(e,t):"object"===typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=a.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),i(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var a in this.cookies)n[a]=i(this.cookies[a],e);return n},e.prototype.set=function(e,t,n){var i;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=r(r({},this.cookies),((i={})[e]=t,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=a.serialize(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=r(r({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=r({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=a.serialize(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}();t.a=s},637:function(e,t,n){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var n={},i=t||{},s=e.split(r),c=i.decode||a,d=0;d<s.length;d++){var u=s[d],m=u.indexOf("=");if(!(m<0)){var l=u.substr(0,m).trim(),p=u.substr(++m,u.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),void 0==n[l]&&(n[l]=o(p,c))}}return n},t.serialize=function(e,t,n){var a=n||{},r=a.encode||i;if("function"!==typeof r)throw new TypeError("option encode is invalid");if(!s.test(e))throw new TypeError("argument name is invalid");var o=r(t);if(o&&!s.test(o))throw new TypeError("argument val is invalid");var c=e+"="+o;if(null!=a.maxAge){var d=a.maxAge-0;if(isNaN(d))throw new Error("maxAge should be a Number");c+="; Max-Age="+Math.floor(d)}if(a.domain){if(!s.test(a.domain))throw new TypeError("option domain is invalid");c+="; Domain="+a.domain}if(a.path){if(!s.test(a.path))throw new TypeError("option path is invalid");c+="; Path="+a.path}if(a.expires){if("function"!==typeof a.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+a.expires.toUTCString()}a.httpOnly&&(c+="; HttpOnly");a.secure&&(c+="; Secure");if(a.sameSite){switch("string"===typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var a=decodeURIComponent,i=encodeURIComponent,r=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e,t){try{return t(e)}catch(n){return e}}},677:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(49),s=n(20),o=n(627),c=[{path:"/dashboard",name:"Dashboard",component:i.a.lazy((function(){return Promise.all([n.e(7),n.e(16)]).then(n.bind(null,669))}))},{path:"/ous",exact:!0,name:"Organisational Units Overview",component:i.a.lazy((function(){return n.e(12).then(n.bind(null,670))}))},{path:"/ous/news-management",exact:!0,name:"News Management",component:i.a.lazy((function(){return n.e(9).then(n.bind(null,671))}))},{path:"/ous/software-reviews",exact:!0,name:"Software Reviews",component:i.a.lazy((function(){return n.e(11).then(n.bind(null,672))}))},{path:"/ous/hardware-reviews",exact:!0,name:"Hardware Reviews",component:i.a.lazy((function(){return n.e(8).then(n.bind(null,673))}))},{path:"/ous/opinion-pieces",exact:!0,name:"Opinion Pieces",component:i.a.lazy((function(){return n.e(10).then(n.bind(null,674))}))},{path:"/divisions",exact:!0,name:"Divisions",component:i.a.lazy((function(){return n.e(15).then(n.bind(null,675))}))},{path:"/divisions/:id",exact:!0,name:"Division Details",component:i.a.lazy((function(){return n.e(4).then(n.bind(null,678))}))},{path:"/users",exact:!0,name:"Users",component:i.a.lazy((function(){return n.e(5).then(n.bind(null,676))}))}],d=n(632),u=n(18),m=Object(u.jsx)("div",{className:"pt-3 text-center",children:Object(u.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),l=function(){var e=new d.a;return Object(u.jsx)("main",{className:"c-main",children:Object(u.jsx)(o.m,{fluid:!0,children:Object(u.jsx)(a.Suspense,{fallback:m,children:Object(u.jsxs)(s.d,{children:[c.map((function(t,n){return t.component&&Object(u.jsx)(s.b,{path:t.path,exact:t.exact,name:t.name,render:function(n){return e.get("auth-token")?Object(u.jsx)(o.r,{children:Object(u.jsx)(t.component,Object(r.a)({},n))}):Object(u.jsx)(s.a,{to:{pathname:"/login"}})}},n)})),Object(u.jsx)(s.a,{from:"/",to:"/dashboard"})]})})})})},p=i.a.memo(l),h=function(){return Object(u.jsx)(o.s,{fixed:!1,children:Object(u.jsxs)("div",{className:"mfs-auto",children:[Object(u.jsx)("span",{className:"mr-1",children:"Created by"}),Object(u.jsx)("a",{href:"https://stephan-botes.github.io/developer-profile/",target:"_blank",rel:"noopener noreferrer",children:"Stephan Botes"})]})})},b=i.a.memo(h),f=n(165),j=n(634),v=n.p+"static/media/logo-full.dc921283.png",g=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.sidebarShow})),n=new d.a,a=n.get("auth-token");return Object(u.jsxs)(o.v,{withSubheader:!0,children:[Object(u.jsx)(o.fb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:n})}}),Object(u.jsx)(o.fb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:n})}}),Object(u.jsx)(o.w,{className:"mx-auto d-lg-none",to:"/",children:Object(u.jsx)(j.a,{className:"c-sidebar-brand-full",src:v,height:"30"})}),Object(u.jsxs)(o.x,{className:"d-md-down-none mr-auto",children:[Object(u.jsx)(o.y,{className:"px-3"}),Object(u.jsx)(o.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:c})]}),Object(u.jsxs)(o.x,{className:"px-3",children:[a?Object(u.jsx)(o.G,{to:"/",onClick:function(){n.remove("auth-token"),n.remove("current-user")},children:"Logout"}):Object(u.jsx)(o.G,{to:"/login",children:"Login"}),Object(u.jsx)(x,{})]})]})},x=function(){var e,t=(new d.a).get("current-user");t&&("/users/".concat(t.id),e=t.role);var n="https://img.icons8.com/ios-glyphs/50/000000/question-mark.png";return"user"===e&&(n="https://img.icons8.com/material-rounded/50/000000/user.png"),"manager"===e&&(n="https://img.icons8.com/material-rounded/50/000000/manager.png"),"admin"===e&&(n="https://img.icons8.com/material-rounded/48/000000/landlord.png"),Object(u.jsx)(o.p,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:Object(u.jsx)(o.q,{className:"c-header-nav-link",caret:!1,children:Object(u.jsx)("div",{className:"c-avatar",children:Object(u.jsx)(o.z,{src:n,className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})})})},O=n.p+"static/media/logo-minimized.e6d23bbc.png",w=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(u.jsx)(j.a,{name:"cil-spreadsheet",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavDropdown",name:"Organisational Units",route:"/ous",icon:"cil-building",_children:[{_tag:"CSidebarNavItem",name:"News Management",to:"/ous/news-management"},{_tag:"CSidebarNavItem",name:"Software Reviews",to:"/ous/software-reviews"},{_tag:"CSidebarNavItem",name:"Hardware Reviews",to:"/ous/hardware-reviews"},{_tag:"CSidebarNavItem",name:"Opinion Publishing",to:"/ous/opinion-pieces"}]},{_tag:"CSidebarNavItem",name:"Divisions",to:"/divisions",icon:"cil-briefcase"},{_tag:"CSidebarNavItem",name:"Users",to:"/users",icon:"cil-people"}],N=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/",icon:Object(u.jsx)(j.a,{name:"cil-spreadsheet",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavDropdown",name:"Organisational Units",icon:"cil-building"},{_tag:"CSidebarNavItem",name:"Divisions",icon:"cil-briefcase"},{_tag:"CSidebarNavItem",name:"Users",icon:"cil-people"}],S=function(e){var t=e.token,n=Object(f.b)(),a=Object(f.c)((function(e){return e.sidebarShow})),i=N;return t&&(i=w),Object(u.jsxs)(o.U,{show:a,onShowChange:function(e){return n({type:"set",sidebarShow:e})},children:[Object(u.jsxs)(o.V,{className:"d-md-down-none",to:"/",children:[Object(u.jsx)(j.a,{className:"c-sidebar-brand-full",src:v,height:50}),Object(u.jsx)(j.a,{className:"c-sidebar-brand-minimized",src:O,height:50})]}),Object(u.jsx)(o.X,{children:Object(u.jsx)(o.n,{items:i,components:{CSidebarNavDivider:o.Y,CSidebarNavDropdown:o.Z,CSidebarNavItem:o.ab,CSidebarNavTitle:o.bb}})}),Object(u.jsx)(o.W,{className:"c-d-md-down-none"})]})},y=i.a.memo(S);t.default=function(){var e=new d.a,t=e.get("auth-token"),n=e.get("current-user");return Object(u.jsxs)("div",{className:"c-app c-default-layout",children:[Object(u.jsx)(y,{token:t,user:n}),Object(u.jsxs)("div",{className:"c-wrapper",children:[Object(u.jsx)(g,{}),Object(u.jsx)("div",{className:"c-body",children:Object(u.jsx)(p,{})}),Object(u.jsx)(b,{})]})]})}}}]);
//# sourceMappingURL=14.d469bbd2.chunk.js.map