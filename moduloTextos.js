export function juntaTexto() {
    const texto1 = document.getElementById("texto1").value;
    const texto2 = document.getElementById("texto2").value;
    const resultado = `${texto1} ${texto2}`;
    document.getElementById("resultado_concat").innerHTML = `<h1>${resultado}</h1>`;
}
