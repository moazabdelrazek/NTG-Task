import './polyfills.server.mjs';
import{j as f}from"./chunk-AZZRCVSA.mjs";import{H as o,Ja as d,L as n,Za as y,_ as i,f as p,gb as m,hb as u,ib as l,y as r,ya as c}from"./chunk-ZTKNXPU6.mjs";var P=class s{IsLoading=!1;Services$=new p([]);GetData$=this.Services$.pipe(o(e=>this.IsLoading=!0),r(2e3),o(e=>this.IsLoading=!1));constructor(){let e=[{id:1,name:"Property Exchange",code:"p-t033",type:2,status:1},{id:2,name:"Property Transfer",code:"p-t075",type:3,status:0},{id:3,name:"Property Rent",code:"p-t063",type:2,status:0},{id:4,name:"Property Sale",code:"p-t050",type:2,status:1},{id:5,name:"Property Lease",code:"p-t023",type:1,status:0},{id:6,name:"Property Rent",code:"p-t090",type:-1,status:-1},{id:7,name:"Property Transfer",code:"p-t014",type:1,status:1},{id:8,name:"Property Lease",code:"p-t032",type:2,status:0},{id:9,name:"Property Transfer",code:"p-t062",type:2,status:1},{id:10,name:"Property Sale",code:"p-t026",type:3,status:1},{id:11,name:"Property Sale",code:"p-t098",type:1,status:0},{id:12,name:"Property Sale",code:"p-t061",type:3,status:1},{id:13,name:"Property Transfer",code:"p-t015",type:1,status:1},{id:14,name:"Property Lease",code:"p-t098",type:1,status:1},{id:15,name:"Property Lease",code:"p-t091",type:2,status:0},{id:16,name:"Property Exchange",code:"p-t023",type:2,status:1},{id:17,name:"Property Sale",code:"p-t025",type:2,status:0},{id:18,name:"Property Exchange",code:"p-t035",type:2,status:0},{id:19,name:"Property Transfer",code:"p-t096",type:3,status:1},{id:20,name:"Property Exchange",code:"p-t057",type:3,status:0},{id:21,name:"Property Lease",code:"p-t031",type:2,status:0},{id:22,name:"Property Transfer",code:"p-t080",type:3,status:0},{id:23,name:"Property Rent",code:"p-t069",type:1,status:1},{id:24,name:"Property Transfer",code:"p-t055",type:2,status:0},{id:25,name:"Property Transfer",code:"p-t026",type:3,status:1},{id:26,name:"Property Transfer",code:"p-t040",type:2,status:0},{id:27,name:"Property Exchange",code:"p-t040",type:1,status:1},{id:28,name:"Property Lease",code:"p-t069",type:3,status:1},{id:29,name:"Property Lease",code:"p-t042",type:2,status:1},{id:30,name:"Property Sale",code:"p-t034",type:3,status:1}];this.Update(e)}Update(e){this.Services$.next(e)}GetById(e){let t=this.Services$.value.find(a=>a.id==e);return t??null}static \u0275fac=function(t){return new(t||s)};static \u0275prov=n({token:s,factory:s.\u0275fac,providedIn:"root"})};var v=class s{Class="";static \u0275fac=function(t){return new(t||s)};static \u0275cmp=d({type:s,selectors:[["app-chevron-down-icon"]],inputs:{Class:[0,"classList","Class"]},decls:2,vars:1,consts:[["width","14","height","8","viewBox","0 0 14 8","fill","none","xmlns","http://www.w3.org/2000/svg",1,"app_icon"],["d","M7.34375 7.375C7.15625 7.5625 6.8125 7.5625 6.625 7.375L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7 6.3125L12.625 0.65625C12.8125 0.46875 13.1562 0.46875 13.3438 0.65625C13.5312 0.84375 13.5312 1.1875 13.3438 1.375L7.34375 7.375Z",3,"ngClass"]],template:function(t,a){t&1&&(i(),m(0,"svg",0),l(1,"path",1),u()),t&2&&(c(),y("ngClass",a.Class))},dependencies:[f],encapsulation:2})};export{P as a,v as b};
