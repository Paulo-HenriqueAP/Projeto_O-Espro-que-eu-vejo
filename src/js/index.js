const Paulo = document.getElementById("PauloAP");
const Lucas = document.getElementById("Lucas");
const Guilherme = document.getElementById("Guilherme");
const Kamila = document.getElementById("Kamila");
const Sandra = document.getElementById("Sandra");
const Daniela = document.getElementById("Daniela");
const aluno4 = document.getElementById("AlunoGenerico4");
const aluno5 = document.getElementById("AlunoGenerico5");
const aluno6 = document.getElementById("AlunoGenerico6");
const aluno7 = document.getElementById("AlunoGenerico7");
const aluno8 = document.getElementById("AlunoGenerico8");
const aluno9 = document.getElementById("AlunoGenerico9");
const fecharVisao = document.getElementById("fecharVisao");
const botaoETC = document.getElementById("etc");
const sourceLinks = document.getElementById("source");
const fecharLinks = document.getElementById("fecharSource");
const container = document.getElementById("container");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");
const simplificarLista = [Paulo, Lucas, Guilherme, Kamila, Sandra, Daniela, aluno4, aluno5, aluno6, aluno7, aluno8, aluno9];
let visaoEspro = document.querySelector('#visaoEspro');
let visaoEspro_Midia = document.querySelector('#visaoEspro-midia');
let href = document.querySelector('#visaoEspro-link');
let visaoEspro_Texto = document.querySelector('#visaoEsproTexto');
let tutoVisao = document.getElementById("textoTuto");
let tutoVisao2 = document.getElementById("textoTuto2");
let tutoVisao3 = document.getElementById("textoTuto3");
let visaoNaoVista = ["Paulo", "Lucas", "Guilherme", "Kamila", , "Sandra", , "Daniela", "AlunoG4", "AlunoG5", "AlunoG6", "AlunoG7", "AlunoG8", "AlunoG9"];
let atualizarLista = document.getElementById("todosAlunos")
let listaAlunos = document.createElement("ul");
let anteriorB = document.getElementById("anterior");
let proximoB = document.getElementById("proximo");
let contarAlunos = 1;
var visaoEspro_Link = document.getElementById("visaoEspro-link");


atualizarLista.appendChild(listaAlunos);
verificarVisaoNaoVista();


function verificarVisaoNaoVista(apertou) {
  if (visaoNaoVista.length === 11) {
    tutoVisao.classList.add("hidden")
   tutoVisao2.classList.remove("hidden")
  }
  if (visaoNaoVista.length === 0) {
    tutoVisao2.classList.add("hidden")
    tutoVisao3.classList.remove("hidden")
    atualizarLista.classList.add("hidden")
  } else {
    listaAlunos.innerHTML = "";
    visaoNaoVista.forEach(function(aluno) {
      let nomeAluno = document.createElement("li");
      nomeAluno.textContent = aluno;
      listaAlunos.appendChild(nomeAluno);
    });
  }
}

Paulo.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.add("hidden")
  visaoEspro_Texto.textContent = "Visão Paulo | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  Paulo.style.backgroundColor = '#FABA04';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#FABA04';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Paulo";
  });
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
})

Lucas.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.add("hidden")
  fecharVisao.classList.remove("hidden");
  visaoEspro_Texto.textContent = "Visão Lucas | Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
  Lucas.style.backgroundColor = '#F16B39';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#F16B39';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Lucas";
  });
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
})

Guilherme.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.add("hidden")
  fecharVisao.classList.remove("hidden");
  visaoEspro_Texto.textContent = "Visão Guilherme | Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
  Guilherme.style.backgroundColor = '#04AB93';
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#04AB93';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Guilherme";
  });
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
})

Kamila.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Link.href = "https://instagram.com/kamilaemerick87?igshid=ZDdkNTZiNTM=";
  visaoEspro_Link.textContent = "Meu instagram"
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  Kamila.style.backgroundColor = '#9966cc';
  visaoEspro_Texto.textContent = "\"Para os novos estudantes, desejo que aproveitem as oportunidades e absorvam todo o conteúdo que tivemos aqui. Com certeza, fazendo isso, obterão muito sucesso! 🙏🏻🙏🏻🙏🏻.\" - Kamila, março de 2023";
  fecharVisao.classList.remove("hidden");
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#9966cc';
 visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
  return filtrar !== "Kamila";
});
if (window.matchMedia("(max-width: 600px)").matches) {
  listaAlunos.classList.add("hidden")
  atualizarLista.classList.add("hidden")
}
})

