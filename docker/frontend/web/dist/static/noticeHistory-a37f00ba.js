import{A as V}from"./element-12e92669.js";import{r as A,A as P}from"./index-110ed2a8.js";import{p as T,r as o,Z as U,ai as s,aq as E,q as d,t as b,P as j,M as f,O as n,v as _,U as a,u as I,R as L,S as h,T as M}from"./vue-956193f0.js";import{_ as O}from"./index-e50c813d.js";import"./vxe-c7146e14.js";const Z={class:"app-container"},$={class:"toolbar-wrapper"},F={style:{float:"right"}},G={class:"table-wrapper"},J={key:0,class:"red-dot"},K={class:"pager-wrapper"},Q=T({name:"ElementPlus",__name:"noticeHistory",setup(W){o();const u=o(),C=o(10),z=o(1),N=o(0),y=o(0),l={pageSize:20,pageNum:1},g=o(!1),S=e=>{l.pageSize=e,c()};function k(e){A(e).then().catch(()=>{}),c()}const c=()=>{g.value=!0,P(l).then(e=>{const{pageSize:i,pageNum:p,total:m,pages:v,list:r}=e.data;u.value=r,C.value=i,N.value=v,z.value=p,y.value=m}).catch(()=>{u.value=[]}).finally(()=>{g.value=!1})};c(),U({operatorName:""});const w=o();function x(e){w.value=e}const R=e=>{l.pageNum=e,c()};return(e,i)=>{const p=s("el-button"),m=s("el-tooltip"),v=s("el-text"),r=s("el-table-column"),q=s("el-table"),B=s("el-pagination"),D=s("el-card"),H=E("loading");return d(),b("div",Z,[j((d(),f(D,{shadow:"never"},{default:n(()=>[_("div",$,[_("div",F,[a(m,{content:"刷新当前页"},{default:n(()=>[a(p,{type:"primary",icon:I(V),circle:"",onClick:c},null,8,["icon"])]),_:1})])]),_("div",G,[a(q,{data:u.value,onSelectionChange:x},{default:n(()=>[a(r,{label:"通知标题",align:"center"},{default:n(t=>[t.row.isRead===0?(d(),b("div",J)):L("",!0),a(v,null,{default:n(()=>[h(M(t.row.title),1)]),_:2},1024)]),_:1}),a(r,{prop:"description",label:"描述",align:"center"}),a(r,{prop:"datetime",label:"时间",align:"center"}),a(r,{prop:"isRead",label:"功能",align:"center"},{default:n(t=>[t.row.isRead===0?(d(),f(p,{key:0,type:"success",round:"",onClick:X=>k(t.row.id)},{default:n(()=>[h("设为已读")]),_:2},1032,["onClick"])):(d(),f(p,{key:1,type:"success",round:""},{default:n(()=>[h("查看")]),_:1}))]),_:1})]),_:1},8,["data"])]),_("div",K,[a(B,{background:"","current-page":l.pageNum,"onUpdate:currentPage":i[0]||(i[0]=t=>l.pageNum=t),"page-size":l.pageSize,"onUpdate:pageSize":i[1]||(i[1]=t=>l.pageSize=t),"page-sizes":[10,20,50,100],small:!1,layout:"total, sizes, prev, pager, next, jumper",total:y.value,onSizeChange:S,onCurrentChange:R},null,8,["current-page","page-size","total"])])]),_:1})),[[H,g.value]])])}}});const ne=O(Q,[["__scopeId","data-v-68dd70b0"]]);export{ne as default};
