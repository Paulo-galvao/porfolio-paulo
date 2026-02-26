export const projects = [
    {
        title: "Produzindo água",
        background: "/images/projects/produzindoagua.png",
        stack: ["Html", "Css", "JavaScript"],
        link: "https://projetoproduzindoagua.netlify.app/",
        repository: "https://github.com/Paulo-galvao/produzindo-agua/tree/master",
        content: `
            Desenvolvido para documentar as atividades 
            do projeto de extensão Desenvolvendo Água do curso de 
            Geografia da UEPG. Totalmente responsivo, simples mas com 
            funcionalides bem definidas. Grande ponto forte é o seu slide 
            de imagens da seção Galeria, que foi a solução para a quantidade 
            de fotos de categorias diferentes.  
        `
    },
    {
        title: "Sistema de Gerenciamento de Chamados",
        background: "/images/projects/chamados-2.png",
        stack: ["Php", "Laravel", "Sqlite"],
        link: "#",
        repository: "https://github.com/Paulo-galvao/gerenciamento_de_chamados",
        content: `
            O sistema permite a criação, atendimento e exclusão de chamados.
            Cada chamado deve receber um título, descrição e categoria a qual pertence.
            Ao ser criado cada chamado já recebe a data de criação, data de resolução, prazo de solução e inicia com "situação" novo.
            O prazo de solução é três dias após a data de criação.
            Na página inicial é mostrado qual a procentagem de chamados resolvidos dentro do prazo no mês.
        `
    },
    {
        title: "ReadMoreBooks",
        background: "/images/projects/readmore.png",
        stack: ["Node", "React", "Postgresql"],
        link: "https://readmorebooks.netlify.app/",
        repository: "https://github.com/Paulo-galvao/Biblioteca_FrontEnd",
        content: `
            Projeto fullstack de biblioteca virtual que permite usuários cadastrar e avaliar livros.
            Possui forte validação de dados e segurança com autenticação/autorização de rotas, além de encriptação de senha com bcrypt e token com JWT.
            Utilizei os serviços Render, NeonDb e Netlify para ter tudo funcionado online apenas usando os planos gratuitos dessas plataformas.

        `
    },
];