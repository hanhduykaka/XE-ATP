(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),c=(n(16),n(9)),l=n(1),u=n(2),s=n(4),p=n(3),d=n(5),m=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos,n=function(e){return{color:e.completed?"red":"green",textDecoration:e.completed?"line-through":"none",listStyle:"none"}},a=t.map(function(t){return o.a.createElement(o.a.Fragment,{key:t.id},o.a.createElement("li",{style:n(t)},o.a.createElement("span",null,o.a.createElement("input",{type:"checkbox",onChange:e.props.changeCheck.bind(e,t.id)}),t.title,o.a.createElement("button",{style:h,onClick:e.props.editItem.bind(e,t.id)},"Edit"),o.a.createElement("button",{style:b,onClick:e.props.delItem.bind(e,t.id)},"X"))))});return o.a.createElement("ul",null,a)}}]),t}(a.Component),h={color:"blue",cursor:"pointer",margin:5},b={color:"red",cursor:"pointer"},g=m,v=n(8),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).onInputChangeHandle=function(e){var t=e.target,a=t.name,o=t.value;"completed"==a&&(o=e.target.checked),n.setState(Object(v.a)({},a,o))},n.submitForm=function(){n.props.saveChangeItem(n.state),n.setState(n.initialState)},n.initialState={title:"",id:"",completed:!1},e.itemEdit?n.state=e.itemEdit:n.state=n.initialState,n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"title",value:this.state.title,style:E,placeholder:"Input the title!",onChange:this.onInputChangeHandle}),o.a.createElement("input",{type:"checkbox",name:"completed",checked:this.state.completed,style:E,onChange:this.onInputChangeHandle}),o.a.createElement("input",{type:"button",style:f,value:"Save",onClick:this.submitForm}))}}]),t}(a.Component),E={padding:5,margin:"5px 0"},f={background:"#0F0",color:"#FFF",padding:5,cursor:"pointer"},k=y;a.Component,n(17);var C=function(){return o.a.createElement("span",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.42780ec3.chunk.js.map