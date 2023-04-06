const Paulo = document.getElementById("PauloAP");
const Lucas = document.getElementById("Lucas");
const Guilherme = document.getElementById("Guilherme");
const Kamila = document.getElementById("Kamila");
const Sandra = document.getElementById("Sandra");
const Daniela = document.getElementById("Daniela");
const Ester = document.getElementById("Ester");
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
const simplificarLista = [Paulo, Lucas, Guilherme, Kamila, Sandra, Daniela, Ester, aluno5, aluno6, aluno7, aluno8, aluno9];
let visaoEspro = document.querySelector('#visaoEspro');
let visaoEspro_Midia = document.querySelector('#visaoEspro-midia');
let href = document.querySelector('#visaoEspro-link');
let visaoEspro_Texto = document.querySelector('#visaoEsproTexto');
let tutoVisao = document.getElementById("textoTuto");
let tutoVisao2 = document.getElementById("textoTuto2");
let tutoVisao3 = document.getElementById("textoTuto3");
let visaoNaoVista = ["Paulo", "Lucas", "Guilherme", "Kamila", , "Sandra", , "Daniela", "Ester", "AlunoG5", "AlunoG6", "AlunoG7", "AlunoG8", "AlunoG9"];
let atualizarLista = document.getElementById("todosAlunos")
let listaAlunos = document.createElement("ul");
let anteriorB = document.getElementById("anterior");
let proximoB = document.getElementById("proximo");
let contarAlunos = 1;
var visaoEspro_Link = document.getElementById("visaoEspro-link");
var ocupado = false;
var trocarTema = document.getElementById("trocarTema");
var corpo = document.getElementById("corpo");
let contTema = 0;


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
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
    visaoEspro.setAttribute("src", "src/fotos/Visão/fotoFinal_teste.png");
  } else {
    listaAlunos.innerHTML = "";
    visaoNaoVista.forEach(function (aluno) {
      let nomeAluno = document.createElement("li");
      nomeAluno.textContent = aluno;
      listaAlunos.appendChild(nomeAluno);
    });
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
  if (visaoNaoVista.length === 0) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  }
}

window.addEventListener("resize", saber_se_bloqueia)

Paulo.addEventListener("mousedown", () => {
  ocupado = true
  console.log(ocupado)
  saber_se_bloqueia()
  Paulo.classList.add("opacidade")
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.add("hidden")
  visaoEspro_Texto.textContent = "\"Durante todo percurso sendo um jovem aprendiz, eu desenvolvi habilidades para alavancar minhas ideias, projetos pessoais e profissionais. Agradeço a todos os envolvidos pela oportunidade e principalmente ao Hospital Orizonti. Por mais que eu não vá seguir carreira na área em que atuei durante o meu contrato, com certeza levarei o aprendizado para a vida toda.\" Paulo Henrique ΛP, 2023"
  Paulo.style.backgroundColor = '#FABA04';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  Ester.style.backgroundColor = '';
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#FABA04';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Paulo";
  });
})

Lucas.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
  Lucas.classList.add("opacidade")
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Link.classList.add("hidden")
  fecharVisao.classList.remove("hidden");
  visaoEspro_Texto.textContent = "\"Espro é uma ótima oportunidade para juntar um dinheiro considerável e começar o seu próprio negócio. Com uma carga horária de apenas 6 horas diárias, você terá outras 18 horas para perseguir seus sonhos. Lembre-se: pense grande, mas comece pequeno.\" Saudações, Lucas Alves";
  Lucas.style.backgroundColor = '#F16B39';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  Ester.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#F16B39';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Lucas";
  });
})

Guilherme.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
  Guilherme.classList.add("opacidade")
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Link.classList.add("hidden")
  fecharVisao.classList.remove("hidden");
  visaoEspro_Texto.textContent = "\"O meu processo de aprendizado foi muito enriquecedor, pois pude adquirir conhecimentos valiosos sobre autoconhecimento e descobrir o que realmente almejo para mim. Embora o curso tenha abrangido diversos temas, destaco a fase de autoconhecimento no contexto profissional como a mais significativa para mim.\" Guilherme Henrique";
  Guilherme.style.backgroundColor = '#04AB93';
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  Ester.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#04AB93';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Guilherme";
  });
})

Kamila.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
  Kamila.classList.add("opacidade")
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Link.href = "https://instagram.com/kamilaemerick87?igshid=ZDdkNTZiNTM=";
  visaoEspro_Link.textContent = "Meu instagram"
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  Kamila.style.backgroundColor = '#9966cc';
  visaoEspro_Texto.textContent = "\"Para os novos estudantes, desejo que aproveitem as oportunidades e absorvam todo o conteúdo que tivemos aqui. Com certeza, fazendo isso, obterão muito sucesso! 🙏🏻🙏🏻🙏🏻.\" Kamila, março de 2023";
  fecharVisao.classList.remove("hidden");
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  Ester.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#9966cc';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Kamila";
  });
})

