
function teste() {
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    if (num % 2 == 1) {
        tipo = '<strong>ÍMPAR</strong>'
    } else {
        tipo = '<strong>PAR</strong>'
    }

    let res = window.document.querySelector('section#result')
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}