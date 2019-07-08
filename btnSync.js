"use strict";

;

(function () {
  var btnSync = $('#btnSync');
  btnSync.click(function () {
    btnSync.addClass('botaoSync--esperando');
    btnSync.removeClass('botaoSync--sincronizado');
    var salvadorDeCartoes = new XMLHttpRequest();
    salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');
    salvadorDeCartoes.setRequestHeader('Content-Type', 'application/json');
    var cartoes = document.querySelectorAll('.cartao');
    var infosDoMural = {
      usuario: 'giovannyneevees@gmail.com',
      cartoes: Array.from($('.cartao')).map(function (cartao) {
        return {
          conteudo: cartao.querySelectorAll('.cartao-conteudo').textContent,
          cor: getComputedStyle(cartao).getPropertyValue('background-color')
        };
      })
    };
    salvadorDeCartoes.send(JSON.stringify(infosDoMural));
    salvadorDeCartoes.addEventListener('load', function () {
      var response = JSON.parse(salvadorDeCartoes.response);
      console.log("".concat(response.quantidade, " cart\xF5es salvos em ").concat(response.usuario));
      btnSync.removeClass('botaoSync--esperando');
      btnSync.addClass('botaoSync--sincronizando');
    });
    salvadorDeCartoes.addEventListener('error', function () {
      btnSync.removeClass('botaoSync--esperando');
      btnSync.addClass('botaoSync--deuRuim');
    });
  });
  btnSync.removeClass('no-js');
})();