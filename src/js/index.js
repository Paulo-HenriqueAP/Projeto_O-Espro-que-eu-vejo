const Paulo = document.getElementById("PauloAP");
const Lucas = document.getElementById("Lucas");
const Guilherme = document.getElementById("Guilherme");
const aluno1 = document.getElementById("AlunoGenerico1");
const aluno2 = document.getElementById("AlunoGenerico2");
const aluno3 = document.getElementById("AlunoGenerico3");
const fecharVisao = document.getElementById("fecharVisao");
const botaoETC = document.getElementById("etc");
const sourceLinks = document.getElementById("source");
const fecharLinks = document.getElementById("fecharSource");
const container = document.getElementById("container");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");
const simplificarLista = [Paulo, Lucas, Guilherme, aluno1, aluno2, aluno3];
let visaoEspro = document.querySelector('#visaoEspro');
let visaoEspro_Midia = document.querySelector('#visaoEspro-midia');
let href = document.querySelector('#visaoEspro-link');
let tutoVisao = document.getElementById("textoTuto");
let tutoVisao2 = document.getElementById("textoTuto2");
let tutoVisao3 = document.getElementById("textoTuto3");
let visaoNaoVista = ["Paulo", "Lucas", "Guilherme", "AlunoG1", , "AlunoG2", , "AlunoG3"];
let atualizarLista = document.getElementById("todosAlunos")
let listaAlunos = document.createElement("ul");
let anteriorB = document.getElementById("anterior");
let proximoB = document.getElementById("proximo");
let contarAlunos = 1;
var visaoEspro_Link = document.getElementById("visaoEspro-link");



atualizarLista.appendChild(listaAlunos);
verificarVisaoNaoVista();


function verificarVisaoNaoVista(apertou) {
  if (visaoNaoVista.length === 5) {
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
  visaoEspro.classList.remove("hidden");
  visaoEspro.setAttribute("src", "src/fotos/Visão/Paulo_VISÃO.png");
  Paulo.style.backgroundColor = '#FABA04';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#FABA04';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Paulo";
  });
  console.log(visaoNaoVista)
})

Lucas.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.remove("hidden");
  fecharVisao.classList.remove("hidden");
  visaoEspro.setAttribute("src", "src/fotos/Visão/Lucas_VISÃO.png");
  Lucas.style.backgroundColor = '#F16B39';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#F16B39';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Lucas";
  });


})

Guilherme.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.remove("hidden");
  fecharVisao.classList.remove("hidden");
  visaoEspro.setAttribute("src", "src/fotos/Visão/Guilherme_VISÃO.png");
  Guilherme.style.backgroundColor = '#04AB93';
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#04AB93';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Guilherme";
  });
})

aluno1.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.remove("hidden")
  visaoEspro_Midia.setAttribute("src", "src/fotos/Visão/Aluno1_VISÃO.mp4");
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#FABA04';
 visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
  return filtrar !== "AlunoG1";
});
})

aluno2.addEventListener("mousedown", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.remove("hidden")
  visaoEspro_Midia.setAttribute("src", "src/fotos/Visão/Aluno2_VISÃO.mp3");
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#F16B39';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG2";
  });
 })
 aluno3.addEventListener("mousedown", () => {
  visaoEspro_Link.href = "https://images.sympla.com.br/5efaac73cffc8.jpg";
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.remove("hidden")
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#04AB93';
  visaoEspro_Link.classList.remove("hidden")
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG3";
  });
 })


fecharVisao.addEventListener("click", () => {
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  Paulo.style.backgroundColor = '';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  fecharVisao.classList.add("hidden");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.add("hidden")
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