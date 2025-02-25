import { sendForm } from "../services/requests"

export default function forms () {
    const forms = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const inputsUpload = document.querySelectorAll('[name=upload]')
    const formMessage = {
        load: 'Идет отправка...',
        loadImage: 'assets/img/spinner.gif',

        success: 'Отправлено',
        successImage: 'assets/img/ok.png',

        fail: 'Ошибка',
        failImage: 'assets/img/fail.png'
    }

    function setupFileInputs () {
        inputsUpload.forEach(input => {
            input.addEventListener('input', () => {
                let name = input.files[0].name
                if(name.length > 6) {
                    name = name.slice(0, 6) + '...' + name.split('.').pop()
                }
                input.previousElementSibling.innerText = name
            })
        })
    }

    setupFileInputs()

    function createMessage (form, message, url) {
        const formParent = form.parentNode
        const statusMessage = document.createElement('div')

        statusMessage.classList.add('animated', 'fadeInDown')
        statusMessage.style.textAlign = 'center'
        statusMessage.innerHTML = `
            <img src = '${url}' alt = 'status'>
            <div>${message}</div>
        `
        formParent.appendChild(statusMessage)
        return statusMessage
    }
 
    forms.forEach(form => {
        form.classList.add('animated', 'fadeInUp')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            form.style.display = 'none'
            let statusMessage = createMessage(form ,formMessage.load, formMessage.loadImage)
            let path = form.closest('.popup-design') || form.closest('.form_calc') ? 'assets/server.php' : 'assets/question.php'

            const formData = new FormData(form)
            sendForm(path, formData)
                .then(response => {
                    statusMessage.children[0].setAttribute('src', formMessage.successImage)
                    statusMessage.children[1].innerText = formMessage.success
                    console.log(response)
                })
                .catch(error => {
                    statusMessage.children[0].setAttribute('src', formMessage.failImage)
                    statusMessage.children[1].innerText = formMessage.fail
                    console.log(error)
                })
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove()
                        form.style.display = 'block'
                        form.reset()
                        inputsUpload.forEach(input => input.previousElementSibling.innerText = 'Файл не выбран')
                    }, 3000)
                })
        })
    })

}