/*! For license information please see 5.d055fbe6.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-app-1"]=this["webpackJsonpreact-app-1"]||[]).push([[5],{293:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(93);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},301:function(e,n,t){e.exports={userPhoto:"Users_userPhoto__3t7bw"}},302:function(e,n,t){e.exports={paginationBar:"Paginator_paginationBar__3iXOc",selectedPage:"Paginator_selectedPage__2Y-AE"}},303:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&e.push(s)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var u in r)t.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},306:function(e,n,t){"use strict";t.r(n);var r=t(49),o=t(50),i=t(52),s=t(51),u=t(0),c=t.n(u),a=t(19),l=t(129),p=t(86),f=t(301),g=t.n(f),h=t.p+"static/media/usersDefaultImg0.e00d63e8.jpg",j=t(20),d=t(1),b=function(e){var n=e.user,t=Object(p.a)(e,["user"]);return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{to:"/profile/"+n.id,children:Object(d.jsx)("img",{className:g.a.userPhoto,src:null!=n.photos.small?n.photos.small:h,alt:"userPic"})})}),Object(d.jsx)("div",{children:n.followed?Object(d.jsx)("button",{disabled:t.followingInProgress.some((function(e){return e===n.id})),onClick:function(){return t.unfollow(n.id)},children:"Unfollow"}):Object(d.jsx)("button",{disabled:t.followingInProgress.some((function(e){return e===n.id})),onClick:function(){return t.follow(n.id)},children:"Follow"})})]}),Object(d.jsxs)("span",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:n.name}),Object(d.jsx)("div",{children:n.status})]}),Object(d.jsx)("span",{children:Object(d.jsxs)("div",{children:["u.location.city",", ","u.location.country"]})})]})]})})},v=t(62),O=t(96),y=t(293),P=t(302),x=t.n(P),w=t(303),m=t.n(w),S=function(e){for(var n=Math.ceil(e.itemsTotalCount/e.pageSize),t=[],r=1;r<=n;r++)t.push(r);var o=Math.ceil(n/e.portionSize),i=Object(u.useState)(1),s=Object(y.a)(i,2),c=s[0],a=s[1],l=(c-1)*e.portionSize+1,p=c*e.portionSize;return Object(d.jsxs)("div",{className:x.a.paginationBar,children:[c>1&&Object(d.jsxs)("span",{children:[Object(d.jsx)("button",{onClick:function(){a(1)},children:"START"}),Object(d.jsx)("button",{onClick:function(){a(c-1)},children:"PREV"})]}),t.filter((function(e){return e>=l&&e<=p})).map((function(n){return Object(d.jsxs)("span",{className:m()(Object(O.a)({},x.a.selectedPage,e.currentPage===n),x.a.pageNumber),onClick:function(){return e.onPageChange(n)},children:[n," "]},n)})),o>c&&Object(d.jsxs)("span",{children:[Object(d.jsx)("button",{onClick:function(){a(c+1)},children:"NEXT"}),Object(d.jsx)("button",{onClick:function(){a(o)},children:"END"})]})]})},C=t(10);function k(e,n){return e===n}function z(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function A(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var F=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=0,s=r.pop(),u=A(r),c=e.apply(void 0,[function(){return i++,s.apply(null,arguments)}].concat(t)),a=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return c.apply(null,e)}));return a.resultFunc=s,a.dependencies=u,a.recomputations=function(){return i},a.resetRecomputations=function(){return i=0},a}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k,t=null,r=null;return function(){return z(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var I=F((function(e){return e.usersPage.users}),(function(e){return e})),T=function(e){return e.usersPage.pageSize},_=function(e){return e.usersPage.usersTotalCount},E=function(e){return e.usersPage.currentPage},N=function(e){return e.usersPage.isFetching},U=function(e){return e.usersPage.followingInProgress},q=function(e){Object(i.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(e=n.call.apply(n,[this].concat(i))).onPageChange=function(n){var t=e.props.pageSize;e.props.requestUsers(n,t)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;this.props.requestUsers(n,t)}},{key:"render",value:function(){var e=this;return Object(d.jsxs)(d.Fragment,{children:[this.props.isFetching&&Object(d.jsx)(v.a,{}),Object(d.jsx)(S,{itemsTotalCount:this.props.usersTotalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,portionSize:10,onPageChange:this.onPageChange}),this.props.users.map((function(n){return Object(d.jsx)(b,{user:n,followingInProgress:e.props.followingInProgress,follow:e.props.follow,unfollow:e.props.unfollow,setFollowingProgress:e.props.setFollowingProgress},n.id)}))]})}}]),t}(c.a.Component);n.default=Object(C.d)(Object(a.b)((function(e){return{users:I(e),pageSize:T(e),usersTotalCount:_(e),currentPage:E(e),isFetching:N(e),followingInProgress:U(e)}}),{followSuccess:l.c,unfollowSuccess:l.h,setCurrentPage:l.e,setFollowingProgress:l.f,requestUsers:l.d,follow:l.b,unfollow:l.g}))(q)}}]);
//# sourceMappingURL=5.d055fbe6.chunk.js.map