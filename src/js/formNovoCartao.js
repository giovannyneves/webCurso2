; (function () {

    const form = document.querySelector('.formNovoCartao')
    let numeroDoCartao = 0

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        const textarea = form.querySelector('.formNovoCartao-conteudo')
        const isTextAreaVazio = textarea.value.trim().length === 0
        if (isTextAreaVazio) {
            const msgErro = document.createElement('div')
            const btnSubmit = form.children[form.children.length - 1]

            msgErro.classList.add('formNovoCartao-msg')
            msgErro.textContent = 'Formulário inválido. Não digite vários nada!'

            form.addEventListener('animationend', function (event) {
                event.target.remove()
            })
            form.insertBefore(msgErro, btnSubmit)

        } else {
            moduloMural.adicionaCartaoNoMural({conteudo: textarea.value})
        }

        textarea.value = ''
    })

    form.classList.remove('no-js')
})()