const Paulo = document.getElementById('PauloAP');
const Lucas = document.getElementById('Lucas');
const Guilherme = document.getElementById('Guilherme');
const aluno1 = document.getElementById('AlunoGenerico1')
const aluno2 = document.getElementById('AlunoGenerico2')
const aluno3 = document.getElementById('AlunoGenerico3')
const fecharVisao = document.getElementById('fecharVisao');
const botaoETC = document.getElementById('etc');
const sourceLinks = document.getElementById('source');
const fecharLinks = document.getElementById('fecharSource');
let visaoEspro = document.querySelector("#visaoEspro");
let tutoVisao = document.getElementById("texto");
let visaoNaoVista = [" Paulo", " Lucas", " Guilherme"];
let liberarPlanilha = document.getElementById("exPla");
let anteriorB = document.getElementById("anterior");
let proximoB = document.getElementById("proximo");
const container = document.getElementById('container');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const container4 = document.getElementById('container4');
let contarAlunos = 1;




Paulo.addEventListener("mousedown", () => {
  visaoEspro.classList.remove("hidden");
  visaoEspro.setAttribute("src", "src/fotos/Visão/Paulo_VISÃO.png");
  Paulo.style.backgroundColor = '#FABA04';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#FABA04';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== " Paulo";
  });
})

Lucas.addEventListener("mousedown", () => {
  visaoEspro.classList.remove("hidden");
  fecharVisao.classList.remove("hidden");
  visaoEspro.setAttribute("src", "src/fotos/Visão/Lucas_VISÃO.png");
  Lucas.style.backgroundColor = '#F16B39';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#F16B39';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== " Lucas";
  });
})

Guilherme.addEventListener("mousedown", () => {
  visaoEspro.classList.remove("hidden");
  fecharVisao.classList.remove("hidden");
  visaoEspro.setAttribute("src", "src/fotos/Visão/Guilherme_VISÃO.png");
  Guilherme.style.backgroundColor = '#04AB93';
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#04AB93';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== " Guilherme";
  });
})

aluno1.addEventListener("mousedown", () => {
 console.log(aluno1)
})
aluno2.addEventListener("mousedown", () => {
  console.log(aluno2)
 })
 aluno3.addEventListener("mousedown", () => {
  console.log(aluno3)
 })

fecharVisao.addEventListener("click", () => {
  visaoEspro.classList.add("hidden");
  Paulo.style.backgroundColor = '';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  fecharVisao.classList.add("hidden");
});

function verificarVisaoNaoVista(apertou) {
  if (visaoNaoVista.length === 0) {
    tutoVisao.textContent = ("Você viu todos! Aproveite a planilha")
    liberarPlanilha.classList.remove("hidden")
  } else {
    tutoVisao.textContent = ("Agora veja o: " + visaoNaoVista)
  };
}

Paulo.addEventListener("mouseup", verificarVisaoNaoVista);
Lucas.addEventListener("mouseup", verificarVisaoNaoVista);
Guilherme.addEventListener("mouseup", verificarVisaoNaoVista);


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
  if (contarAlunos === 5) {
    contarAlunos = 4
  }
  if (contarAlunos === 2) {
    container.classList.add('hidden');
    container2.classList.remove('hidden');
  }
  if (contarAlunos === 3) {
    container2.classList.add('hidden');
    container3.classList.remove('hidden');
  }
  if (contarAlunos === 4) {
    container3.classList.add('hidden')
    container4.classList.remove('hidden')
  }
});

anteriorB.addEventListener("click", () => {
  console.log(anteriorB);
  console.log(contarAlunos);
  contarAlunos = contarAlunos - 1
  if (contarAlunos === 0) {
    contarAlunos = 1
  }
  if (contarAlunos === 1) {
    container.classList.remove('hidden');
    container2.classList.add('hidden');
  }
  if (contarAlunos === 2) {
    container2.classList.remove('hidden');
    container3.classList.add('hidden');
  }
  if (contarAlunos === 3) {
    container3.classList.remove('hidden')
    container4.classList.add('hidden')
  }
});
