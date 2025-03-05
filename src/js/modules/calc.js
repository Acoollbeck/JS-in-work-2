export default function calc(size, material, option, promocode, result) {

    const sizeSelect = document.querySelector(size)
    const materialSelect = document.querySelector(material)
    const optionSelect = document.querySelector(option)
    const promocodeInput = document.querySelector(promocode)
    const resultBlock = document.querySelector(result)

    let sum = 0

    function calcInit () {
        const sizeValue = +sizeSelect.value
        const materialValue = +materialSelect.value
        const optionValue = +optionSelect.value

        sum = Math.round(sizeValue * materialValue + optionValue)

        if(!sizeValue || !materialValue) {
            resultBlock.textContent = 'Выберите размер и материал'
            return
        } 

        if(promocodeInput.value.trim().toUpperCase() == 'IWANTPOPART') {
            sum = Math.round(sum * 0.7)
        } 
        
        resultBlock.textContent = sum
    }

    [sizeSelect, materialSelect, optionSelect, promocodeInput].forEach(element => {
        element.addEventListener('input', calcInit)
    })
}