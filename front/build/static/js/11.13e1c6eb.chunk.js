(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[11],{910:function(a,e,r){"use strict";r.r(e),r.d(e,"ChartJs",(function(){return n}));var t=r(29),s=r(30),c=r(32),i=r(31),d=r(0),l=r(808),b=r(1),n=function(a){Object(c.a)(r,a);var e=Object(i.a)(r);function r(){var a;Object(t.a)(this,r);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(a=e.call.apply(e,[this].concat(c))).data={labels:["2013","2014","2014","2015","2016","2017"],datasets:[{label:"# of Votes",data:[10,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,fill:!1}]},a.options={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},elements:{point:{radius:0}}},a.areaData={labels:["2013","2014","2015","2016","2017"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,fill:!0}]},a.areaOptions={plugins:{filler:{propagate:!0}}},a.doughnutPieData={datasets:[{data:[30,40,30],backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]}],labels:["Pink","Blue","Yellow"]},a.doughnutPieOptions={responsive:!0,animation:{animateScale:!0,animateRotate:!0}},a.scatterChartData={datasets:[{label:"First Dataset",data:[{x:-10,y:0},{x:0,y:3},{x:-25,y:5},{x:40,y:5}],backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255,99,132,1)"],borderWidth:1},{label:"Second Dataset",data:[{x:10,y:5},{x:20,y:-30},{x:-25,y:15},{x:-10,y:5}],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]},a.scatterChartOptions={scales:{xAxes:[{type:"linear",position:"bottom"}]}},a}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"page-header",children:[Object(b.jsx)("h3",{className:"page-title",children:"Chart-js"}),Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)("a",{href:"!#",onClick:function(a){return a.preventDefault()},children:"Charts"})}),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Chart-js"})]})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-6 grid-margin stretch-card",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:"Line Chart"}),Object(b.jsx)(l.Line,{data:this.data,options:this.options})]})})}),Object(b.jsx)("div",{className:"col-md-6 grid-margin stretch-card",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:"Bar Chart"}),Object(b.jsx)(l.Bar,{data:this.data,options:this.options})]})})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-6 grid-margin stretch-card",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:"Area Chart"}),Object(b.jsx)(l.Line,{data:this.areaData,options:this.areaOptions})]})})}),Object(b.jsx)("div",{className:"col-md-6 grid-margin stretch-card",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:"Doughnut Chart"}),Object(b.jsx)(l.Doughnut,{data:this.doughnutPieData,options:this.doughnutPieOptions})]})})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-6 grid-margin stretch-card",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:"Pie Chart"}),Object(b.jsx)(l.Pie,{data:this.doughnutPieData,options:this.doughnutPieOptions})]})})}),Object(b.jsx)("div",{className:"col-md-6 grid-margin stretch-card",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:"Scatter Chart"}),Object(b.jsx)(l.Scatter,{data:this.scatterChartData,options:this.scatterChartOptions})]})})})]})]})}}]),r}(d.Component);e.default=n}}]);
//# sourceMappingURL=11.13e1c6eb.chunk.js.map