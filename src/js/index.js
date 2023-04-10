const Paulo = document.getElementById("PauloAP");
const Lucas = document.getElementById("Lucas");
const Guilherme = document.getElementById("Guilherme");
const Kamila = document.getElementById("Kamila");
const Sandra = document.getElementById("Sandra");
const Daniela = document.getElementById("Daniela");
const Ester = document.getElementById("Ester");
const Sarah = document.getElementById("Sarah");
const Edvan = document.getElementById("Edvan");
const fecharVisao = document.getElementById("fecharVisao");
const botaoETC = document.getElementById("etc");
const sourceLinks = document.getElementById("source");
const fecharLinks = document.getElementById("fecharSource");
const trocarTema = document.getElementById("trocarTema");

const simplificarLista = [
  Paulo, Lucas, Guilherme,
  Kamila, Sandra, Daniela,
  Ester, Sarah, Edvan
];

let qualLogo = document.getElementById("logo")
let ocupado = false;
let visaoEspro_Texto = document.querySelector('#visaoEsproTexto');
let visaoEspro = document.querySelector('#visaoEspro');
let visaoEspro_Midia = document.querySelector('#visaoEspro-midia');
let visaoEspro_Link = document.getElementById("visaoEspro-link");
let href = document.querySelector('#visaoEspro-link');
let tutoVisao = document.getElementById("textoTuto");

let visaoNaoVista = [
  "Paulo", "Lucas", "Guilherme",
  "Kamila", "Sandra", "Daniela",
  "Ester", "Sarah", "Edvan"
];

let atualizarLista = document.getElementById("todosAlunos");
let listaAlunos = document.createElement("ul");
let proximoa = document.getElementById("KSD");
let proximob = document.getElementById("ESE");
let proximoc = document.getElementById("PLG");
let contTema = 0;
let lerVisao = document.getElementById("textoAudio")

var corpo = document.getElementById("corpo");


atualizarLista.appendChild(listaAlunos);
verificarVisaoNaoVista();

function verificarVisaoNaoVista() {
  listaAlunos.innerHTML = "";
  visaoNaoVista.forEach(function (aluno) {
    let nomeAluno = document.createElement("li");
    nomeAluno.textContent = aluno;
    listaAlunos.appendChild(nomeAluno);
  });
  if (visaoNaoVista.length === 0) {
    visaoEspro.setAttribute("src", "src/fotos/Visão/fotoFinal_teste.png");
    atualizarLista.textContent = ("")
    tutoVisao.textContent = "Re-explore usando ᐁ e reveja as mensagens dos alunos."
  }
}

function saber_se_bloqueia() {
  if (window.matchMedia("(max-width: 500px").matches && ocupado === true) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  } else {
    listaAlunos.classList.remove("hidden")
    atualizarLista.classList.remove("hidden")
  }
}

function limpar() {
  ocupado = true
  lerVisao.classList.remove("hidden")
  lerVisao.style.backgroundColor = '#006400';
  fecharVisao.classList.remove("hidden");
  visaoEspro_Texto.textContent = ("")
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Link.classList.add("hidden")
  Paulo.style.backgroundColor = '';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  Ester.style.backgroundColor = '';
  Sarah.style.backgroundColor = '';
  Edvan.style.backgroundColor = '';
  if (visaoNaoVista.length > 0) {
    tutoVisao.textContent = ("Explore usando ᐁ e descubra perspectivas únicas deixadas por cada aluno. Consulte a lista para verificar quem ainda não foi visto.")
  }
}

lerVisao.addEventListener("click", () => {
  if (visaoEspro_Midia.paused) {
    visaoEspro_Midia.play()
    lerVisao.style.backgroundColor = '#006400';
  } else {
    visaoEspro_Midia.pause()
    lerVisao.style.backgroundColor = '#FF0000';
  }
})

window.addEventListener("resize", saber_se_bloqueia)

Paulo.addEventListener("mousedown", () => {
  limpar()
  saber_se_bloqueia()
  visaoEspro_Midia.setAttribute("src", "src/audio/Paulo_TEXTOparaVOZ.mp3")
  Paulo.classList.add("opacidade")
  Paulo.style.backgroundColor = '#1a1a1a';
  fecharVisao.style.backgroundColor = '#FABA04';
  visaoEspro_Texto.textContent = "\"Durante todo percurso sendo um jovem aprendiz, eu desenvolvi habilidades para alavancar minhas ideias, projetos pessoais e profissionais. Agradeço a todos os envolvidos pela oportunidade e principalmente ao Hospital Orizonti. Por mais que eu não vá seguir carreira na área em que atuei durante o meu contrato, com certeza levarei o aprendizado para a vida toda.\" Paulo Henrique ΛP, 2023"
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Paulo";
  });
})

