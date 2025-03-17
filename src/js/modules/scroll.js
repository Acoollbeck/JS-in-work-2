export default function scroll() {
    const anchors = document.querySelectorAll('a[href^="#"]')
    const scrollUp = document.querySelector('.pageup')
    
    if(!scrollUp) return

    window.addEventListener('scroll', () => {
            scrollUp.classList.toggle('pageup-hidden', window.scrollY <= 1600)
    })

    function smoothScrollTo (targetElement) {
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault()

            const targetId = this.getAttribute('href').substring(1)
            const targetElement = document.getElementById(targetId)

            smoothScrollTo(targetElement)
        })
    })

}