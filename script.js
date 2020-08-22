let order = [];
let clickedOrder= [];
let score = 0;

//0 -- verde 
//1 -- vermelho
//2 -- amarelho
//3 -- azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem de cores
let shufflerOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor,Number(i)+1);
    }
}

//acendo  proxima cor
let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(()=> {
        element.classList.add('selected');
    }, tempo -250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botões criados são os mesmo da ordem gerada no shuffle
let checkOrder = () => {
    for(let i in cickedOrder) {
        if(clickedOrder[i] != order [i]){
            lose();
            break;
        }
    }
    if(!clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

//função para o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    })

    checkOrder();
}

