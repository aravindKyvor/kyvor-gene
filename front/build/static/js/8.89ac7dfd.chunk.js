(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[8],{712:function(e,t,a){},925:function(e,t,a){"use strict";a.r(t);var n=a(42),c=a.n(n),s=a(80),i=a(46),r=a(7),o=a(262),l=a(0),u=a.n(l),d=a(45),j=a(55),b=a(196),h=a(89),m=a.n(h),p=a(289),x=a(30),O=a(31),f=a(33),v=a(32),g=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return this.state.date.toLocaleTimeString("en-US")}}]),a}(u.a.Component),N=(a(712),a(1));t.default=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:b.d})((function(e){var t=e.login,a=e.isAuthenticated,n=Object(l.useState)({email:"",password:""}),u=Object(o.a)(n,2),j=u[0],b=u[1],h=j.email,x=j.password,O=function(e){return b(Object(r.a)(Object(r.a)({},j),{},Object(i.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat("http://localhost:8000","/auth/o/google-oauth2/?redirect_uri=").concat("http://localhost:8000","/google"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return a?Object(N.jsx)(d.a,{to:"/"}):Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:"d-flex align-items-center auth px-0",children:Object(N.jsx)("div",{className:"row w-100 mx-0",children:Object(N.jsx)("div",{className:"col-lg-6 mx-auto",children:Object(N.jsxs)("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5",children:[Object(N.jsxs)("div",{className:"brand-logo",children:[Object(N.jsx)("img",{src:"https://media-exp1.licdn.com/dms/image/C510BAQFzmTl0wDAz9A/company-logo_200_200/0/1571652632244?e=2159024400&v=beta&t=eaKo0GEOitZiwddxEj0nHviaJUkB3IuudN4hfCTp4fE",alt:"logo"}),Object(N.jsx)("div",{children:Object(N.jsx)("span",{children:Object(N.jsx)(g,{})})})]}),Object(N.jsx)("h4",{children:"Hello, welcome to Kyvor "}),Object(N.jsx)("h6",{className:"font-weight-light",children:"Sign in to continue."}),Object(N.jsxs)(p.a,{onSubmit:function(e){return function(e){e.preventDefault(),t(h,x)}(e)},children:[Object(N.jsx)(p.a.Group,{className:"d-flex search-field",children:Object(N.jsx)(p.a.Control,{type:"email",placeholder:"Email...",size:"lg",className:"h-auto",name:"email",value:h,onChange:function(e){return O(e)},required:!0})}),Object(N.jsx)(p.a.Group,{className:"d-flex search-field",children:Object(N.jsx)(p.a.Control,{type:"password",placeholder:"Password",size:"lg",className:"h-auto",name:"password",value:x,onChange:function(e){return O(e)},minLength:"6",required:!0})}),Object(N.jsx)("div",{className:"mt-3",children:Object(N.jsx)("button",{className:"btn btn-block btn-primary btn-sm font-weight-medium auth-form-btn",type:"submit",children:"SIGN IN"})})]}),Object(N.jsxs)("div",{className:"or-container",children:[Object(N.jsx)("div",{className:"line-separator"}),Object(N.jsx)("div",{className:"or-label",children:"or"}),Object(N.jsx)("div",{className:"line-separator"})]}),Object(N.jsx)("div",{className:"mb-2",children:Object(N.jsxs)("button",{type:"button",className:"btn btn-lg btn-social-icon-text btn-google btn-block",onClick:f,children:[Object(N.jsx)("i",{className:"mdi mdi-google-plus"}),"Google"]})})]})})})})})}))}}]);
//# sourceMappingURL=8.89ac7dfd.chunk.js.map