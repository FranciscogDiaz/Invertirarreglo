import "./styles.css";
// IMPORTANTE: PARA COMENTAR PRESIONE CTRL + C CTRL + U
// IMPORTANTE: PARA DESCOMENTAR PRESIONE CTRL + K CTRL + U

let rotulo = document.getElementById("rotulo");

//Boton
let btnEnv = document.getElementById("btnEnv");

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  let dimensionArreglo: number[] = Number(
    prompt(`Ingrese la dimension del arreglo`)
  );

  let numerosIngresados: number[] = new Array(dimensionArreglo);

  for (let indice = dimensionArreglo-1; indice >= 0; indice--) {
    numerosIngresados[indice] = prompt(`Ingrese la dimension del arreglo`

    );

    console.log(numerosIngresados[indice + 1], "")
    resultado.innerHTML = `Es ${numerosIngresados}`
  }
}

});