Sandra.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
  Sandra.classList.add("opacidade")
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  Sandra.style.backgroundColor = '#95456c';
  visaoEspro_Texto.textContent = "\"Se tem algo que eu aprendi no Espro e que levarei para a vida toda é que devemos sempre dar o nosso melhor, mesmo com as condições atuais, até que possamos ter melhores condições. O Espro nos incentiva a desenvolver nossas habilidades profissionais e devemos aproveitar ao máximo cada dia da parte teórica.\" Sandra, março de 2023"
  fecharVisao.classList.remove("hidden");
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  Ester.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#95456c';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Sandra";
  });
})
Daniela.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
  Daniela.classList.add("opacidade")
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  Daniela.style.backgroundColor = '#f5d1d1';
  visaoEspro_Texto.textContent = "\"O que eu venho aprendendo com o Espro é que nunca devemos desistir, mesmo quando enfrentamos altos e baixos, mantendo sempre o foco em nossos objetivos. O Espro nos acolhe e ensina a desenvolver nossas habilidades, transformando-nos em pessoas mais capacitadas e preparadas para o mercado de trabalho. Quem uma vez passa pelo Espro, nunca sai a mesma pessoa.\" Daniela, março de 2023"
  fecharVisao.classList.remove("hidden");
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Ester.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#f5d1d1';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Daniela";
  });
})

Ester.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
  Ester.classList.add("opacidade")
  visaoEspro_Midia.setAttribute("src", "");
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  Ester.style.backgroundColor = '#6aa84f';
  visaoEspro_Texto.textContent = "\"O Espro nos ajuda a evoluir, não só no âmbito profissional, mas também no pessoal, pois nos permite desenvolver nossas habilidades de liderança, comunicação interpessoal, trabalho em equipe e outras competências essenciais. Todos os dias do curso agregaram muito e sou grata por tudo o que aprendi.\" Ester, março de 2023"
  fecharVisao.classList.remove("hidden");
  Lucas.style.backgroundColor = '';
  Paulo.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  fecharVisao.style.backgroundColor = '#6aa84f';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "Ester";
  });
})

aluno5.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
  visaoEspro_Midia.classList.remove("hidden")
  visaoEspro_Midia.setAttribute("src", "src/fotos/Visão/Video_Teste_VISÃO.mp4")
  visaoEspro_Link.classList.add("hidden")
  visaoEspro.classList.add("hidden");
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#ffffff';
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Texto.textContent = (" ")
  Kamila.style.backgroundColor = '';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG5";
  });
})

aluno6.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
  console.log(aluno6)
  visaoEspro_Midia.classList.remove("hidden")
  visaoEspro_Midia.setAttribute("src", "src/fotos/Visão/Áudio_Teste_VISÃO.mp3")
  visaoEspro.classList.add("hidden");
  visaoEspro_Link.classList.add("hidden")
  fecharVisao.classList.remove("hidden");
  fecharVisao.style.backgroundColor = '#ffffff';
  visaoEspro_Link.classList.remove("hidden")
  visaoEspro_Texto.textContent = (" ")
  Kamila.style.backgroundColor = '';
  visaoNaoVista = visaoNaoVista.filter(function (filtrar) {
    return filtrar !== "AlunoG6";
  });
})

aluno7.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
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
})

aluno8.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
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
})

aluno9.addEventListener("mousedown", () => {
  ocupado = true
  saber_se_bloqueia()
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
})

fecharVisao.addEventListener("click", () => {
  ocupado = false
  visaoEspro_Midia.setAttribute("src", "");
  Paulo.style.backgroundColor = '';
  Lucas.style.backgroundColor = '';
  Guilherme.style.backgroundColor = '';
  Kamila.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Sandra.style.backgroundColor = '';
  Daniela.style.backgroundColor = '';
  Ester.style.backgroundColor = '';
  fecharVisao.classList.add("hidden");
  visaoEspro.classList.add("hidden");
  visaoEspro_Midia.classList.add("hidden")
  visaoEspro_Link.classList.add("hidden")
  visaoEspro_Texto.textContent = (" ")
  if (visaoNaoVista.length === 0) {
    listaAlunos.classList.add("hidden")
    atualizarLista.classList.add("hidden")
  } else {
    listaAlunos.classList.remove("hidden")
    atualizarLista.classList.remove("hidden")
  }
  if (visaoNaoVista.length === 0) {
    visaoEspro.classList.remove("hidden")
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

trocarTema.addEventListener("click", () => {
  contTema = contTema + 1;  
  console.log(contTema) 

  if (contTema === 1) {
    corpo.classList.add("temaBranco");
  } else if (contTema === 2) {
    corpo.classList.remove("temaBranco");
    corpo.classList.add("temaAmarelo");
  } else if (contTema === 3) {
    corpo.classList.remove("temaAmarelo");
    corpo.classList.add("temaVermelho");
  } else if (contTema === 4) {
    corpo.classList.remove("temaVermelho");
    corpo.classList.add("temaAzul");
    contTema = 0;
  }
})


