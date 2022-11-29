"use strict";(self.webpackChunkthanx_dashboard=self.webpackChunkthanx_dashboard||[]).push([[571],{5188:(P,C,n)=>{n.d(C,{r:()=>O,tt:()=>E});var i=n(3075);function h(a){return!a||a&&!a.value?null:a.value.match(/.*[^a-zA-Z].*/)?{charOnly:!0}:null}function p(a){return!a||a&&!a.value?null:a.value.match(/.*[-!$%^&*()_+|~=`{}\[\]:";#@'<>?,.\/].*/)?{specialCharOnly:!0}:null}function g(a){return!a||a&&!a.value?null:a.value.match(/.*[^0-9].*/)?{numOnly:!0}:null}function f(a){let l=/\d/.test(a.value),u=/[A-Z]/.test(a.value),d=/[a-z]/.test(a.value),m=/[-!$%^&*()_+|~=`{}\[\]:";#@'<>?,.\/]/.test(a.value);return l&&u&&d&&m?null:{strongPass:!0}}function O(a){if(!a||0===a.length)return null;const l=[];return a.forEach(u=>{switch(u.name){case"email":l.push(i.kI.email);break;case"charOnly":l.push(h);break;case"numOnly":l.push(g);break;case"required":l.push(i.kI.required);break;case"size":l.push(function c(a){return l=>!l||l&&!l.value||l.value.toString().length===a?null:{size:{actualLength:l.value.toString().length,requiredLength:a}}}(u.value));break;case"strongPass":l.push(f);break;case"specialCharOnly":l.push(p);break;case"maxlength":l.push(i.kI.maxLength(u.value));break;case"minlength":l.push(i.kI.minLength(u.value))}}),l}function E(a){return a&&0!==a.length?(a.forEach(u=>{}),[]):null}},4859:(P,C,n)=>{n.d(C,{U:()=>h});var i=n(7579),t=n(5e3);let h=(()=>{class p{constructor(){this.inputClickInsideSub=new i.x,this.inputClickInside$=this.inputClickInsideSub.asObservable(),this.inputClickOutsideSub=new i.x,this.inputClickOutside$=this.inputClickOutsideSub.asObservable()}get formGroup(){return this._formGroup}set formGroup(c){this._formGroup=c}broadcastInputClickInside(c){this.inputClickInsideSub.next(c)}broadcastInputClickOutside(c){this.inputClickOutsideSub.next(c)}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac}),p})()},7795:(P,C,n)=>{n.d(C,{d:()=>h});var i=n(5e3),t=n(4859);let h=(()=>{class p{constructor(c,f){this._elementRef=c,this._globalService=f}get element(){return this._elementRef.nativeElement}onClick(c){this._elementRef.nativeElement.contains(c)?this._globalService.broadcastInputClickInside(this._elementRef):this._globalService.broadcastInputClickOutside(this._elementRef)}}return p.\u0275fac=function(c){return new(c||p)(i.Y36(i.SBq),i.Y36(t.U))},p.\u0275dir=i.lG2({type:p,selectors:[["","directiveViewFormInput",""]],hostVars:10,hostBindings:function(c,f){1&c&&i.NdJ("click",function(O){return f.onClick(O.target)},!1,i.evT),2&c&&i.Udp("width","100%")("font-size","1em")("border","none")("padding","0")("margin","0")}}),p})()},2434:(P,C,n)=>{n.d(C,{E:()=>I});var i=n(655),t=n(5e3),h=n(7725),p=n(2348),g=n(4859),c=n(4987),f=n(7795),b=n(8028),O=n(9808),E=n(1542),a=n(3966),l=n(740),u=n(5245),d=n(5089),m=n(8489),_=n(9914),w=n(2329),M=n(2707),y=n(3779);const T={charOnly:"Only characters is permitted",email:"Email must be a valid address",maxlength:"Maximum length is %{requiredLength}",minlength:"Minimum length is %{requiredLength}",specialCharOnly:"Use special chars like: @(&)#[*]-/...",numOnly:"Only numbers is permitted",required:"%title is required",strongPass:"Use lower/upper case, numbers and special chars like: @(&)#[*]-/...",notSamePass:"Passwords do not match",size:"The length should be %{requiredLength}"};let D=(()=>{class o{transform(e,s){if(!e||e&&(0,p.gZ)(e))return;const v=Object.keys(e)[0];let x=(0,y.gl)(T[v],e[v]);return x=(0,y.Ey)(x,"%title",{title:s}),x}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"pipeErrorMessage",type:o,pure:!0}),o})(),k=(()=>{class o{transform(e){if(!e||!e.validator)return!1;const s=e.validator({});return s&&s.required}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"pipeControlRequired",type:o,pure:!0}),o})(),F=(()=>{class o{ngOnInit(){this.prepareStaticData()}prepareStaticData(){this.title=(0,y._J)(this.title.toLowerCase())}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["view-form-error"]],inputs:{inputControl:"inputControl",title:"title"},decls:6,vars:5,consts:[["id","error-icon"],[3,"width"],["id","error-text"]],template:function(e,s){1&e&&(t.TgZ(0,"mat-icon",0),t._uU(1,"priority_high"),t.qZA(),t._UZ(2,"view-delimiter",1),t.TgZ(3,"div",2),t._uU(4),t.ALo(5,"pipeErrorMessage"),t.qZA()),2&e&&(t.xp6(2),t.Q6J("width","0.7em"),t.xp6(2),t.Oqu(t.xi3(5,2,s.inputControl.errors,s.title)))},dependencies:[u.Hw,d.s,D],styles:["[_nghost-%COMP%]{display:flex;align-items:center;color:#fff;padding:.3em 1.5em .1em;background-color:#a7776e}[_nghost-%COMP%]   #error-icon[_ngcontent-%COMP%]{width:15px;height:15px;font-size:15px}[_nghost-%COMP%]   #error-text[_ngcontent-%COMP%]{font-size:.85em}"]}),o})();const B=["cardRef"];function R(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"mat-icon",10),t._uU(2),t.qZA(),t._UZ(3,"view-delimiter",11),t.BQk()),2&o){const e=t.oxw(3);t.xp6(2),t.Oqu(e.icon),t.xp6(1),t.Q6J("width","0.8em")}}function S(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"*"),t.qZA())}function V(o,r){if(1&o&&(t.TgZ(0,"span",12),t._uU(1),t.YNc(2,S,2,0,"span",4),t.ALo(3,"pipeControlRequired"),t.qZA()),2&o){const e=t.oxw().ngVar,s=t.oxw(2);t.Udp("font-size",s.clickInside?"0.7em":"1em")("font-weight",s.clickInside?400:700)("color",e.hasError?s.colorErrorDark:s.clickInside||e.ifExpand?s.colorPrimary:"#444"),t.xp6(1),t.hij(" ",s.title," "),t.xp6(1),t.Q6J("ngIf",t.lcZ(3,8,s.inputControl))}}function U(o,r){if(1&o&&t.GkF(0,13),2&o){const e=t.oxw(3);t.Q6J("ngTemplateOutlet",e.endTemplateRef)}}function A(o,r){if(1&o){const e=t.EpF();t.ynx(0),t._UZ(1,"view-delimiter",11),t.TgZ(2,"mat-icon",14),t.NdJ("click",function(){t.CHM(e);const v=t.oxw(3);return t.KtG(v.onEyeIconClick())}),t._uU(3),t.qZA(),t.BQk()}if(2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("width","0.8em"),t.xp6(2),t.hij(" ",e.showPass?"visibility_off":"visibility"," ")}}function L(o,r){1&o&&t._UZ(0,"span",15)}function Z(o,r){if(1&o&&t._UZ(0,"view-form-error",16),2&o){const e=t.oxw(3);t.Q6J("inputControl",e.inputControl)("title",e.title)}}function G(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"view-card",1,2),t.NdJ("click",function(v){t.CHM(e);const x=t.oxw(2);return t.KtG(x.onCardClick(v))}),t.TgZ(3,"view-card-content")(4,"view-row",3),t.YNc(5,R,4,2,"ng-container",4),t.TgZ(6,"hub-expansion",5)(7,"hub-expansion-header"),t.YNc(8,V,4,10,"span",6),t.qZA(),t.Hsn(9),t.qZA(),t.YNc(10,U,1,1,"ng-container",7),t.YNc(11,A,4,2,"ng-container",4),t.YNc(12,L,1,0,"span",8),t.qZA()(),t.TgZ(13,"view-card-expand-content"),t.YNc(14,Z,1,2,"view-form-error",9),t.qZA()(),t.BQk()}if(2&o){const e=r.ngVar,s=t.oxw(2);t.xp6(1),t.Udp("background-color",s.options.card.bgColor)("box-shadow",s.options.card.boxShadow)("border-radius",s.options.card.borderRadius)("border",s.options.card.border),t.Q6J("expanded",e.hasError)("options",s.cardOptions),t.xp6(3),t.Q6J("centerVertical","center"),t.xp6(1),t.Q6J("ngIf",s.icon),t.xp6(1),t.Q6J("options",s.hubExpansionOptions)("expanded",e.ifExpand),t.xp6(2),t.Q6J("ngIf",s.title),t.xp6(2),t.Q6J("ngIf",s.endTemplateRef),t.xp6(1),t.Q6J("ngIf",e.ifExpand&&"password"===s.inputType),t.xp6(1),t.Q6J("ngIf",s.disabled),t.xp6(2),t.Q6J("ngIf",e.hasError)}}const J=function(o,r){return{hasError:o,ifExpand:r}};function Q(o,r){if(1&o&&t.YNc(0,G,15,19,"ng-container",0),2&o){const e=t.oxw();t.Q6J("ngVar",t.WLB(1,J,e.inputControl.errors&&(e.inputControl.dirty||e.inputControl.touched),!e.title||e.clickInside||e.inputControl.value))}}let I=class{constructor(r,e,s){this._elementRef=r,this._setTimeOutService=e,this._globalService=s,this.disabled=!1,this.colorPrimary=h.colorPrimary,this.colorErrorDark=h.colorErrorDark}get form(){return this._globalService.formGroup}get inputControl(){return this.form.get(this.formCtrlName)}get inputElement(){return this.inputDirectiveRef.element}onDocumentClick(r){this.cardRef.nativeElement.contains(r.target)||this.onCardBlur()}ngOnInit(){this.prepareStaticData()}observeInputOutsideClick(){this.subscriptionInputElemClick=this._globalService.inputClickOutside$.pipe((0,c.t)(this)).subscribe(r=>{this.inputClicked=!1,this.hideInput()})}onCardBlur(){this.cardClicked=!1,this.hideInput()}onCardClick(r){this.cardClicked=!0,this.showInput()}showInput(){this.unSubInputElemClick(),this.disabled||(this.clickInside=!0,this.focusOnInput()),this._setTimeOutService.setTimeOut(()=>this.observeInputOutsideClick())}focusOnInput(){this._setTimeOutService.setTimeOut(()=>this.inputElement.focus())}hideInput(){!this.inputClicked&&!this.cardClicked&&!this.inputControl.dirty&&(this.disabled||(this.clickInside=!1),this.unSubInputElemClick())}ngAfterContentInit(){this.inputType=this.inputElement.type}onEyeIconClick(){this.showPass=!this.showPass,this.inputElement.type=this.showPass?"text":"password"}getControlName(r){const e=r.parent.controls;return Object.keys(e).find(s=>r===e[s])||null}unSubInputElemClick(){this.subscriptionInputElemClick&&this.subscriptionInputElemClick.unsubscribe()}prepareStaticData(){this.controlName=this.getControlName(this.inputControl),this.prepareOptions()}prepareOptions(){this.options=(0,p.WP)({card:{bgColor:"#f0faff",border:"none",borderRadius:h.borderRadiusMedium,boxShadow:h.boxShadowMedium}},this.options),this.hubExpansionOptions={hideTrigger:!0,changeExpansionOnHostClick:!1},this.cardOptions={hideTrigger:!0,changeExpansionOnHostClick:!1}}ngOnDestroy(){this.unSubInputElemClick()}};I.\u0275fac=function(r){return new(r||I)(t.Y36(t.SBq),t.Y36(b.C),t.Y36(g.U))},I.\u0275cmp=t.Xpm({type:I,selectors:[["view-form-input"]],contentQueries:function(r,e,s){if(1&r&&t.Suo(s,f.d,5),2&r){let v;t.iGM(v=t.CRH())&&(e.inputDirectiveRef=v.first)}},viewQuery:function(r,e){if(1&r&&(t.Gf(t.Rgc,5),t.Gf(B,5,t.SBq)),2&r){let s;t.iGM(s=t.CRH())&&(e.template=s.first),t.iGM(s=t.CRH())&&(e.cardRef=s.first)}},hostBindings:function(r,e){1&r&&t.NdJ("click",function(v){return e.onDocumentClick(v)},!1,t.evT)},inputs:{endTemplateRef:["endTemplate","endTemplateRef"],options:"options",icon:"icon",title:"title",formCtrlName:"formCtrlName",disabled:"disabled"},ngContentSelectors:["*"],decls:1,vars:0,consts:[[4,"ngVar"],["id","card",3,"expanded","options","click"],["cardRef",""],["id","card-content",3,"centerVertical"],[4,"ngIf"],["id","input-wrapper",3,"options","expanded"],["id","title",3,"font-size","font-weight","color",4,"ngIf"],[3,"ngTemplateOutlet",4,"ngIf"],["id","overlay",4,"ngIf"],[3,"inputControl","title",4,"ngIf"],[1,"icon"],[3,"width"],["id","title"],[3,"ngTemplateOutlet"],[1,"icon",3,"click"],["id","overlay"],[3,"inputControl","title"]],template:function(r,e){1&r&&(t.F$t(),t.YNc(0,Q,1,4,"ng-template"))},dependencies:[O.O5,O.tP,E.y,a.v,l.K,u.Hw,d.s,m.L,_.q,w.s,M.f,F,k],styles:["[_nghost-%COMP%]{display:block}#card[_ngcontent-%COMP%]{height:auto;position:relative;display:flex;align-items:center;overflow:hidden;padding:0}#card[_ngcontent-%COMP%]   #card-content[_ngcontent-%COMP%]{width:100%;min-height:60px;padding:.313em 1em}#card[_ngcontent-%COMP%]   #input-wrapper[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;box-shadow:none;background-color:transparent;padding:0}#card[_ngcontent-%COMP%]   #input-wrapper[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{color:#444;font-size:.8em;font-weight:700;transition:all .25s ease-in-out}#card[_ngcontent-%COMP%]   #input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1.1em;border:none;padding:0;margin:0}#card[_ngcontent-%COMP%]   #input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#bbb}#card[_ngcontent-%COMP%]   #input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#bbb}#card[_ngcontent-%COMP%]   #input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#bbb}#card[_ngcontent-%COMP%]   #overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background-color:#fffc}"]}),I=(0,i.gn)([(0,c.c)(),(0,i.w6)("design:paramtypes",[t.SBq,b.C,g.U])],I)},4395:(P,C,n)=>{n.d(C,{J:()=>l});var i=n(9808),t=n(6321),h=n(5245),p=n(4528),g=n(4697),c=n(3075),f=n(8857),b=n(9016),O=n(2707),E=n(7030),a=n(5e3);let l=(()=>{class u{}return u.\u0275fac=function(m){return new(m||u)},u.\u0275mod=a.oAB({type:u}),u.\u0275inj=a.cJS({imports:[i.ez,t.r,h.Ps,p.B,g.R,c.UX,f.d,b.g,O.G,E.C]}),u})()},9206:(P,C,n)=>{n.d(C,{I:()=>l});var i=n(5e3),t=n(4859),h=n(2434),p=n(2348),g=n(7725),c=n(9808),f=n(3075),b=n(9242);function O(u,d){if(1&u&&(i.TgZ(0,"div"),i.GkF(1,3),i.qZA()),2&u){const m=d.$implicit,_=d.index,w=i.oxw();i.Udp("margin-bottom",_!==w.items.length-1?w.options.itemDelimiter:void 0),i.xp6(1),i.Q6J("ngTemplateOutlet",m.template)}}const E=[[["","view-form-above",""]],[["","view-form-after-fields",""]],[["","view-form-below",""]]],a=["[view-form-above]","[view-form-after-fields]","[view-form-below]"];let l=(()=>{class u{constructor(m){this.globalService=m,this.submitBtnLoading=!1,this.submitBtnEnabled=!1,this.outputOnSubmit=new i.vpe}ngOnInit(){this.prepareStaticData()}onSubmit(){this.outputOnSubmit.emit(this.formGroup.valid)}prepareStaticData(){this.globalService.formGroup=this.formGroup,this.prepareOptions()}prepareOptions(){this.options=(0,p.WP)({itemDelimiter:"1em",submitBtnColor:{darkColor:g.colorPrimary,lightColor:g.colorSecondary}},this.options||{})}}return u.\u0275fac=function(m){return new(m||u)(i.Y36(t.U))},u.\u0275cmp=i.Xpm({type:u,selectors:[["view-form"]],contentQueries:function(m,_,w){if(1&m&&i.Suo(w,h.E,4),2&m){let M;i.iGM(M=i.CRH())&&(_.items=M)}},inputs:{options:"options",formGroup:"formGroup",submitBtnText:"submitBtnText",submitBtnLoading:"submitBtnLoading",submitBtnEnabled:"submitBtnEnabled"},outputs:{outputOnSubmit:"outputOnSubmit"},features:[i._Bn([t.U])],ngContentSelectors:a,decls:7,vars:7,consts:[["novalidate","",3,"formGroup"],[3,"margin-bottom",4,"ngFor","ngForOf"],["id","submit-button",3,"type","disabled","loading","backgroundGradient","click"],[3,"ngTemplateOutlet"]],template:function(m,_){1&m&&(i.F$t(E),i.Hsn(0),i.TgZ(1,"form",0),i.YNc(2,O,2,3,"div",1),i.qZA(),i.Hsn(3,1),i.TgZ(4,"hub-button",2),i.NdJ("click",function(){return _.onSubmit()}),i._uU(5),i.qZA(),i.Hsn(6,2)),2&m&&(i.xp6(1),i.Q6J("formGroup",_.formGroup),i.xp6(1),i.Q6J("ngForOf",_.items),i.xp6(2),i.Q6J("type","submit")("disabled",!_.formGroup.valid&&!_.submitBtnEnabled)("loading",_.submitBtnLoading)("backgroundGradient",_.options.submitBtnColor),i.xp6(1),i.hij(" ",_.submitBtnText,"\n"))},dependencies:[c.sg,c.tP,f._Y,f.JL,f.sg,b.N],styles:["[_nghost-%COMP%]{display:block}#submit-button[_ngcontent-%COMP%]{display:block;width:100%;margin-top:1em;height:58px;font-size:1.2em;border-radius:18px}"]}),u})()}}]);