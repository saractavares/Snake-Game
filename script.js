/*Para criar o background*/
let canvas = document.getElementById("snake"); //chamou o canvas do html
let context = canvas.getContext("2d"); //para trabalhar o jogo em 2d
let box = 32; //cada quadradinho do jogo tem 32px
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8* box
}
let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen"; // fillStyle é o estilo do fundo, a cor
    context.fillRect(0, 0, 16 * box, 16 * box); // Rect trabalha o tamanho, 4 propiedades, eixos x e y, altura e largura.
}

function criarCobrinha(){
    for(i=0; i< snake.length; i++){
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);

