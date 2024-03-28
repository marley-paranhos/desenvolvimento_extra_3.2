// variável constante que conecta o html ao javascript por id.
const mensagem = document.getElementById("mensagem");

// função que imprime a mensagem "Conexão feita com sucesso!" três vezes no terminal.
function imprimirMensagem(){
    for (let i = 0; i < 3; i++) {
        console.log("Conexão feita com sucesso!");
    }
}

// chamando a função.
imprimirMensagem();
