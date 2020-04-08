(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{280:function(t,s,e){},281:function(t,s,e){"use strict";e(54),e(187);var a={props:{baseUrl:String,currentPage:Number,totalPages:Number,maxVisibleButtons:{type:Number,required:!1,default:3}},methods:{isFirstPage:function(t,s){return 1==t},isLastPage:function(t,s){return t==s},isCurrentPage:function(t,s){return t==s},nextPage:function(t,s){return"".concat(this.baseUrl,"/").concat(t+1)},previousPage:function(t,s){return 2===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t-1)}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var t=[],s=this.startPage;s<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);s+=1)t.push({name:s,isDisabled:s===this.currentPage,link:1===s?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(s)});return t}}},n=e(8),r=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{attrs:{role:"navigation","aria-label":"pagination"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:t.isFirstPage(t.currentPage,t.totalPages)}},[e("g-link",{staticClass:"page-link",attrs:{to:t.previousPage(t.currentPage,t.totalPages),tabindex:"-1"}},[e("font-awesome",{attrs:{icon:["fas","arrow-left"]}})],1)],1),t._l(t.pages,(function(s){return e("li",{key:s.name,staticClass:"page-item",class:{active:t.isCurrentPage(t.currentPage,s.name)}},[e("g-link",{staticClass:"page-link",attrs:{to:s.link,"aria-label":s.name,"aria-current":s.name}},[t._v(t._s(s.name))])],1)})),e("li",{staticClass:"page-item ",class:{disabled:t.isLastPage(t.currentPage,t.totalPages)}},[e("g-link",{staticClass:"page-link",attrs:{to:t.nextPage(t.currentPage,t.totalPages),tabindex:"-1"}},[e("font-awesome",{attrs:{icon:["fas","arrow-right"]}})],1)],1)],2)])}),[],!1,null,null,null);s.a=r.exports},409:function(t,s,e){e(188),e(189),e(190),e(54),e(29),e(67),e(97);var a=e(418);function n(t){return"<b>"+a.encode(t)+"</b>"}function r(t){return"<i>"+a.encode(t)+"</i>"}function i(t){return"<s>"+a.encode(t)+"</s>"}function o(t){return"<s>"+a.encode(t)+"</s>"}function c(t,s){return'<a target="_blank" rel="noopener noreferrer" href="'.concat(s,'">').concat(a.encode(t),"</a>")}function l(t,s){return'<a href="'.concat("tg://resolve?domain="+s,'">').concat(a.encode(t),"</a>")}function u(t){return'<span style="opacity: 0.5;">'.concat(a.encode(t),"</span>")}function j(t,s,e){var n="";return s&&(n+="<pre>"),e&&(n+="<code>"),n+=a.encode(t),e&&(n+="</code>"),s&&(n+="</pre>"),n}function g(t){return t?a.encode(t):t}t.exports={formatMarkup:function(t,s){if(!s)return g(t);var e="",a=0,b=!0,d=!1,f=void 0;try{for(var h,p=s[Symbol.iterator]();!(b=(h=p.next()).done);b=!0){var m=h.value,A=t.substr(a,m.offset-a);A&&A.length&&(e+=g(A));var k=t.substr(m.offset,m.length);if(k&&k.length)switch(m.type){case"bold":e+=n(k);break;case"italic":e+=r(k);break;case"strike":e+=i(k);break;case"underline":e+=o(k);break;case"link":e+=c(k,m.data);break;case"hashtag":e+=u(k);break;case"handle":e+=l(k,m.data);break;case"pre":e+=j(k,!0,!1);break;case"code":e+=j(k,!1,!0);break;case"precode":e+=j(k,!0,!0);break;default:e+=g(k)}a=m.offset+m.length}}catch(t){d=!0,f=t}finally{try{b||null==p.return||p.return()}finally{if(d)throw f}}var y=t.substr(a,t.length-a);return y&&y.length&&(e+=g(y)),e}}},410:function(t,s,e){"use strict";e(68);var a=e(279),n=e.n(a),r=e(409),i=e(411),o={components:{},props:["job","size"],computed:{text:function(){var t=this.job.text,s=this.job.markup;return Object(r.formatMarkup)(t,s)},link:function(){return"/jobs/".concat(this.job.id)},date:function(){return n.a.locale("ru"),n()(this.job.date).format("LL")},tags:function(){return i.take(this.job.tags,this.size)}},methods:{getTagPath:function(t){return"/tags/".concat(t.name)}}},c=(e(412),e(8)),l=Object(c.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-col",{staticClass:"py-2",attrs:{md:t.size,lg:t.size,sm:t.size}},[e("b-card",{staticClass:"h-100",attrs:{"footer-class":"border-0 bg-white"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("span",{staticClass:"small"},[t._v(t._s(t.date))])]},proxy:!0}])},[e("h4",{staticClass:"card-title"},[e("g-link",{staticClass:"card-link",attrs:{to:t.link}},[t._v("\n        "+t._s(t.job.title)+"\n      ")])],1),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"card-text job-content",domProps:{innerHTML:t._s(t.text)}}),e("div",{staticClass:"card-text"},[e("div",{staticClass:"tags-items"},t._l(t.tags,(function(s){return e("g-link",{key:s.name,staticClass:"mr-2",attrs:{to:t.getTagPath(s)}},[t._v("\n         "+t._s(s.name)+"\n        ")])})),1)])])],1)}),[],!1,null,null,null);s.a=l.exports},412:function(t,s,e){"use strict";var a=e(280);e.n(a).a},413:function(t,s){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.42db587.a78298103ca445aa01f62436e2904f97.jpg",size:{width:2560,height:2367},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.82a2fbd.a78298103ca445aa01f62436e2904f97.jpg 480w","/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.cbab2cf.a78298103ca445aa01f62436e2904f97.jpg 1024w","/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.2665e34.a78298103ca445aa01f62436e2904f97.jpg 1920w","/assets/static/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.42db587.a78298103ca445aa01f62436e2904f97.jpg 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 2367' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-3cd64531eea9e543e9d695f71b889e10'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-3cd64531eea9e543e9d695f71b889e10)' width='2560' height='2367' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA7AEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABQYEBwECAwAI/8QAMRAAAgEDAwIEBQQBBQAAAAAAAQIDBAURABIhMUEGEyJRMmFxkaEHFBWBFjNiscHh/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUA/8QAIBEAAgIDAAMAAwAAAAAAAAAAAAECEQMhMQQSE2Ghsf/aAAwDAQACEQMRAD8Aq61RpJWICwA56nHbXe525aeBpgCD52zOflnTHb/CP7umQyAIXUupVhu47aFigl/x01LvviiLM8T56iTYMEdDyNM%2bqctMb8mo01%2bT1vgnp4nWSAzQMN25PiX05zj6a9arK81geuQbnSoSEIOd%2b/AGD9Tp0paf%2bOiMlxoJ0poUIeogbzY%2bU2rnuOcZ41nwbY6esq7TDCoAah3TvCdymZZBt3DoSMamlnaTZTHCm0hTg8uBWEiBSpAOR051LulBNNTySRKVZCXHbBGrJ8K26Oy32ee7W6GsjQeTnIKKcMoYg9z7Hp76HWaSro6pamW0LWUksslNGjruV325wB1yNwI%2bmlrNbuIbxUqfBYFslrLFT1gTIkTcQeo%2bWke6U7RSsCuNWzFHUWetktNbFGFmCzU%2b318ON2369fyNVf4knZ6%2bdNjRlHKkMuCMHHI7ad40pe7QryVH0TDVt8cT0kaJJRblRCgAPTggn68/jWIrpS1Xh6e2RCpWSpb0sYMgkyh%2bx/rQREBmqWBGCMDnrkaIWSQUywmV0TAGfUDj7adPHCO4rYnHklLUnosU%2bL7DVWerokrAlTIgQJJEwG4Yzzg98638C3G0U1vmpK6otyvKXkWVplDDLjAzwemT11X9cI568yU1RGA0RXKqQS2PYDse%2bmaxXGNvDMsESyThU3F0QYHqJ7nUc8SjHV7osjkcpba0WbZHoJKyb9rcI5YmkhKhpklGMNk5zu6gdz10RprbX26yK1MI/OgVbhSohysa5y2QeSSuRx%2bNJdxrpKVa6tNrhG/y38t3TjaGPZT79PcDShW%2bI2ntSyyep9yxhQ8g42DKnBHYdOh0iEHJ2hk36qmy7PEtFbr3T0dFeHFBVO4jpZqJi3mH4mVOD79%2b5GDr5u/UO0vZPFt1t81Sap4JADMRgvkA5I9%2bedNfh3x3V0l5ojCtKglITIQ5UEEdcnH9aX/1ilV/1GvLR7drGI%2bnpkxIddLx8bXTnZpK6XBXttK9ZWxwIxCnlj8u%2bjV3t1FQyzRU7SyNHGzt5jZwMAL%2bTn%2btB7RXCgmeYRGV8AAZ4AzzqXUS1NbU1dTIAivEJWCnPB4Uf86pmn0TBoYbTXQ0NxoZ5SscahldvkUi/wDdQbVVz0dorZIog0e09W28B8Hjv8Q0JRRGS7MDmNJVJPPBUnH513M7/wAbOqNhW3s25eTl9wH4B1O8a/hSsjX7G%2b%2b1s87NG071DJDHKyDCovfoP%2b86QauuaXz9yoGeXdgZyOMfbRGWrZaaWGnOxScN7yAn5/IDQB5MoVyTznHbprcOJRBz5r4beeyOrK2SOR/t1rUzyVM7yyszO2MlmJPAx1P01LttGtTPGJCcEjga28SIkV9rEiGEVwAMY7DtqpVwjd9OVvk2NL84mH5GpBqSVkhhG8tFGnB7KOfydCweNS6YYkBHGQda9qjE62YhnInp3diUjZeD2A51vLUM0e3JCEZI9yONRqf/AFYx2zrMp9ZHtnQ%2bqsYpOjvdKo1NQZWIXdggewxjUJeo1NtFRJS1LyxCPfsI9cauPswI1EldpJGdsbmOTgAD7DXlrQL3sIW6bZMr46HONRrlUfurhUTkY8xy2Nb0fxjUecYlbHvrF0KXD//Z' /%3e%3c/svg%3e"}},417:function(t,s,e){var a={"./af":282,"./af.js":282,"./ar":283,"./ar-dz":284,"./ar-dz.js":284,"./ar-kw":285,"./ar-kw.js":285,"./ar-ly":286,"./ar-ly.js":286,"./ar-ma":287,"./ar-ma.js":287,"./ar-sa":288,"./ar-sa.js":288,"./ar-tn":289,"./ar-tn.js":289,"./ar.js":283,"./az":290,"./az.js":290,"./be":291,"./be.js":291,"./bg":292,"./bg.js":292,"./bm":293,"./bm.js":293,"./bn":294,"./bn.js":294,"./bo":295,"./bo.js":295,"./br":296,"./br.js":296,"./bs":297,"./bs.js":297,"./ca":298,"./ca.js":298,"./cs":299,"./cs.js":299,"./cv":300,"./cv.js":300,"./cy":301,"./cy.js":301,"./da":302,"./da.js":302,"./de":303,"./de-at":304,"./de-at.js":304,"./de-ch":305,"./de-ch.js":305,"./de.js":303,"./dv":306,"./dv.js":306,"./el":307,"./el.js":307,"./en-SG":308,"./en-SG.js":308,"./en-au":309,"./en-au.js":309,"./en-ca":310,"./en-ca.js":310,"./en-gb":311,"./en-gb.js":311,"./en-ie":312,"./en-ie.js":312,"./en-il":313,"./en-il.js":313,"./en-nz":314,"./en-nz.js":314,"./eo":315,"./eo.js":315,"./es":316,"./es-do":317,"./es-do.js":317,"./es-us":318,"./es-us.js":318,"./es.js":316,"./et":319,"./et.js":319,"./eu":320,"./eu.js":320,"./fa":321,"./fa.js":321,"./fi":322,"./fi.js":322,"./fo":323,"./fo.js":323,"./fr":324,"./fr-ca":325,"./fr-ca.js":325,"./fr-ch":326,"./fr-ch.js":326,"./fr.js":324,"./fy":327,"./fy.js":327,"./ga":328,"./ga.js":328,"./gd":329,"./gd.js":329,"./gl":330,"./gl.js":330,"./gom-latn":331,"./gom-latn.js":331,"./gu":332,"./gu.js":332,"./he":333,"./he.js":333,"./hi":334,"./hi.js":334,"./hr":335,"./hr.js":335,"./hu":336,"./hu.js":336,"./hy-am":337,"./hy-am.js":337,"./id":338,"./id.js":338,"./is":339,"./is.js":339,"./it":340,"./it-ch":341,"./it-ch.js":341,"./it.js":340,"./ja":342,"./ja.js":342,"./jv":343,"./jv.js":343,"./ka":344,"./ka.js":344,"./kk":345,"./kk.js":345,"./km":346,"./km.js":346,"./kn":347,"./kn.js":347,"./ko":348,"./ko.js":348,"./ku":349,"./ku.js":349,"./ky":350,"./ky.js":350,"./lb":351,"./lb.js":351,"./lo":352,"./lo.js":352,"./lt":353,"./lt.js":353,"./lv":354,"./lv.js":354,"./me":355,"./me.js":355,"./mi":356,"./mi.js":356,"./mk":357,"./mk.js":357,"./ml":358,"./ml.js":358,"./mn":359,"./mn.js":359,"./mr":360,"./mr.js":360,"./ms":361,"./ms-my":362,"./ms-my.js":362,"./ms.js":361,"./mt":363,"./mt.js":363,"./my":364,"./my.js":364,"./nb":365,"./nb.js":365,"./ne":366,"./ne.js":366,"./nl":367,"./nl-be":368,"./nl-be.js":368,"./nl.js":367,"./nn":369,"./nn.js":369,"./pa-in":370,"./pa-in.js":370,"./pl":371,"./pl.js":371,"./pt":372,"./pt-br":373,"./pt-br.js":373,"./pt.js":372,"./ro":374,"./ro.js":374,"./ru":375,"./ru.js":375,"./sd":376,"./sd.js":376,"./se":377,"./se.js":377,"./si":378,"./si.js":378,"./sk":379,"./sk.js":379,"./sl":380,"./sl.js":380,"./sq":381,"./sq.js":381,"./sr":382,"./sr-cyrl":383,"./sr-cyrl.js":383,"./sr.js":382,"./ss":384,"./ss.js":384,"./sv":385,"./sv.js":385,"./sw":386,"./sw.js":386,"./ta":387,"./ta.js":387,"./te":388,"./te.js":388,"./tet":389,"./tet.js":389,"./tg":390,"./tg.js":390,"./th":391,"./th.js":391,"./tl-ph":392,"./tl-ph.js":392,"./tlh":393,"./tlh.js":393,"./tr":394,"./tr.js":394,"./tzl":395,"./tzl.js":395,"./tzm":396,"./tzm-latn":397,"./tzm-latn.js":397,"./tzm.js":396,"./ug-cn":398,"./ug-cn.js":398,"./uk":399,"./uk.js":399,"./ur":400,"./ur.js":400,"./uz":401,"./uz-latn":402,"./uz-latn.js":402,"./uz.js":401,"./vi":403,"./vi.js":403,"./x-pseudo":404,"./x-pseudo.js":404,"./yo":405,"./yo.js":405,"./zh-cn":406,"./zh-cn.js":406,"./zh-hk":407,"./zh-hk.js":407,"./zh-tw":408,"./zh-tw.js":408};function n(t){var s=r(t);return e(s)}function r(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=417},440:function(t,s){},453:function(t,s,e){"use strict";var a={props:["totalCount"]},n=e(8),r=Object(n.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"height-30 bg-dark text-white jarallax"},[s("g-image",{staticClass:"jarallax-img opacity-40",attrs:{src:e(413),alt:"Articles"}}),s("b-container",[s("b-row",{staticClass:"justify-content-center text-center"},[s("b-col",{staticClass:"pt-3 pb-3",attrs:{md:"10",lg:"8"}},[s("p",{staticClass:"display-4 mb-0"},[this._v("Articles")]),s("p",{staticClass:"lead"},[this._v("We have currently "+this._s(this.totalCount)+" articles in our list")])])],1)],1)],1)}),[],!1,null,null,null);s.a=r.exports},476:function(t,s,e){"use strict";var a=e(440),n=e.n(a);s.default=n.a},529:function(t,s,e){"use strict";e.r(s);var a=e(410),n=e(281),r=e(453),i={components:{JobCard:a.a,Pagination:n.a,SectionHeaderBanner:r.a},metaInfo:function(){return{title:"Browse all articles"}}},o=e(8),c=e(476),l=Object(o.a)(i,(function(){var t=this.$createElement,s=this._self._c||t;return s("DefaultLayout",[s("SectionHeaderBanner",{attrs:{totalCount:this.$page.records.totalCount}}),s("section",{staticClass:"pt-5 mb-5"},[s("b-container",{staticClass:"pb-5"},[s("div",[s("b-row",this._l(this.$page.records.edges,(function(t){return s("JobCard",{key:t.node.id,attrs:{size:12,job:t.node}})})),1)],1)]),this.$page.records.pageInfo.totalPages>1?s("Pagination",{attrs:{baseUrl:"/remote",currentPage:this.$page.records.pageInfo.currentPage,totalPages:this.$page.records.pageInfo.totalPages,maxVisibleButtons:5}}):this._e()],1)],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(l);s.default=l.exports}}]);