(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1q44S",nameLabel:"ContactForm_nameLabel__1__vU",numberLabel:"ContactForm_numberLabel__2nhq0 ContactForm_nameLabel__1__vU",contactFormInput:"ContactForm_contactFormInput__kLpQU",errorMessage:"ContactForm_errorMessage__19G0r",submitButton:"ContactForm_submitButton__bNWG2"}},184:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n.n(c),o=n(72),s=n.n(o),i=(n(83),n(8)),l=n(2),u=n(3),m=n(6),b=n(7),j=n(17),h=n(37),d=n(186),_=n(12),p=n.n(_);Object(d.a)();var f=h.a({name:h.b().required("Enter contact's name"),number:h.b().length(10,"Example: 0930939393").required("Enter contact's phone")}),O=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsx)(j.d,{initialValues:{name:"",number:""},validationSchema:f,onSubmit:function(e,n){var a=e.name,c=e.number,r=n.resetForm,o=n.setSubmitting;t.props.onSubmit({name:a,number:c,id:Object(d.a)()}),o(!1),r()},children:Object(a.jsxs)(j.c,{className:p.a.contactForm,children:[Object(a.jsxs)("label",{className:p.a.nameLabel,children:["Name:",Object(a.jsx)(j.b,{type:"text",name:"name",className:p.a.contactFormInput}),Object(a.jsx)("span",{className:p.a.errorMessage,children:Object(a.jsx)(j.a,{name:"name"})})]}),Object(a.jsxs)("label",{className:p.a.numberLabel,children:["Number:",Object(a.jsx)(j.b,{type:"tel",name:"number",className:p.a.contactFormInput}),Object(a.jsx)("span",{className:p.a.errorMessage,children:Object(a.jsx)(j.a,{name:"number"})})]}),Object(a.jsx)("button",{type:"submit",className:p.a.submitButton,children:"Add contact"})]})})}}]),n}(c.Component),x=n(36),C=n.n(x);function v(t){var e=t.initialValue,n=t.onFilterChange;return Object(a.jsx)("div",{className:C.a.inputStyle,children:Object(a.jsxs)("label",{className:C.a.filterLabel,children:["Find contacts by name:",Object(a.jsx)("input",{className:C.a.filterInput,type:"text",name:"name",value:e,onChange:function(t){n(t.target.value)}})]})})}v.defaultProps={initialValue:""};var L=v,F=n(24),g=n.n(F);var y=function(t){var e=t.contacts,n=t.onDeleteButtonClick;return Object(a.jsx)("ul",{className:g.a.contactsList,children:e.map((function(t,e){return Object(a.jsxs)("li",{className:e%2===0?g.a.even:g.a.odd,children:[Object(a.jsxs)("span",{children:[t.name,": ",t.number]}),Object(a.jsx)("button",{type:"button",id:t.id,className:g.a.deleteButton,onClick:function(t){return n(t.target.id)},children:"Delete"})]},t.id)}))})},N=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleSubmit=function(e){if(t.state.contacts.some((function(t){return t.name===e.name})))return alert("".concat(e.name," already exists in your phonebook"));t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.handleFilterChange=function(e){t.setState({filter:e})},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getFilteredContactsList=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.getFilteredContactsList();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(O,{onSubmit:this.handleSubmit}),Object(a.jsx)("h2",{children:"Contacts:"}),e.length>1&&Object(a.jsx)(L,{initialValue:n,onFilterChange:this.handleFilterChange}),c.length>0&&Object(a.jsx)(y,{contacts:c,onDeleteButtonClick:this.handleDeleteContact})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))},24:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__2XLXP",listItem:"ContactList_listItem__38CJJ",even:"ContactList_even__2eAEJ ContactList_listItem__38CJJ",odd:"ContactList_odd__jJrXl ContactList_listItem__38CJJ",deleteButton:"ContactList_deleteButton__2kxhs"}},36:function(t,e,n){t.exports={inputStyle:"Filter_inputStyle__2gCgm",filterLabel:"Filter_filterLabel__3R0_v",filterInput:"Filter_filterInput__3KxHh"}},83:function(t,e,n){}},[[184,1,2]]]);
//# sourceMappingURL=main.d0506755.chunk.js.map