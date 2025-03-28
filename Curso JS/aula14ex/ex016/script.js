function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passos = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1} `
            }
        } else {
            // CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{27A1} `
            }
        }
        res.innerHTML = res.innerHTML.slice(0, -2); // Remove a última seta

    }
}