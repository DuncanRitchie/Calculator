(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(t,e,a){t.exports=a(10)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),i=a.n(s),n=a(2),l=a.n(n);a(8),a(9);class r extends s.Component{constructor(...t){super(...t),this.state={firstNumber:0,lastOperation:"AC",total:0,arrayOfButtons:[]},this.evaluate=()=>{switch(this.state.lastOperation){case"Plus":this.setState({total:Number(this.state.firstNumber)+Number(this.state.total)}),this.setState({firstNumber:Number(this.state.firstNumber)+Number(this.state.total)});break;case"Minus":this.setState({total:Number(this.state.firstNumber)-Number(this.state.total)}),this.setState({firstNumber:Number(this.state.firstNumber)-Number(this.state.total)});break;case"Times":this.setState({total:Number(this.state.firstNumber)*Number(this.state.total)}),this.setState({firstNumber:Number(this.state.firstNumber)*Number(this.state.total)});break;case"Divide":this.setState({total:Number(this.state.firstNumber)/Number(this.state.total)}),this.setState({firstNumber:Number(this.state.firstNumber)/Number(this.state.total)})}},this.clickButton=t=>{let e;switch(e=""===t.target.id?t.target.parentElement:t.target,console.log(e.id),console.log(this.state.arrayOfButtons),e.id){case"AC":this.setState({firstNumber:0}),this.setState({total:0}),this.setState({lastOperation:"AC"}),this.setState({arrayOfButtons:[]});break;case"PlusMinus":this.setState({total:-1*this.state.total}),this.evaluate();break;case"Percent":this.setState({total:this.state.total/100});break;case"SquareRoot":this.setState({total:Math.sqrt(this.state.total)});break;case"Point":this.setState({total:this.state.total+"."});break;case"Divide":"AC"!==this.state.lastOperation&&"Equals"!==this.state.lastOperation?this.evaluate():this.setState({firstNumber:Number(this.state.total)}),this.setState({lastOperation:"Divide"}),this.setState({total:""});break;case"Times":"AC"!==this.state.lastOperation&&"Equals"!==this.state.lastOperation?this.evaluate():this.setState({firstNumber:Number(this.state.total)}),this.setState({lastOperation:"Times"}),this.setState({total:""});break;case"Minus":"AC"!==this.state.lastOperation&&"Equals"!==this.state.lastOperation?this.evaluate():this.setState({firstNumber:Number(this.state.total)}),this.setState({lastOperation:"Minus"}),this.setState({total:""});break;case"Plus":"AC"!==this.state.lastOperation&&"Equals"!==this.state.lastOperation?this.evaluate():this.setState({firstNumber:Number(this.state.total)}),this.setState({lastOperation:"Plus"}),this.setState({total:""});break;case"Equals":this.evaluate(),this.setState({lastOperation:"Equals"})}"Button"===e.id.substr(0,6)?(0===this.state.total|isNaN(this.state.total)?this.setState({total:e.id.substr(-1)}):this.setState({total:this.state.total.toString()+e.id.substr(-1)}),this.state.arrayOfButtons.push(e.id.substr(-1))):this.state.arrayOfButtons.push(e.id)}}render(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Duncan\u2019s Calculator"),i.a.createElement(c,{total:this.state.total,clickButton:this.clickButton}),i.a.createElement("footer",null,i.a.createElement("li",null,"Made by Duncan Ritchie"),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.github.com/DuncanRitchie/calculator",title:"Code on GitHub"},"See the code")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.duncanritchie.co.uk",title:"My website"},"My website"))))}}const c=t=>i.a.createElement("div",{className:"calculator"},i.a.createElement(o,{total:t.total}),i.a.createElement(u,{clickButton:t.clickButton})),o=t=>i.a.createElement("div",{className:"display"},i.a.createElement("div",null,t.total)),u=t=>i.a.createElement("div",{className:"buttons"},i.a.createElement(h,{id:"AC",innerHTML:"AC",clickButton:t.clickButton}),i.a.createElement(h,{id:"PlusMinus",innerHTML:"\xb1",clickButton:t.clickButton}),i.a.createElement(h,{id:"Percent",innerHTML:"%",clickButton:t.clickButton}),i.a.createElement(h,{id:"Divide",innerHTML:"\xf7",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button7",innerHTML:"7",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button8",innerHTML:"8",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button9",innerHTML:"9",clickButton:t.clickButton}),i.a.createElement(h,{id:"Times",innerHTML:"\xd7",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button4",innerHTML:"4",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button5",innerHTML:"5",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button6",innerHTML:"6",clickButton:t.clickButton}),i.a.createElement(h,{id:"Minus",innerHTML:"-",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button1",innerHTML:"1",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button2",innerHTML:"2",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button3",innerHTML:"3",clickButton:t.clickButton}),i.a.createElement(h,{id:"Plus",innerHTML:"+",clickButton:t.clickButton}),i.a.createElement(h,{id:"Button0",innerHTML:"0",clickButton:t.clickButton}),i.a.createElement(h,{id:"Point",innerHTML:".",clickButton:t.clickButton}),i.a.createElement(h,{id:"SquareRoot",innerHTML:"\u221a",clickButton:t.clickButton}),i.a.createElement(h,{id:"Equals",innerHTML:"=",clickButton:t.clickButton})),h=t=>i.a.createElement("div",{className:"button",id:t.id,onClick:t.clickButton},i.a.createElement("div",null,t.innerHTML));var m=r;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(t=>{t.unregister()})}],[[3,1,2]]]);
//# sourceMappingURL=main.5c67d302.chunk.js.map