Lucas.addEventListener("mousedown", () => {
  limpar()
  saber_se_bloqueia()
  visaoEspro_Midia.setAttribute("src", "src/audio/Lucas_TEXTOparaVOZ.mp3")
  Lucas.classList.add("opacidade")
  Lucas.style.backgroundColor = '#F16B39';
  fecharVisao.style.backgroundColor = '#F16B39';
  visaoEspro_Texto.textContent = "\"Espro é uma ótima oportunidade para juntar um dinheiro considerável e começar o seu próprio negócio. Com uma carga horária de apenas 6 horas diárias, você terá outras 18 horas para perseguir seus sonhos. Lembre-se: pense grande, mas comece pequeno.\" Lucas Alves, 2023";
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Lucas";
  });
})

Guilherme.addEventListener("mousedown", () => {
  limpar()
  saber_se_bloqueia()
  visaoEspro_Midia.setAttribute("src", "src/audio/Guilherme_TEXTOparaVOZ.mp3")
  Guilherme.classList.add("opacidade")
  Guilherme.style.backgroundColor = '#04AB93';
  fecharVisao.style.backgroundColor = '#04AB93';
  visaoEspro_Texto.textContent = "\"O meu processo de aprendizado foi muito enriquecedor, pois pude adquirir conhecimentos valiosos sobre autoconhecimento e descobrir o que realmente almejo para mim. Embora o curso tenha abrangido diversos temas, destaco a fase de autoconhecimento no contexto profissional como a mais significativa para mim.\" Guilherme Henrique, 2023";
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Guilherme";
  });
})

Kamila.addEventListener("mousedown", () => {
  limpar()
  saber_se_bloqueia()
  visaoEspro_Midia.setAttribute("src", "src/audio/Kamila_TEXTOparaVOZ.mp3")
  Kamila.classList.add("opacidade")
  Kamila.style.backgroundColor = '#9966cc';
  fecharVisao.style.backgroundColor = '#9966cc';
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Link.href = "https://instagram.com/kamilaemerick87?igshid=ZDdkNTZiNTM=";
  visaoEspro_Link.textContent = "Meu instagram"
  visaoEspro_Texto.textContent = "\"Para os novos estudantes, desejo que aproveitem as oportunidades e absorvam todo o conteúdo que tivemos aqui. Com certeza, fazendo isso, obterão muito sucesso! 🙏🏻🙏🏻🙏🏻.\" Kamila, 2023";
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Kamila";
  });
})

Sandra.addEventListener("mousedown", () => {
  limpar()
  saber_se_bloqueia()
  visaoEspro_Midia.setAttribute("src", "src/audio/Sandra_TEXTOparaVOZ.mp3")
  Sandra.classList.add("opacidade")
  Sandra.style.backgroundColor = '#95456c';
  fecharVisao.style.backgroundColor = '#95456c';
  visaoEspro_Texto.textContent = "\"Se tem algo que eu aprendi no Espro e que levarei para a vida toda é que devemos sempre dar o nosso melhor, mesmo com as condições atuais, até que possamos ter melhores condições. O Espro nos incentiva a desenvolver nossas habilidades profissionais e devemos aproveitar ao máximo cada dia da parte teórica.\" Sandra, 2023"
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Sandra";
  });
})
Daniela.addEventListener("mousedown", () => {
  limpar()
  saber_se_bloqueia()
  visaoEspro_Midia.setAttribute("src", "src/audio/Daniela_TEXTOparaVOZ.mp3")
  Daniela.classList.add("opacidade")
  Daniela.style.backgroundColor = '#f5d1d1';
  fecharVisao.style.backgroundColor = '#f5d1d1';
  visaoEspro_Texto.textContent = "\"O que eu venho aprendendo com o Espro é que nunca devemos desistir, mesmo quando enfrentamos altos e baixos, mantendo sempre o foco em nossos objetivos. O Espro nos acolhe e ensina a desenvolver nossas habilidades, transformando-nos em pessoas mais capacitadas e preparadas para o mercado de trabalho. Quem uma vez passa pelo Espro, nunca sai a mesma pessoa.\" Daniela, 2023"
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Daniela";
  });
})

