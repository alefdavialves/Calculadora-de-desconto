let valor = document.getElementById("valor");
let porcentagem = document.getElementById("porcentagem");

function calcular() {
    let valorNumero = Number(valor.value);
    let porcentagemNumero = Number(porcentagem.value);


    if (!valorNumero || !porcentagemNumero) {

        window.alert("Preencha todos os campos corretamente");
        return;
    }

    let desconto = valorNumero * (porcentagemNumero / 100);
    let total = valorNumero - desconto;


    let resultadoAntigo = document.getElementById("resultado");

    if (resultadoAntigo) {
        resultadoAntigo.remove();
    }

    let resultado = document.createElement("p");
    resultado.id = "resultado";
    resultado.innerText = `Valor com ${porcentagemNumero}% de desconto: R$ ${total.toFixed(2)}`;

    let main = document.querySelector("main");
    main.appendChild(resultado);

}
