const texto = document.getElementById('texto')
const salida = document.getElementById('salida')
const personas = [
    "Juan Pérez",
    "María López",
    "Carlos González",
    "Ana Pérez",
    "Juan Ramírez",
    "Lucía Fernández",
    "Jorge Herrera",
    "María Gómez",
    "Raúl Torres",
    "Carlos Sánchez"
];

salida.innerHTML = ''
personas.forEach(persona => {
    salida.innerHTML += `<li>${persona}</li>`
});

function filtro(entrada){
    let resultado = personas.filter(persona => persona.toLowerCase().includes(entrada.toLowerCase()))
    return resultado
}

texto.addEventListener('input', () => {
    let entrada = texto.value
    let resultado = filtro(entrada)
    salida.innerHTML = ''
    resultado.forEach(persona => {
        salida.innerHTML += `<li>${persona}</li>`
    });
})