function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmEuro = valorEmEuroNumerico / 6.2;
  console.log(valorEmEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em euro é £" + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}