const Paulo = document.getElementById('PauloAP');
const Lucas = document.getElementById('Lucas');
const Guilherme = document.getElementById('Guilherme');
const fecharVisao = document.getElementById('fecharVisao');
const botaoETC = document.getElementById('etc');
const sourceLinks = document.getElementById('source');
const fecharLinks = document.getElementById("fecharSource");
let visaoEspro = document.querySelector('#visaoEspro');
let tutoVisao = document.getElementById('texto');
let visaoNaoVista = [" Paulo", " Lucas", " Guilherme"];
let liberarPlanilha = document.getElementById("exPla");

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
  visaoEspro.setAttribute ("src", "src/fotos/Visão/Lucas_VISÃO.png");
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

fecharVisao.addEventListener("click", () => {
  visaoEspro.classList.add("hidden");
  Paulo.style.backgroundColor = '';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  fecharVisao.classList.add("hidden");
  console.log(visaoNaoVista)
});

function verificarVisaoNaoVista(apertou) {
  if (visaoNaoVista.length === 0) {
    tutoVisao.textContent = ("Voce viu todos! Aproveite a planilha")
    liberarPlanilha.classList.remove("hidden")
  } else {
    tutoVisao.textContent = ("Agora veja o do " + visaoNaoVista)
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