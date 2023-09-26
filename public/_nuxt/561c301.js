(window.webpackJsonp=window.webpackJsonp||[]).push([[408,14,32],{1120:function(t,e,n){"use strict";n.r(e);n(43),n(25),n(7),n(4),n(57),n(40),n(58);var r=n(21),l=n(0),o=(n(5),n(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={layout:"admin",middleware:["admin","permission"],meta:{permission:"customers.index",strategy:"read"},mixins:[n(665).a],data:function(){return{columns:[{label:this.$t("columns.name"),field:"name"},{label:this.$t("columns.email"),field:"email"},{label:this.$t("columns.gender"),field:"gender"},{label:this.$t("columns.phone"),field:"phone"},{label:this.$t("columns.status"),field:"is_active",sortable:!1},{label:this.$t("columns.created_at"),field:"created_at",sortable:!1},{label:this.$t("columns.actions"),field:"actions",sortable:!1}]}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$gates.hasPermission("customers.index")){e.next=3;break}return e.next=3,t.fetchCustomers(t.page).then();case 3:case"end":return e.stop()}}),e)})))()},methods:m(m({},Object(o.b)({fetchCustomers:"Customers/fetchCustomers",fetchActiveCustomers:"General/fetchActiveCustomers",deleteCustomers:"Customers/deleteCustomers",filterCustomers:"Customers/filterCustomers",updateCustomerStatus:"Customers/updateCustomerStatus",updateCustomerIsDefault:"Customers/updateCustomerIsDefault"})),{},{exportCustomers:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.filterData.export=t,n.next=3,e.$repositories.customers.export(e.filterData);case 3:case"end":return n.stop()}}),n)})))()},deleteCustomer:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.deleteCustomers({filterData:e.filterData,customer_id:t}).then((function(t){"fail"==t.state&&e.$toast.error(t.message),"success"==t.state&&(e.$toast.success(t.message),e.fetchActiveCustomers())})).catch((function(t){}));case 2:case"end":return n.stop()}}),n)})))()},filter:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.filterCustomers(t.filterData).then((function(e){"fail"==e.state&&t.$toast.error(e.message),e.state}));case 2:case"end":return e.stop()}}),e)})))()},changeDefaultCustomer:function(t,e){var n=this;return Object(l.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.updateCustomerIsDefault({filterData:n.filterData,customer_id:t}).then((function(t){"fail"==t.state&&(n.$toast.error(t.message),e.target.checked=!e.target.checked),"success"==t.state&&(n.$toast.success(t.message),n.fetchActiveCustomers())}));case 2:case"end":return r.stop()}}),r)})))()},changeCustomerStatus:function(t,e){var n=this;return Object(l.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.updateCustomerStatus({filterData:n.filterData,customer_id:t}).then((function(t){"fail"==t.state&&(n.$toast.error(t.message),e.target.checked=!e.target.checked),"success"==t.state&&(n.$toast.success(t.message),n.fetchActiveCustomers())})).catch((function(t){e.target.checked=!e.target.checked}));case 2:case"end":return r.stop()}}),r)})))()}}),computed:m({},Object(o.c)({allCustomers:"Customers/allCustomers"})),mounted:function(){},watch:{allCustomers:function(t,e){this.allCustomers&&null!=this.allCustomers&&null!=this.allCustomers.data&&(this.rows=this.allCustomers.data,this.totalRows=this.allCustomers.meta.total,this.filterData.page!=this.allCustomers.meta.current_page&&(this.filterData.page=this.allCustomers.meta.current_page),this.filterData.perPage!=this.allCustomers.meta.per_page&&(this.filterData.perPage=this.allCustomers.meta.per_page))}}},v=n(71),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content-header"},[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-sm-12 px-0"},[r("h2",{staticClass:"m-0 text-body bold"},[t._v(t._s(this.$t("sidebar.customer")))])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 px-0"},[r("ol",{staticClass:"breadcrumb float-sm-right text-body"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"#"}},[t._v(t._s(this.$t("sidebar.home")))])]),t._v(" "),r("li",{staticClass:"breadcrumb-item active"},[t._v("\n              "+t._s(this.$t("sidebar.customer"))+"\n            ")])]),t._v(" "),r("p",{staticClass:"text-body-secondary"},[t._v("\n            "+t._s(this.$t("form.customer.index_description"))+"\n          ")])])])])]),t._v(" "),r("section",{staticClass:"content"},[t.$fetchState.pending?r("div",[r("AdminTableLoader")],1):r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"card gutter-b border-0"},[r("div",{staticClass:"card-header p-0"},[r("div",{staticClass:"row table-filter-row g-0"},[r("div",{staticClass:"col-lg-8"},[r("div",{staticClass:"d-flex flex-column flex-md-row"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.filterData.column,expression:"filterData.column"}],staticClass:"form-select custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filterData,"column",e.target.multiple?n:n[0])}}},[r("option",{attrs:{value:"",disabled:""}},[t._v("\n                    "+t._s(t.$t("table.select_column"))+"\n                  ")]),t._v(" "),r("option",{attrs:{value:"name"}},[t._v(t._s(t.$t("columns.name")))])]),t._v(" "),r("div",{staticClass:"form-group position-relative col-md-8 col-lg-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filterData.search,expression:"filterData.search"}],staticClass:"form-control",attrs:{type:"search",placeholder:this.$t("dataTables.Search")},domProps:{value:t.filterData.search},on:{change:t.filter,keyup:t.removeIcon,input:function(e){e.target.composing||t.$set(t.filterData,"search",e.target.value)}}}),t._v(" "),r("div",{staticClass:"position-absolute search-input-custom",class:{"d-none":t.hideIcon}},[r("fa",{attrs:{icon:["fas","search"],"fixed-width":""}})],1)])])]),t._v(" "),r("div",{staticClass:"col-lg-4 table-actions px-0"},[r("div",{staticClass:"align-middle",attrs:{slot:"table-actions"},slot:"table-actions"},[r("div",{staticClass:"share"},[r("nav",[r("span",{on:{click:function(e){return t.exportCustomers("csv")}}},[r("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Export CSV File"},expression:"{ content: 'Export CSV File' }"}],attrs:{to:"#"}},[r("img",{attrs:{src:n(670),alt:"",height:"20px",width:"20px"}})])],1),t._v(" "),r("span",{on:{click:function(e){return t.exportCustomers("xlsx")}}},[r("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Export Excel File"},expression:"{ content: 'Export Excel File' }"}],attrs:{to:"#","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Tooltip on top"}},[r("img",{attrs:{src:n(671),alt:"",height:"20px",width:"20px"}})])],1),t._v(" "),r("span",{on:{click:function(e){return t.exportCustomers("pdf")}}},[r("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Export PDF File"},expression:"{ content: 'Export PDF File' }"}],attrs:{to:"#"}},[r("img",{attrs:{src:n(669),alt:"",height:"20px",width:"20px"}})])],1),t._v(" "),r("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Export File"},expression:"{ content: 'Export File' }"}],attrs:{to:"#"}},[r("fa",{attrs:{icon:["fas","arrow-down"],"fixed-width":""}})],1)],1)]),t._v(" "),r("nuxt-link",{directives:[{name:"permission",rawName:"v-permission",value:"customers.create",expression:"'customers.create'"}],attrs:{to:t.localePath("/admin/customers/create")}},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Add Customers"},expression:"{ content: 'Add Customers' }"}],staticClass:"btn add px-3 rounded-circle",attrs:{type:"button",name:"button"}},[r("fa",{attrs:{icon:["fas","plus"],"fixed-width":""}})],1)])],1)])])]),t._v(" "),r("div",{staticClass:"card-body mt-2 data-tables-div py-0 m-0 rounded-md"},[r("div",{staticClass:"col-md-12"},[t.$fetchState.pending?t._e():r("vue-good-table",{attrs:{mode:"remote",columns:t.columns,rows:t.rows,totalRows:t.totalRows,"line-numbers":!0,"pagination-options":{mode:"pages",enabled:!0,perPage:t.filterData.perPage,setCurrentPage:t.filterData.page,nextLabel:t.pagination.nextLabel,prevLabel:t.pagination.prevLabel,rowsPerPageLabel:t.pagination.rowsPerPageLabel,ofLabel:t.pagination.ofLabel,pageLabel:t.pagination.pageLabel,allLabel:t.pagination.allLabel},styleClass:"vgt-table striped","row-style-class":"m-5"},on:{"on-page-change":t.onPageChange,"on-sort-change":t.onSortChange,"on-per-page-change":t.onPerPageChange},scopedSlots:t._u([{key:"table-row",fn:function(e){return["is_active"==e.column.field?r("div",[r("div",{staticClass:"form-switch"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked"},domProps:{checked:1==e.row.is_active?"checked":""},on:{change:function(n){return t.changeCustomerStatus(e.row.id,n)}}})])]):"actions"==e.column.field?r("div",[r("nuxt-link",{directives:[{name:"permission",rawName:"v-permission",value:"customers.index",expression:"'customers.index'"}],attrs:{to:t.localePath("/admin/customers/view/"+e.row.id)}},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Show"},expression:"{ content: 'Show' }"}],staticClass:"btn btn-sm rounded-circle text-primary",attrs:{type:"button",name:"button"}},[r("fa",{attrs:{icon:["fas","eye"],"fixed-width":""}})],1)]),t._v(" "),r("nuxt-link",{directives:[{name:"permission",rawName:"v-permission",value:"customers.update",expression:"'customers.update'"},{name:"tooltip",rawName:"v-tooltip",value:{content:"Edit"},expression:"{ content: 'Edit' }"}],staticClass:"btn btn-sm rounded-circle text-success",attrs:{to:t.localePath("/admin/customers/edit/"+e.row.id)}},[r("fa",{attrs:{icon:["fas","edit"],"fixed-width":""}})],1),t._v(" "),r("nuxt-link",{directives:[{name:"permission",rawName:"v-permission",value:"addresses.index",expression:"'addresses.index'"},{name:"tooltip",rawName:"v-tooltip",value:{content:"Manage address"},expression:"{ content: 'Manage address' }"}],staticClass:"btn btn-sm rounded-circle text-success",attrs:{to:t.localePath("/admin/addresses/customer/"+e.row.id)}},[r("fa",{attrs:{icon:["fas","map"],"fixed-width":""}})],1),t._v(" "),r("button",{directives:[{name:"permission",rawName:"v-permission",value:"customers.delete",expression:"'customers.delete'"},{name:"tooltip",rawName:"v-tooltip",value:{content:"Delete"},expression:"{ content: 'Delete' }"}],staticClass:"btn btn-sm rounded-circle text-danger",attrs:{type:"button",name:"button","data-bs-toggle":"modal","data-bs-target":"#DeleteItem"+e.row.id}},[r("fa",{attrs:{icon:["fas","trash-alt"],"fixed-width":""}})],1),t._v(" "),r("AdminDeleteModal",{attrs:{modal_id:"DeleteItem"+e.row.id,delete_id:e.row.id},on:{deleteClicked:function(n){return t.deleteCustomer(e.row.id)}}})],1):r("span",[t._v("\n                  "+t._s(e.formattedRow[e.column.field])+"\n                ")])]}}],null,!1,1223616804)},[t._v(" "),r("div",{attrs:{slot:"emptystate"},slot:"emptystate"},[t._v("\n                "+t._s(t.$t("table.table_empty_message"))+"\n              ")])])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminTableLoader:n(668).default,AdminDeleteModal:n(672).default})},665:function(t,e,n){"use strict";n(7),n(4),n(209),n(33),n(258);e.a={data:function(){return{hideIcon:0,filterData:{id:"",search:"",column:"",page:1,perPage:10,sort:{field:"",type:""},export:"",date_from:"",date_to:"",status:"",vendor_id:""},pagination:{nextLabel:this.$t("pagination.nextLabel"),prevLabel:this.$t("pagination.prevLabel"),rowsPerPageLabel:this.$t("pagination.rowsPerPageLabel"),ofLabel:this.$t("pagination.ofLabel"),pageLabel:this.$t("pagination.pageLabel"),allLabel:this.$t("pagination.allLabel")},rows:[],totalRows:""}},methods:{onPageChange:function(t){this.filterData.page=t.currentPage,this.filter()},onPerPageChange:function(t){var e;(this.filterData.page=1,-1==t.currentPerPage)?this.filterData.perPage=null!==(e=this.totalRows)&&void 0!==e?e:0:this.filterData.perPage=t.currentPerPage;this.filter(),this.filterData.perPage=""},onSortChange:function(t){"none"==t[0].type?this.filterData.sort.type="":this.filterData.sort.type=t[0].type,this.filterData.sort.field=t[0].field,this.filter()},removeIcon:function(){""!=this.filterData.search?this.hideIcon=1:this.hideIcon=0}}}},668:function(t,e,n){"use strict";n.r(e);var r={props:["image"]},l=n(71),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid skeletion-effect"},[n("div",{staticClass:"card gutter-b border-0"},[n("div",{staticClass:"card-header p-0"},[n("div",{staticClass:"row table-filter-row g-0 mx-0 justify-content-end"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-6 col-lg-5 col-xlg-6 table-actions px-0"},[n("div",{staticClass:"align-middle",attrs:{slot:"table-actions"},slot:"table-actions"},[n("div",{staticClass:"circle-btn skeletion-animation"}),t._v(" "),n("div",{staticClass:"circle-btn skeletion-animation"})])])])]),t._v(" "),n("div",{staticClass:"card-body  mt-2 data-tables-div py-0 m-0 rounded-md"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"vgt-wrap"},[n("div",{staticClass:"vgt-inner-wrap"},[n("div",{staticClass:"vgt-fixed-header"}),t._v(" "),n("div",{staticClass:"vgt-responsive"},[n("table",{staticClass:"vgt-table striped",attrs:{id:"vgt-table"}},[n("thead",[n("tr",[n("th",{staticClass:"line-numbers",attrs:{scope:"col"}}),t._v(" "),t._m(1),t._v(" "),t.image?n("span",[t._m(2)]):t._e(),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),n("tbody",[n("tr",{staticClass:"m-5"},[t._m(7),t._v(" "),t._m(8),t._v(" "),t.image?n("span",[t._m(9)]):t._e(),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)]),t._v(" "),n("tr",{staticClass:"m-5"},[t._m(14),t._v(" "),t._m(15),t._v(" "),t.image?n("span",[t._m(16)]):t._e(),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20)]),t._v(" "),n("tr",{staticClass:"m-5"},[t._m(21),t._v(" "),t._m(22),t._v(" "),t.image?n("span",[t._m(23)]):t._e(),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27)]),t._v(" "),n("tr",{staticClass:"m-5"},[t._m(28),t._v(" "),t._m(29),t._v(" "),t.image?n("span",[t._m(30)]):t._e(),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34)]),t._v(" "),n("tr",{staticClass:"m-5"},[t._m(35),t._v(" "),t._m(36),t._v(" "),t.image?n("span",[t._m(37)]):t._e(),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41)])])])]),t._v(" "),t._m(42)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6 col-lg-7"},[e("div",{staticClass:"filter-bar skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{staticClass:"line-numbers"},[e("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"image skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"heading skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"switch skeletion-animation"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"vgt-left-align"},[e("div",{staticClass:"content skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"vgt-left-align"},[n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"}),t._v(" "),n("div",{staticClass:"icon skeletion-animation"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vgt-wrap__footer vgt-clearfix"},[n("div",{staticClass:"footer__row-count vgt-pull-left"},[n("div",{staticClass:"content skeletion-animation"})]),t._v(" "),n("div",{staticClass:"footer__navigation vgt-pull-right"},[n("div",{staticClass:"footer__navigation__page-info"},[n("div",{staticClass:"content skeletion-animation"})])])])}],!1,null,null,null);e.default=component.exports},669:function(t,e,n){t.exports=n.p+"img/pdf.e9547c3.png"},670:function(t,e,n){t.exports=n.p+"img/csv.6bd6379.png"},671:function(t,e,n){t.exports=n.p+"img/excel.f7ad538.png"},672:function(t,e,n){"use strict";n.r(e);var r={props:["modal_id","delete_id"],methods:{delete_item:function(){this.$emit("deleteClicked")}}},l=n(71),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:t.modal_id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body p-5 text-center"},[n("div",{staticClass:"warning-icon text-white"},[n("fa",{attrs:{icon:["fas","trash-alt"],"fixed-width":""}})],1),t._v(" "),n("h3",{staticClass:"py-5"},[t._v(t._s(t.$t("are_you_sure_you_want_to_delete")))]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{"data-bs-dismiss":"modal"},on:{click:t.delete_item}},[t._v("\r\n                                    "+t._s(t.$t("delete"))+"\r\n                            ")]),t._v(" "),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(t._s(t.$t("web.customer.wallet.close")))])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);