const n=[{label:"全部",value:0},{label:"严重",value:1},{label:"高危",value:2},{label:"中危",value:3},{label:"低危",value:4}];function u(e){const t=n.find(l=>l.value===e);return t?t.label:""}function r(e){return e===0?"icon-severe":e===1?"icon-high":e===2?"icon-medium":"icon-default"}function i(){let e=new Date,t=e.getFullYear(),l=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");return`${t}-${l}-${a}`}export{r as a,i as b,u as g,n as v};
