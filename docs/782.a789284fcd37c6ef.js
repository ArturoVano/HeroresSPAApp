"use strict";(self.webpackChunkheroesW2M=self.webpackChunkheroesW2M||[]).push([[782],{9782:(xe,F,a)=>{a.r(F),a.d(F,{HeroesModule:()=>ve});var m=a(6814),h=a(8184),d=a(5619),P=a(7394),f=a(4664),J=a(2181),p=a(9397),l=a(6223),g=a(7700),e=a(5879),v=a(2296);let w=(()=>{class i{constructor(t,r){this.dialogRef=t,this.data=r}onNoClick(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(g.so),e.Y36(g.WI))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-delete-dialog"]],decls:10,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions","",1,"flex","justify-content-between"],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(r,o){1&r&&(e.TgZ(0,"h1",0),e._uU(1,"The hero will be deleted"),e.qZA(),e.TgZ(2,"div",1)(3,"p"),e._uU(4,"Are you sure?"),e.qZA()(),e.TgZ(5,"div",2)(6,"button",3),e.NdJ("click",function(){return o.onNoClick()}),e._uU(7,"No"),e.qZA(),e.TgZ(8,"button",4),e.NdJ("click",function(){return o.onConfirm()}),e._uU(9,"Yes"),e.qZA()())},dependencies:[v.lW,g.uh,g.xY,g.H8]})}return i})();var I=a(6555),Z=a(6306),A=a(2096),u=a(7398),T=a(9315),S=function(i){return i.SUCCESS="success",i.ERROR="error",i}(S||{}),q=a(9413),O=a(9862),U=a(3712);let y=(()=>{class i{constructor(t,r){this.http=t,this.snackbarService=r,this.heroesUrl=q.T.heroesUrl,this.externalHeroesUrl=q.T.externalHeroesUrl,this.EXTERNAL_HEROES=80}initiateExternalHeroes(){return this.getExternalHeroesList().pipe((0,f.w)(t=>{const r=t.filter(o=>!!o&&o.response===S.SUCCESS).map(o=>this.http.post(this.heroesUrl,o).pipe((0,Z.K)(()=>(0,A.of)(!1)),(0,u.U)(()=>!0)));return(0,T.D)(r).pipe((0,u.U)(o=>o.some(s=>!0===s)))}))}getPublishers(){const t=[];for(let r=1;r<=this.EXTERNAL_HEROES;r++)t.push(this.http.get(`${this.externalHeroesUrl}/${r}`).pipe((0,u.U)(s=>s.biography.publisher)));return(0,T.D)(t).pipe((0,u.U)(r=>Array.from(new Set(r))))}getExternalHeroesList(){const t=[];for(let r=1;r<=this.EXTERNAL_HEROES;r++)t.push(this.http.get(`${this.externalHeroesUrl}/${r}`));return(0,T.D)(t)}getHeroes(){return this.http.get(this.heroesUrl).pipe((0,Z.K)(t=>{throw console.error("Error fetching heroes:",t),this.snackbarService.showMessage("Error loading heroes: "+t.message,!1),new Error(t)}))}getHeroById(t){return this.http.get(this.heroesUrl+"/"+t).pipe((0,Z.K)(()=>(0,A.of)(void 0)),(0,u.U)(o=>o?.id?o:void 0))}createHero(t){return console.log("createhero: ",t),this.http.post(this.heroesUrl,t)}updateHero(t){if(!t.id)throw new Error("Id of hero is required");return this.http.patch(this.heroesUrl+"/"+t.id,t)}deleteHero(t){return this.http.delete(this.heroesUrl+"/"+t).pipe((0,Z.K)(()=>(0,A.of)(!1)),(0,u.U)(()=>!0))}filterHeroesFromFE(t,r){return t.filter(({name:o})=>o.toLocaleLowerCase().includes(r.toLocaleLowerCase()))}static#e=this.\u0275fac=function(r){return new(r||i)(e.LFG(O.eN),e.LFG(U.o))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var b=a(617),C=a(6385),n=a(5195),H=a(5940),x=a(9157),M=a(8525),$=a(3680),_=a(2032);const Y=["nameInput"];function k(i,c){1&i&&(e.TgZ(0,"div",24),e._UZ(1,"mat-spinner",25),e.qZA())}function Q(i,c){if(1&i&&(e.TgZ(0,"mat-option",26),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function j(i,c){if(1&i&&(e.TgZ(0,"mat-option",26),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function D(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.deleteHero())}),e.TgZ(1,"mat-icon"),e._uU(2,"delete"),e.qZA(),e._uU(3," Delete "),e.qZA()}}let L=(()=>{class i{get heroId(){return this.heroForm.get("id")}get heroName(){return this.heroForm.get("name")}get heroImg(){return this.heroForm.get("img")}constructor(t,r,o,s,Ze,be){this.heroesService=t,this.fb=r,this.activatedRoute=o,this.router=s,this.snackbarService=Ze,this.matDialog=be,this.publishers$=this.heroesService.getPublishers(),this.alignments=[I.v.GOOD,I.v.BAD],this.heroForm=this.fb.group({id:[""],name:["",l.kI.required],fullName:[""],alterEgo:[""],firstAppearance:[""],aliases:[""],publisher:["",l.kI.required],alignment:["",l.kI.required],img:[""]}),this.spinner$=new d.X(!0),this.subscription=new P.w0}ngOnInit(){this.router.url?.includes("edit")?this.activatedRoute.params.pipe((0,f.w)(({id:t})=>this.heroesService.getHeroById(t))).subscribe(t=>{t?this.populateFormWithHero(t):(this.router.navigateByUrl("/"),this.snackbarService.showMessage("Error loading hero for editing",!1)),this.spinner$.next(!1)}):this.spinner$.next(!1)}ngOnDestroy(){this.subscription.unsubscribe()}onSubmit(){this.heroForm.invalid||this.subscription.add(this.heroId?.value?this.heroesService.updateHero(this.buildHeroWithForm()).subscribe(t=>{this.snackbarService.showMessage(`${t.name} has been updated!`),this.router.navigate(["/heroes/list"])}):this.heroesService.createHero(this.buildHeroWithForm()).subscribe(t=>{this.snackbarService.showMessage(`${t.name} has been created!`),this.router.navigate(["/heroes/list"])}))}populateFormWithHero(t){this.heroForm.reset({id:t.id,name:t.name,fullName:t.biography["full-name"],alterEgo:t.biography["alter-egos"],firstAppearance:t.biography["first-appearance"],aliases:t.biography.aliases?t.biography.aliases.join(","):"",publisher:t.biography.publisher,alignment:t.biography.alignment,img:t.image?t.image.url:""})}buildHeroWithForm(){return this.heroId.value?{...this.heroForm.value,biography:{"full-name":this.heroForm.value.fullName,"alter-egos":this.heroForm.value.alterEgo,aliases:this.heroForm.value.aliases?this.heroForm.value.aliases.split(","):[],"first-appearance":this.heroForm.value.firstAppearance,publisher:this.heroForm.value.publisher,alignment:this.heroForm.value.alignment},image:{url:this.heroForm.value.img}}:{name:this.heroName.value,biography:{"full-name":this.heroForm.value.fullName,"alter-egos":this.heroForm.value.alterEgo,aliases:this.heroForm.value.aliases?this.heroForm.value.aliases.split(","):[],"first-appearance":this.heroForm.value.firstAppearance,publisher:this.heroForm.value.publisher,alignment:this.heroForm.value.alignment},image:{url:this.heroForm.value.img}}}goBack(){this.router.navigate(["heroes/list"])}deleteHero(){this.heroId.value||this.snackbarService.showMessage("Hero id is required");const t=this.matDialog.open(w,{data:this.heroForm.value});this.subscription.add(t.afterClosed().pipe((0,J.h)(r=>!!r),(0,f.w)(()=>this.heroesService.deleteHero(this.heroId.value)),(0,p.b)(r=>{r?(this.snackbarService.showMessage(`${this.heroName.value} has been deleted!`),this.router.navigate(["/heroes/list"])):this.snackbarService.showMessage(`A problem occurred while deleting the hero\n            ${this.heroName.value}`)})).subscribe())}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(y),e.Y36(l.qu),e.Y36(h.gz),e.Y36(h.F0),e.Y36(U.o),e.Y36(g.uw))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-manage-heroes-page"]],viewQuery:function(r,o){if(1&r&&e.Gf(Y,5),2&r){let s;e.iGM(s=e.CRH())&&(o.nameInput=s.first)}},decls:59,vars:12,consts:[["class","flex justify-content-center align-items-center h-full",4,"ngIf"],[1,"m-3"],[1,"mb-3"],[1,"grid"],[1,"col-6"],[1,"grid",3,"formGroup","ngSubmit"],[1,"col-12","sm:col-6"],["matInput","","type","text","required","","formControlName","name",1,"show-uppercase"],["matInput","","type","text","formControlName","fullName"],[1,"col-12"],["matInput","","type","text","formControlName","alterEgo"],["matInput","","type","text","formControlName","firstAppearance"],["matInput","","type","text","formControlName","aliases"],["required","","formControlName","publisher"],[3,"value",4,"ngFor","ngForOf"],["required","","formControlName","alignment"],["matInput","","type","text","formControlName","img"],[1,"col","flex","justify-content-between"],["mat-flat-button","","color","warn","type","button",3,"click",4,"ngIf"],["mat-flat-button","","color","primary","type","submit"],["mat-button","","color","warn",1,"m-3",3,"click"],[1,"col-6","sm:col-6"],[1,"flex-1"],["mat-card-image","",3,"src","alt"],[1,"flex","justify-content-center","align-items-center","h-full"],[1,"flex","align-items-center"],[3,"value"],["mat-flat-button","","color","warn","type","button",3,"click"]],template:function(r,o){1&r&&(e.YNc(0,k,2,0,"div",0),e.ALo(1,"async"),e.TgZ(2,"div",1)(3,"h2"),e._uU(4),e.qZA(),e._UZ(5,"mat-divider",2),e.TgZ(6,"div",3)(7,"div",4)(8,"mat-card")(9,"mat-card-content")(10,"form",5),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(11,"mat-form-field",6)(12,"mat-label"),e._uU(13,"Super hero"),e.qZA(),e._UZ(14,"input",7),e.qZA(),e.TgZ(15,"mat-form-field",6)(16,"mat-label"),e._uU(17,"Full name"),e.qZA(),e._UZ(18,"input",8),e.qZA(),e.TgZ(19,"mat-form-field",9)(20,"mat-label"),e._uU(21,"Alter ego"),e.qZA(),e._UZ(22,"input",10),e.qZA(),e.TgZ(23,"mat-form-field",9)(24,"mat-label"),e._uU(25,"First appearence"),e.qZA(),e._UZ(26,"input",11),e.qZA(),e.TgZ(27,"mat-form-field",9)(28,"mat-label"),e._uU(29,"Aliases"),e.qZA(),e._UZ(30,"input",12),e.qZA(),e.TgZ(31,"mat-form-field",9)(32,"mat-label"),e._uU(33,"Publisher"),e.qZA(),e.TgZ(34,"mat-select",13),e.YNc(35,Q,2,2,"mat-option",14),e.ALo(36,"async"),e.qZA()(),e.TgZ(37,"mat-form-field",9)(38,"mat-label"),e._uU(39,"Alignment"),e.qZA(),e.TgZ(40,"mat-select",15),e.YNc(41,j,2,2,"mat-option",14),e.qZA()(),e.TgZ(42,"mat-form-field",9)(43,"mat-label"),e._uU(44,"Image url"),e.qZA(),e._UZ(45,"input",16),e.qZA(),e.TgZ(46,"div",17),e.YNc(47,D,4,0,"button",18),e.TgZ(48,"button",19)(49,"mat-icon"),e._uU(50,"save"),e.qZA(),e._uU(51," Save "),e.qZA()()()()(),e.TgZ(52,"button",20),e.NdJ("click",function(){return o.goBack()}),e.TgZ(53,"mat-icon"),e._uU(54,"arrow_back"),e.qZA(),e._uU(55," Back to list "),e.qZA()(),e.TgZ(56,"div",21)(57,"mat-card",22),e._UZ(58,"img",23),e.qZA()()()()),2&r&&(e.Q6J("ngIf",e.lcZ(1,8,o.spinner$)),e.xp6(4),e.hij(" ",o.heroId.value?"Edit "+o.heroName.value:"Create new"," hero "),e.xp6(6),e.Q6J("formGroup",o.heroForm),e.xp6(25),e.Q6J("ngForOf",e.lcZ(36,10,o.publishers$)),e.xp6(6),e.Q6J("ngForOf",o.alignments),e.xp6(6),e.Q6J("ngIf",o.heroId.value),e.xp6(11),e.Q6J("src",o.heroImg.value?o.heroImg.value:"assets/images/no-image.png",e.LSH)("alt",o.heroImg.value))},dependencies:[m.sg,m.O5,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,b.Hw,C.d,v.lW,n.a8,n.dn,n.G2,H.Ou,x.KE,x.hX,M.gD,$.ey,_.Nt,m.Ov],styles:[".show-uppercase[_ngcontent-%COMP%]{text-transform:uppercase!important}"]})}return i})();var B=a(2572),R=a(7921),z=a(3620),W=a(8180),X=a(3365),N=a(2557);let G=(()=>{class i{transform(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275pipe=e.Yjl({name:"capitalizeFirst",type:i,pure:!0})}return i})();const K=function(i){return["/heroes/edit",i]},V=function(i){return["/heroes/hero",i]};function ee(i,c){if(1&i&&(e.TgZ(0,"div")(1,"mat-card")(2,"mat-card-header",1)(3,"mat-card-title"),e._uU(4),e.ALo(5,"capitalizeFirst"),e.qZA(),e.TgZ(6,"mat-card-subtitle",2),e._uU(7),e.qZA()(),e._UZ(8,"img",3),e.TgZ(9,"mat-card-content",4)(10,"span",5),e._uU(11),e.qZA(),e.TgZ(12,"div",6)(13,"p",7)(14,"strong",8),e._uU(15,"First appearence"),e.qZA(),e._uU(16),e.qZA(),e.TgZ(17,"mat-chip-listbox")(18,"mat-chip"),e._uU(19),e.qZA()()()(),e._UZ(20,"mat-divider"),e.TgZ(21,"mat-card-actions",9)(22,"button",10)(23,"mat-icon"),e._uU(24,"edit"),e.qZA(),e._uU(25," Edit "),e.qZA(),e.TgZ(26,"button",11)(27,"mat-icon"),e._uU(28,"more_horiz"),e.qZA(),e._uU(29," More "),e.qZA()()()()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(e.lcZ(5,9,t.hero.name)),e.xp6(3),e.Oqu(t.hero.biography["full-name"]),e.xp6(1),e.Q6J("src",null!=t.hero.image&&t.hero.image.url?null==t.hero.image?null:t.hero.image.url:"assets/images/no-image.png",e.LSH)("alt",t.hero.name),e.xp6(3),e.Oqu(t.hero.biography.publisher),e.xp6(5),e.hij(" ",t.hero.biography["first-appearance"]," "),e.xp6(3),e.hij(" ",t.hero.biography.alignment," "),e.xp6(3),e.Q6J("routerLink",e.VKq(11,K,t.hero.id)),e.xp6(4),e.Q6J("routerLink",e.VKq(13,V,t.hero.id))}}let te=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["list-hero-item"]],inputs:{hero:"hero"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"mb-2"],[1,"full-name"],["mat-card-image","",3,"src","alt"],[1,"mt-3"],[1,"text-l"],[1,"mt-2"],[1,"first-appearance"],[1,"mb-3"],[1,"flex","justify-content-between"],["mat-button","","mat-raised","","color","accent",3,"routerLink"],["mat-button","","mat-raised","",3,"routerLink"]],template:function(r,o){1&r&&e.YNc(0,ee,30,15,"div",0),2&r&&e.Q6J("ngIf",o.hero)},dependencies:[m.O5,h.rH,b.Hw,C.d,v.lW,n.a8,n.hq,n.dn,n.dk,n.G2,n.$j,n.n5,N.HS,N.z2,G],styles:[".full-name[_ngcontent-%COMP%]{min-height:25px}.first-appearance[_ngcontent-%COMP%]{min-height:100px}img[_ngcontent-%COMP%]{height:280px}"]})}return i})();function ie(i,c){1&i&&(e.TgZ(0,"div",2),e._UZ(1,"mat-spinner",3),e.qZA())}function re(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"mat-card",13)(1,"mat-card-header")(2,"mat-card-title",14),e._uU(3,"There are no heroes"),e.qZA(),e.TgZ(4,"mat-card-subtitle",14),e._uU(5,"Click to ask for heroes in web"),e.qZA()(),e.TgZ(6,"mat-card-actions")(7,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.fillHeroesWithExternal())}),e._uU(8," Ask "),e.qZA()()()}}function oe(i,c){1&i&&(e.TgZ(0,"mat-card",13)(1,"mat-card-header")(2,"mat-card-title",14),e._uU(3,"Sorry, we couldn't find any heroes matching your search"),e.qZA()(),e.TgZ(4,"mat-card-content")(5,"mat-card-subtitle",14),e._uU(6,"Try searching with different terms or explore other options"),e.qZA()()())}function ae(i,c){if(1&i&&e._UZ(0,"list-hero-item",18),2&i){const t=e.oxw().$implicit;e.Q6J("hero",t)}}function ne(i,c){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,ae,1,1,"list-hero-item",17),e.qZA()),2&i){const t=c.$implicit;e.xp6(1),e.Q6J("ngIf",t&&t.id)}}const se=function(){return["/heroes/manage-heroes"]};function le(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"h2",4),e._uU(2,"Heroes list"),e.qZA(),e.TgZ(3,"div",5)(4,"mat-form-field")(5,"mat-label"),e._uU(6,"Search heroes"),e.qZA(),e._UZ(7,"input",6),e.qZA(),e.TgZ(8,"button",7)(9,"mat-icon"),e._uU(10,"add"),e.qZA(),e._uU(11," Add new hero "),e.qZA()(),e._UZ(12,"mat-divider"),e.TgZ(13,"div",8),e.YNc(14,re,9,0,"mat-card",9),e.ALo(15,"async"),e.qZA(),e.TgZ(16,"div",8),e.YNc(17,oe,7,0,"mat-card",9),e.ALo(18,"async"),e.qZA(),e.TgZ(19,"div",10),e.YNc(20,ne,2,1,"div",11),e.qZA(),e.TgZ(21,"div")(22,"mat-paginator",12),e.NdJ("page",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.onPageChange(o))}),e.qZA()()()}if(2&i){const t=c.ngIf,r=e.oxw();e.xp6(7),e.Q6J("formControl",r.search),e.xp6(1),e.Q6J("routerLink",e.DdM(12,se)),e.xp6(6),e.Q6J("ngIf",!t.length&&e.lcZ(15,8,r.noHeroesInDB)),e.xp6(3),e.Q6J("ngIf",!t.length&&!e.lcZ(18,10,r.noHeroesInDB)),e.xp6(3),e.Q6J("ngForOf",t),e.xp6(2),e.Q6J("length",r.totalListItems)("pageSize",r.pageSize)("hidePageSize",!0)}}let ce=(()=>{class i{constructor(t,r){this.heroesService=t,this.snackbarService=r,this.search=new l.NI("",l.kI.minLength(3)),this.currentPage$=new d.X(0),this.noHeroesInDB=new d.X(!1),this.heroes$=this.getListData(),this.spinner$=new d.X(!0),this.pageSize=25,this.totalListItems=0}getListData(){return(0,B.a)([this.heroesService.getHeroes(),this.search.valueChanges.pipe((0,R.O)(""),(0,z.b)(200)),this.currentPage$]).pipe((0,p.b)(()=>console.time()),(0,p.b)(([t])=>this.noHeroesInDB.next(!t.length)),(0,u.U)(([t,r,o])=>this.paginate(r&&this.search.valid?this.heroesService.filterHeroesFromFE(t,r):t,o)),(0,p.b)(t=>!t&&this.snackbarService.showMessage("Error loading heroes",!1)),(0,p.b)(()=>this.spinner$.next(!1)))}fillHeroesWithExternal(){this.spinner$.next(!0),this.heroesService.getHeroes().pipe((0,W.q)(1),(0,f.w)(t=>t?.length?t:this.heroesService.initiateExternalHeroes())).subscribe(t=>t?this.heroes$=this.getListData():this.snackbarService.showMessage("Error saving heroes of external api into local db",!1))}onPageChange(t){this.currentPage$.next(t.pageIndex)}paginate(t,r){return this.totalListItems=t.length,t.slice(r*this.pageSize,this.pageSize*(r+1))}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(y),e.Y36(U.o))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-page"]],decls:4,vars:6,consts:[["class","flex justify-content-center align-items-center h-full",4,"ngIf"],[4,"ngIf"],[1,"flex","justify-content-center","align-items-center","h-full"],[1,"flex","align-items-center"],[1,"m-3"],[1,"flex","flex-column","p-2"],["matInput","","type","text",3,"formControl"],["mat-button","","mat-raised","",3,"routerLink"],[1,"flex","justify-content-center"],["class","no-heroes-card m-6 w-full",4,"ngIf"],[1,"grid","bm-8","pt-5"],["class","col-12 sm:col-4 md:col-3 xl:col-2",4,"ngFor","ngForOf"],["aria-label","Select page","color","warn",3,"length","pageSize","hidePageSize","page"],[1,"no-heroes-card","m-6","w-full"],[1,"m-2"],["mat-button","","color","accent",3,"click"],[1,"col-12","sm:col-4","md:col-3","xl:col-2"],[3,"hero",4,"ngIf"],[3,"hero"]],template:function(r,o){1&r&&(e.YNc(0,ie,2,0,"div",0),e.ALo(1,"async"),e.YNc(2,le,23,13,"div",1),e.ALo(3,"async")),2&r&&(e.Q6J("ngIf",e.lcZ(1,2,o.spinner$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,o.heroes$)))},dependencies:[m.sg,m.O5,h.rH,l.Fj,l.JJ,l.oH,b.Hw,C.d,v.lW,n.a8,n.hq,n.dn,n.dk,n.$j,n.n5,H.Ou,x.KE,x.hX,_.Nt,X.NW,te,m.Ov],styles:[".list-page-item[_ngcontent-%COMP%]{max-height:600px}.no-heroes-card[_ngcontent-%COMP%]{max-width:400px}"]})}return i})();var E=a(9038);function me(i,c){1&i&&(e.TgZ(0,"div",2),e._UZ(1,"mat-spinner"),e.qZA())}function he(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"mat-card",4),e._UZ(2,"img",5),e.qZA(),e.TgZ(3,"mat-card",4)(4,"mat-card-header",3)(5,"mat-card-title",6),e._uU(6),e.qZA(),e.TgZ(7,"mat-card-subtitle",7),e._uU(8),e.qZA()(),e.TgZ(9,"mat-card-content",8)(10,"mat-list")(11,"mat-list-item"),e._uU(12),e.qZA(),e.TgZ(13,"mat-list-item"),e._uU(14),e.qZA(),e.TgZ(15,"mat-list-item"),e._uU(16),e.qZA(),e.TgZ(17,"mat-list-item")(18,"strong"),e._uU(19,"Alter egos "),e.qZA(),e._uU(20),e.qZA()(),e.TgZ(21,"button",9),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.goBack())}),e.TgZ(22,"mat-icon"),e._uU(23,"arrow_back"),e.qZA(),e._uU(24," Back to list "),e.qZA()()()()}if(2&i){const t=c.ngIf;e.xp6(2),e.Q6J("src",null!=t.image&&t.image.url?null==t.image?null:t.image.url:"assets/images/no-image.png",e.LSH)("alt",t.name),e.xp6(4),e.Oqu(t.name),e.xp6(2),e.Oqu(t.biography["full-name"]),e.xp6(4),e.Oqu(t.biography["first-appearance"]),e.xp6(2),e.Oqu(t.biography.aliases),e.xp6(2),e.Oqu(t.biography.publisher),e.xp6(4),e.Oqu(t.biography["alter-egos"])}}let ue=(()=>{class i{constructor(t,r,o){this.heroesService=t,this.activatedRoute=r,this.router=o,this.hero$=this.activatedRoute.params.pipe((0,f.w)(s=>this.heroesService.getHeroById(s.id)),(0,p.b)(s=>{s||this.router.navigate(["/heroes/list"]),this.spinner$.next(!1)})),this.spinner$=new d.X(!0)}goBack(){this.router.navigate(["heroes/list"])}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(y),e.Y36(h.gz),e.Y36(h.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-hero-page"]],decls:4,vars:6,consts:[["class","flex justify-content-center align-items-center h-full",4,"ngIf"],["class","flex m-3",4,"ngIf"],[1,"flex","justify-content-center","align-items-center","h-full"],[1,"flex","m-3"],[1,"flex-1"],["mat-card-image","",3,"src","alt"],[1,"text-3xl"],[1,"text-base"],[1,""],["mat-button","","color","warn",3,"click"]],template:function(r,o){1&r&&(e.YNc(0,me,2,0,"div",0),e.ALo(1,"async"),e.YNc(2,he,25,8,"div",1),e.ALo(3,"async")),2&r&&(e.Q6J("ngIf",e.lcZ(1,2,o.spinner$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,o.hero$)))},dependencies:[m.O5,b.Hw,E.i$,E.Tg,v.lW,n.a8,n.dn,n.dk,n.G2,n.$j,n.n5,H.Ou,m.Ov],encapsulation:2})}return i})();const ge=[{path:"",component:a(7216).o,children:[{path:"manage-heroes",component:L},{path:"edit/:id",component:L},{path:"list",component:ce},{path:"hero/:id",component:ue},{path:"**",redirectTo:"list"}]}];let de=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[h.Bz.forChild(ge),h.Bz]})}return i})();var fe=a(8571);let ve=(()=>{class i{static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[m.ez,de,l.UX,fe.q]})}return i})()}}]);