Ester.addEventListener("mousedown", () => {
  limpar();
  saber_se_bloqueia();
  visaoEspro_Midia.setAttribute("src", "src/audio/Ester_TEXTOparaVOZ.mp3")
  Ester.classList.add("opacidade");
  Ester.style.backgroundColor = '#6aa84f';
  fecharVisao.style.backgroundColor = '#6aa84f';
  visaoEspro_Texto.textContent = "\"O Espro nos ajuda a evoluir, não só no âmbito profissional, mas também no pessoal, pois nos permite desenvolver nossas habilidades de liderança, comunicação interpessoal, trabalho em equipe e outras competências essenciais. Todos os dias do curso agregaram muito e sou grata por tudo o que aprendi.\" Ester, 2023"
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Ester";
  });
})

Sarah.addEventListener("mousedown", () => {
  limpar()
  saber_se_bloqueia()
  visaoEspro_Midia.setAttribute("src", "src/audio/Sarah_TEXTOparaVOZ.mp3")
  Sarah.classList.add("opacidade")
  Sarah.style.backgroundColor = '#7f6000';
  fecharVisao.style.backgroundColor = '#7f6000';
  visaoEspro_Texto.textContent = "\"O Espro oferece uma oportunidade única para nós. São meses de aprendizado, desenvolvimento profissional e pessoal que talvez eu não teria se não estivesse aqui. Não me arrependo de ter embarcado nessa jornada como aprendiz e sou muito grata por tudo o que o programa me proporcionou. Aprendi muito, conheci pessoas valiosas e vivenciei experiências que levarei para a vida toda.\" Sarah, 2023"
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Sarah";
  });
})

Edvan.addEventListener("mousedown", () => {
  limpar()
  saber_se_bloqueia()
  visaoEspro_Midia.setAttribute("src", "src/audio/Edvan_TEXTOparaVOZ.mp3")
  Edvan.classList.add("opacidade")
  Edvan.style.backgroundColor = '#b70000';
  fecharVisao.style.backgroundColor = '#a30000';
  visaoEspro_Texto.textContent = "\"O ESPRO desempenha um papel fundamental no desenvolvimento profissional e pessoal dos jovens que se dedicam aos exercícios teóricos com afinco. Durante o programa, somos submetidos a atividades que treinam e desenvolvem nossas habilidades profissionais, capacitando-nos a nos tornarmos excelentes profissionais e seres humanos em todos os aspectos de nossas vidas.\" Edvan, 2023"
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Edvan";
  });
})

proximoa.addEventListener("click", () => {
  container.classList.add("hidden")
  container2.classList.remove("hidden")
  proximoa.classList.add("hidden")
  proximob.classList.remove("hidden")
})

proximob.addEventListener("click", () => {
  container2.classList.add("hidden")
  container3.classList.remove("hidden")
  proximob.classList.add("hidden")
  proximoc.classList.remove("hidden")
})

proximoc.addEventListener("click", () => {
  container3.classList.add("hidden")
  container.classList.remove("hidden")
  proximoc.classList.add("hidden")
  proximoa.classList.remove("hidden")
})


fecharVisao.addEventListener("click", () => {
  limpar()
  lerVisao.classList.add("hidden")
  fecharVisao.classList.add("hidden");
  ocupado = false
  listaAlunos.classList.remove("hidden")
  atualizarLista.classList.remove("hidden")
  if (visaoNaoVista.length === 0) {
    visaoEspro.classList.remove("hidden")
    tutoVisao.textContent = "Agradecemos sinceramente por ter lido todas as nossas mensagens. Obrigado!"
  }
});

simplificarLista.forEach(remover_da_lista => {
  remover_da_lista.addEventListener("mouseup", verificarVisaoNaoVista);
}
);

botaoETC.addEventListener("click", () => {
  sourceLinks.classList.toggle("hidden");
  botaoETC.classList.toggle("hidden");
});

fecharLinks.addEventListener("click", () => {
  sourceLinks.classList.toggle("hidden");
  botaoETC.classList.toggle("hidden");
})

const temas = [
  { classe: "temaBranco", logo: "src/fotos/Logo/L2.png" },
  { classe: "temaAmarelo", logo: "src/fotos/Logo/L3.png" },
  { classe: "temaVermelho", logo: "src/fotos/Logo/L4.png" },
  { classe: "temaVerde", logo: "src/fotos/Logo/L5.png" },
  { classe: "", logo: "src/fotos/Logo/L1.png" }
];

trocarTema.addEventListener("click", () => {
  const tema = temas[contTema % temas.length];
  corpo.classList = tema.classe;
  qualLogo.setAttribute("src", tema.logo);
  contTema++;
});
