// Velocidade máxima de 70
// A cada 5km acima do limite você ganha 1 ponto
// Math.Floor ()
// Caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(89);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 60;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log ('Ok');
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
        if (pontos >= 12)
            console.log ('Carteira Suspensa');
        else
            console.log ('Pontos',pontos);
    }
}