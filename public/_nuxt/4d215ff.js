(window.webpackJsonp=window.webpackJsonp||[]).push([[545,35,108,244,291],{1352:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),l=r(0),o=(r(5),r(129));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={auth:!1,data:function(){return{detail:"",currentlyActiveTemplate:""}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$webService.postDetail(t.$route.params.slug).then(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.detail=r.data;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({allSettings:"allDefaultSettings"}))},d=m,v=r(71),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?n("section",{staticClass:"blog-page mt-0"},[n("WebsiteGlobalComponentsBreadCrumb",{attrs:{page:"blog_detail"}}),t._v(" "),n("WebsiteSkeleton"+t.currentlyActiveTemplate+"BlogDetailPage",{tag:"Component"})],1):"Template1"==t.currentlyActiveTemplate?n("section",{staticClass:"blog-page mt-0"},[n("WebsiteGlobalComponentsBreadCrumb",{attrs:{page:"blog_detail",post:t.detail.name}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("article",[n("header",{staticClass:"mt-5 mb-4"},[n("h1",{staticClass:"fw-bolder mb-1"},[t._v(t._s(this.detail.name))]),t._v(" "),n("div",{staticClass:"text-muted fst-italic mb-2"},[t._v("Posted on "+t._s(this.detail.created_at)+" by "+t._s(this.detail.user))]),t._v(" "),n("a",{staticClass:"badge bg-primary text-decoration-none link-light",attrs:{href:"#!"}},[t._v(t._s(this.detail.news_category.name))])]),t._v(" "),n("figure",{staticClass:"mb-4"},[this.detail.image?n("img",{staticClass:"img-fluid rounded",attrs:{src:"/backend"+this.detail.image.thumbnails.large.thumbnail,alt:"..."}}):n("img",{staticClass:"card-img-top rounded-0",attrs:{src:r(715),alt:"Card image cap"}})]),t._v(" "),n("section",{domProps:{innerHTML:t._s(this.detail.description_web)}})])])])]),t._v(" "),n("WebsiteTemplate1NewsLetterSection")],1):"Template2"==t.currentlyActiveTemplate?n("section",{staticClass:"blog-page mt-0"},[n("WebsiteGlobalComponentsBreadCrumb",{attrs:{page:"blog_detail",post:t.detail.name}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row mt-100 "},[n("div",{staticClass:"col-lg-8 blog-page"},[n("article",[n("header",{staticClass:"mb-4"},[n("a",{staticClass:"badge bg-primary text-decoration-none link-light mb-30",attrs:{href:"#!"}},[t._v(t._s(this.detail.news_category.name))]),t._v(" "),n("h1",{staticClass:"fw-bolder mb-30"},[t._v(t._s(this.detail.name))]),t._v(" "),n("div",{staticClass:"text-muted fs-5 mb-0"},[t._v(t._s(this.detail.created_at)+" - "+t._s(this.detail.user))])]),t._v(" "),n("figure",{staticClass:"mb-4"},[this.detail.image?n("img",{staticClass:"img-fluid rounded",attrs:{src:"/backend"+this.detail.image.thumbnails.large.thumbnail,alt:"..."}}):n("img",{staticClass:"card-img-top rounded-0",attrs:{src:r(715),alt:"Card image cap"}})]),t._v(" "),n("section",{domProps:{innerHTML:t._s(this.detail.description_web)}})])]),t._v(" "),n("div",{staticClass:"col-lg-4 ps-md-4 pt-4"},[n("div",{staticClass:"bg-secondary p-4 position-sticky top-0"},[n("div",{staticClass:"mb-50 recent-pro"},[n("h3",{staticClass:"text-body mb-30"},[t._v(t._s(t.$t("latest_posts")))]),t._v(" "),t.detail.latest_posts?n("ul",{staticClass:"p-0 m-0"},t._l(t.detail.latest_posts,(function(e,r){return n("li",{key:r},[n("div",{staticClass:"col-lg-5 col-md-4"},[n("nuxt-link",{attrs:{to:"/blog/"+e.slug}},[n("img",{staticClass:"card-img-top rounded-0",attrs:{src:"/backend"+e.image.thumbnails.large.thumbnail,alt:"Card image cap"}})])],1),t._v(" "),n("div",{staticClass:"col-lg-7 col-md-8"},[n("div",{staticClass:"px-md-3 py-3 py-md-0"},[n("h5",{staticClass:"mb-30"},[n("nuxt-link",{attrs:{to:"/blog/"+e.slug}},[t._v(t._s(e.name))])],1),t._v(" "),n("span",[t._v(t._s(e.created_at))])])])])})),0):t._e()]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"social-icons mb-50 mt-50"},[n("h3",{staticClass:"text-body mb-30"},[t._v(t._s(t.$t("connect_and_follow")))]),t._v(" "),n("ul",{staticClass:"d-flex m-0 p-0"},[n("li",[n("a",{staticClass:"facebook text-white",attrs:{href:"#"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"20",height:"20",x:"0",y:"0",viewBox:"0 0 155.139 155.139","xml:space":"preserve"}},[n("g",[n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{id:"f_1_",d:"M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184   c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452   v20.341H37.29v27.585h23.814v70.761H89.584z",fill:"currentColor","data-original":"currentColor"}})]),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}})])])])]),t._v(" "),n("li",{staticClass:"px-3"},[n("a",{staticClass:"twitter text-white",attrs:{href:"#"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"20",height:"20",x:"0",y:"0",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("g",[n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}},[n("g",[n("path",{attrs:{d:"M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z",fill:"currentColor","data-original":"currentColor"}})])]),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}}),t._v(" "),n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg"}})])])])]),t._v(" "),n("li",[n("a",{staticClass:"linkedin text-white",attrs:{href:"#"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"20",height:"20",x:"0",y:"0",viewBox:"0 0 100 100","xml:space":"preserve"}},[n("g",[n("g",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"_x31_0.Linkedin"}},[n("path",{attrs:{d:"m90 90v-29.3c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3h-15.9v53.4h16.6v-26.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26h16.6z",fill:"currentColor","data-original":"currentColor"}}),t._v(" "),n("path",{attrs:{d:"m11.3 36.6h16.6v53.4h-16.6z",fill:"currentColor","data-original":"currentColor"}}),t._v(" "),n("path",{attrs:{d:"m19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z",fill:"currentColor","data-original":"currentColor"}})])])])])])])]),t._v(" "),n("hr"),t._v(" "),n("WebsiteTemplate2NewsLetterSection",{staticClass:"d-block mt-0"})],1)])])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WebsiteGlobalComponentsBreadCrumb:r(687).default,WebsiteTemplate1NewsLetterSection:r(691).default,WebsiteTemplate2NewsLetterSection:r(927).default})},677:function(t,e,r){var content=r(690);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(131).default)("e62035f2",content,!0,{sourceMap:!1})},687:function(t,e,r){"use strict";r.r(e);r(43),r(25),r(7),r(4),r(57),r(40),r(58);var n=r(21),l=r(129);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={props:["page","post","product"],data:function(){return{currentlyActiveTemplate:""}},created:function(){this.currentlyActiveTemplate=this.allSettings.general_settings.currently_active_theme},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)({allSettings:"allDefaultSettings"}))},m=c,d=r(71),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"site-breadcrumb bg-secondary py-3 mt-0 mb-0"},["Template1"==t.currentlyActiveTemplate?r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/"}},[t._v("\n                "+t._s(this.$t("home"))+"\n              ")])],1),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/blog"}},[t._v("\n                "+t._s(this.$t("blog"))+"\n              ")])],1):t._e(),t._v(" "),"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/shop"}},[t._v("\n                "+t._s(this.$t("products"))+"\n              ")])],1):t._e(),t._v(" "),"order_details"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-medium text-decoration-none",attrs:{to:"/customer/orders"}},[t._v("\n                "+t._s(this.$t("my_orders"))+"\n              ")])],1):t._e(),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.post))]):"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.product))]):"order_details"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("order_details")))]):r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.$t(this.page)))])])])])])]):t._e(),t._v(" "),"Template2"==t.currentlyActiveTemplate?r("div",{staticClass:"container"},[r("div",{staticClass:"row mx-0"},[r("div",{staticClass:"col px-0"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/"}},[t._v("\n                "+t._s(this.$t("home"))+"\n              ")])],1),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/blog"}},[t._v("\n                "+t._s(this.$t("blog"))+"\n              ")])],1):t._e(),t._v(" "),"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/shop"}},[t._v("\n                "+t._s(this.$t("products"))+"\n              ")])],1):t._e(),t._v(" "),"order_details"==t.page?r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{staticClass:"text-gray text-decoration-none",attrs:{to:"/customer/orders"}},[t._v("\n                "+t._s(this.$t("my_orders"))+"\n              ")])],1):t._e(),t._v(" "),"blog_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.post))]):"product_detail"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.product))]):"order_details"==t.page?r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$t("order_details")))]):r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(this.$t(this.page)))])])])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},689:function(t,e,r){"use strict";r(677)},690:function(t,e,r){var n=r(130)((function(i){return i[1]}));n.push([t.i,".cursor-pointer{cursor:pointer}",""]),n.locals={},t.exports=n},691:function(t,e,r){"use strict";r.r(e);var n=r(0),l=(r(5),{data:function(){return{formData:{email:""}}},methods:{add_email:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$webService.addNewsletterEmail({email:t.formData.email}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==r.success?t.$toast.error(t.$t("subscription_email_already_exists_message")):(t.formData.email="",t.$toast.success(t.$t("subscription_email_added_message")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.response.data.errors&&(t.error=r.response.data.errors,t.error.email&&t.$toast.error(t.error.email[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()}}}),o=l,c=(r(689),r(71)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"news-letter m-0 news-temp2"},[r("div",{staticClass:"news-letter-mail py-5 mt-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 pe-5"},[r("h2",{staticClass:"text-uppercase"},[t._v(t._s(this.$t("web.home.news.newsletter.heading")))]),t._v(" "),r("p",[t._v(t._s(this.$t("web.home.news.newsletter.description")))])]),t._v(" "),r("div",{staticClass:"col-sm-6 my-auto"},[r("div",{staticClass:"input-group mail shadow-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control border rounded px-3",attrs:{placeholder:t.$t("enter_email"),type:"email"},domProps:{value:t.formData.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add_email()},input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),r("span",{staticClass:"\n                input-group-append\n                position-absolute\n                top-50\n                end-0\n                translate-middle-y\n                me-3\n                cursor-pointer\n              ",on:{click:function(e){return t.add_email()}}},[r("fa",{attrs:{icon:["fa","paper-plane"]}})],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},715:function(t,e,r){t.exports=r.p+"img/blog-img1.8e60667.jpg"},773:function(t,e,r){var content=r(829);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(131).default)("51bd0370",content,!0,{sourceMap:!1})},793:function(t,e,r){"use strict";r.r(e);var n={name:"VButton",props:{type:{type:String,default:"primary"},nativeType:{type:String,default:"submit"},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},large:{type:Boolean,default:!1}}},l=r(71),component=Object(l.a)(n,(function(){var t,e=this,r=e.$createElement;return(e._self._c||r)("button",{staticClass:"btn",class:(t={},t["btn-"+e.type]=!0,t["btn-block"]=e.block,t["btn-lg"]=e.large,t["btn-loading"]=e.loading,t),attrs:{type:e.nativeType,disabled:e.loading}},[e._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},828:function(t,e,r){"use strict";r(773)},829:function(t,e,r){var n=r(130)((function(i){return i[1]}));n.push([t.i,".cursor-pointer{cursor:pointer}",""]),n.locals={},t.exports=n},927:function(t,e,r){"use strict";r.r(e);var n=r(0),l=(r(5),{components:{Button:r(793).default},data:function(){return{formData:{email:""}}},methods:{add_email:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$webService.addNewsletterEmail({email:t.formData.email}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==r.success?t.$toast.error(t.$t("subscription_email_already_exists_message")):t.$toast.success(t.$t("subscription_email_added_message"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.response.data.errors&&(t.error=r.response.data.errors,t.error.email&&t.$toast.error(t.error.email[0]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})))()}}}),o=l,c=(r(828),r(71)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"news-letter mb-0 d-none"},[r("div",{staticClass:"news-letter-mail py-5"},[r("div",{staticClass:"col-sm-12 pb-0 mb-30 d-flex align-items-center justify-content-md-start justify-content-between flex-column"},[r("h2",{staticClass:"text-uppercase mb-4 w-100 text-body"},[t._v(t._s(t.$t("newsletter.heading")))]),t._v(" "),r("p",{staticClass:"text-body w-100"},[t._v(t._s(t.$t("newsletter.subheading")))])]),t._v(" "),r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"input-group mail shadow-none flex-column h-auto flex-nowrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control border rounded px-3 w-100",attrs:{placeholder:"Enter your email here",type:"email"},domProps:{value:t.formData.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add_email()},input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}}),t._v(" "),r("span",{staticClass:"\n                input-group-append\n                position-absolute\n                top-50\n                end-0\n                translate-middle-y\n                me-3\n                cursor-pointer\n              ",on:{click:function(e){return t.add_email()}}}),t._v(" "),r("button",{staticClass:"btn btn-primary py-2 px-3 rounded mt-4",attrs:{type:"button"},on:{click:function(e){return t.add_email()}}},[t._v(t._s(t.$t("newsletter.subscribe_button")))])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);