!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{uB5f:function(n,o,a){"use strict";a.r(o),a.d(o,"AgendaModule",(function(){return w}));var i,c,r,u,d,f=a("3Pt+"),s=a("ofXK"),l=a("tyNb"),p=a("fXoL"),b=((c=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=p.Eb({type:c,selectors:[["agenda-detalhe"]],decls:2,vars:0,template:function(e,n){1&e&&(p.Nb(0,"p"),p.qc(1,"agenda-detalhe works!"),p.Mb())},styles:[""]}),c),g=((i=function(){function n(){e(this,n)}return t(n,[{key:"getDayofAgenda",value:function(e){return e?new Date(e):new Date}}]),n}()).\u0275fac=function(e){return new(e||i)},i.\u0275prov=p.Gb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),y=[{path:"",component:(r=function(){function n(t,o){e(this,n),this.agendaService=t,this.router=o}return t(n,[{key:"ngOnInit",value:function(){}},{key:"getDiaSelecionado",value:function(){console.log(typeof this.agendaService.getDayofAgenda(this.diaSelecionado)),this.router.navigate(["/agenda",this.diaSelecionado])}}]),n}(),r.\u0275fac=function(e){return new(e||r)(p.Kb(g),p.Kb(l.b))},r.\u0275cmp=p.Eb({type:r,selectors:[["app-agenda"]],decls:7,vars:6,consts:[[3,"type","ngModel","ngModelChange","change"]],template:function(e,n){1&e&&(p.Nb(0,"p"),p.qc(1,"agenda works!"),p.Mb(),p.Nb(2,"input",0),p.Vb("ngModelChange",(function(e){return n.diaSelecionado=e}))("change",(function(){return n.getDiaSelecionado()})),p.Mb(),p.Nb(3,"p"),p.qc(4),p.Yb(5,"date"),p.Mb(),p.Lb(6,"router-outlet")),2&e&&(p.zb(2),p.cc("type","date")("ngModel",n.diaSelecionado),p.zb(2),p.sc("dia: ",p.Zb(5,3,n.diaSelecionado,"d/MM/yyyy"),""))},directives:[f.a,f.f,f.h,l.e],pipes:[s.d],styles:[""]}),r),children:[{path:":date",component:b}]}],h=((d=function n(){e(this,n)}).\u0275mod=p.Ib({type:d}),d.\u0275inj=p.Hb({factory:function(e){return new(e||d)},imports:[[l.d.forChild(y)],l.d]}),d),w=((u=function n(){e(this,n)}).\u0275mod=p.Ib({type:u}),u.\u0275inj=p.Hb({factory:function(e){return new(e||u)},providers:[],imports:[[s.b,f.e,h]]}),u)}}])}();