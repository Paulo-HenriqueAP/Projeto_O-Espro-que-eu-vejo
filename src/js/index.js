let texto = document.getElementById("visaoEsproTexto");
const comoFoifeito = document.getElementById("comoFoi");
let definirLogo = document.getElementById("logo");
let limitarTema = (Math.floor(Math.random() * 5)) // não pode começar com o tema escuro. Adicione "*6" para implementar.
let corpo = document.getElementById("corpo");
let link_doJovem = document.getElementById("visaoEspro-link");
let msgTela = document.getElementById("textoTuto")
let textoPara_voz = document.getElementById("textoVoz")

let jovens = [
  "Paulo", "Lucas", "Guilherme",
  "Kamila", "Sandra", "Daniela",
  "Ester", "Sarah", "Edvan"
];

function filtrarJ() {
  if (jovens.length === 8) {
    msgTela.textContent = ("Explore usando ᐁ e descubra perspectivas únicas deixadas por cada jovem. Consulte a lista para verificar quem ainda não foi visto.")
  }

  if (jovens.length === 0) {
    document.getElementById("todosAlunos").classList.add("hidden")
    msgTela.textContent = ("Agradecemos sinceramente por ter lido todas as nossas mensagens. Obrigado!")
  }
  
}


const temas = [
  { tema: 0, logo: "src/fotos/Logo/L1.png", classe: "" },
  { tema: 1, logo: "src/fotos/Logo/L2.png", classe: "temaBranco" },
  { tema: 2, logo: "src/fotos/Logo/L3.png", classe: "temaAmarelo" },
  { tema: 3, logo: "src/fotos/Logo/L4.png", classe: "temaVermelho" },
  { tema: 4, logo: "src/fotos/Logo/L5.png", classe: "temaVerde" },
  { tema: 5, logo: "src/fotos/Logo/L1.png", classe: "temaBlack" }
];

function limpar() {
  texto.classList.remove(
    "boxP", "boxL", "boxG",
    "boxK", "boxS", "boxD",
    "boxE", "boxSa", "boxEd"
  );

  jovens = jovens.filter(function (filtrar) {
    return filtrar !== remover;
  });

  filtrarJ()

  document.getElementById("add_removerVoz").textContent = "||"
  document.getElementById("add_removerVoz").classList.remove("hidden")
  document.getElementById("todosAlunos").classList.add("bloqueiaLista")
  textoPara_voz.setAttribute("src", "")
  fecharVisao.classList.remove("hidden");
  link_doJovem.classList.add("hidden")
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
  
};

function botao_fecharVisao() {
  limpar()
  fecharVisao.classList.add("hidden")
  texto.textContent = ""
  document.getElementById("todosAlunos").classList.remove("bloqueiaLista")
  document.getElementById("add_removerVoz").classList.add("hidden")
};

function textoPaulo() {
  remover = "Paulo"
  limpar()
  texto.classList.add("boxP")
  texto.textContent = "\"Durante todo percurso sendo um jovem aprendiz, eu desenvolvi habilidades para alavancar minhas ideias, projetos pessoais e profissionais. Agradeço a todos os envolvidos pela oportunidade e principalmente ao Hospital Orizonti. Por mais que eu não vá seguir carreira na área em que atuei durante o meu contrato, com certeza levarei o aprendizado para a vida toda.\" Paulo Henrique ΛP, 2023"
  Paulo.classList.add("opacidade")
  Paulo.style.backgroundColor = '#16161D';
  fecharVisao.style.backgroundColor = '#16161D'
  textoPara_voz.setAttribute("src", "src/audio/Paulo_TEXTOparaVOZ.mp3")
  document.getElementById("po").classList.add("block")
};

function textoLucas() {
  remover = "Lucas"
  limpar()
  texto.classList.add("boxL")
  texto.textContent = "\"Espro é uma ótima oportunidade para juntar um dinheiro considerável e começar o seu próprio negócio. Com uma carga horária de apenas 6 horas diárias, você terá outras 18 horas para perseguir seus sonhos. Lembre-se: pense grande, mas comece pequeno.\" Lucas Alves, 2023"
  document.getElementById("ls").classList.add("block")
  Lucas.classList.add("opacidade")
  Lucas.style.backgroundColor = '#F16B39'
  fecharVisao.style.backgroundColor = '#F16B39'
  textoPara_voz.setAttribute("src", "src/audio/Lucas_TEXTOparaVOZ.mp3")
};

function textoGuilherme() {
  remover = "Guilherme"
  limpar()
  texto.classList.add("boxG")
  texto.textContent = "\"O meu processo de aprendizado foi muito enriquecedor, pois pude adquirir conhecimentos valiosos sobre autoconhecimento e descobrir o que realmente almejo para mim. Embora o curso tenha abrangido diversos temas, destaco a fase de autoconhecimento no contexto profissional como a mais significativa para mim.\" Guilherme Henrique, 2023"
  document.getElementById("ge").classList.add("block")
  Guilherme.classList.add("opacidade")
  Guilherme.style.backgroundColor = '#257FFF'
  fecharVisao.style.backgroundColor = '#257FFF'
  textoPara_voz.setAttribute("src", "src/audio/Guilherme_TEXTOparaVOZ.mp3")
};

function textoKamila() {
  remover = "Kamila"
  limpar()
  texto.classList.add("boxK")
  texto.textContent = "\"Para os novos estudantes, desejo que aproveitem as oportunidades e absorvam todo o conteúdo que tivemos aqui. Com certeza, fazendo isso, obterão muito sucesso! 🙏🏻🙏🏻🙏🏻.\" Kamila, 2023"
  document.getElementById("ka").classList.add("block")
  Kamila.classList.add("opacidade")
  Kamila.style.backgroundColor = '#9966cc'
  fecharVisao.style.backgroundColor = '#9966cc'
  link_doJovem.classList.remove("hidden")
  link_doJovem.href = "https://instagram.com/kamilaemerick87?igshid=ZDdkNTZiNTM=";
  link_doJovem.textContent = "Meu instagram"
  textoPara_voz.setAttribute("src", "src/audio/Kamila_TEXTOparaVOZ.mp3")
};

