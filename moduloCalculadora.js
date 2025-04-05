export function divideNumero(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    if (numero1 <=0 || numero2 <=0){
        document.getElementById("resultado_divisao").innerHTML = `<h1>Operação Invalida</h1>`;
    }
    else{
        let resultado = parseFloat((numero1 / numero2).toFixed(3));
        document.getElementById("resultado_divisao").innerHTML = `<h1>${resultado}</h1>`;
    }
}