(this["webpackJsonpprojeto8-zaprecall"]=this["webpackJsonpprojeto8-zaprecall"]||[]).push([[0],{14:function(e,s,a){"use strict";a.r(s);var n=a(7),c=a.n(n),t=a(2),r=a(1),i=a(0);var o=function(e){var s=e.visible,a=e.setVisible,n=(e.deckAndMeta,e.setDeckAndMeta),c=Object(r.useState)(""),o=Object(t.a)(c,2),l=o[0],d=o[1],u=Object(r.useState)(""),j=Object(t.a)(u,2),m=j[0],b=j[1];return!0===s?Object(i.jsxs)("div",{className:"home-page",children:[Object(i.jsx)("img",{src:"assets/imgs/logo-zaprecall.png",alt:"logo-zaprecall"}),Object(i.jsx)("h1",{children:"ZapRecall"}),Object(i.jsxs)("select",{className:"decks",id:"decks",onChange:function(e){return b(e.target.value)},children:[Object(i.jsx)("option",{value:"",children:"Escolha seu deck"}),Object(i.jsx)("option",{value:"jsx",children:"JSX"}),Object(i.jsx)("option",{value:"css",children:"CSS"})]}),Object(i.jsx)("input",{type:"number",min:"0",max:"8",placeholder:"Digite sua meta de zaps...",onChange:function(e){return d(e.target.value)}}),Object(i.jsx)("button",{onClick:function(){""!==m?parseInt(l)>8?alert("A meta m\xe1xima de Zaps \xe9 8"):(a(!1),n({deck:m,meta:l})):alert("Selecione um deck v\xe1lido")},children:"Iniciar Recall!"})]}):Object(i.jsx)(i.Fragment,{})},l=a(8);var d=function(){return Object(i.jsxs)("header",{children:[Object(i.jsx)("img",{src:"assets/imgs/logo-zaprecall.png",alt:"logo-zaprecall"}),Object(i.jsx)("h1",{children:"ZapRecall"})]})},u=a(5);var j=function(e){var s=e.contador,a=e.setContador,n=e.iconsAnswers,c=e.setIconsAnswers,o=e.questionNumber,l=e.question,d=e.answer,j=Object(r.useState)("questionsList"),m=Object(t.a)(j,2),b=m[0],p=m[1];return"questionsList"===b?Object(i.jsxs)("div",{className:"flash-card",children:[Object(i.jsx)("p",{children:"Pergunta ".concat(o)}),Object(i.jsx)("ion-icon",{name:"play-outline",onClick:function(){p("question")}})]}):"question"===b?Object(i.jsxs)("div",{className:"flash-card-question",children:[Object(i.jsx)("p",{children:l}),Object(i.jsx)("img",{src:"assets/imgs/flip-flashcard-icon.png",alt:"flip-card-icon",onClick:function(){return p("answer")}})]}):"answer"===b?Object(i.jsxs)("div",{className:"flash-card-answer",children:[Object(i.jsx)("p",{children:d}),Object(i.jsxs)("div",{className:"buttons-answer",children:[Object(i.jsx)("button",{className:"nao-lembrei",onClick:function(){a(s+1),p("answered-nao-lembrei"),c([].concat(Object(u.a)(n),[Object(i.jsx)("ion-icon",{id:"nao-lembrei",name:"close-circle"})]))},children:"N\xe3o lembrei"}),Object(i.jsx)("button",{className:"quase-lembrei",onClick:function(){a(s+1),p("answered-quase-lembrei"),c([].concat(Object(u.a)(n),[Object(i.jsx)("ion-icon",{id:"quase-lembrei",name:"help-circle"})]))},children:"Quase n\xe3o lembrei"}),Object(i.jsx)("button",{className:"zap",onClick:function(){a(s+1),p("answered-zap"),c([].concat(Object(u.a)(n),[Object(i.jsx)("ion-icon",{id:"zap",name:"checkmark-circle"})]))},children:"Zap!"})]})]}):"answered-nao-lembrei"===b?Object(i.jsxs)("div",{className:"flash-card-answered nao-lembrei",children:[Object(i.jsx)("p",{children:"Pergunta ".concat(o)}),Object(i.jsx)("ion-icon",{name:"close-circle"})]}):"answered-quase-lembrei"===b?Object(i.jsxs)("div",{className:"flash-card-answered quase-lembrei",children:[Object(i.jsx)("p",{children:"Pergunta ".concat(o)}),Object(i.jsx)("ion-icon",{name:"help-circle"})]}):"answered-zap"===b?Object(i.jsxs)("div",{className:"flash-card-answered zap",children:[Object(i.jsx)("p",{children:"Pergunta ".concat(o)}),Object(i.jsx)("ion-icon",{name:"checkmark-circle"})]}):void 0},m=[],b=0;var p=function(e){var s=e.contador,a=(e.setContador,e.iconsAnswers),n=(e.setIconsAnswers,e.meta);function c(){document.location.reload(!0)}if(e.deDeckAndMeta,e.setDeckAndMeta,e.setVisible,8!==s)return Object(i.jsxs)("footer",{children:[Object(i.jsxs)("p",{children:[s,"/",8," CONCLU\xcdDOS"]}),Object(i.jsx)("div",{className:"icons-answer",children:a.map((function(e){return e}))})]});for(var t=0;t<a.length;t++){var r=a[t].props.id;m.push(r)}for(var o=0;o<m.length;o++)"zap"===m[o]&&(b+=1);return!0===m.includes("nao-lembrei")?""===n?Object(i.jsxs)("footer",{className:"final-msg",children:[Object(i.jsxs)("p",{children:["\ud83d\ude22 ",Object(i.jsx)("span",{children:"PUTZ!"})]}),Object(i.jsx)("p",{children:"Ainda faltaram alguns... Mas n\xe3o desanime!"}),Object(i.jsx)("div",{className:"icons-answer",children:a.map((function(e){return e}))}),Object(i.jsx)("button",{className:"reiniciar",onClick:c,children:"REINICAR RECALL"})]}):b>=parseInt(n)?Object(i.jsxs)("footer",{className:"final-msg",children:[Object(i.jsxs)("p",{children:["\ud83d\ude22 ",Object(i.jsx)("span",{children:"PUTZ!"})]}),Object(i.jsx)("p",{children:"Ainda faltaram alguns... Mas n\xe3o desanime!"}),Object(i.jsx)("p",{children:"Lado bom? Voc\xea atingiu sua meta de Zaps!"}),Object(i.jsx)("div",{className:"icons-answer",children:a.map((function(e){return e}))}),Object(i.jsx)("button",{className:"reiniciar",onClick:c,children:"REINICAR RECALL"})]}):Object(i.jsxs)("footer",{className:"final-msg",children:[Object(i.jsxs)("p",{children:["\ud83d\ude22 ",Object(i.jsx)("span",{children:"PUTZ!"})]}),Object(i.jsx)("p",{children:"Ainda faltaram alguns... Mas n\xe3o desanime!"}),Object(i.jsx)("p",{children:"Meta de Zaps n\xe3o atingida! N\xe3o desanime, a pr\xe1tica leva a perfei\xe7\xe3o!"}),Object(i.jsx)("div",{className:"icons-answer",children:a.map((function(e){return e}))}),Object(i.jsx)("button",{className:"reiniciar",onClick:c,children:"REINICAR RECALL"})]}):""===n?Object(i.jsxs)("footer",{className:"final-msg",children:[Object(i.jsxs)("p",{children:["\ud83e\udd73 ",Object(i.jsx)("span",{children:"PARAB\xc9NS!"})]}),Object(i.jsx)("p",{children:"Voc\xea n\xe3o esqueceu de nenhum flashcard!"}),Object(i.jsx)("div",{className:"icons-answer",children:a.map((function(e){return e}))}),Object(i.jsx)("button",{className:"reiniciar",onClick:c,children:"REINICAR RECALL"})]}):b>=parseInt(n)?Object(i.jsxs)("footer",{className:"final-msg",children:[Object(i.jsxs)("p",{children:["\ud83e\udd73 ",Object(i.jsx)("span",{children:"PARAB\xc9NS!"})]}),Object(i.jsx)("p",{children:"Voc\xea n\xe3o esqueceu de nenhum flashcard!"}),Object(i.jsx)("p",{children:"Quer ficar mais feliz ainda? Atingiu sua meta de Zaps!"}),Object(i.jsx)("div",{className:"icons-answer",children:a.map((function(e){return e}))}),Object(i.jsx)("button",{className:"reiniciar",onClick:c,children:"REINICAR RECALL"})]}):Object(i.jsxs)("footer",{className:"final-msg",children:[Object(i.jsxs)("p",{children:["\ud83e\udd73 ",Object(i.jsx)("span",{children:"PARAB\xc9NS!"})]}),Object(i.jsx)("p",{children:"Voc\xea n\xe3o esqueceu de nenhum flashcard!"}),Object(i.jsx)("p",{children:"A meta de Zaps n\xe3o foi atingida, mas estamos quase l\xe1!"}),Object(i.jsx)("div",{className:"icons-answer",children:a.map((function(e){return e}))}),Object(i.jsx)("button",{className:"reiniciar",onClick:c,children:"REINICAR RECALL"})]})};function O(){return Math.random()-.5}var h=Object(l.a)({},{jsx:[{question:"O que \xe9 JSX?",answer:"Uma extens\xe3o de linguagem do JavaScript"},{question:"O React \xe9 __ ",answer:"uma biblioteca JavaScript para constru\xe7\xe3o de interfaces"},{question:"Componentes devem iniciar com __",answer:"letra mai\xfascula"},{question:"Podemos colocar __ dentro do JSX",answer:"express\xf5es"},{question:"O ReactDOM nos ajuda __ ",answer:"interagindo com a DOM para colocar componentes React na mesma"},{question:"Usamos o npm para __",answer:"gerenciar os pacotes necess\xe1rios e suas depend\xeancias"},{question:"Usamos props para __",answer:"passar diferentes informa\xe7\xf5es para componentes"},{question:"Usamos estado (state) para __",answer:"dizer para o React quais informa\xe7\xf5es quando atualizadas devem renderizar a tela novamente"}],css:[{question:"Como voc\xea sublinha o texto?",answer:"text-decoration: underline;"},{question:"Na hierarquia das regras CSS, qual \xe9 a sempre usada?",answer:"a mais espec\xedfica"},{question:"Qual a fun\xe7\xe3o do Reset CSS?",answer:"\xc9 um arquivo que \u201climpa\u201d os estilos padr\xf5es de todos os elementos HTML que j\xe1 possuem uma formata\xe7\xe3o padr\xe3o"},{question:"Qual a extens\xe3o dos arquivos CSS?",answer:".css"},{question:"Como podemos se conectar a um arquivo de estilos externo?",answer:"Usando a tag <link></link>"},{question:"Como fazer uma linha horizontal acima do elemento selecionado?",answer:"border: bottom: 1 px solid black;"},{question:"O que faz o valor border-box para box-sizing?",answer:"O box-sizing com o valor border-box faz com que o navegador n\xe3o calcule a dimens\xe3o de um elemento somando bordas e margens com altura e largura."},{question:"Qual a sintaxe da pseudo-classe que seleciona o n-\xe9simo elemento em um grupo de elementos?",answer:"elemento:nth-child()"}]});h.jsx.sort(O),h.css.sort(O);var x=[{questionNumber:1,question:"",answer:""},{questionNumber:2,question:"",answer:""},{questionNumber:3,question:"",answer:""},{questionNumber:4,question:"",answer:""},{questionNumber:5,question:"",answer:""},{questionNumber:6,question:"",answer:""},{questionNumber:7,question:"",answer:""},{questionNumber:8,question:"",answer:""}];var f=function(e){var s=e.deckAndMeta,a=e.setDeckAndMeta,n=e.setVisible;"jsx"===s.deck&&h.jsx.forEach((function(e,s){x[s].question=e.question,x[s].answer=e.answer})),"css"===s.deck&&h.css.forEach((function(e,s){x[s].question=e.question,x[s].answer=e.answer}));var c=Object(r.useState)(0),o=Object(t.a)(c,2),l=o[0],u=o[1],m=Object(r.useState)([]),b=Object(t.a)(m,2),O=b[0],f=b[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{}),Object(i.jsx)("div",{className:"flash-cards",children:x.map((function(e){return Object(i.jsx)(j,{contador:l,setContador:u,iconsAnswers:O,setIconsAnswers:f,questionNumber:e.questionNumber,question:e.question,answer:e.answer},e.questionNumber)}))})]}),Object(i.jsx)(p,{contador:l,setContador:u,iconsAnswers:O,setIconsAnswers:f,meta:s.meta,deckAndMeta:s,setDeckAndMeta:a,setVisible:n})]})};var q=function(){var e=Object(r.useState)({deck:"",meta:""}),s=Object(t.a)(e,2),a=s[0],n=s[1],c=Object(r.useState)(!0),l=Object(t.a)(c,2),d=l[0],u=l[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{visible:d,setVisible:u,deckAndMeta:a,setDeckAndMeta:n}),Object(i.jsx)(f,{deckAndMeta:a,setDeckAndMeta:n,setVisible:u})]})};c.a.render(Object(i.jsx)(q,{}),document.querySelector(".root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b473bef3.chunk.js.map