(window.webpackJsonp=window.webpackJsonp||[]).push([[251,44],{1407:function(t,r,e){"use strict";e.r(r);var n={props:["reviews"],data:function(){return{}}},l=e(71),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("section",{staticClass:"product-rating-review-sec pt-0 mt-0 "},[n("div",{staticClass:"container p-0"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},t._l(t.reviews,(function(r,l){return n("div",{key:l,staticClass:"rat-rev-wrap rounded bg-secondary-light p-4"},[n("div",{staticClass:"rev-product"},[r.product.media&&r.product.media[0]&&r.product.media[0].original_media_path?n("div",{staticClass:"img-wrap"},[n("img",{staticClass:"img-fluid",attrs:{src:"/backend"+r.product.media[0].original_media_path,alt:""}})]):n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:e(662),alt:""}})]),t._v(" "),n("div",{staticClass:"prod-body"},[n("h5",{staticClass:"prod-title"},[t._v(t._s(r.product.name)+" ")])])]),t._v(" "),n("div",{staticClass:"rev-product-detail"},[n("div",{staticClass:"star-rating mx-auto"},[n("GlobalRating",{attrs:{rating:r.rating}})],1),t._v(" "),n("p",[t._v(t._s(r.description)+" ")]),t._v(" "),r.images_url&&r.images_url.length>0?n("div",t._l(r.images_url,(function(t){return n("img",{key:t,staticClass:"mx-2",attrs:{height:"100px",width:"100px",src:"/backend"+t,alt:""}})})),0):t._e(),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"me-3 opacity-5"},[n("span",[t._v(t._s(r.created_at))])])])])])})),0)])])])}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{GlobalRating:e(664).default})},662:function(t,r,e){t.exports=e.p+"img/defult-product-img.e4aa9fc.png"},664:function(t,r,e){"use strict";e.r(r);var n={props:["rating"],data:function(){return{}}},l=e(71),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"stars",style:{"--rating":t.rating},attrs:{"aria-label":"Rating of this product is 2.3 out of 5."}},[e("span",[t._v("("+t._s(this.rating)+")")])])}),[],!1,null,null,null);r.default=component.exports}}]);