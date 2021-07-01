let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "rigth" ;

/*Criando o Backgroud do jogo*/
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
} /*Fim Criando o Backgroud do jogo*/

/*Criando a Cobrinha*/
function criarCobrinha(){
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "purple";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
} /*Fim Criando a Cobrinha*/

/*Criando a função iniciar jogo*/
function iniciarJogo(){
    criarBG();
    criarCobrinha();/*Fim Criando a função iniciar jogo*/

    let snakeX= snake[0].x;
    let snakeY= snake[0].y;

    /*Função coordenada*/
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    /*Fim Função coordenada*/

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);


}

let jogo = setInterval(iniciarJogo, 100);