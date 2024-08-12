async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) { // Função para buscar um vídeo
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`); // Faz a requisição para a API
    const conexaoConvertida = conexao.json(); // Converte a resposta da API para JSON

    return conexaoConvertida; // Retorna a resposta da API
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}