export default function modals () {
    
    let clickBtn = false

    function openByScroll (selector) {
        window.addEventListener('scroll', function checkScroll () {
    
            if(!clickBtn && (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) && document.querySelector(selector)) {
                clickBtn = true
                document.querySelector(selector).click()
                window.removeEventListener('scroll', checkScroll)
            }
        })
    }

    function initModal (triggerSelector, modalSelector, closeSelector, removeTrigger = false) {
        
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
            if(!removeTrigger && document.querySelector('.fixed-gift')) {
                document.querySelector('.fixed-gift').style.marginRight = `${scrollWidth}px`
            }
        }
        
        function closeModal() {
            
            setTimeout(() => {
                modal.style.display = "none";
                document.body.style.marginRight = "";
                document.body.style.marginRight = "";
                document.body.style.overflow = "";
                if(!removeTrigger && document.querySelector('.fixed-gift')) {
                    document.querySelector('.fixed-gift').style.marginRight = ''
                }
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
                clickBtn = true
                console.log(clickBtn)
                if(removeTrigger) {
                    trigger.remove()
                }
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

        showModalByTime('.popup-consultation', 60000)
    }
    
    openByScroll('.fixed-gift')
    initModal('.button-design', '.popup-design', '.popup-close')
    initModal('.button-consultation', '.popup-consultation', '.popup-close')
    initModal('.fixed-gift', '.popup-gift', '.popup-close', true)
}
