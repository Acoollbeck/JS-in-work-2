export default function filter() {
    const images = document.querySelectorAll('.portfolio-block')
    const menuButtons = document.querySelector('.portfolio-menu')
    const buttons = menuButtons.querySelectorAll('li')
    const defaultMessage = document.querySelector('.portfolio-no')

    function addAnimated (selector, animationName) {
        selector.classList.add(animationName)
    }

    function removeAnimated (selector, animationName) {
        selector.classList.remove(animationName)
    }
    
    function filterInit (selector) {
        images.forEach(img => {

            img.classList.add('animated')
            removeAnimated(img, 'flipInY')
            img.style.display = 'none'
            defaultMessage.style.display = 'none'

            if(img.classList.contains(selector)) {
                addAnimated(img, 'flipInY')
                setTimeout(() => {
                    removeAnimated(img, 'flipInY')
                }, 300)
                img.style.display = 'block'
            }
            
            if(selector === defaultMessage) {
                img.style.display = 'none'
                defaultMessage.style.display = 'block'
            }
        })
    }

    menuButtons.addEventListener('click', (e) => {
        const target = e.target

        if(!target.closest('li')) return 

        buttons.forEach(btn => {
            btn.classList.remove('active')
        })
        target.classList.add('active')

        switch(true) {
            case target.classList.contains('all'):
                filterInit('all')
                break
            case target.classList.contains('lovers'):
                filterInit('lovers')
                break
            case target.classList.contains('chef'):
                filterInit('chef')
                break
            case target.classList.contains('girl'):
                filterInit('girl')
                break
            case target.classList.contains('guy'):
                filterInit('guy')
                break
            default: filterInit(defaultMessage)
        }
    })
}