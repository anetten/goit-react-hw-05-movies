"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{7:function(e,t,r){r.r(t);var n=r(861),s=r(439),c=r(757),u=r.n(c),a=r(791),l=r(565),i=r(87),o=r(689),h=r(184);t.default=function(){var e=(0,a.useState)(null),t=(0,s.Z)(e,2),r=t[0],c=t[1],f=(0,i.lr)(),d=(0,s.Z)(f,2),p=d[0],x=d[1],v=(0,o.TH)(),m=p.get("sQuery"),k=(0,a.useState)(null!==m&&void 0!==m?m:""),j=(0,s.Z)(k,2),b=j[0],w=j[1],S=(0,a.useCallback)((0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.S0)(b);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching search results:",e.t0);case 10:x({sQuery:b});case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[b,x]);return(0,a.useEffect)((function(){m&&S()}),[m,S]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Search Movies"}),(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S()},children:[(0,h.jsx)("input",{type:"text",defaultValue:m,onChange:function(e){return w(e.target.value)},required:!0}),(0,h.jsx)("button",{type:"submit",onClick:S,children:"Search"})]}),r?(0,h.jsx)("ul",{children:r.results.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(i.rU,{state:{from:v},to:"/movies/".concat(e.id),children:e.title})},e.id)}))}):(0,h.jsx)("p",{children:"No search results yet."})]})}}}]);
//# sourceMappingURL=7.108670e8.chunk.js.map