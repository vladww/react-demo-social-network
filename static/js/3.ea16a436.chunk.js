(this["webpackJsonpreact-app-1"]=this["webpackJsonpreact-app-1"]||[]).push([[3],{292:function(t,e,s){"use strict";s.d(e,"a",(function(){return f}));var o=s(5),r=s(49),n=s(50),a=s(52),i=s(51),c=s(0),u=s.n(c),p=s(19),l=s(11),j=s(1),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(a.a)(c,e);var s=Object(i.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(n.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(t,Object(o.a)({},this.props)):Object(j.jsx)(l.a,{to:"/login"})}}]),c}(u.a.Component);return Object(p.b)(d)(e)}},293:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var o=s(93);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],o=!0,r=!1,n=void 0;try{for(var a,i=t[Symbol.iterator]();!(o=(a=i.next()).done)&&(s.push(a.value),!e||s.length!==e);o=!0);}catch(c){r=!0,n=c}finally{try{o||null==i.return||i.return()}finally{if(r)throw n}}return s}}(t,e)||Object(o.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},297:function(t,e,s){},298:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3pboU",posts:"MyPosts_posts__2JuLd"}},299:function(t,e,s){t.exports={item:"Post_item__19WbU",postImg:"Post_postImg__3324d",message:"Post_message__3qLN9",postTop:"Post_postTop__IkJXx",postFooter:"Post_postFooter__3FQoK"}},300:function(t,e,s){t.exports={profileHeaderImage:"ProfileInfo_profileHeaderImage__1fkD9",descriptionBlock:"ProfileInfo_descriptionBlock__17LY6",infoContainer:"ProfileInfo_infoContainer__335_F",infoBox:"ProfileInfo_infoBox__59yNB",fullName:"ProfileInfo_fullName__1pECM",mainPhoto:"ProfileInfo_mainPhoto__qnR9G",photoPlaceholder:"ProfileInfo_photoPlaceholder__cf83D"}},305:function(t,e,s){"use strict";s.r(e);var o=s(5),r=s(49),n=s(50),a=s(52),i=s(51),c=s(0),u=s.n(c),p=s(19),l=s(11),j=(s(297),s(94)),d=s(35),f=s(298),b=s.n(f),h=s(299),m=s.n(h),O=s(1),x=function(t){return Object(O.jsxs)("div",{className:m.a.item,children:[Object(O.jsx)("div",{className:m.a.postImg,children:Object(O.jsx)("img",{src:"https://wallbox.ru/resize/800x480/wallpapers/main/201313/be283e0c3b9a67b.jpg",alt:"wallbox"})}),Object(O.jsxs)("div",{className:m.a.message,children:[Object(O.jsxs)("div",{className:m.a.postTop,children:[t.name,", ",t.age]}),Object(O.jsx)("div",{children:t.message})]}),Object(O.jsx)("div",{className:m.a.postFooter,children:Object(O.jsxs)("span",{children:["like ",t.likesCount]})})]})},_=s(126),v=s(127),g=s(83),P=s(82),y=Object(g.a)(10),I=Object(v.a)({form:"myPosts"})((function(t){return Object(O.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(_.a,{component:P.b,name:"newPostBody",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[g.b,y]})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Add post"})})]})}));window.props=[];var S=u.a.memo((function(t){console.log(t),window.props.push(t);var e=Object(d.a)(t.profilePage.posts).reverse().map((function(t){return Object(O.jsx)(x,{name:t.name,age:t.age,message:t.message,likesCount:t.likesCount},t.id)}));return Object(O.jsxs)("div",{className:b.a.postsBlock,children:[Object(O.jsx)("h3",{children:"My posts"}),Object(O.jsx)(I,{onSubmit:function(e){t.addPost(e.newPostBody)}}),Object(O.jsx)("div",{className:b.a.posts,children:e})]})})),k=Object(p.b)((function(t){return{profilePage:t.profilePage}}),{addPost:j.a})(S),w=s(62),N=s(300),U=s.n(N),B=s(293),C=function(t){var e=Object(c.useState)(!1),s=Object(B.a)(e,2),o=s[0],r=s[1],n=Object(c.useState)(t.status),a=Object(B.a)(n,2),i=a[0],u=a[1];Object(c.useEffect)((function(){u(t.status)}),[t.status]);return Object(O.jsx)("div",{children:o?Object(O.jsx)("div",{children:Object(O.jsx)("input",{onBlur:function(){r(!1),t.updateUserStatus(i)},onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,value:i})}):Object(O.jsx)("div",{children:Object(O.jsx)("span",{onClick:function(){r(!0)},children:t.status||"------------"})})})},A=function(t){return t.profile?Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:U.a.descriptionBlock,children:[Object(O.jsx)("div",{className:U.a.mainPhoto,children:t.profile.photos.large?Object(O.jsx)("img",{src:t.profile.photos.large,alt:"profile"}):Object(O.jsx)("img",{src:"https://pbs.twimg.com/media/CH-aSOnUwAEC0N8.jpg",alt:"basic pic"})}),Object(O.jsx)(C,{status:t.status,updateUserStatus:t.updateUserStatus})]})}):Object(O.jsx)("div",{className:U.a.photoPlaceholder,children:Object(O.jsx)(w.a,{})})},F=function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)(A,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),Object(O.jsx)(k,{})]})},M=s(292),T=s(10),E=function(t){Object(a.a)(s,t);var e=Object(i.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(this.props.match.params.userId)}},{key:"render",value:function(){return Object(O.jsx)(F,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),s}(u.a.Component);e.default=Object(T.d)(Object(p.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:j.c,getUserStatus:j.d,updateUserStatus:j.e}),l.f,M.a)(E)}}]);
//# sourceMappingURL=3.ea16a436.chunk.js.map