function textoSandra() {
  remover = "Sandra"
  limpar()
  texto.classList.add("boxS")
  texto.textContent = "\"Se tem algo que eu aprendi no Espro e que levarei para a vida toda é que devemos sempre dar o nosso melhor, mesmo com as condições atuais, até que possamos ter melhores condições. O Espro nos incentiva a desenvolver nossas habilidades profissionais e devemos aproveitar ao máximo cada dia da parte teórica.\" Sandra, 2023"
  document.getElementById("sa").classList.add("block")
  Sandra.classList.add("opacidade")
  Sandra.style.backgroundColor = '#863e61'
  fecharVisao.style.backgroundColor = '#863e61'
  textoPara_voz.setAttribute("src", "src/audio/Sandra_TEXTOparaVOZ.mp3")
};

function textoDaniela() {
  remover = "Daniela"
  limpar()
  texto.classList.add("boxD")
  texto.textContent = "\"O que eu venho aprendendo com o Espro é que nunca devemos desistir, mesmo quando enfrentamos altos e baixos, mantendo sempre o foco em nossos objetivos. O Espro nos acolhe e ensina a desenvolver nossas habilidades, transformando-nos em pessoas mais capacitadas e preparadas para o mercado de trabalho. Quem uma vez passa pelo Espro, nunca sai a mesma pessoa.\" Daniela, 2023"
  document.getElementById("da").classList.add("block")
  Daniela.classList.add("opacidade")
  Daniela.style.backgroundColor = '#485643'
  fecharVisao.style.backgroundColor = '#485643'
  textoPara_voz.setAttribute("src", "src/audio/Daniela_TEXTOparaVOZ.mp3")
};

function textoEster() {
  remover = "Ester"
  limpar()
  texto.classList.add("boxE")
  texto.textContent = "\"O Espro nos ajuda a evoluir, não só no âmbito profissional, mas também no pessoal, pois nos permite desenvolver nossas habilidades de liderança, comunicação interpessoal, trabalho em equipe e outras competências essenciais. Todos os dias do curso agregaram muito e sou grata por tudo o que aprendi.\" Ester, 2023"
  document.getElementById("er").classList.add("block")
  Ester.classList.add("opacidade")
  Ester.style.backgroundColor = '#6aa84f'
  fecharVisao.style.backgroundColor = '#6aa84f'
  textoPara_voz.setAttribute("src", "src/audio/Ester_TEXTOparaVOZ.mp3")
};

function textoSarah() {
  remover = "Sarah"
  limpar()
  texto.classList.add("boxSa")
  texto.textContent = "\"O Espro oferece uma oportunidade única para nós. São meses de aprendizado, desenvolvimento profissional e pessoal que talvez eu não teria se não estivesse aqui. Não me arrependo de ter embarcado nessa jornada como aprendiz e sou muito grata por tudo o que o programa me proporcionou. Aprendi muito, conheci pessoas valiosas e vivenciei experiências que levarei para a vida toda.\" Sarah, 2023"
  document.getElementById("sh").classList.add("block")
  Sarah.classList.add("opacidade")
  Sarah.style.backgroundColor = '#cbbf99'
  fecharVisao.style.backgroundColor = '#cbbf99'
  textoPara_voz.setAttribute("src", "src/audio/Sarah_TEXTOparaVOZ.mp3")
};

function textoEdvan() {
  remover = "Edvan"
  limpar()
  texto.classList.add("boxEd")
  texto.textContent = "\"O ESPRO desempenha um papel fundamental no desenvolvimento profissional e pessoal dos jovens que se dedicam aos exercícios teóricos com afinco. Durante o programa, somos submetidos a atividades que treinam e desenvolvem nossas habilidades profissionais, capacitando-nos a nos tornarmos excelentes profissionais e seres humanos em todos os aspectos de nossas vidas.\" Edvan, 2023"
  document.getElementById("en").classList.add("block")
  Edvan.classList.add("opacidade")
  Edvan.style.backgroundColor = '#b70000'
  fecharVisao.style.backgroundColor = '#a30000'
  textoPara_voz.setAttribute("src", "src/audio/Edvan_TEXTOparaVOZ.mp3")
};


function avancarC() {
  container3.classList.add("hidden")
  container.classList.remove("hidden")
};

function avancarC2() {
  container.classList.add("hidden")
  container2.classList.remove("hidden")
};

function avancarC3() {
  container2.classList.add("hidden")
  container3.classList.remove("hidden")
};

comoFoifeito.addEventListener("click", function () {
  links.classList.toggle("hidden")
  comoFoifeito.classList.toggle("hidden")
});

function fecharComofoi() {
  links.classList.toggle("hidden")
  comoFoifeito.classList.toggle("hidden")
};



function definirTema() {
  definirLogo.setAttribute("src", temas[limitarTema].logo)
  document.body.classList = temas[limitarTema].classe
};

function trocouTema() {
  switch (limitarTema) {
    case 5:
      limitarTema = 0
      break;
    default:
      limitarTema++
      break
  }
  definirTema()
};

function audio_On_Off() {
  if (textoPara_voz.paused) {
    textoPara_voz.play()
    document.getElementById("add_removerVoz").textContent = "||"
  } else {
    textoPara_voz.pause()
    document.getElementById("add_removerVoz").textContent = "▷"
  }
};

definirTema();