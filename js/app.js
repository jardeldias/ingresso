// No javaScript, atribuir valores aos elementos por id
let pista = document.getElementById('qtd-pista').value = 100;
let cadeiraSuperior = document.getElementById('qtd-superior').value = 200;
let cadeiraInferior = document.getElementById('qtd-inferior').value = 400;

// atualizar os valores da página conforme o valor das variáveis declaradas
document.getElementById('qtd-pista').textContent = pista;
document.getElementById('qtd-inferior').textContent = cadeiraInferior;
document.getElementById('qtd-superior').textContent = cadeiraSuperior;

function comprar() {
    // resgatar o valor no HTML dos elementos por id a seguir
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    // Compra para pista
    if (tipo == 'pista' && quantidade < pista && quantidade > 0) {
        pista = pista - quantidade;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra realizada com sucesso.');
    } else {
        alert('valor indisponivel');
    }

    // Compra para cadeira inferior
    if (tipo == 'inferior' && quantidade < cadeiraInferior && quantidade > 0) {
        cadeiraInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = cadeiraInferior;
        alert('Compra realizada com sucesso.');
    } else {
        alert('valor indisponivel');
    }

    // Compra para cadeira superior
    if (tipo == 'superior' && quantidade < cadeiraSuperior && quantidade > 0) {
        cadeiraSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = cadeiraSuperior;
        alert('Compra realizada com sucesso.');
    } else {
        alert('valor indisponivel');
    }
}