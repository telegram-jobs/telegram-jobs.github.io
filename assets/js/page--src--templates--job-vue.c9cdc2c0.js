(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{409:function(t,s,e){e(187),e(188),e(189),e(54),e(29),e(68),e(97);var n=e(417);function a(t){return"<b>"+n.encode(t)+"</b>"}function r(t){return"<i>"+n.encode(t)+"</i>"}function o(t){return"<s>"+n.encode(t)+"</s>"}function c(t){return"<s>"+n.encode(t)+"</s>"}function i(t,s){return'<a target="_blank" rel="noopener noreferrer" href="'.concat(s,'">').concat(n.encode(t),"</a>")}function l(t,s){return'<a href="'.concat("tg://resolve?domain="+s,'">').concat(n.encode(t),"</a>")}function j(t){return'<span style="opacity: 0.5;">'.concat(n.encode(t),"</span>")}function u(t,s,e){var a="";return s&&(a+="<pre>"),e&&(a+="<code>"),a+=n.encode(t),e&&(a+="</code>"),s&&(a+="</pre>"),a}function d(t){return t?n.encode(t):t}t.exports={formatMarkup:function(t,s){if(!s)return d(t);var e="",n=0,f=!0,m=!1,h=void 0;try{for(var g,b=s[Symbol.iterator]();!(f=(g=b.next()).done);f=!0){var p=g.value,k=t.substr(n,p.offset-n);k&&k.length&&(e+=d(k));var v=t.substr(p.offset,p.length);if(v&&v.length)switch(p.type){case"bold":e+=a(v);break;case"italic":e+=r(v);break;case"strike":e+=o(v);break;case"underline":e+=c(v);break;case"link":e+=i(v,p.data);break;case"hashtag":e+=j(v);break;case"handle":e+=l(v,p.data);break;case"pre":e+=u(v,!0,!1);break;case"code":e+=u(v,!1,!0);break;case"precode":e+=u(v,!0,!0);break;default:e+=d(v)}n=p.offset+p.length}}catch(t){m=!0,h=t}finally{try{f||null==b.return||b.return()}finally{if(m)throw h}}var y=t.substr(n,t.length-n);return y&&y.length&&(e+=d(y)),e}}},416:function(t,s,e){var n={"./af":282,"./af.js":282,"./ar":283,"./ar-dz":284,"./ar-dz.js":284,"./ar-kw":285,"./ar-kw.js":285,"./ar-ly":286,"./ar-ly.js":286,"./ar-ma":287,"./ar-ma.js":287,"./ar-sa":288,"./ar-sa.js":288,"./ar-tn":289,"./ar-tn.js":289,"./ar.js":283,"./az":290,"./az.js":290,"./be":291,"./be.js":291,"./bg":292,"./bg.js":292,"./bm":293,"./bm.js":293,"./bn":294,"./bn.js":294,"./bo":295,"./bo.js":295,"./br":296,"./br.js":296,"./bs":297,"./bs.js":297,"./ca":298,"./ca.js":298,"./cs":299,"./cs.js":299,"./cv":300,"./cv.js":300,"./cy":301,"./cy.js":301,"./da":302,"./da.js":302,"./de":303,"./de-at":304,"./de-at.js":304,"./de-ch":305,"./de-ch.js":305,"./de.js":303,"./dv":306,"./dv.js":306,"./el":307,"./el.js":307,"./en-SG":308,"./en-SG.js":308,"./en-au":309,"./en-au.js":309,"./en-ca":310,"./en-ca.js":310,"./en-gb":311,"./en-gb.js":311,"./en-ie":312,"./en-ie.js":312,"./en-il":313,"./en-il.js":313,"./en-nz":314,"./en-nz.js":314,"./eo":315,"./eo.js":315,"./es":316,"./es-do":317,"./es-do.js":317,"./es-us":318,"./es-us.js":318,"./es.js":316,"./et":319,"./et.js":319,"./eu":320,"./eu.js":320,"./fa":321,"./fa.js":321,"./fi":322,"./fi.js":322,"./fo":323,"./fo.js":323,"./fr":324,"./fr-ca":325,"./fr-ca.js":325,"./fr-ch":326,"./fr-ch.js":326,"./fr.js":324,"./fy":327,"./fy.js":327,"./ga":328,"./ga.js":328,"./gd":329,"./gd.js":329,"./gl":330,"./gl.js":330,"./gom-latn":331,"./gom-latn.js":331,"./gu":332,"./gu.js":332,"./he":333,"./he.js":333,"./hi":334,"./hi.js":334,"./hr":335,"./hr.js":335,"./hu":336,"./hu.js":336,"./hy-am":337,"./hy-am.js":337,"./id":338,"./id.js":338,"./is":339,"./is.js":339,"./it":340,"./it-ch":341,"./it-ch.js":341,"./it.js":340,"./ja":342,"./ja.js":342,"./jv":343,"./jv.js":343,"./ka":344,"./ka.js":344,"./kk":345,"./kk.js":345,"./km":346,"./km.js":346,"./kn":347,"./kn.js":347,"./ko":348,"./ko.js":348,"./ku":349,"./ku.js":349,"./ky":350,"./ky.js":350,"./lb":351,"./lb.js":351,"./lo":352,"./lo.js":352,"./lt":353,"./lt.js":353,"./lv":354,"./lv.js":354,"./me":355,"./me.js":355,"./mi":356,"./mi.js":356,"./mk":357,"./mk.js":357,"./ml":358,"./ml.js":358,"./mn":359,"./mn.js":359,"./mr":360,"./mr.js":360,"./ms":361,"./ms-my":362,"./ms-my.js":362,"./ms.js":361,"./mt":363,"./mt.js":363,"./my":364,"./my.js":364,"./nb":365,"./nb.js":365,"./ne":366,"./ne.js":366,"./nl":367,"./nl-be":368,"./nl-be.js":368,"./nl.js":367,"./nn":369,"./nn.js":369,"./pa-in":370,"./pa-in.js":370,"./pl":371,"./pl.js":371,"./pt":372,"./pt-br":373,"./pt-br.js":373,"./pt.js":372,"./ro":374,"./ro.js":374,"./ru":375,"./ru.js":375,"./sd":376,"./sd.js":376,"./se":377,"./se.js":377,"./si":378,"./si.js":378,"./sk":379,"./sk.js":379,"./sl":380,"./sl.js":380,"./sq":381,"./sq.js":381,"./sr":382,"./sr-cyrl":383,"./sr-cyrl.js":383,"./sr.js":382,"./ss":384,"./ss.js":384,"./sv":385,"./sv.js":385,"./sw":386,"./sw.js":386,"./ta":387,"./ta.js":387,"./te":388,"./te.js":388,"./tet":389,"./tet.js":389,"./tg":390,"./tg.js":390,"./th":391,"./th.js":391,"./tl-ph":392,"./tl-ph.js":392,"./tlh":393,"./tlh.js":393,"./tr":394,"./tr.js":394,"./tzl":395,"./tzl.js":395,"./tzm":396,"./tzm-latn":397,"./tzm-latn.js":397,"./tzm.js":396,"./ug-cn":398,"./ug-cn.js":398,"./uk":399,"./uk.js":399,"./ur":400,"./ur.js":400,"./uz":401,"./uz-latn":402,"./uz-latn.js":402,"./uz.js":401,"./vi":403,"./vi.js":403,"./x-pseudo":404,"./x-pseudo.js":404,"./yo":405,"./yo.js":405,"./zh-cn":406,"./zh-cn.js":406,"./zh-hk":407,"./zh-hk.js":407,"./zh-tw":408,"./zh-tw.js":408};function a(t){var s=r(t);return e(s)}function r(t){if(!e.o(n,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id=416},427:function(t,s,e){},428:function(t,s,e){},429:function(t,s){},446:function(t,s,e){"use strict";var n=e(427);e.n(n).a},447:function(t,s,e){"use strict";var n=e(428);e.n(n).a},448:function(t,s,e){"use strict";var n=e(429),a=e.n(n);s.default=a.a},479:function(t,s,e){"use strict";e.r(s);var n={components:{},props:["record"]},a=e(8),r=Object(a.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"height-30 jarallax bg-gray-100 border-bottom"},[s("div",{staticClass:"jarallax-img bg-pattern opacity-10"}),s("b-container",{staticClass:"pt-5 pb-5"},[s("h1",{staticClass:"display-4"},[this._v(this._s(this.record.title))])])],1)}),[],!1,null,null,null).exports,o=(e(54),e(67),e(279)),c=e.n(o),i={components:{},props:["record"],computed:{date:function(){return c.a.locale("ru"),c()(this.record.date).format("LL")}},methods:{getTagPath:function(t){return"/tags/".concat(t.name)},getCityPath:function(t){return"/location/".concat(t.country.code,"/").concat(t.code)}}},l=(e(446),Object(a.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sidebar position-sticky"},[t.record.tags.length>0?e("div",{staticClass:"tags d-lg-block d-none"},[e("h6",[t._v("Теги")]),e("div",{staticClass:"tags-items"},t._l(t.record.tags,(function(s){return e("g-link",{key:s.name,staticClass:"mr-2",attrs:{to:t.getTagPath(s)}},[t._v("\n          "+t._s(s.name)+"\n        ")])})),1)]):t._e(),t.record.allowsRemote||t.record.cities.length>0?e("div",{staticClass:"tags d-lg-block d-none"},[e("h6",[t._v("Город")]),t.record.cities.length>0?e("div",t._l(t.record.cities,(function(s){return e("g-link",{key:s.code,staticClass:"mr-2",attrs:{to:t.getCityPath(s)}},[e("font-awesome",{attrs:{icon:["fas","map-marker-alt"]}}),t._v(" "+t._s(s.ruName?s.ruName:s.enName)+"\n        ")],1)})),1):t._e(),t.record.allowsRemote?e("div",[e("g-link",{staticClass:"mr-2",attrs:{to:"/remote"}},[e("font-awesome",{attrs:{icon:["fas","globe"]}}),t._v(" Удаленная работа\n        ")],1)],1):t._e()]):t._e(),e("div",{staticClass:"tags d-lg-block d-none"},[e("h6",[t._v("Дата публикации")]),e("div",{staticClass:"tags-items"},[e("span",[t._v(t._s(t.date))])])])])}),[],!1,null,null,null).exports),j=e(409),u=e(414),d={components:{SectionHeader:r,JobSidebar:l},methods:{recordLink:function(t){return"/articles/".concat(t.slug)}},computed:{relatedRecords:function(){return Object(u.sampleSize)(this.$page.related.edges,2)},content:function(){var t=this.$page.entry.text,s=this.$page.entry.markup;return Object(j.formatMarkup)(t,s)}},metaInfo:function(){return{title:this.$page.entry.title}}},f=(e(447),e(448)),m=Object(a.a)(d,(function(){var t=this.$createElement,s=this._self._c||t;return s("DefaultLayout",[s("SectionHeader",{attrs:{record:this.$page.entry}}),s("b-container",{staticClass:"mt-5 mb-5"},[s("b-row",[s("b-col",{staticClass:"article-content",attrs:{order:"2","order-lg":"1",cols:"12",lg:"8"}},[s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:this._s(this.content)}}),s("div",[s("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:this.$page.entry.link}},[s("font-awesome",{attrs:{icon:["fas","paper-plane"]}}),this._v(" Открыть в Telegram\n          ")],1)])]),s("b-col",{attrs:{lg:"3",order:"1","order-lg":"2","offset-lg":"1"}},[s("JobSidebar",{attrs:{record:this.$page.entry}})],1)],1)],1)],1)}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(m);s.default=m.exports}}]);