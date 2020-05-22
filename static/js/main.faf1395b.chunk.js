(this["webpackJsonpgame-in-dots"]=this["webpackJsonpgame-in-dots"]||[]).push([[0],{63:function(e,t,a){e.exports=a(89)},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),s=a.n(o),l=a(24),c=a.n(l),i=a(34),d=a(35),u=a(36),m=a(42),h=a(41),p=a(122),f=a(118),g=a(124),b=a(121),v=a(119),S=a(120),w=function(e){return{Input:{width:200,marginRight:15,color:"#7b8d93",fontSize:14,backgroundColor:"#d0d8dc",paddingLeft:10,borderRadius:4,height:40,"&:before":{content:"none"}},PanelWrapper:{display:"flex",flexDirection:"row",margin:50,alignItems:"baseline","& div:focus":{background:"none"}},Select:{width:200,textAlign:"left",marginRight:15,color:"#7b8d93",fontSize:14,borderRadius:4,height:40,paddingLeft:10,backgroundColor:"#d0d8dc"},Button:{width:150,height:40,backgroundColor:"#7b8d93",color:"#fff",fontWeight:"bold",fontSize:14,"&:hover":{backgroundColor:"#d0d8dc"}}}},C=a(4);var k=Object(C.a)(w)((function(e){var t=e.classes,a=e.handleChangeMode,n=e.handleChangeName,o=e.settings,s=e.mode,l=e.name,c=e.handleStartGame,i=e.showWinner,d=e.startGame,u=e.handleRestartGame;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.PanelWrapper},r.a.createElement(f.a,{disabled:d,className:t.formControl},r.a.createElement(g.a,{className:t.label,htmlFor:"simple"},"Pick Game Mode"),r.a.createElement(b.a,{className:t.Select,labelId:"simple",id:"simple",value:s,onChange:function(e){return a(e)},disabled:d,disableUnderline:!0,label:"Pick Game Mode"},function(){var e;return Object.keys(o).map((function(t){switch(t){case"easyMode":e="Easy Mode";break;case"normalMode":e="Normal Mode";break;case"hardMode":e="Hard Mode";break;default:e="Pick Game Mode"}return r.a.createElement(p.a,{key:t,value:t},e)}))}())),r.a.createElement(v.a,{className:t.Input,value:l,onChange:function(e){return n(e)},disableUnderline:!0}),!i&&r.a.createElement(S.a,{className:t.Button,onClick:c,disabled:"Pick Game Mode"===s||d},"PLAY"),i&&r.a.createElement(S.a,{className:t.Button,onClick:u,disabled:"Pick Game Mode"===s||d},"PLAY AGAIN")))})),E=a(31),y=a.n(E),G=function(e){return{resultContainer:{backgroundColor:"#D0D8DC",height:55,width:400,padding:"0px 5px 0px 20px",boxSizing:"border-box",display:"flex",alignItems:"center",marginBottom:4,flexDirection:"row",justifyContent:"space-between",color:"#7b8d93;"},title:{color:"#7b8d93"}}},M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).createTime=function(){return(new Date).getHours()+":"+(new Date).getMinutes()+"; "+(new Date).getDate()+" "+(new Date).toLocaleString("en-us",{month:"long"})+" "+(new Date).getFullYear()},n.saveWinner=function(){var e=n.props,t=e.computerScore,a=e.userScore,r=e.name,o={winner:t>a?"Computer":r,date:n.createTime()};y.a.post("https://starnavi-frontend-test-task.herokuapp.com/winners",o).then((function(e){n.setState({winners:e.data})}))},n.state={winners:[]},n}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.showWinner!==e.showWinner&&this.saveWinner()}},{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(i.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()("https://starnavi-frontend-test-task.herokuapp.com/winners");case 2:a=t.sent,e.setState({winners:a.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.state.winners,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",{className:t.title},"Leader Board"),e&&e.map((function(e){return r.a.createElement("div",{className:t.resultContainer,key:e.id},e.winner,r.a.createElement("span",null,e.date))})))}}]),a}(n.Component),x=Object(C.a)(G)(M),W=function(e){return{scoreWrapper:{marginTop:50,fontSize:14,color:"#7b8d93"}}},N=Object(C.a)(W)((function(e){var t=e.userScore,a=e.computerScore,n=e.classes;return r.a.createElement("div",{className:n.scoreWrapper},r.a.createElement("div",null,"User: ".concat(t)),r.a.createElement("div",null,"Computer: ".concat(a)))})),j=function(e){return{boardWrapper:{display:"grid"},cell:{border:"1px solid grey",width:25,height:25,padding:0,minWidth:20,borderRadius:0},blue:{backgroundColor:"#42d8e8"},green:{backgroundColor:"#00e871"},red:{backgroundColor:"#E85B5F"}}},O=Object(C.a)(j)((function(e){for(var t=e.field,a=e.classes,n=e.cells,o=e.setCells,s=e.addUserScore,l="",c="",i=0;i<t;i++)l+=" 25px",c+=" 25px";var d={width:25*t+"px",gridTemplateColumns:l,gridTemplateRows:c};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.boardWrapper,style:d},n&&n.map((function(e){return r.a.createElement(S.a,{onClick:function(){return function(e){n[e.number].color="green",n[e.number].selected=!0,o(n),s()}(e)},className:(t=e.color,"green"===t?a.green+" "+a.cell:"blue"===t?a.blue+" "+a.cell:"red"===t?a.red+" "+a.cell:"none"===t?a.cell:void 0),key:Math.random(),disabled:e.disabled}," ");var t}))))})),D=function(e){for(var t=[],a=0;a<e*e;a++)t.push(a);return D=t.map((function(e,t){return{disabled:!0,selected:!1,number:t,color:"none"}}))},P=D,R=function(e){return{wrapper:{display:"flex",justifyContent:"center",fontFamily:"Open Sans, sans-serif"},mainContent:{display:"flex",flexDirection:"column",alignItems:"center"}}},B=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleStartGame=function(){e.setState({startGame:!0}),e.startGame()},e.handleRestartGame=function(){e.setState({userScore:0,computerScore:0,showWinner:!1,startGame:!0,counter:0,cells:P(e.state.field)},(function(){return e.startGame()}))},e.addCounter=function(){e.setState({counter:e.state.counter+1})},e.addUserScore=function(){e.setState({userScore:e.state.userScore+10}),e.addCounter()},e.addComputerScore=function(){e.setState({computerScore:e.state.computerScore+10}),e.addCounter()},e.getRandomCell=function(){var t=e.state.cells.filter((function(e){return!e.selected}));return t[Math.floor(Math.random()*t.length)]},e.startGame=function(){var t=e.state.field,a=e.state.counter,n=e.state.cells;if(a<Math.floor(t*t/2)){var r=e.getRandomCell();r.disabled=!1,r.color="blue",n[r.number]=r,e.setCells(n),setTimeout((function(){!0!==r.selected&&(r.color="red",r.selected=!0,r.disabled=!0,n[r.number]=r,e.setCells(n),e.addComputerScore()),e.startGame()}),e.state.delay)}else e.setState({showWinner:!0,startGame:!1})},e.renderWinner=function(){return e.state.computerScore>e.state.userScore?r.a.createElement("div",null,"Computer wins!"):r.a.createElement("div",null,e.state.name," wins! ")},e.handleChangeMode=function(t){var a=e.state.settings,n=a[t.target.value].field;e.setState({cells:P(n),field:a[t.target.value].field,delay:a[t.target.value].delay,mode:t.target.value})},e.setCells=function(t){e.setState({cells:t})},e.handleChangeName=function(t){e.setState({name:t.target.value})},e.state={settings:[],mode:"Pick Game Mode",name:"User Name",field:0,delay:0,startGame:!1,cells:[],counter:0,userScore:0,computerScore:0,showWinner:!1,time:0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(i.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()("https://starnavi-frontend-test-task.herokuapp.com/game-settings");case 2:a=t.sent,e.setState({settings:a.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.state,t=e.settings,a=e.field,n=e.delay,o=e.startGame,s=e.cells,l=e.name,c=e.mode,i=e.showWinner,d=e.disablePlayButton,u=e.computerScore,m=e.userScore,h=this.props.classes;return r.a.createElement("div",{className:h.wrapper},r.a.createElement("div",{className:h.mainContent},r.a.createElement(k,{settings:t,name:l,mode:c,handleChangeMode:this.handleChangeMode,handleChangeName:this.handleChangeName,handleStartGame:this.handleStartGame,handleRestartGame:this.handleRestartGame,showWinner:i,startGame:o,disablePlayButton:d}),r.a.createElement("div",null,i?this.renderWinner():null),r.a.createElement(O,{field:a,delay:n,startGame:o,cells:s,setCells:this.setCells,addUserScore:this.addUserScore}),r.a.createElement(N,{computerScore:u,userScore:m})),r.a.createElement(x,{showWinner:i,name:l,userScore:m,computerScore:u}))}}]),a}(n.Component),U=Object(C.a)(R)(B);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.faf1395b.chunk.js.map