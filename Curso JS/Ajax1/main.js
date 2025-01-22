window.onload = function () {
  document.getElementById("btn").addEventListener("click", btn_click);
};

function btn_click() {
  //   document.getElementById("caixa").innerHTML  "Carregando...";
  //Ajax

  //Criamos o objeto request
  let pedido = new XMLHttpRequest();

  //definir a função que vai atuar mediante a resposta
  pedido.onreadystatechange = function () {
    if (pedido.readyState == 4 && pedido.status == 200) {
      document.getElementById("caixa").innerHTML = this.responseText;
    }
  };
  //prepara o pedido
  pedido.open("GET", "dados.txt", true);

  //envia o pedido
  pedido.send();
}