Sandra.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  Sandra.style.backgroundColor = '#95456c';
  visaoEspro_Texto.textContent = "\"Se tem algo que eu aprendi no Espro e que levarei para a vida toda é que devemos sempre dar o nosso melhor, mesmo com as condições atuais, até que possamos ter melhores condições. O Espro nos incentiva a desenvolver nossas habilidades profissionais e devemos aproveitar ao máximo cada dia da parte teórica.\" - Sandra, março de 2023"
  fecharVisao.classList.remove("hidden");
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#95456c';
 visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
  return filtrar !== "Sandra";
});
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
 })
 Daniela.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  Daniela.style.backgroundColor = '#f5d1d1';
  visaoEspro_Texto.textContent = "\"O que eu venho aprendendo com o Espro é que nunca devemos desistir, mesmo quando enfrentamos altos e baixos, mantendo sempre o foco em nossos objetivos. O Espro nos acolhe e ensina a desenvolver nossas habilidades, transformando-nos em pessoas mais capacitadas e preparadas para o mercado de trabalho. Quem uma vez passa pelo Espro, nunca sai a mesma pessoa.\" Daniela, março de 2023."
  fecharVisao.classList.remove("hidden");
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#f5d1d1';
 visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
  return filtrar !== "Daniela";
});
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
 })

 aluno4.addEventListener("mousedown", () => {
  console.log(aluno4)
  visaoEspro_Link.textContent = "Clique aqui."
  visaoEspro_Link.href = "https://images.sympla.com.br/5efaac73cffc8.jpg";
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.remove("hidden")
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#ffffff';
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Texto.textContent = (" ")
  Kamila.style.backgroundColor = '';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG4";
  });
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
 })

 aluno5.addEventListener("mousedown", () => {
  console.log(aluno5)
  visaoEspro_Link.textContent = "Clique aqui."
  visaoEspro_Link.href = "https://images.sympla.com.br/5efaac73cffc8.jpg";
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.remove("hidden")
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#ffffff';
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Texto.textContent = (" ")
  Kamila.style.backgroundColor = '';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG5";
  });
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
 })

 aluno6.addEventListener("mousedown", () => {
  console.log(aluno6)
  visaoEspro_Link.textContent = "Clique aqui."
  visaoEspro_Link.href = "https://images.sympla.com.br/5efaac73cffc8.jpg";
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.remove("hidden")
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#ffffff';
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Texto.textContent = (" ")
  Kamila.style.backgroundColor = '';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG6";
  });
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
 })

 aluno7.addEventListener("mousedown", () => {
  console.log(aluno7)
  visaoEspro_Link.textContent = "Clique aqui."
  visaoEspro_Link.href = "https://images.sympla.com.br/5efaac73cffc8.jpg";
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.remove("hidden")
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#ffffff';
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Texto.textContent = (" ")
  Kamila.style.backgroundColor = '';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG7";
  });
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
 })

 aluno8.addEventListener("mousedown", () => {
  console.log(aluno8)
  visaoEspro_Link.textContent = "Clique aqui."
  visaoEspro_Link.href = "https://images.sympla.com.br/5efaac73cffc8.jpg";
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.remove("hidden")
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#ffffff';
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Texto.textContent = (" ")
  Kamila.style.backgroundColor = '';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG8";
  });
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
 })

 aluno9.addEventListener("mousedown", () => {
  console.log(aluno9)
  visaoEspro_Link.textContent = "Clique aqui."
  visaoEspro_Link.href = "https://images.sympla.com.br/5efaac73cffc8.jpg";
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.remove("hidden")
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#ffffff';
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Texto.textContent = (" ")
  Kamila.style.backgroundColor = '';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG9";
  });
  if (window.matchMedia("(max-width: 600px)").matches) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
 })

fecharVisao.addEventListener("click", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  Paulo.style.backgroundColor = '';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  fecharVisao.classList.add("hidden");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.add("hidden")
  visaoEspro_Texto.textContent = (" ")
  listaAlunos.classList.remove("hidden")
  atualizarLista.classList.remove("hidden")
  if (visaoNaoVista.length === 0) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
});


simplificarLista.forEach(remover_da_lista => {
 remover_da_lista.addEventListener("mouseup", verificarVisaoNaoVista);
});


botaoETC.addEventListener("click", () => {
  sourceLinks.classList.toggle("hidden");
  botaoETC.classList.toggle("hidden");
});

fecharLinks.addEventListener("click", () => {
  sourceLinks.classList.toggle("hidden");
  botaoETC.classList.toggle("hidden");
})

proximoB.addEventListener("click", () => {
  console.log(proximoB);
  console.log(contarAlunos);
  contarAlunos = contarAlunos + 1
  if (contarAlunos === 2) {
    container.classList.add('hidden');
    container2.classList.remove('hidden');
    anteriorB.classList.remove("hidden")
  }
  if (contarAlunos === 3) {
    container2.classList.add('hidden');
    container3.classList.remove('hidden');
  }
  if (contarAlunos === 4) {
    container3.classList.add('hidden')
    container4.classList.remove('hidden')
    proximoB.classList.add("hidden")
  }
});

anteriorB.addEventListener("click", () => {
  console.log(anteriorB);
  console.log(contarAlunos);
  contarAlunos = contarAlunos - 1
  if (contarAlunos === 1) {
    container.classList.remove('hidden');
    container2.classList.add('hidden');
    anteriorB.classList.add("hidden")
  }
  if (contarAlunos === 2) {
    container2.classList.remove('hidden');
    container3.classList.add('hidden');
  }
  if (contarAlunos === 3) {
    container3.classList.remove('hidden')
    container4.classList.add('hidden')
    proximoB.classList.remove("hidden")
  }
});