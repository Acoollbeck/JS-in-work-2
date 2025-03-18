import { sendForm } from "../services/requests"
export default function drop () {

    ['drop', 'dragover'].forEach(eventTarget => {
        document.addEventListener(eventTarget, (e) => {
            if(!e.target.closest('[name=upload]')) {
                e.preventDefault()
                e.stopPropagation()
            }
        })
    })

    const uploadInputs = document.querySelectorAll('[name=upload]')

    function showHighlight (item) {
        item.closest('.file_upload').style.border = '4px solid #e950d7'
        item.closest('.file_upload').style.borderRadius = '25px'

        item.closest('.file_upload').style.backgroundColor = 'rgba(117, 190, 218, 0.5)'
    }

    function hideHighlight (item) {
        item.closest('.file_upload').style.border = ''
        item.closest('.file_upload').style.backgroundColor = ''
    }

    function uploadFile (file, input, url) {

        const formData = new FormData()
        formData.append('file', file)
        sendForm(url, formData)
            .then(response => {
                console.log('Файл Загружен:', response)
                input.previousElementSibling.textContent = 'Файл Загружен!'
            })
            .catch(error => {
                console.warn('Ошибка загрузки: ', error)
                input.previousElementSibling.textContent = 'Ошибка загрузки файла'
            })
            .finally(() => {
                setTimeout(() => {
                    input.previousElementSibling.textContent = 'Файл не выбран'
                }, 2000)
            })
    }

    uploadInputs.forEach(input => {
        ['dragenter', 'dragleave', 'dragover'].forEach(eventName => {
            input.addEventListener(eventName, (e) => {
                e.preventDefault()
                e.stopPropagation()
                if(eventName === 'dragleave') {
                    hideHighlight(input)
                } else {
                    showHighlight(input)
                }
            })
        })

        input.addEventListener('drop', (e) => {
            hideHighlight(input)
            
            const files = e.dataTransfer.files
            if(!files.length) return
            const file = files[0]
            
            if(!file.type.startsWith('image/')) {
                e.preventDefault(); 
                e.stopPropagation();
                
                console.warn('Неверный формат')
                input.previousElementSibling.textContent = 'Неверный формат файла!'

                setTimeout(() => {
                    input.previousElementSibling.textContent = 'Файл не выбран!'
                }, 2000)
                return
            }

            if(input.closest('.header_upload')) {
                uploadFile(file, input, 'assets/server.php')
            } 
        })
    })  
}
