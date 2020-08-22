"use strict";

var order = [];
var clickedOrder = [];
var score = 0; //0 -- verde 
//1 -- vermelho
//2 -- amarelho
//3 -- azul

var blue = document.querySelector('.blue');
var red = document.querySelector('.red');
var green = document.querySelector('.green');
var yellow = document.querySelector('.yellow'); //cria ordem de cores

var shufflerOrder = function shufflerOrder() {
  var colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (var i in order) {
    var elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}; //acendo  proxima cor


var lightColor = function lightColor(element, number) {
  time = time * 500;
  setTimeout(function () {
    element.classList.add('selected');
  }, tempo - 250);
  setTimeout(function () {
    element.classList.remove('selected');
  });
}; //checa se os botões criados são os mesmo da ordem gerada no shuffle


var checkOrder = function checkOrder() {
  for (var i in cickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }

  if (!clickedOrder.length == order.length) {
    alert("Pontua\xE7\xE3o: ".concat(score, "\nVoc\xEA acertou! Iniciando pr\xF3ximo n\xEDvel"));
    nextLevel();
  }
}; //função para o click do usuário


var click = function click(color) {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');
  setTimeout(function () {
    createColorElement(color).classList.remove('selected');
  });
  checkOrder();
};