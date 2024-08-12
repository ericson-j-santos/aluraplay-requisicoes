import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) { // Função para buscar um vídeo no servidor e exibir na tela    
    evento.preventDefault(); // Previne o comportamento padrão do formulário de enviar os dados para o servidor e recarregar a página toda vez que o botão de pesquisa é clicado 
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value; // Pega o valor do input de pesquisa e armazena na variável dadosDePesquisa 
    const busca = await conectaApi.buscaVideo(dadosDePesquisa); // Faz a requisição para a API passando o valor do input de pesquisa como parâmetro e armazena na variável busca 

    const lista = document.querySelector("[data-lista]"); // Seleciona a lista de vídeos na página 

    while (lista.firstChild) { // Enquanto houver um primeiro filho na lista de vídeos 
        lista.removeChild(lista.firstChild); // Remove o primeiro filho da lista de vídeos
    }

    busca.forEach(elemento => lista.appendChild( // Para cada elemento retornado da busca, adiciona um card na lista de vídeos       
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))) // Passa os dados do vídeo como parâmetros para a função constroiCard e adiciona o card na lista de vídeos 
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))