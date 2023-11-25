
const resultado = (perimetro, area) => {
    return `
        <p class="textR">Perímetro: <span class="valor">${perimetro} cm </span></p>
        <p class="textR">Área: <span class="valor">${area} cm²</span></p>`
}

const sinValor = (contenedorResultado) => {
    return contenedorResultado.innerHTML = `<p>Ingrese un valor correcto</p>`
}

//CUADRADO
const resultadoCuadrado = document.querySelector("#resultadoCuadrado");
const btnCalculoCuadrado = document.querySelector("#calculoCuadrado");

btnCalculoCuadrado.addEventListener("click", (event) =>{
    event.preventDefault();
    const ladoCuadrado = Number(document.querySelector("#ladoCuadrado").value);
    const perimetro = ladoCuadrado * 4;
    const area = ladoCuadrado*ladoCuadrado;
    resultadoCuadrado.classList.add("resultado")

    if(!ladoCuadrado || ladoCuadrado < 0){
        sinValor(resultadoCuadrado);
        return;
    }
    resultadoCuadrado.innerHTML = resultado(perimetro, area);
})


//TRIANGULO
const btnCalculoTriangulo = document.querySelector("#calculoTriangulo");
const resultadoTriangulo = document.querySelector("#resultadoTriangulo");

btnCalculoTriangulo.addEventListener("click", (event) => {
    event.preventDefault();
    const ladoA = Number(document.querySelector("#ladoA").value);
    const ladoB = Number(document.querySelector("#ladoB").value);
    const base = Number(document.querySelector("#base").value);
    const altura = Number(document.querySelector("#altura").value);

    const perimetro = ladoA + ladoB + base;
    const area = (base*altura)/2;
    resultadoTriangulo.classList.add("resultado");

    if(!ladoA || !ladoB || !base || !altura || ladoA <0 || ladoB <0 || base <0 || altura<0){
        sinValor(resultadoTriangulo);
        return;
    }
    
    resultadoTriangulo.innerHTML = resultado(perimetro, area);
})


//CIRCULO
const btnCalculoCirculo = document.querySelector("#calculoCirculo");
const resultadoCirculo = document.querySelector("#resultadoCirculo");
const pi = Number(document.querySelector("#pi").textContent);

btnCalculoCirculo.addEventListener("click", (event) => {
    event.preventDefault();
    const radio = Number(document.querySelector("#radio").value);
    const perimetro = ((radio*2)*pi).toFixed(2);
    const area = (pi*radio**2).toFixed(2);
    resultadoCirculo.classList.add("resultado")

    if(!radio || radio < 0){
        sinValor(resultadoCirculo);
        return;
    }
    resultadoCirculo.innerHTML = resultado(perimetro, area);
})


