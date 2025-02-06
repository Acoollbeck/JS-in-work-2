
export default function modals (triggerSelector, modalSelector, closeSelector) {
    
    const triggers = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelectorAll(closeSelector)

    
    function calcScroll () {
        
        const div = document.createElement('div')
        
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility = 'hidden'
        div.style.position = 'absolute'
        document.body.appendChild(div)
        
        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()
        return scrollWidth
        
    }

    function openModal (selector = modal) {
        const scrollWidth = calcScroll()
        
        selector.style.display = 'block'
        
        selector.classList.add('animated', 'fadeIn')
        selector.classList.remove("fadeOut");
        document.body.style.marginRight = `${scrollWidth}px`
        document.body.style.overflow = 'hidden'
    }
    
    function closeModal() {
        
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.marginRight = "";
            document.body.style.overflow = "";
        }, 200)
        
        modal.classList.add('fadeOut');
        modal.classList.remove("fadeIn");
        
    }
    
    function showModalByTime (selector, time) {
        setTimeout(() => {
            let display

            document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none') {
                    display = 'block'
                }
            })

            if(!display) {
                openModal(document.querySelector(selector))
                
            }
        }, time)
    }
    
    triggers.forEach(trigger => {
        
        trigger.addEventListener('click', () => {
            openModal()
        })
        
    })
    
    close.forEach(item => {

        item.addEventListener('click', () => {
            closeModal()
        })

    })

    modal.addEventListener('click', (e) => {

        if(e.target == modal) {
            closeModal()
        }

    })

    showModalByTime('.popup-consultation', 5000)
}