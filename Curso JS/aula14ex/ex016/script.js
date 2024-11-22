function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let contagem = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || contagem.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        alert('Ok!')
    }
}