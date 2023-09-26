(window.webpackJsonp=window.webpackJsonp||[]).push([[159,17],{1390:function(e,t,r){"use strict";r.r(t);var o=r(0),l=(r(5),{data:function(){return{message:"",profile:{first_name:"",last_name:"",gender:"",dob:"",phone:"",is_credentials:!1,old_password:"",password:"",password_confirmation:""},error:""}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$webService.customerProfile();case 2:r=t.sent,(data=r.data)&&(e.profile.first_name=data.first_name,e.profile.last_name=data.last_name,e.profile.gender=data.gender,e.profile.dob=data.dob,e.profile.phone=data.phone);case 5:case"end":return t.stop()}}),t)})))()},methods:{updateProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.profile.is_credentials&&""==e.profile.password||e.profile.is_credentials&&""==e.profile.password_confirmation)){t.next=4;break}e.$toast.error(e.$t("password_field_is_required")),t.next=6;break;case 4:return t.next=6,e.$webService.customerProfileUpdate(e.profile).then((function(t){var r;t.response?(e.error=null!==(r=t.response.data.errors)&&void 0!==r?r:t.response.data,e.$toast.error(t.response.data.message)):(e.error="",e.profile.is_credentials=!1,e.profile.password="",e.profile.password_confirmation="",e.$toast.success(t.message))})).catch((function(t){e.error=t.response.data.errors}));case 6:case"end":return t.stop()}}),t)})))()}},computed:{now:function(){var e=new Date;(t=new Date).setYear(t.getFullYear()-100),e.setYear(e.getFullYear()-10);var t;e=new Date(e).toISOString();return{min_date:t=new Date(t).toISOString(),max_date:e}}},watch:{"profile.is_credentials":function(e,t){this.profile.old_password="",this.profile.password="",this.profile.password_confirmation=""}}}),n=r(71),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$fetchState.pending?r("div",[r("AdminFormLoader")],1):r("div",{staticClass:"my-profile-tab"},[r("form",{staticClass:"row g-4 needs-validation"},[r("div",{staticClass:"col-md-6"},[e.error.first_name?r("span",{staticClass:"float-end text-danger"},[e._v("\n          "+e._s(e.error.first_name[0])+"\n        ")]):e._e(),e._v(" "),r("label",{staticClass:"form-label",attrs:{for:"validationServer02"}},[e._v(e._s(e.$t("form.customer.first_name.label")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.first_name,expression:"profile.first_name"}],staticClass:"form-control",attrs:{type:"text",id:"validationServer02",placeholder:e.$t("form.customer.first_name.placeholder"),required:""},domProps:{value:e.profile.first_name},on:{input:function(t){t.target.composing||e.$set(e.profile,"first_name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-md-6"},[e.error.last_name?r("span",{staticClass:"float-end text-danger"},[e._v("\n          "+e._s(e.error.last_name[0])+"\n        ")]):e._e(),e._v(" "),r("label",{staticClass:"form-label",attrs:{for:"validationServerUsername"}},[e._v(e._s(e.$t("form.customer.last_name.label")))]),e._v(" "),r("div",{staticClass:"input-group has-validation"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.last_name,expression:"profile.last_name"}],staticClass:"form-control",attrs:{type:"text",id:"validationServerUsername","aria-describedby":"inputGroupPrepend3 validationServerUsernameFeedback",placeholder:e.$t("form.customer.last_name.placeholder"),required:""},domProps:{value:e.profile.last_name},on:{input:function(t){t.target.composing||e.$set(e.profile,"last_name",t.target.value)}}}),e._v(" "),r("div",{staticClass:"invalid-feedback",attrs:{id:"validationServerUsernameFeedback"}},[e._v("\n        "+e._s(e.$t("form.customer.choose_username"))+"\n        ")])])]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"label form-label"},[e._v("\n          "+e._s(this.$t("form.customer.dob.label"))+"\n        ")]),e._v(" "),e.error.dob?r("span",{staticClass:"float-end text-danger"},[e._v("\n              "+e._s(e.error.dob[0])+"\n        ")]):e._e(),e._v(" "),r("datetime",{attrs:{"min-datetime":e.now.min_date,"max-datetime":e.now.max_date,placeholder:this.$t("form.customer.dob.placeholder"),"input-class":"form-control","value-zone":"local",type:"date"},model:{value:e.profile.dob,callback:function(t){e.$set(e.profile,"dob",t)},expression:"profile.dob"}})],1)]),e._v(" "),r("div",{staticClass:"col-md-6"},[e.error.phone?r("span",{staticClass:"float-end text-danger"},[e._v("\n          "+e._s(e.error.phone[0])+"\n        ")]):e._e(),e._v(" "),r("label",{staticClass:"form-label",attrs:{for:"validationServerUsername"}},[e._v(e._s(e.$t("form.customer.contact.label"))+" #")]),e._v(" "),r("div",{staticClass:"input-group has-validation"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.phone,expression:"profile.phone"}],staticClass:"form-control",attrs:{type:"text",id:"validationServerUsername",placeholder:e.$t("form.customer.contact.placeholder")},domProps:{value:e.profile.phone},on:{input:function(t){t.target.composing||e.$set(e.profile,"phone",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"form-label text-capitalize",attrs:{for:"input-live"}},[e._v(e._s(this.$t("form.customer.gender.label"))+":")]),e._v(" "),r("div",{staticClass:"d-flex"},[r("div",{staticClass:"form-check me-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.gender,expression:"profile.gender"}],staticClass:"form-check-input",attrs:{type:"radio",value:"male",name:"gender-radio",id:"radio-male"},domProps:{checked:e._q(e.profile.gender,"male")},on:{change:function(t){return e.$set(e.profile,"gender","male")}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"radio-male"}},[e._v("\n              "+e._s(e.$t("form.customer.gender.male"))+"\n            ")])]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.gender,expression:"profile.gender"}],staticClass:"form-check-input",attrs:{type:"radio",value:"female",name:"gender-radio",id:"radio-female"},domProps:{checked:e._q(e.profile.gender,"female")},on:{change:function(t){return e.$set(e.profile,"gender","female")}}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"radio-female"}},[e._v("\n              "+e._s(e.$t("form.customer.gender.female"))+"\n            ")])])])]),e._v(" "),r("div",{staticClass:"col-md-6 mb-3 px-0 mt-4"},[r("div",{staticClass:"d-flex align-items-center mb-2"},[r("label",{staticClass:"label form-label me-4 text-capitalize mb-0"},[e._v("\n                  "+e._s(this.$t("form.admin.is_credentials.label"))+"\n              ")]),e._v(" "),r("div",{staticClass:"form-switch"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.is_credentials,expression:"profile.is_credentials"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:e.profile.is_credentials?"checked":"",checked:Array.isArray(e.profile.is_credentials)?e._i(e.profile.is_credentials,null)>-1:e.profile.is_credentials},on:{change:function(t){var r=e.profile.is_credentials,o=t.target,l=!!o.checked;if(Array.isArray(r)){var n=e._i(r,null);o.checked?n<0&&e.$set(e.profile,"is_credentials",r.concat([null])):n>-1&&e.$set(e.profile,"is_credentials",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.profile,"is_credentials",l)}}})])]),e._v(" "),r("span",{staticClass:"heebo-light"},[e._v("\n              "+e._s(e.$t("form.admin.is_credentials.subheading"))+"\n              ")])])]),e._v(" "),e.profile.is_credentials?r("div",{staticClass:"row g-4"},[r("div",{staticClass:"col-md-6"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[e._v(e._s(this.$t("form.admin.old_password.label"))+":")]),e._v(" "),e.error&&e.error.old_password?r("span",{staticClass:"float-end text-danger"},[e._v("\n            "+e._s(e.error.old_password[0])+"\n          ")]):e._e(),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.old_password,expression:"profile.old_password"}],staticClass:"form-control",class:e.error&&e.error.old_password?"error":"",attrs:{type:"password","aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.admin.old_password.placeholder"),trim:""},domProps:{value:e.profile.old_password},on:{input:function(t){t.target.composing||e.$set(e.profile,"old_password",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[e._v(e._s(this.$t("form.admin.password.label"))+":")]),e._v(" "),e.error&&e.error.password?r("span",{staticClass:"float-end text-danger"},[e._v("\n            "+e._s(e.error.password[0])+"\n          ")]):e._e(),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password,expression:"profile.password"}],staticClass:"form-control",class:e.error&&e.error.password?"error":"",attrs:{type:"password","aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.admin.password.placeholder"),trim:""},domProps:{value:e.profile.password},on:{input:function(t){t.target.composing||e.$set(e.profile,"password",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{attrs:{role:"group"}},[r("label",{staticClass:"form-label",attrs:{for:"input-live"}},[e._v(e._s(this.$t("form.admin.password_confirmation.label"))+":")]),e._v(" "),e.error&&e.error.password_confirmation?r("span",{staticClass:"float-end text-danger"},[e._v("\n            "+e._s(e.error.confirm_password[0])+"\n          ")]):e._e(),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password_confirmation,expression:"profile.password_confirmation"}],staticClass:"form-control",class:e.error&&e.error.password_confirmation?"error":"",attrs:{type:"password","aria-describedby":"input-live-help input-live-feedback",placeholder:this.$t("form.admin.password_confirmation.placeholder"),trim:""},domProps:{value:e.profile.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.profile,"password_confirmation",t.target.value)}}})])])]):e._e(),e._v(" "),r("div",{staticClass:"d-flex justify-content-end"},[r("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Update Customer"},expression:"{ content: 'Update Customer' }"}],staticClass:"btn btn-primary text-white rounded py-2 px-3 lh-sm fw-bold text-uppercase mt-3",on:{click:function(t){return e.updateProfile()}}},[e._v("\n            "+e._s(e.$t("update"))+"\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AdminFormLoader:r(660).default})},660:function(e,t,r){"use strict";r.r(t);var o={props:["multilang"]},l=r(71),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container skeletion-effect"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-body p-4"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e.multilang?r("div",[r("hr",{staticClass:"text-primary"}),e._v(" "),e._m(2)]):e._e()])])]),e._v(" "),e._m(3)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),e._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),e._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})]),e._v(" "),r("div",{staticClass:"col-md-6 my-1"},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6  my-1 d-flex justify-content-center flex-column "},[r("div",{staticClass:"d-flex align-items-center "},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"switch skeletion-animation"})]),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 py-2"},[r("div",{staticClass:"px-0 pt-3"},[r("h2",{staticClass:" skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 px-0 pt-3 d-md-flex"},[r("ul",{staticClass:"nav nav-tabs d-inline-block",attrs:{id:"myTab",role:"tablist "}},[r("div",{staticClass:"tabs"}),e._v(" "),r("div",{staticClass:"tabs"}),e._v(" "),r("div",{staticClass:"tabs"})]),e._v(" "),r("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},[r("div",{staticClass:"tab-pane fade active show",attrs:{role:"tabpanel"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"input  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 my-1"},[r("div",{attrs:{role:"group "}},[r("label",{staticClass:"label skeletion-animation"}),e._v(" "),r("div",{staticClass:"textarea  skeletion-animation"}),e._v(" "),r("div",{staticClass:"subheading skeletion-animation"})])])])])])])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 d-flex justify-content-end px-4"},[r("div",{staticClass:"button-add skeletion-animation"}),e._v(" "),r("div",{staticClass:"button-continue skeletion-animation"})])])}],!1,null,null,null);t.default=component.exports}}]);