"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[322],{7568:function(n,t,o){o.d(t,{Z:function(){return q}});var e,r,a,i,c,u,l,s=o(2007),d=o.n(s),m=o(168),x=o(2499),p=o(5705),b=x.Z.h2(e||(e=(0,m.Z)(["\n  text-align: center;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  font-weight: 700;\n"]))),f=x.Z.label(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),h=x.Z.span(a||(a=(0,m.Z)(["\n  font-weight: 600;\n  color: var(--main-text-color);\n  margin-bottom: 5px;\n"]))),g=(0,x.Z)(p.gN)(i||(i=(0,m.Z)(["\n  background-color: #e9eaf7;\n  height: 40px;\n  padding: 0 10px 0 10px;\n\n  border: 1px solid var(--second-bg-color);\n  outline: none;\n\n  color: var(--main-text-color);\n  font-size: 14px;\n\n  :focus {\n    border-color: var(--accent-bg-color);\n  }\n\n  ::placeholder {\n    font-size: 12px;\n    color: var(--main-text-color);\n  }\n"]))),v=x.Z.button(c||(c=(0,m.Z)(["\n  margin: 0 auto;\n  box-shadow: inset 0px 1px 0px 0px #54a3f7;\n  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);\n  background-color: #007dc1;\n  border-radius: 3px;\n  border: 1px solid #124d77;\n  display: block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 13px;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #154682;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);\n    background-color: #0061a7;\n  }\n"]))),Z=o(6355),k=x.Z.button(u||(u=(0,m.Z)(["\n  box-shadow: inset 0px 1px 0px 0px #54a3f7;\n  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);\n  background-color: #007dc1;\n  border-radius: 3px;\n  border: 1px solid #124d77;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 13px;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #154682;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);\n    background-color: #0061a7;\n  }\n"]))),y=x.Z.span(l||(l=(0,m.Z)(["\n  margin-left: 10px;\n"]))),j=o(6871),S=o(3329),w=function(n){var t=n.text,o=n.path,e=(0,j.s0)();return(0,S.jsxs)(k,{type:"button",onClick:function(){return e(o)},children:[(0,S.jsx)(Z.BMs,{}),(0,S.jsx)(y,{children:t})]})};w.prototype={label:d().string,path:d().string};var _=w,C=function(n){var t=n.title,o=n.initialValues,e=n.onSubmitForm,r=n.validationSchema,a=n.buttonLabel;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(b,{children:t}),(0,S.jsx)(_,{text:"Contact list",path:"/contacts"}),(0,S.jsx)(p.J9,{initialValues:o,onSubmit:e,validationSchema:r,children:function(n){var t=n.values,o=n.handleChange,e=n.handleSubmit,r=n.isSubmitting;return(0,S.jsxs)(p.l0,{onSubmit:e,children:[(0,S.jsxs)(f,{children:[(0,S.jsx)(h,{children:"Name"}),(0,S.jsx)(g,{type:"text",name:"name",onChange:o,value:t.name}),(0,S.jsx)(p.Bc,{name:"name",component:"div"})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(h,{children:"Number"}),(0,S.jsx)(g,{type:"tel",name:"number",onChange:o,value:t.number}),(0,S.jsx)(p.Bc,{name:"number",component:"div"})]}),(0,S.jsx)(v,{type:"submit",disabled:r,children:r?"...":a})]})}})]})};C.prototype={title:d().string,initialValues:d().shape({name:d().string,number:d().string}),onSubmitForm:d().func,validationSchema:d().shape({name:d().func,number:d().func}),buttonLabel:d().string};var q=C},9322:function(n,t,o){o.r(t),o.d(t,{default:function(){return x}});var e=o(3623),r=o(7568),a=o(1413),i=o(885),c=o(6871),u=o(6517),l=o(5264),s=function(){var n=null,t=null,o=(0,c.UO)().contactId,e=(0,c.s0)(),r=(0,u.Cq)(),s=(0,i.Z)(r,2),d=s[0],m=s[1].isLoading,x=(0,u.wY)().data;x&&(n=x.find((function(n){return n.id===o})),t={name:n.name,number:n.number});return{isUpdating:m,onSubmitForm:function(n){JSON.stringify(n)!==JSON.stringify(t)?(d((0,a.Z)({contactId:o},n)),e("/contacts"),l.Notify.success("The contact has been successfully changed.")):l.Notify.warning("Try to change something first.")},initialValues:t}},d=o(3854),m=o(3329),x=function(){var n=s(),t=n.onSubmitForm,o=n.initialValues;return(0,m.jsx)(e.Z,{children:(0,m.jsx)(r.Z,{title:"Edit Contact ".concat(o.name),initialValues:o,onSubmitForm:t,validationSchema:d.OD,buttonLabel:"Change contact"})})}},3854:function(n,t,o){o.d(t,{OD:function(){return r},TW:function(){return a},$T:function(){return i}});var e=o(3284),r=e.Ry({name:e.Z_().required().min(3).max(30),number:e.Rx().required()}),a=e.Ry({email:e.Z_().required().email(),password:e.Z_().required().min(7).max(14)}),i=e.Ry({name:e.Z_().required().min(3).max(30),email:e.Z_().required().email(),password:e.Z_().required().min(7).max(14)})}}]);
//# sourceMappingURL=322.099fdd00.chunk.js.map