(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{628:function(e,t,n){e.exports=n(383)},629:function(e,t,n){"use strict";function r(e,t,n,r,a,s,i){try{var c=e[s](i),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var i=e.apply(t,n);function c(e){r(i,a,s,c,o,"next",e)}function o(e){r(i,a,s,c,o,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return a}))},630:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(631);function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},631:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},633:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(630);function a(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw i}}}}},635:function(e,t,n){"use strict";n(1);var r=n(627),a=n(18);t.a=function(e){var t=e.modal,n=e.setModal,s=e.notification,i=e.setNotification,c=e.hrefCondition,o=e.hrefLink;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(r.J,{show:t,onClose:function(){n(!1)},children:[Object(a.jsx)(r.M,{closeButton:!0,children:Object(a.jsx)(r.N,{children:"Edit Entry"})}),Object(a.jsx)(r.K,{children:Object(a.jsx)(r.k,{xs:"12",children:Object(a.jsx)(r.g,{children:s})})}),Object(a.jsx)(r.L,{children:Object(a.jsx)(r.e,{color:"primary",onClick:function(){n(!1),i("")},href:c?o:"#",children:"Ok"})})]})})}},636:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(630);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(o){a=!0,s=o}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},638:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(631);var a=n(630);function s(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},642:function(e,t,n){"use strict";var r=n(628),a=n.n(r),s=n(629),i=n(633),c=n(638),o=n(636),u=n(1),l=n(627),d=n(632),f=n(635),j=n(18),p=new d.a,m=p.get("auth-token"),h=p.get("current-user");t.a=function(e){var t=e.users,n=e.divisionID,r=e.all,d=Object(u.useState)([]),p=Object(o.a)(d,2),b=p[0],O=p[1],x=Object(u.useState)(!1),y=Object(o.a)(x,2),v=y[0],w=y[1],g=Object(u.useState)(""),k=Object(o.a)(g,2),S=k[0],C=k[1],A=Object(u.useState)(""),N=Object(o.a)(A,2),T=N[0],_=N[1],z=Object(u.useState)(""),E=Object(o.a)(z,2),P=E[0],U=E[1],I=Object(u.useState)(""),J=Object(o.a)(I,2),M=J[0],D=J[1],H=Object(u.useState)(""),R=Object(o.a)(H,2),L=R[0],Y=R[1],B=Object(u.useState)(""),F=Object(o.a)(B,2),q=F[0],G=F[1],K=Object(u.useState)("user"),$=Object(o.a)(K,2),Q=$[0],V=$[1],W=Object(u.useState)(""),X=Object(o.a)(W,2),Z=X[0],ee=X[1],te="admin"===h.role,ne=function(e){"new-user-email"===e.target.name&&_(e.target.value),"update-email"===e.target.name&&U(e.target.value),"update-password"===e.target.name&&D(e.target.value),"update-firstname"===e.target.name&&Y(e.target.value),"update-lastname"===e.target.name&&G(e.target.value),"update-role"===e.target.name&&V(e.target.value)},re=function(e){e.message&&ee(e.message),ae()},ae=function(){_(""),U(""),D(""),Y(""),G("");var e,t=document.getElementsByClassName("input-field"),n=Object(i.a)(t);try{for(n.s();!(e=n.n()).done;){e.value.value=""}}catch(r){n.e(r)}finally{n.f()}},se=function(){var e=Object(s.a)(a.a.mark((function e(){var t,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===T){e.next=11;break}return t=T,e.next=4,fetch("https://stepbot-cooltech-internal-api.herokuapp.com/users/add/division",{method:"POST",headers:{"Content-Type":"application/json","auth-token":m},body:JSON.stringify({email:t,ou_id:S,division_id:n})});case 4:return r=e.sent,e.next=7,r.json();case 7:s=e.sent,re(s),e.next=13;break;case 11:re({message:"You need to enter a email before adding."});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(s.a)(a.a.mark((function e(t){var r,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return r=t.email,e.next=4,fetch("https://stepbot-cooltech-internal-api.herokuapp.com/users/remove/division",{method:"PATCH",headers:{"Content-Type":"application/json","auth-token":m},body:JSON.stringify({email:r,ou_id:S,division_id:n})});case 4:return s=e.sent,e.next=7,s.json();case 7:i=e.sent,re(i),e.next=13;break;case 11:re({message:"You need to select a user."});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,i,c,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===P&&""===M&&""===L&&""===q){e.next=15;break}return n=t._id,r=t.email,s=t.password,i=t.firstname,c=t.lastname,e.next=8,fetch("https://stepbot-cooltech-internal-api.herokuapp.com/users/update/details",{method:"PATCH",headers:{"Content-Type":"application/json","auth-token":m},body:JSON.stringify({id:n,email:r,password:s,firstname:i,lastname:c,newEmail:P,newPassword:M,newFirstname:L,newLastname:q})});case 8:return o=e.sent,e.next=11,o.json();case 11:u=e.sent,re(u),e.next=17;break;case 15:re({message:"You need to fill at least one field before updating."});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=12;break}return n=t._id,r=t.role,e.next=5,fetch("https://stepbot-cooltech-internal-api.herokuapp.com/users/update/role",{method:"PATCH",headers:{"Content-Type":"application/json","auth-token":m},body:JSON.stringify({id:n,role:r,newRole:Q})});case 5:return s=e.sent,e.next=8,s.json();case 8:i=e.sent,re(i),e.next=14;break;case 12:re({message:"You need to select a user."});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=[];return n?(t.forEach((function(t){t.ou.forEach((function(r){r.division_id===n&&(""===S&&C(r.ou_id),e.push(t))}))})),e):e=t}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.S,{children:Object(j.jsx)(l.k,{children:Object(j.jsxs)(l.f,{children:[r?null:Object(j.jsxs)(l.j,{children:[Object(j.jsx)(l.t,{action:"",method:"POST",children:Object(j.jsx)(l.u,{row:!0,children:Object(j.jsx)(l.k,{sm:"6",children:Object(j.jsx)(l.A,{size:"sm",type:"email",id:"new-user-email",name:"new-user-email",className:"input-sm input-field",placeholder:"New user email",onChange:ne})})})}),te?Object(j.jsx)(l.e,{size:"sm",color:"success",onClick:function(){se(),w(!v)},children:"Add user"}):Object(j.jsx)(l.e,{size:"sm",color:"success",disabled:!0,children:"Add user"})]}),Object(j.jsx)(l.g,{children:Object(j.jsx)(l.o,{items:ue,fields:[{key:"email",_style:{width:"17%"}},{key:"password",_style:{width:"50%"}},{key:"firstname",_style:{width:"10%"}},{key:"lastname",_style:{width:"10%"}},{key:"role",_style:{width:"10%"}},{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}],hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{show_details:function(e,t){return Object(j.jsx)("td",{className:"py-2",children:Object(j.jsx)(l.e,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=b.indexOf(e),n=b.slice();-1!==t?n.splice(t,1):n=[].concat(Object(c.a)(b),[e]),O(n)}(t)},children:b.includes(t)?"Hide":"Show"})})},details:function(e,t){return Object(j.jsx)(l.l,{show:b.includes(t),children:Object(j.jsxs)(l.g,{children:[Object(j.jsx)(l.t,{action:"",method:"PATCH",children:Object(j.jsxs)(l.u,{row:!0,children:[Object(j.jsxs)(l.k,{sm:"5",children:[Object(j.jsx)(l.A,{size:"sm",type:"text",name:"update-email",className:"input-sm input-field",placeholder:"Update email",onChange:ne}),Object(j.jsx)(l.A,{size:"sm",type:"text",name:"update-password",className:"input-sm input-field",placeholder:"Update password",onChange:ne}),Object(j.jsx)(l.A,{size:"sm",type:"text",name:"update-firstname",className:"input-sm input-field",placeholder:"Update first name",onChange:ne}),Object(j.jsx)(l.A,{size:"sm",type:"text",name:"update-lastname",className:"input-sm input-field",placeholder:"Update last name",onChange:ne})]}),r?Object(j.jsx)(l.k,{sm:"4",children:Object(j.jsx)(l.B,{className:"input-sm input-field",children:Object(j.jsxs)(l.T,{size:"sm",custom:!0,name:"update-role",id:"update-role",onChange:ne,children:[Object(j.jsx)("option",{value:"user",children:"Role"}),Object(j.jsx)("option",{value:"user",children:"User"}),Object(j.jsx)("option",{value:"manager",children:"Manager"}),Object(j.jsx)("option",{value:"admin",children:"Admin"})]})})}):null]})}),te?Object(j.jsx)(l.e,{size:"sm",color:"warning",onClick:function(){ce(e),w(!v)},children:"Edit"}):Object(j.jsx)(l.e,{size:"sm",color:"warning",disabled:!0,children:"Edit"}),r?te?Object(j.jsx)(l.e,{size:"sm",color:"warning",className:"ml-1",onClick:function(){oe(e),w(!v)},children:"Update Role"}):Object(j.jsx)(l.e,{size:"sm",color:"warning",className:"ml-1",disabled:!0,children:"Update Role"}):Object(j.jsx)(l.e,{size:"sm",color:"danger",className:"ml-1",onClick:function(){ie(e),w(!v)},children:"Remove"})]})})}}})})]})})}),Object(j.jsx)(f.a,{modal:v,setModal:w,notification:Z,setNotification:ee,hrefCondition:!0,hrefLink:"#"})]})}},676:function(e,t,n){"use strict";n.r(t);var r=n(628),a=n.n(r),s=n(629),i=n(158),c=n(159),o=n(161),u=n(160),l=n(1),d=n(627),f=n(642),j=n(632),p=n(18),m=(new j.a).get("auth-token"),h=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).componentDidMount=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getData();case 2:case"end":return e.stop()}}),e)}))),r.getData=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({loaded:!1}),e.next=3,r.getUsers();case 3:r.setState({loaded:!0});case 4:case"end":return e.stop()}}),e)}))),r.getUsers=Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://stepbot-cooltech-internal-api.herokuapp.com/users/find/all",{method:"GET",headers:{"Content-Type":"application/json","auth-token":m}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r.setState({users:n});case 7:case"end":return e.stop()}}),e)}))),r.state={active:0,users:[],loaded:!1,fault:!1},r}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.users;return Object(p.jsx)(d.S,{children:Object(p.jsx)(d.k,{sm:"12",xl:"12",children:Object(p.jsxs)(d.f,{children:[Object(p.jsx)(d.j,{children:"Users"}),Object(p.jsx)(d.g,{children:Object(p.jsx)(f.a,{users:e,divisionID:null,all:!0})})]})})})}}]),n}(l.Component);t.default=h}}]);
//# sourceMappingURL=5.2ad719f7.chunk.js.map