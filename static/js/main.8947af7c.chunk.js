(this["webpackJsonptcc-app"]=this["webpackJsonptcc-app"]||[]).push([[0],{40:function(e,t,a){e.exports=a(65)},46:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(45),a(46),a(8)),s=a(16),i=a(7),u=a(12),m=a(14),d=a(13),v=a(15),f=a(6),p=a.n(f),b=(a(49),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card-container"},r.a.createElement(o.b,{className:"btn btn-primary btn-lg btn-block btn-main",to:"/cadastro"},"Cadastrar Provas"),r.a.createElement(o.b,{className:"btn btn-info btn-lg btn-block btn-main",to:"/provas"},"Provas Cadastradas (SPACE)"),r.a.createElement(p.a,{handleKeys:["space"],onKeyEvent:function(){return e.props.history.push("/provas")}}))))}}]),t}(n.Component)),h=Object(s.g)(b),E=a(17),y=(a(51),a(38)),N=a(67),g=a(68),k=a(69),O=a(72),C=a(70),j=a(71),x=function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(N.a,{color:"dark",dark:!0,expand:"sm"},r.a.createElement(g.a,{href:"/"},"TCC"),r.a.createElement(k.a,{onClick:function(){return c(!l)}}),r.a.createElement(O.a,{isOpen:l,navbar:!0},r.a.createElement(C.a,{className:"mx-auto",navbar:!0},r.a.createElement(j.a,null,r.a.createElement(o.b,{className:e.prova?"btn btn-primary ml-1 disabled":"btn btn-primary ml-1",to:"/provas"},"Provas")),r.a.createElement(j.a,null,r.a.createElement(o.b,{className:e.cad?"btn btn-primary ml-1 disabled":"btn btn-primary ml-1",to:"/cadastro"},"Cadastrar Prova"))))))},q=a(24),P=a.n(q),w=(a(59),P.a.initializeApp({apiKey:"AIzaSyCfo84ei_WwIGTWkX5VH4Le8KfEQZ2qunQ",authDomain:"react-firebase-a77b2.firebaseapp.com",databaseURL:"https://react-firebase-a77b2.firebaseio.com",projectId:"react-firebase-a77b2",storageBucket:"react-firebase-a77b2.appspot.com",messagingSenderId:"887283175925",appId:"1:887283175925:web:3c8e801d920ca6940250bc"}),P.a.database()),S=function e(){Object(i.a)(this,e)};S.getDataList=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=w.ref(e).limitToLast(a);return n.on("value",(function(e){var a=[];e.forEach((function(e){var t=e.val();t.key=e.key,a.push(t)})),t(a)})),n},S.pushData=function(e,t){var a=w.ref(e).push(),n=w.ref(e).push().key;return a.set(t),n},S.remove=function(e,t){return w.ref(t+"/"+e).remove()},S.getUniqueDataBy=function(e,t,a){console.log(t,e);var n=w.ref(e+"/"+t),r={};n.once("value",(function(e){if(e&&void 0!==e&&e.val()&&void 0!==e.val()){console.log("passou");var t=e.val();Object.keys(t).forEach((function(e){r[e]=t[e]}))}else a(null)})).then((function(){a(r)}))};var K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).submitForm=function(e){e.preventDefault();for(var t=Object(E.a)(a),n=t.nome,r=t.nomeProva,l=t.numero_questoes,c=[],o=1;o<=l;o++){var s={label:"",alternativa:""};s.label=o,s.alternativa="",c.push(s)}S.pushData("provas",{nome:n,nomeProva:r,questoes:c}),a.props.history.push("/provas")},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{cad:!0}),r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-content"},r.a.createElement("h3",null,"Cadastro"),r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h3",{className:"card-title"},"Digite o seu nome:"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-control-lg",name:"nome",onChange:function(t){return e.nome=t.target.value},type:"text"})),r.a.createElement("h3",{className:"card-title"},"Digite o nome da Prova:"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-control-lg",name:"nomeProva",onChange:function(t){return e.nomeProva=t.target.value},type:"text"})),r.a.createElement("h3",{className:"card-title"},"Digite a quantidade quest\xf5es desejada:"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control form-control-lg",placeholder:"N\xba de Quest\xf5es",name:"questoes",onChange:function(t){return e.numero_questoes=t.target.value},type:"text"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",type:"submit"},"Cadastrar Prova"))))))}}]),t}(n.Component),A=Object(s.g)(K),D=a(37),T=(a(62),a(39)),I=(a(63),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).goToPrevSlide=function(){0!==a.state.currentIndex&&a.setState((function(e){return{currentIndex:e.currentIndex-1,questaoAtual:e.questaoAtual-1,translateValue:e.translateValue+a.slideWidth()}}))},a.goToNextSlide=function(){if(a.state.currentIndex===a.props.questoes.length-1)return a.setState({currentIndex:0,translateValue:0,questaoAtual:1});a.setState((function(e){return{currentIndex:e.currentIndex+1,questaoAtual:e.questaoAtual+1,translateValue:e.translateValue+-a.slideWidth()}}))},a.slideWidth=function(){return document.querySelector(".slide").clientWidth},a.confirmaQuestao=function(e){console.log(e),""===a.props.questoes.filter((function(t){return t.label===e}))[0].alternativa?console.log("vazio"):a.goToNextSlide()},a.handleKey=function(e){var t=e.which||e.charCode||e.keyCode;if(9===t)return e.preventDefault&&e.preventDefault(),!1;193!==t&&222!==t&&187!==t||a.props.handleClick("E",a.state.questaoAtual)},a.state={currentIndex:0,translateValue:0,questao:0,questaoAtual:1,alternativa:""},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.questaoAtual;return r.a.createElement("div",{className:"slider"},r.a.createElement("div",{className:"slider-wrapper",style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 0.45s"}},this.props.questoes.map((function(a){return r.a.createElement(Q,{key:a.label,questao:a.label,handleClick:e.props.handleClick,questaoAtual:t})}))),r.a.createElement(V,{goToPrevSlide:this.goToPrevSlide}),r.a.createElement(B,{goToNextSlide:function(){return e.confirmaQuestao(t)}}),r.a.createElement(W,{goToNextSlide:this.goToNextSlide}),r.a.createElement(p.a,{handleKeys:["ctrl","z","shift"],onKeyEvent:this.goToPrevSlide}),r.a.createElement(p.a,{handleKeys:["up","right","down","left"],onKeyEvent:this.goToNextSlide}),r.a.createElement(p.a,{handleKeys:["tab","q","w","1","2","3"],onKeyEvent:function(){return e.props.handleClick("A",t)}}),r.a.createElement(p.a,{handleKeys:["e","r","t","4","5","6"],onKeyEvent:function(){return e.props.handleClick("B",t)}}),r.a.createElement(p.a,{handleKeys:["y","u","i","7","8","9"],onKeyEvent:function(){return e.props.handleClick("C",t)}}),r.a.createElement(p.a,{handleKeys:["o","p","backspace",";"],onKeyEvent:function(){return e.props.handleClick("D",t)}}),r.a.createElement(p.a,{handleKeys:["ins","del","7"],onKeyEvent:function(){return e.props.handleClick("E",t)}}),r.a.createElement(p.a,{handleKeys:["x","c","v","b","n","m","space"],onKeyEvent:function(){return e.confirmaQuestao(t)}}),r.a.createElement(p.a,{handleKeys:["all"],onKeyEvent:function(t,a){return e.handleKey(a)}}),r.a.createElement(p.a,{handleKeys:["all"],onKeyEvent:function(e,t){return console.log(e,t.keyCode)}}))}}]),t}(n.Component)),Q=function(e){var t=e.questao,a=e.questaoAtual,n=e.handleClick;Object(T.a)(e,["questao","questaoAtual","handleClick"]);return r.a.createElement("div",{className:"slide slide-".concat(t)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"text-center text-white"},"Quest\xe3o Atual: ",a))),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"alternativa"},r.a.createElement("div",{className:"btn btn-alternativa vermelho",onClick:function(){return n("A",t)},onKeyUp:function(){return n("A",t)}}," A")),r.a.createElement("div",{className:"alternativa"},r.a.createElement("div",{className:"btn btn-alternativa azul",onClick:function(){return n("B",t)}},"B")),r.a.createElement("div",{className:"alternativa"},r.a.createElement("div",{className:"btn btn-alternativa verde",onClick:function(){return n("C",t)}},"C")),r.a.createElement("div",{className:"alternativa"},r.a.createElement("div",{className:"btn btn-alternativa amarelo",onClick:function(){return n("D",t)}},"D")),r.a.createElement("div",{className:"alternativa"},r.a.createElement("div",{className:"btn btn-alternativa marrom",onClick:function(){return n("E",t)}},"E")))))},V=function(e){return r.a.createElement("div",{className:"backArrow arrow",onClick:e.goToPrevSlide},r.a.createElement("i",{className:"fas fa-arrow-left fa-2x","aria-hidden":"true"}))},B=function(e){return r.a.createElement("div",{className:"btn buttonConfirmContent",onClick:e.goToNextSlide},"Confirmar")},W=function(e){return r.a.createElement("div",{className:"nextArrow arrow",onClick:e.goToNextSlide},r.a.createElement("i",{className:"fas fa-arrow-right fa-2x","aria-hidden":"true"}))},_=I;function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={nome:"",nomeProva:"",questoes:[],questaoAtual:1},a.handleClick=a.handleClick.bind(Object(E.a)(a)),a.handleQuestion=a.handleQuestion.bind(Object(E.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;S.getUniqueDataBy("provas",t,(function(t){return e.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(D.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t),(function(){return console.log(e.state)}))}))}},{key:"handleClick",value:function(e,t){var a=this.state.questoes;a[t-1].alternativa=e,this.setState({questoes:a})}},{key:"handleQuestion",value:function(e){this.setState({questaoAtual:e})}},{key:"render",value:function(){var e=this.state,t=e.nome,a=e.nomeProva,n=e.questoes;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card text-center  shadow-sm"},r.a.createElement("h1",null,"Aluno: ",t," "),r.a.createElement("h1",null,"Nome da Prova: ",a," "),r.a.createElement("div",{className:"d-flex justify-content-center"},n.map((function(e){return r.a.createElement("div",{key:e.label,className:"gabarito"},r.a.createElement("h3",null,e.label),r.a.createElement("h3",null,e.alternativa))}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"teclado"},r.a.createElement(_,{questoes:n,handleClick:this.handleClick,handleQuestion:this.handleQuestion}))))))}}]),t}(n.Component),L=(a(64),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r))))._isMounted=!1,a.state={data:[]},a.remove=function(e){S.remove(e,"provas")},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,this._isMounted&&S.getDataList("provas",(function(t){return e.setState({data:t})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state.data;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{prova:!0}),r.a.createElement("div",{className:"container mt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"Provas"),r.a.createElement("div",{className:"row"},t.map((function(t){return r.a.createElement("div",{className:"col-md-6",key:t.key},r.a.createElement("div",{className:"card card-prova"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,t.nomeProva,r.a.createElement("small",null," - ",t.nome))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-md-6 mr-auto"},r.a.createElement("button",{className:"btn btn-danger ml-auto",onClick:function(){return e.remove(t.key)}},"Excluir Prova")),r.a.createElement("div",{className:"col-4 col-md-6"},r.a.createElement(o.b,{className:"btn btn-success",to:"/prova/".concat(t.key)},"Iniciar Prova"))))))})))))))}}]),t}(n.Component)),U=function(e){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:h}),r.a.createElement(s.b,{exact:!0,path:"/prova/:id",component:z}),r.a.createElement(s.b,{exact:!0,path:"/provas",component:L}),r.a.createElement(s.b,{exact:!0,path:"/cadastro",component:A}),r.a.createElement(s.a,{from:"*",to:"/"}))};c.a.render(r.a.createElement((function(e){return r.a.createElement(o.a,null,r.a.createElement(U,null))}),null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8947af7c.chunk.js.map