// INTELIGÊNCIA DO FRONT CONTEÚDO FA.TEC.BR
document.addEventListener("DOMContentLoaded", function () {
   // Seleciona o elemento <a> pelo ID
   var jq0 = document.getElementById("q0");
   var jq1 = document.getElementById("q1");
   var jq2 = document.getElementById("q2");
   var jq3 = document.getElementById("q3");
   var jq4 = document.getElementById("q4");
   var jq5 = document.getElementById("q5");
   var jq6 = document.getElementById("q6");
   var jq7 = document.getElementById("q7");
   var jq8 = document.getElementById("q8");
   var jq9 = document.getElementById("q9");
   var jq10 = document.getElementById("q10");
   var jq11 = document.getElementById("q11");
   var jq12 = document.getElementById("q12");
   var jq13 = document.getElementById("q13");
   var jq14 = document.getElementById("q14");
   var jq15 = document.getElementById("q15");
   var jb16 = document.getElementById("b16");
   //var jl0 = document.getElementById("l0");
   var jl1 = document.getElementById("l1");
   var jl2 = document.getElementById("l2");
   var jl3 = document.getElementById("l3");
   var jl4 = document.getElementById("l4");
   //var jl5 = document.getElementById("l5");

   // Cria elemento pai
   var jq3Pai = jq3.parentNode; //apaga elemento
   var jq0Pai = jq0.parentNode; //apaga elemento


   // Altera o texto dentro do elementa label
   //jl0.innerHTML = "Todos";
   jl1.innerHTML = "☰ Nível1: Novato";
   jl2.innerHTML = "☰ Nível2: Dev aprendiz";
   jl3.innerHTML = "☰ Nível3: Desenvolvedor";
   jl4.innerHTML = "☰ Nível4: Arquiteto";
   //jl5.innerHTML = "Soft Skills ";

   // Variável para a cor desejada
   var corNovato = "#8B03FF"; // ☰ Nível1: Novato
   var corDevAprendiz = "#0E4CE8"; // ☰ Nível2: Construa②
   var corDesenvolvedor = "#FFFB19"; // ☰ Nível3: Descubra③
   var corArquiteto = "#0EE815"; // ☰ Nível4: Profissional④
   //var corDigital  = "#FF8509"; // "#FF8509"; "#FFFB19";

   // Altera o texto dentro do elemento <a>
   jq0.innerHTML = "Ferramentas <br>de Desenvolvimento</br>"; //q0
   jq1.innerHTML = "Sistemas <br>Operacionais</br>"; //q1
   jq2.innerHTML = "Front-end<br>HTML, CSS e <br>JavaScript</br>"; //q2
   jq3.innerHTML = "Protocolos de <br>Internet</br>"; //q3
   jq4.innerHTML = "Back-end <br>JavaScript no <br>Node.js</br>"; //q4
   jq5.innerHTML = "Bibliotecas e Frameworks<br>React e Next.js</br>"; //q5
   jq6.innerHTML = "Banco de Dados<br>Relacionais e não relacionais</br>"; //q6
   jq7.innerHTML = "Controle de Versão<br>Git e Git Hub</br>"; //q7
   jq8.innerHTML = "Servidores<br>Web e Aplicação</br>"; //q8
   jq9.innerHTML = "APIs<br>Rest e Soap</br>"; //q9
   jq10.innerHTML = "Ferramenta para<br>Qualidade de Software<br>TypeScript</br>"; //q10
   jq11.innerHTML = "Ferramenta para eficiência<br>em estilização<br>Tailwind</br>"; //q11
   jq12.innerHTML = "DEVOPs<br>Agilidade e Automação"; //q12
   jq13.innerHTML = "DEVSECOPs<br>Software mais seguro</br>"; //q13
   jq14.innerHTML = "CLOUD<br>Serviços de Nuvem</br>"; //q14
   jq15.innerHTML = "Gestão de Projetos e<br>Metodologias Ágeis"; //q15
   jb16.innerHTML = "Entre no Escola Online"; //q16


   // Define o link para o site externo como valor do atributo href
   //jq0.setAttribute("href", "https://otecnico.org");
   //jq1.setAttribute("href", "https://otecnico.org");
   // jq2.setAttribute("href", "https://otecnico.org");
   // jq3.setAttribute("href", "https://otecnico.org");
   // jq4.setAttribute("href", "javascript.html");
   //jq5.setAttribute("href", "https://otecnico.org");
   //jq6.setAttribute("href", "https://otecnico.org");
   //jq7.setAttribute("href", "https://otecnico.org");
   //jq8.setAttribute("href", "https://otecnico.org");
   //jq9.setAttribute("href", "https://otecnico.org");
   //jq10.setAttribute("href", "https://otecnico.org");
   //jq11.setAttribute("href", "https://otecnico.org");
   //jq12.setAttribute("href", "https://otecnico.org");
   //jq13.setAttribute("href", "https://otecnico.org");
   //jq14.setAttribute("href", "https://otecnico.org");
   //jq15.setAttribute("href", "https://otecnico.org");
   jb16.setAttribute("href", "https://escola.riopreto.br");


   // Opcional: Abre o link em uma nova aba/janela quando clicado
   // jq0.setAttribute("target", "_blank");
   // jq1.setAttribute("target", "_blank");
   // jq2.setAttribute("target", "_blank");
   // jq3.setAttribute("target", "_blank");
   //jq4.setAttribute("target", "_blank");
   // jq5.setAttribute("target", "_blank");
   // jq6.setAttribute("target", "_blank");
   // jq7.setAttribute("target", "_blank");
   // jq8.setAttribute("target", "_blank");
   // jq9.setAttribute("target", "_blank");
   // jq10.setAttribute("target", "_blank");
   // jq11.setAttribute("target", "_blank");
   // jq12.setAttribute("target", "_blank");
   // jq13.setAttribute("target", "_blank");
   // jq14.setAttribute("target", "_blank");
   // jq15.setAttribute("target", "_blank");
    // Adiciona um evento de clique ao botão
    jb16.addEventListener("click", function(event) {
    // Abre a URL em uma nova aba
    //window.open("https://escola.riopreto.br", "_blank");
        // Impede o comportamento padrão do link para controle completo
        event.preventDefault();
        // Abre a URL na mesma aba
        window.location.href = "https://escola.riopreto.br";
   });
  
//   jl0.addEventListener("click", function() {
//    Adicione um evento de clique ao label
//    restaurarEstadoOriginal();
//   });
  // ☰ Nível1: Novato
  jl1.addEventListener("click", function() {
   // Adicione um evento de clique ao label
   MostrarNovato();
  });
  //☰ Nível2: Construa
  jl2.addEventListener("click", function() {
   // Adicione um evento de clique ao label
   MostrarDevAprendiz();
  });
  //☰ Nível3: Descubra
  jl3.addEventListener("click", function() {
   // Adicione um evento de clique ao label
   MostrarDesenvolvedor();
  });
  //☰ Nível4: Profissional
  jl4.addEventListener("click", function() {
   // Adicione um evento de clique ao label
   MostrarArquiteto();
  });
    //jl5.addEventListener("click", function() {
   // Adicione um evento de clique ao label
   //MostrarDigital();
   // });

  jq0.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq1.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq2.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq3.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq4.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq5.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq6.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq7.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq8.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq9.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq10.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq11.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq12.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq13.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq14.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq15.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });
  jq16.addEventListener("click", function() {
    // Adicione um evento de clique ao label
    restaurarEstadoOriginal();
  });

 // Para reverter ao estado original 
 function restaurarEstadoOriginal() {
   jl1.style.backgroundColor = "";
   jl2.style.backgroundColor = "";
   jl2.style.color = "white";  
   jl3.style.backgroundColor = "";
   jl3.style.color = "white";  
   jl4.style.backgroundColor = "";
   jl4.style.color = "white";  
   //jl5.style.backgroundColor = "";
   //jl5.style.color = "white";  
   jq0.style.backgroundColor = "";
   jq0.style.color = "white";  
   jq1.style.backgroundColor = "";
   jq1.style.color = "white";  
   jq2.style.backgroundColor = "";
   jq2.style.color = "white";  
   jq3.style.backgroundColor = "";
   jq3.style.color = "white";  
   jq4.style.backgroundColor = "";
   jq4.style.color = "white";  
   jq5.style.backgroundColor = "";
   jq5.style.color = "white";  
   jq6.style.backgroundColor = "";
   jq6.style.color = "white";  
   jq7.style.backgroundColor = "";
   jq7.style.color = "white";  
   jq8.style.backgroundColor = "";
   jq8.style.color = "white";  
   jq9.style.backgroundColor = "";
   jq9.style.color = "white";  
   jq10.style.backgroundColor = "";
   jq10.style.color = "white";  
   jq11.style.backgroundColor = "";
   jq11.style.color = "white";  
   jq12.style.backgroundColor = "";
   jq12.style.color = "white";  
   jq13.style.backgroundColor = "";
   jq13.style.color = "white";  
   jq14.style.backgroundColor = "";
   jq14.style.color = "white";  
   jq15.style.backgroundColor = "";
   jq15.style.color = "white";  
   jb16.style.backgroundColor = "";
   jb16.style.color = "white";  
  }

   // Para reverter ao estado original
 function MostrarNovato() {
     restaurarEstadoOriginal();
     // Altera o estilo da tag <a> com base na cor
     //jl0.style.backgroundColor = 'transparent';
     //jl0.style.color= "white";
     //jq3Pai.style.display = "none"; // apaga elemento
     //jq0Pai.style.display = "none"; // apaga elemento
     jl1.style.backgroundColor = corNovato;
     jq0.style.backgroundColor = corNovato; // Ferramentas de Desenvolvimento
     jq0.style.borderRadius = "14px"; 
     jq0.style.border = "2px solid white"; 
     jq1.style.backgroundColor = corNovato; // Sistemas Operacionais
     jq1.style.borderRadius = "14px"; 
     jq1.style.border = "2px solid white"; 
     jq2.style.backgroundColor = corNovato; // Front-end HTML, CSS e JavaScript
     jq2.style.borderRadius = "14px"; 
     jq2.style.border = "2px solid white";
     jq3.style.backgroundColor = corNovato; // Front-end HTML, CSS e JavaScript
     jq3.style.borderRadius = "14px"; 
     jq3.style.border = "2px solid white";
     jq7.style.backgroundColor = corNovato; // Controle de Versão Git e Git Hub
     jq7.style.borderRadius = "14px";
     jq7.style.border = "2px solid white";
     jq8.style.backgroundColor = corNovato; // Front-end HTML, CSS e JavaScript
     jq8.style.borderRadius = "14px"; 
     jq8.style.border = "2px solid white";
  }

   // Para reverter ao estado original
   function MostrarDevAprendiz() {
      restaurarEstadoOriginal();
      // Altera o estilo da tag <a> com base na cor
      //jq3Pai.style.display = "block"; // apaga elemento
      //jq0Pai.style.display = "block"; // apaga elemento
      jl2.style.backgroundColor = corDevAprendiz;
      jq0.style.backgroundColor = corDevAprendiz; // Ferramentas de Desenvolvimento
      jq0.style.borderRadius = "14px"; 
      jq0.style.border = "2px solid white";
      jq1.style.backgroundColor = corDevAprendiz; // Sistemas Operacionais
      jq1.style.borderRadius = "14px";
      jq1.style.border = "2px solid white";
      jq2.style.backgroundColor = corDevAprendiz; // Front-end HTML, CSS e JavaScript
      jq2.style.borderRadius = "14px";
      jq2.style.border = "2px solid white";
      jq3.style.backgroundColor = corDevAprendiz; // Protocolos de Internet
      jq3.style.borderRadius = "14px";
      jq3.style.border = "2px solid white";
      jq4.style.backgroundColor = corDevAprendiz; // Back-end JavaScript no Node.js
      jq4.style.borderRadius = "14px";
      jq4.style.border = "2px solid white";
      jq5.style.backgroundColor = corDevAprendiz; // Bibliotecas e Frameworks
      jq5.style.borderRadius = "14px";
      jq5.style.border = "2px solid white";
      jq7.style.backgroundColor = corDevAprendiz; // Controle de Versão Git e Git Hub
      jq7.style.borderRadius = "14px";
      jq7.style.border = "2px solid white";
      jq8.style.backgroundColor = corDevAprendiz; // Controle de Versão Git e Git Hub
      jq8.style.borderRadius = "14px";
      jq8.style.border = "2px solid white";
      jq14.style.backgroundColor = corDevAprendiz; // Controle de Versão Git e Git Hub
      jq14.style.borderRadius = "14px";
      jq14.style.border = "2px solid white";
   }
    
   // Para reverter ao estado original
   function MostrarDesenvolvedor() {
      restaurarEstadoOriginal();
      // Altera o estilo da tag <a> com base na cor
      jl3.style.backgroundColor = corDesenvolvedor;
      jl3.style.color = "black";  
      jq0.style.backgroundColor = corDesenvolvedor; // DevOps
      jq0.style.borderRadius = "14px"; 
      jq0.style.border = "2px solid white";
      jq0.style.color = "black";  
      jq1.style.backgroundColor = corDesenvolvedor; // DevOps
      jq1.style.borderRadius = "14px"; 
      jq1.style.border = "2px solid white";
      jq1.style.color = "black";  
      jq2.style.backgroundColor = corDesenvolvedor; // DevOps
      jq2.style.borderRadius = "14px"; 
      jq2.style.border = "2px solid white";
      jq2.style.color = "black";  
      jq3.style.backgroundColor = corDesenvolvedor; // DevOps
      jq3.style.borderRadius = "14px"; 
      jq3.style.border = "2px solid white";
      jq3.style.color = "black";  
      jq4.style.backgroundColor = corDesenvolvedor; // DevOps
      jq4.style.borderRadius = "14px"; 
      jq4.style.border = "2px solid white";
      jq4.style.color = "black";  
      jq5.style.backgroundColor = corDesenvolvedor; // DevOps
      jq4.style.borderRadius = "14px"; 
      jq4.style.border = "2px solid white";
      jq5.style.color = "black";  
      jq6.style.backgroundColor = corDesenvolvedor; // DevOps
      jq6.style.borderRadius = "14px"; 
      jq6.style.border = "2px solid white";
      jq6.style.color = "black";  
      jq7.style.backgroundColor = corDesenvolvedor; // DevOps
      jq7.style.borderRadius = "14px"; 
      jq7.style.border = "2px solid white";
      jq7.style.color = "black";  
      jq8.style.backgroundColor = corDesenvolvedor; // DevOps
      jq8.style.borderRadius = "14px"; 
      jq8.style.border = "2px solid white";
      jq8.style.color = "black";  
      jq9.style.backgroundColor = corDesenvolvedor; // DevOps
      jq9.style.borderRadius = "14px"; 
      jq9.style.border = "2px solid white";
      jq9.style.color = "black";  
      jq10.style.backgroundColor = corDesenvolvedor; // DevOps
      jq10.style.borderRadius = "14px"; 
      jq10.style.border = "2px solid white";
      jq10.style.color = "black";  
      jq11.style.backgroundColor = corDesenvolvedor; // DevOps
      jq11.style.borderRadius = "14px"; 
      jq11.style.border = "2px solid white";
      jq11.style.color = "black"; 
      jq14.style.backgroundColor = corDesenvolvedor; // DevOps
      jq14.style.borderRadius = "14px"; 
      jq14.style.border = "2px solid white";
      jq14.style.color = "black";  
      
   }
   
   // Para reverter ao estado original
 function MostrarArquiteto() {
   restaurarEstadoOriginal();
   // Altera o estilo da tag <a> com base na cor
   jl4.style.backgroundColor = corArquiteto;
   jl4.style.color = "black";  
   jq0.style.backgroundColor = corArquiteto; // Internet
   jq0.style.borderRadius = "14px"; 
   jq0.style.color = "black";  
   jq0.style.border = "2px solid white"; 
   jq1.style.backgroundColor = corArquiteto; // Ferramentas de Desenvolvimento
   jq1.style.borderRadius = "14px"; 
   jq1.style.border = "2px solid white"; 
   jq1.style.color = "black";  
   jq2.style.backgroundColor = corArquiteto; // HTML
   jq2.style.borderRadius = "14px"; 
   jq2.style.border = "2px solid white"; 
   jq2.style.color = "black";  
   jq3.style.backgroundColor = corArquiteto; // CSS
   jq3.style.borderRadius = "14px"; 
   jq3.style.border = "2px solid white"; 
   jq3.style.color = "black";  
   jq4.style.backgroundColor = corArquiteto; //JavaScript
   jq4.style.borderRadius = "14px"; 
   jq4.style.color = "black";  
   jq4.style.border = "2px solid white"; 
   jq5.style.backgroundColor = corArquiteto; // Padrões e Protocolos
   jq5.style.borderRadius = "14px"; 
   jq5.style.border = "2px solid white"; 
   jq5.style.color = "black";  
   jq6.style.backgroundColor = corArquiteto; // Frameworks
   jq6.style.borderRadius = "14px"; 
   jq6.style.border = "2px solid white"; 
   jq6.style.color = "black";  
   jq7.style.backgroundColor = corArquiteto; // TypeScript
   jq7.style.borderRadius = "14px"; 
   jq7.style.border = "2px solid white"; 
   jq7.style.color = "black";  
   jq8.style.backgroundColor = corArquiteto; // Banco de DAdos
   jq8.style.borderRadius = "14px"; 
   jq8.style.border = "2px solid white"; 
   jq8.style.color = "black";  
   jq9.style.backgroundColor = corArquiteto; // Graphql
   jq9.style.borderRadius = "14px"; 
   jq9.style.border = "2px solid white"; 
   jq9.style.color = "black";  
   jq10.style.backgroundColor = corArquiteto; // Sistemas Operacionais
   jq10.style.borderRadius = "14px"; 
   jq10.style.border = "2px solid white"; 
   jq10.style.color = "black";  
   jq11.style.backgroundColor = corArquiteto; // Servidor Web
   jq11.style.borderRadius = "14px"; 
   jq11.style.border = "2px solid white"; 
   jq11.style.color = "black";  
   jq12.style.backgroundColor = corArquiteto; // Docker
   jq12.style.borderRadius = "14px"; 
   jq12.style.border = "2px solid white"; 
   jq12.style.color = "black";  
   jq13.style.backgroundColor = corArquiteto; // Kubernetes
   jq13.style.borderRadius = "14px"; 
   jq13.style.border = "2px solid white"; 
   jq13.style.color = "black";  
   jq14.style.backgroundColor = corArquiteto; // Kubernetes
   jq14.style.borderRadius = "14px"; 
   jq14.style.border = "2px solid white"; 
   jq14.style.color = "black";
   jq15.style.backgroundColor = corArquiteto; // Kubernetes
   jq15.style.borderRadius = "14px"; 
   jq15.style.border = "2px solid white"; 
   jq15.style.color = "black";  
   jq16.style.backgroundColor = corArquiteto; // Kubernetes
   jq16.style.borderRadius = "14px"; 
   jq16.style.border = "2px solid white"; 
   jq16.style.color = "black";  
}
 
   
      // Para reverter ao estado original
 function MostrarDigital() {
   restaurarEstadoOriginal();
   // Altera o estilo da tag <a> com base na cor
   //jl5.style.backgroundColor = corDigital;
   //jl5.style.color = "black";  
   jq14.style.backgroundColor = corDigital; // Administração e Gestão
   jq14.style.borderRadius = "14px"; 
   jq14.style.border = "2px solid white"; 
   jq14.style.color = "black";  
   jq15.style.backgroundColor = corDigital; // Administração e Gestão
   jq15.style.borderRadius = "14px"; 
   jq15.style.border = "2px solid white"; 
   jq15.style.color = "black";  
   jq16.style.backgroundColor = corArquiteto; // Kubernetes
   jq16.style.borderRadius = "14px"; 
   jq16.style.border = "2px solid white"; 
   jq16.style.color = "black";  
}

 

});