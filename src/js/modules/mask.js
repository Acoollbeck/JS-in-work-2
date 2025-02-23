export default function mask () {
    const inputsPhone = document.querySelectorAll('[name=phone]')
    const inputsName = document.querySelectorAll('[name=name]')
    const inputsText = document.querySelectorAll('[name=message]')

    function checkInputs (inputs) {
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^а-яА-ЯёЁ\s]/g, '')
            })
        })
    }

    checkInputs(inputsName)
    checkInputs(inputsText)

    inputsPhone.forEach(input => {
        input.addEventListener('input', () => {
            
            let value = input.value.replace(/\D/g, '')
            if(value.startsWith('7') || value.startsWith('8')) value = value.slice(1)
        
            let formatted = '+7 ('
            if(value.length > 0) formatted += value.slice(0, 3)
            if(value.length >= 4) formatted += ') ' + value.slice(3, 6)
            if(value.length >= 7) formatted += '-' + value.slice(6, 8)
            if(value.length >= 9) formatted += '-' + value.slice(8, 10)
        
            input.value = formatted
        })
    })

}