(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0/ZQ":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),i=u("0iYF"),r=u("ZZ/e"),o=function(){function l(l,n,u){this.service=l,this.router=n,this.alertController=u,this.brands=[]}return l.prototype.ngOnInit=function(){var l=this;this.service.getBrands().subscribe(function(n){l.brands=n,l.filter_brands=l.brands}),this.service.getCategoriesBrand().subscribe(function(n){l.categories=n})},l.prototype.filterCategories=function(){var l=this;this.filter_brands=this.brands,this.filter_categories.length>0&&(this.filter_brands=this.brands.filter(function(n){return l.filter_categories.indexOf(n.brand_category_id.id)>-1}))},l.prototype.filterName=function(){var l=this;this.filter_brands=this.brands,this.filter_name.length>0&&(this.filter_brands=this.brands.filter(function(n){var u=l.filter_name.toLowerCase();return u.indexOf(n.name.toLowerCase())>-1||u.indexOf(n.description?n.description.toLowerCase():null)>-1||n.products.filter(function(l){return l.name.toLowerCase().indexOf(u)>-1||!!l.reference&&l.reference.toLowerCase().indexOf(u)>-1||!!l.description&&l.description.toLowerCase().indexOf(u)>-1}).length>0}))},l.prototype.alertLogout=function(){return e.b(this,void 0,void 0,function(){var l=this;return e.e(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Cerrar sesi\xf3n",message:"\xbfDesea cerrar la sesi\xf3n?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary"},{text:"Aceptar",handler:function(){l.logout()}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.prototype.logout=function(){var l=this;this.service.logOut().subscribe(function(n){sessionStorage.removeItem("session_id"),l.router.navigate(["/login"])})},l}(),s=function(){return function(){}}(),b=u("pMnS"),a=u("oBZk"),c=u("ZYCi"),g=u("Ip0R"),d=u("gIcY"),f=u("fDe+"),h=u("jQpT"),p=u("92vz"),m=t.rb({encapsulation:0,styles:[["ion-thumbnail[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;overflow:hidden;margin:.5rem 1rem .5rem 0}ion-title[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:1rem}.icon-svg[_ngcontent-%COMP%]{height:22px}.filters[_ngcontent-%COMP%]{margin-bottom:1rem}.not-found-records[_ngcontent-%COMP%]{text-align:center;color:#bdbdbd}.sublist[_ngcontent-%COMP%]{--ion-background-color:#f9f9f9}.sublist[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;overflow:hidden;margin:.5rem 1rem}"]],data:{}});function C(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,a.R,a.r)),t.sb(1,49152,null,0,r.mb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Nb(2,0,[""," "]))],function(l,n){l(n,1,0,n.context.$implicit.id)},function(l,n){l(n,2,0,n.context.$implicit.name)})}function k(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"div",[["class","not-found-records"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["No hay registros disponibles"]))],null,null)}function v(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,12,"ion-item",[["class","orange-arrow sublist"],["lines","full"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,2).onClick()&&e),"click"===n&&(e=!1!==t.Fb(l,3).onClick(u)&&e),e},a.N,a.m)),t.sb(1,49152,null,0,r.G,[t.h,t.k,t.z],{lines:[0,"lines"]},null),t.sb(2,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(3,737280,null,0,r.Ib,[g.h,r.Fb,t.k,c.m,[2,c.n]],null,null),(l()(),t.tb(4,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,a.Z,a.y)),t.sb(5,49152,null,0,r.xb,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(7,0,null,0,5,"ion-label",[],null,null,null,a.O,a.n)),t.sb(8,49152,null,0,r.M,[t.h,t.k,t.z],null,null),(l()(),t.tb(9,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Nb(10,null,["",""])),(l()(),t.tb(11,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Nb(12,null,["REF: ",""]))],function(l,n){l(n,1,0,"full"),l(n,2,0,t.xb(1,"/product/",n.context.$implicit.id,"")),l(n,3,0)},function(l,n){l(n,6,0,n.context.$implicit.image),l(n,10,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.reference)})}function F(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,v)),t.sb(2,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ib(0,null,null,0))],function(l,n){l(n,2,0,n.parent.context.$implicit.products)},null)}function _(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,16,null,null,null,null,null,null,null)),(l()(),t.tb(1,0,null,null,13,"ion-item",[["class","orange-arrow"],["lines","full"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,3).onClick()&&e),"click"===n&&(e=!1!==t.Fb(l,4).onClick(u)&&e),e},a.N,a.m)),t.sb(2,49152,null,0,r.G,[t.h,t.k,t.z],{lines:[0,"lines"]},null),t.sb(3,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(4,737280,null,0,r.Ib,[g.h,r.Fb,t.k,c.m,[2,c.n]],null,null),(l()(),t.tb(5,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,a.Z,a.y)),t.sb(6,49152,null,0,r.xb,[t.h,t.k,t.z],null,null),(l()(),t.tb(7,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(8,0,null,0,5,"ion-label",[],null,null,null,a.O,a.n)),t.sb(9,49152,null,0,r.M,[t.h,t.k,t.z],null,null),(l()(),t.tb(10,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Nb(11,null,["",""])),(l()(),t.tb(12,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Nb(13,null,["",""])),(l()(),t.tb(14,0,null,0,0,"img",[["class","icon-svg"],["src","./assets/images/arrow_item.svg"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,F)),t.sb(16,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(0,null,null,0))],function(l,n){var u=n.component;l(n,2,0,"full"),l(n,3,0,t.xb(1,"/brand/",n.context.$implicit.id,"")),l(n,4,0),l(n,16,0,u.filter_name)},function(l,n){l(n,7,0,n.context.$implicit.logo),l(n,11,0,n.context.$implicit.name),l(n,13,0,n.context.$implicit.brand_category_id.name)})}function x(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,13,"ion-header",[],null,null,null,a.K,a.j)),t.sb(1,49152,null,0,r.A,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,a.bb,a.A)),t.sb(3,49152,null,0,r.Ab,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,2,"ion-title",[],null,null,null,a.ab,a.z)),t.sb(5,49152,null,0,r.yb,[t.h,t.k,t.z],null,null),(l()(),t.Nb(-1,0,["BIENVENIDO"])),(l()(),t.tb(7,0,null,0,6,"ion-buttons",[["routerLink","/brands"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,9).onClick()&&e),"click"===n&&(e=!1!==t.Fb(l,10).onClick(u)&&e),e},a.E,a.d)),t.sb(8,49152,null,0,r.k,[t.h,t.k,t.z],null,null),t.sb(9,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.sb(10,737280,null,0,r.Ib,[g.h,r.Fb,t.k,c.m,[2,c.n]],null,null),(l()(),t.tb(11,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.alertLogout()&&t),t},a.D,a.c)),t.sb(12,49152,null,0,r.j,[t.h,t.k,t.z],null,null),(l()(),t.tb(13,0,null,0,0,"img",[["class","icon-svg"],["src","./assets/images/user_logout.svg"]],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,35,"ion-content",[],null,null,null,a.H,a.g)),t.sb(15,49152,null,0,r.t,[t.h,t.k,t.z],null,null),(l()(),t.tb(16,0,null,0,27,"div",[["class","filters"]],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,26,"ion-grid",[],null,null,null,a.J,a.i)),t.sb(18,49152,null,0,r.z,[t.h,t.k,t.z],null,null),(l()(),t.tb(19,0,null,0,24,"ion-row",[],null,null,null,a.Q,a.p)),t.sb(20,49152,null,0,r.hb,[t.h,t.k,t.z],null,null),(l()(),t.tb(21,0,null,0,10,"ion-col",[["size","7"]],null,null,null,a.G,a.f)),t.sb(22,49152,null,0,r.s,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(23,0,null,0,8,"div",[["class","content-input icon-input"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,6,"ion-input",[["placeholder","Buscar"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,25)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.Fb(l,25)._handleInputEvent(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.filter_name=u)&&e),"ngModelChange"===n&&(e=!1!==i.filterName()&&e),e},a.M,a.l)),t.sb(25,16384,null,0,r.Kb,[t.k],null,null),t.Kb(1024,null,d.b,function(l){return[l]},[r.Kb]),t.sb(27,671744,null,0,d.e,[[8,null],[8,null],[8,null],[6,d.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Kb(2048,null,d.c,null,[d.e]),t.sb(29,16384,null,0,d.d,[[4,d.c]],null,null),t.sb(30,49152,null,0,r.F,[t.h,t.k,t.z],{placeholder:[0,"placeholder"]},null),(l()(),t.tb(31,0,null,null,0,"img",[["alt",""],["src","assets/images/buscar.svg"]],null,null,null,null,null)),(l()(),t.tb(32,0,null,0,11,"ion-col",[],null,null,null,a.G,a.f)),t.sb(33,49152,null,0,r.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(34,0,null,0,9,"div",[["class","content-input"]],null,null,null,null,null)),(l()(),t.tb(35,0,null,null,8,"ion-select",[["interface","popover"],["multiple","true"],["placeholder","Categorias"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,36)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.Fb(l,36)._handleChangeEvent(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.filter_categories=u)&&e),"ngModelChange"===n&&(e=!1!==i.filterCategories()&&e),e},a.S,a.q)),t.sb(36,16384,null,0,r.Jb,[t.k],null,null),t.Kb(1024,null,d.b,function(l){return[l]},[r.Jb]),t.sb(38,671744,null,0,d.e,[[8,null],[8,null],[8,null],[6,d.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Kb(2048,null,d.c,null,[d.e]),t.sb(40,16384,null,0,d.d,[[4,d.c]],null,null),t.sb(41,49152,null,0,r.lb,[t.h,t.k,t.z],{interface:[0,"interface"],multiple:[1,"multiple"],placeholder:[2,"placeholder"]},null),(l()(),t.ib(16777216,null,0,1,null,C)),t.sb(43,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(45,16384,null,0,g.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(46,0,null,0,3,"ion-list",[],null,null,null,a.P,a.o)),t.sb(47,49152,null,0,r.N,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,_)),t.sb(49,278528,null,0,g.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(50,0,null,null,1,"app-footer",[],null,null,null,f.b,f.a)),t.sb(51,114688,null,0,h.a,[g.g,p.a,i.a],null,null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,9,0,"/brands"),l(n,10,0),l(n,22,0,"7"),l(n,27,0,u.filter_name),l(n,30,0,"Buscar"),l(n,38,0,u.filter_categories),l(n,41,0,"popover","true","Categorias"),l(n,43,0,u.categories),l(n,45,0,u.filter_brands&&u.filter_brands.length<=0),l(n,49,0,u.filter_brands),l(n,51,0)},function(l,n){l(n,24,0,t.Fb(n,29).ngClassUntouched,t.Fb(n,29).ngClassTouched,t.Fb(n,29).ngClassPristine,t.Fb(n,29).ngClassDirty,t.Fb(n,29).ngClassValid,t.Fb(n,29).ngClassInvalid,t.Fb(n,29).ngClassPending),l(n,35,0,t.Fb(n,40).ngClassUntouched,t.Fb(n,40).ngClassTouched,t.Fb(n,40).ngClassPristine,t.Fb(n,40).ngClassDirty,t.Fb(n,40).ngClassValid,t.Fb(n,40).ngClassInvalid,t.Fb(n,40).ngClassPending)})}function O(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-brands",[],null,null,null,x,m)),t.sb(1,114688,null,0,o,[i.a,c.m,r.a],null,null)],function(l,n){l(n,1,0)},null)}var z=t.pb("app-brands",o,O,{},{},[]),D=u("PCNd");u.d(n,"BrandsPageModuleNgFactory",function(){return w});var w=t.qb(s,[],function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[b.a,z]],[3,t.j],t.x]),t.Db(4608,g.m,g.l,[t.u,[2,g.z]]),t.Db(4608,r.b,r.b,[t.z,t.g]),t.Db(4608,r.Eb,r.Eb,[r.b,t.j,t.q]),t.Db(4608,r.Hb,r.Hb,[r.b,t.j,t.q]),t.Db(4608,d.g,d.g,[]),t.Db(1073742336,g.b,g.b,[]),t.Db(1073742336,r.Cb,r.Cb,[]),t.Db(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Db(1073742336,D.a,D.a,[]),t.Db(1073742336,d.f,d.f,[]),t.Db(1073742336,d.a,d.a,[]),t.Db(1073742336,s,s,[]),t.Db(1024,c.k,function(){return[[{path:"",component:o}]]},[])])})}}]);