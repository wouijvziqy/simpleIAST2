import{x as J,r as K,z as O,A as Z,B as $,E as B}from"./element-12e92669.js";import{n as G,o as Q,p as W}from"./index-110ed2a8.js";import{a as X,g as Y}from"./state-c5255287.js";import{p as ee,r as p,Z as te,ai as s,aq as ae,q as z,t as le,P as D,M as A,O as l,v as u,U as e,u as m,S,I as oe,T as ne}from"./vue-956193f0.js";/* empty css                                                       */import{_ as se}from"./index-e50c813d.js";import"./vxe-c7146e14.js";const re={class:"app-container"},ie={class:"toolbar-wrapper"},pe={class:"table-wrapper"},ce={class:"demo-pagination-block"},ue=ee({__name:"index",setup(de){const d=p(!1),R=p(!1),g=p(),C=p(10),y=p(1),N=p(0),h=p(0),c={pageSize:20,pageNum:1},r=te({hostName:"",state:"-1"}),_=()=>{d.value=!0,G(c).then(a=>{const{pageSize:t,pageNum:f,total:o,pages:v,list:w}=a.data;g.value=w,C.value=t,N.value=v,y.value=f,h.value=o}).catch(()=>{g.value=[]}).finally(()=>{d.value=!1})};_();const x=p();function T(){const a=[];for(const t of x.value)a.push(t.agentId);$.confirm("确定删除?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{B({type:"success",message:"删除成功"}),d.value=!0,Q(a.join(",")).then(()=>{_()}).finally(()=>{d.value=!1})}).catch(()=>{B({type:"info",message:"删除取消"})})}const I=a=>{x.value=a},U=a=>{c.pageSize=a,_()},j=a=>{c.pageNum=a,_()},q=a=>{};function E(){const a=r.hostName,t=r.state;if(t=="-1"&&a==""){_();return}W(a,t).then(f=>{const o=f.data;g.value=o.list,C.value=o.pageSize,N.value=o.pages,y.value=o.pageNum,h.value=o.total}).catch(()=>{g.value=[],C.value=0,N.value=0,y.value=0,h.value=0})}const P=()=>{r.hostName="",r.state="-1"};return(a,t)=>{const f=s("el-input"),o=s("el-form-item"),v=s("el-option"),w=s("el-select"),b=s("el-button"),M=s("el-form"),k=s("el-card"),L=s("el-tooltip"),i=s("el-table-column"),F=s("el-table"),H=s("el-pagination"),V=ae("loading");return z(),le("div",re,[D((z(),A(k,{class:"search-wrapper"},{default:l(()=>[u("div",null,[e(M,{ref:"searchFormRef",inline:!0,model:r},{default:l(()=>[e(o,{prop:"hostName",label:"主机名"},{default:l(()=>[e(f,{modelValue:r.hostName,"onUpdate:modelValue":t[0]||(t[0]=n=>r.hostName=n),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(o,{prop:"state",label:"状态"},{default:l(()=>[e(w,{modelValue:r.state,"onUpdate:modelValue":t[1]||(t[1]=n=>r.state=n),style:{width:"84px"}},{default:l(()=>[e(v,{label:"所有",value:"-1"}),e(v,{label:"在线",value:"1"}),e(v,{label:"离线",value:"0"})]),_:1},8,["modelValue"])]),_:1}),e(o,null,{default:l(()=>[e(b,{type:"primary",icon:m(J),onClick:t[2]||(t[2]=n=>E())},{default:l(()=>[S("查询")]),_:1},8,["icon"]),e(b,{icon:m(K),onClick:P},{default:l(()=>[S("重置")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"])])]),_:1})),[[V,d.value]]),D((z(),A(k,null,{default:l(()=>[u("div",ie,[u("div",null,[e(b,{type:"danger",icon:m(O),onClick:T},{default:l(()=>[S("批量删除")]),_:1},8,["icon"])]),u("div",null,[e(L,{content:"刷新当前页"},{default:l(()=>[e(b,{type:"primary",icon:m(Z),circle:"",onClick:_},null,8,["icon"])]),_:1})])]),u("div",pe,[e(F,{ref:"multipleTableRef",data:g.value,border:"",style:{width:"100%"},"default-sort":{prop:"timestamp",order:"descending"},onSelectionChange:I,onRowClick:q},{default:l(()=>[e(i,{type:"selection",width:"55"}),e(i,{label:"ID",align:"",prop:"agentId",width:"320"}),e(i,{prop:"hostName",label:"主机名",sortable:""}),e(i,{prop:"state",label:"状态",align:"center",sortable:""},{default:l(n=>[u("span",{class:oe(m(X)(n.row.state))},ne(m(Y)(n.row.state)),3)]),_:1}),e(i,{label:"应用路径",prop:"serverPath",align:"serverPath"}),e(i,{label:"Agent版本",prop:"version",align:"version"}),e(i,{label:"JDK",prop:"jdkVersion",align:"jdkVersion"}),e(i,{prop:"timestamp",label:"最近时间",sortable:""})]),_:1},8,["data"])]),u("div",ce,[e(H,{"current-page":c.pageNum,"onUpdate:currentPage":t[3]||(t[3]=n=>c.pageNum=n),"page-size":c.pageSize,"onUpdate:pageSize":t[4]||(t[4]=n=>c.pageSize=n),"page-sizes":[10,20,50,100],small:!1,disabled:R.value,background:!0,layout:"total, sizes, prev, pager, next, jumper",total:h.value,onSizeChange:U,onCurrentChange:j},null,8,["current-page","page-size","disabled","total"])])]),_:1})),[[V,d.value]])])}}});const Ce=se(ue,[["__scopeId","data-v-f3665b34"]]);export{Ce as default};
