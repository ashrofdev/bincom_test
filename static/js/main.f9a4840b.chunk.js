(this.webpackJsonpbincom_test=this.webpackJsonpbincom_test||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(2),l=n.n(s),o=(n(14),n(3)),r=n(4),i=n(6),u=n(5),m=n(7),P=(n(15),n(16),n(17),function(e){e.onSearch;return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"BINCOM test"),c.a.createElement("p",null,"SHOWING RESULTS FOR PULLING UNIT WITH UNIT UNIQUE ID OF 8"))}),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).findResult=function(){n.setState({clicked:!0}),fetch("https://bincomapi.herokuapp.com/pdp").then((function(e){return e.json()})).then((function(e){console.log(e);var t=0,a=0,c=0,s=0,l=0,o=0,r=0,i=0,u=0;e.PDP.forEach((function(e){t+=e,n.setState({PDP:t}),a+=e,n.setState({ACN:a}),c+=e,n.setState({DPP:c}),s+=e,n.setState({PPA:s}),l+=e,n.setState({CDC:l}),o+=e,n.setState({JP:o}),r+=e,n.setState({ANPP:r}),i+=e,n.setState({LABOUR:i}),u+=e,n.setState({CPP:u})})),console.log(n.state)}))},n.state={search:"",outcome:[],PDP:0,DPP:0,ACN:0,PPA:0,CDC:0,JP:0,ANPP:0,LABOUR:0,CPP:0,clicked:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://bincomapi.herokuapp.com/results").then((function(e){return e.json()})).then((function(t){var n=[];console.log(t),t.forEach((function(e){n.push(e)})),e.setState({outcome:n})})),console.log(this.state.outcome,typeof this.state.outcome)}},{key:"render",value:function(){var e=this.state.outcome.map((function(e){return c.a.createElement("div",{className:"result"},c.a.createElement("p",{className:"party"},e.party_abbreviation),c.a.createElement("p",null,"SCORE:  ",e.party_score),c.a.createElement("p",null,"DATE/TIME:  ",e.date_entered),c.a.createElement("p",null,"IP ADDRESS:  ",e.user_ip_address))}));return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(P,null),c.a.createElement("div",{className:"results"},e),this.state.clicked?c.a.createElement("div",{className:"unit_results"},c.a.createElement("p",null,"PDP: ",this.state.PDP),c.a.createElement("p",null,"DPP: ",this.state.DPP),c.a.createElement("p",null,"ACN: ",this.state.ACN),c.a.createElement("p",null,"PPA: ",this.state.PPA),c.a.createElement("p",null,"CDC: ",this.state.CDC),c.a.createElement("p",null,"JP: ",this.state.JP),c.a.createElement("p",null,"ANPP: ",this.state.ANPP),c.a.createElement("p",null,"LABOUR: ",this.state.LABOUR),c.a.createElement("p",null,"CPP: ",this.state.CPP)):null,c.a.createElement("button",{onClick:this.findResult},"SHOW RESULT FOR ALL PULLING UNITS"),c.a.createElement("footer",null,"\xa9 By Ashraf. Powered by Bincon dev")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.f9a4840b.chunk.js.map