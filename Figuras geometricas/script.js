//CUADRADO

const resultadoCuadrado = document.querySelector("#resultadoCuadrado");
const btnCalculoCuadrado = document.querySelector("#calculoCuadrado");

btnCalculoCuadrado.addEventListener("click", (event) =>{
    event.preventDefault();
    const ladoCuadrado = document.querySelector("#ladoCuadrado").value;
    const perimetroCuadrado = ladoCuadrado * 4;
    const areaCuadrado = ladoCuadrado*ladoCuadrado;
    
    resultadoCuadrado.innerHTML = `<p>Perímetro: ${perimetroCuadrado}</p>
                                   <p>Área: ${areaCuadrado}</p>`
})


//TRIANGULO
console.group("Triangulo");
const ladoA = 5;
const ladoB = 5;
const base = 10;
const altura = 4;

console.log(`Los lados del triángulo miden ${ladoA}cm, ${ladoB}cm y su base es ${base}cm`);

const perimetroTriangulo = ladoA + ladoB + base;
console.log(`El perímetro del triángulo es ${perimetroTriangulo}cm`);

const areaTriangulo = (base*altura)/2;
console.log(`El área del triángulo es ${areaTriangulo}cm^2`);

console.groupEnd();

//CIRCULO
console.group("Círculo");
const pi = Math.PI;
const radio = 4;
const diametro = radio*2;

const perimetroCirculo = Math.round(diametro * pi);
console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`)

const areaCirculo = Math.round(pi * radio**2);
console.log(`El área del círculo es: ${areaCirculo}cm^2`)

console.groupEnd();