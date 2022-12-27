const listaProjetos = [
  {
    titulo: "Game Mania",
    imagem: "/img/gamemania.png",
    descricao:
      "Site de exemplo de um e-commerce de produtos de tecnologia. Projeto construído durante as aulas de front-end no curso do SENAI.",
    tecnologias: "Angular.",
    link: "#",
  },
  {
    titulo: "Cadastro de Pessoas Físicas e Jurídicas",
    imagem: "//img/cadastro-pessoas.png",
    descricao:
      "Exemplo de um projeto de console para cadastro de pessoas físicas e pessoas jurídicas. Projeto construído durante as aulas de back-end no curso do SENAI.",
    tecnologias: "C# .Net cli.",
    link: "#",
  },
  {
    titulo: "Projeto Portfólio",
    imagem: "//img/portfolio.png",
    descricao:
      "Exemplo de portfólio. Layout da comunidade do discord da Codelândia.",
    tecnologias: "Html, Css, JS.",
    link: "#",
  },
  {
    titulo: "Projeto OptimusTech - 7DaysOfCode",
    imagem: "/img/OptimusTech.jpg",
    descricao: "Projeto do desafio 7DaysOfCode da alura.",
    tecnologias: "Html, Css, JS.",
    link: "#",
  },
  {
    titulo: "Projeto ExoApi",
    imagem: "//img/ExoApi.jpg",
    descricao: "Projeto de um crud simples de api com cors e sistema de login.",
    tecnologias: "C#, .NET6 e AspNet",
    link: "#",
  },
];

function renderizarProjetos() {
  let html = "";
  const containerProjetos = document.querySelector(".projetos__cards");
  listaProjetos.forEach((projeto) => {
    html += `<article class="projetos__card">
    <img class="card__imagem" src=${projeto.imagem} alt="">
    <h3 class="card__titulo">${projeto.titulo}</h3>
    <p class="card__descricao">${projeto.descricao}</p>
    <p class="card__tecnologias">${projeto.tecnologias}.</p>
    <a href=${projeto.link} target="_blank"
        class="btn-padrao btn-padrao-purple"><i class="fa-solid fa-link"></i>Visualizar</a>
    </article>

    `;
  });
  containerProjetos.innerHTML = html;
}
