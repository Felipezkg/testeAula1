const borda_tabuleiro = 'black';
const fundo_tabuleiro = "white";
const cobra_col = 'lighblue';
const borda_cobra = 'darkblue';

let cobra = [ 
    {x:200, y:200}, 
    {x:190, y:200}, 
    {x:180, y:200}, 
    {x:170, y:200}, 
    {x:160, y:200},];

// Puxa o Elemento Canvas.
const cobrinha_tabuleiro = document.getElementById("jogoCanvas");
// Retorna um desenho em duas Dimensões.
const cobrinha_ctx = jogoCanvas.getContext("2d");
// Começa o Jogo.
main();

// Função principal chamada repetidamente para manter o jogo rodando.
function main(){
    clearCanvas();
    pintarCobra();
}
// Pinta a borda ao redor do Canvas.
function clearCanvas(){
    // Selecione a Cor para Pintar o Desenho.
    cobrinha_ctx.fillStyle = fundo_tabuleiro;
    // Selecione a Cor para a Borda do Canvas.
    cobrinha_ctx.strokestyle = borda_tabuleiro;
    // Desenhe um retângulo "preenchido" para cobrir toda a tela.
    cobrinha_ctx.fillRect(0, 0, cobrinha_tabuleiro.width, cobrinha_tabuleiro.height);
    // Desenhe uma "borda" ao redor de toda a tela.
    cobrinha_ctx.strokeRect(0, 0, cobrinha_tabuleiro.width, cobrinha_tabuleiro.height);
}
// Pintar a Cobra no Canvas.
function pintarCobra(){
    // Desenha cada Parte.
    cobra.forEach(pintarPartedaCobra);
}
// Pinta Uma parte da Cobra.
function pintarPartedaCobra(parteCobra){
    // Selecione a Cor para Pintar a Cobra.
    cobrinha_ctx.fillStyle = 'lightblue';
    // Selecione a Cor para a Borda da Cobra.
    cobrinha_ctx.strokestyle = 'darkblue';
    // Desenhe um retângulo "preenchido" para representar a parte da cobra nas coordenadas em 
    // que a parte está localizada
    cobrinha_ctx.fillRect(parteCobra.x, parteCobra.y, 10, 10);
    // Pinta a Borda ao redor da Cobra.
    cobrinha_ctx.strokeRect(parteCobra.x, parteCobra.y, 10, 10);
}









