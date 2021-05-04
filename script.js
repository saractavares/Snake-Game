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
let food = {
   x: Math.floor(Math.random() * 15 + 1) * box,
   y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "black"; // fillStyle é o estilo do fundo, a cor
    context.fillRect(0, 0, 16 * box, 16 * box); // Rect trabalha o tamanho, 4 propiedades, eixos x e y, altura e largura.
}

function criarCobrinha(){//lógica, cor e tamanho
    for(i=0; i < snake.length; i++){
        context.fillStyle = '#66FFFF';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);//evento listener para iniciar o jogo com o clique do mouse

function update(event){//direção que a cobrinha anda, começando pela direita, sentido horário
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){

    //condições para a cobrinha reaparecer do outro lado quando bater em uma borda
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;//quando bate do limite de quadradinhos do context.fillRect, ela começa de novo no quadradinho 0
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            alert("Game Over :(");
        }
    }

    criarBG();//chamou as funções de cima dentro dessa função para quando iniciar o jogo estar tudo ok
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;//variáveis da direção que a cobrinha anda no plano cardeal
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();//retira o ultimo elemento da array snake, para não ficar o quadradinho verde atrás, onde a cobrinha já passou
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }//continuar aparecendo comidinha depois q a cobrinha comer


    
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);//add como primeiro quadradinho da cobrinha
}

let jogo = setInterval(iniciarJogo, 100);

