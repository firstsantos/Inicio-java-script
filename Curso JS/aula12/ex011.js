
var idade = '65'
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65){
        console.log('Voto opcional')
} else {
    console.log('Voto Obrigatorio')
} 



var idade = '17'
var pais = ''
var pessoa = 'pobre'
if (idade > 18) {
    console.log('Pode realizar o CFC')
} else if(pais == 'Autorizaram' || pessoa == 'rica') {
    console.log('Pode realizar o CFC')
} else if (pessoa == 'pobre' && pais == 'Não autorizaram') {
    console.log('Pobre, ta duro dorme menó')
}  else {
    console.log('Não pode realizar o CFC')
}     

