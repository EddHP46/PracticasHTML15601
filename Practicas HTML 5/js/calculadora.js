//funciones
function calcular(valor) {
    var resultado = document.getElementById("resultado");
    if(resultado.value == "Error") {
      resultado.value = "";
    }
    if(valor == "C") {
      resultado.value = "";
    } else if(valor == "=") {
      try {
        resultado.value = eval(resultado.value);
      } catch(err) {
        resultado.value = "Error";
      }
    } else {
      resultado.value += valor;
    }
  }
  
  function borrar() {
    var resultado = document.getElementById("resultado");
    resultado.value = resultado.value.slice(0, -100);
  }
  
  function igual() {
    var resultado = document.getElementById("resultado");
    if(resultado.value.slice(-1) == "+" || resultado.value.slice(-1) == "-" || resultado.value.slice(-1) == "*" || resultado.value.slice(-1) == "/" || resultado.value.slice(-1) == "%") {
      resultado.value = "Error";
    } else {
      try {
        resultado.value = eval(resultado.value);
      } catch(err) {
        resultado.value = "Error";
      }
    }
  }
  