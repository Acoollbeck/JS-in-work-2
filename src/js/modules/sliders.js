export default function sliders (slidesSelector, dist, prevBtnSelector, nextBtnSelector) {
    
    const slides = document.querySelectorAll(slidesSelector)
    if(slides.length === 0) return
    let slideIndex = 1
    let intervalId = null
    
    function showSlide(index) {
        
        slides.forEach(slide => {
            slide.classList.add('animated')
            slide.style.display = 'none'
        })
        slides[slideIndex - 1].style.display = 'block'
    }
    
    function changeSlide (n) {
        let newIndex = slideIndex += n
        if (newIndex > slides.length) newIndex = 1
        if (newIndex < 1) newIndex = slides.length

        slideIndex = newIndex
        showSlide(slideIndex)
    }

    function animateSlide (direction) {
        const currentSlider = slides[slideIndex - 1]
        if(!currentSlider) return

        currentSlider.classList.remove('slideInRight', 'slideInLeft', 'slideInDown')
        if(direction === 'left') {
            currentSlider.classList.add('slideInLeft')
        } else if (direction === 'right') {
            currentSlider.classList.add('slideInRight')
        } else if(direction === 'down') {
            currentSlider.classList.add('slideInDown')
        }
    }
    
    showSlide(slideIndex)

    const prevBtn = document.querySelector(prevBtnSelector)
    const nextBtn = document.querySelector(nextBtnSelector)

    if (prevBtn && nextBtn) {

        prevBtn.addEventListener('click', () => {
            changeSlide(-1)
            animateSlide('right')
        })
        nextBtn.addEventListener('click', () => {
            changeSlide(1)
            animateSlide('left')
        })
    } else {
        console.warn('Отсутсвуют селекторы prevBtn и nextBtn')
    }

    function startAutoSlide () {
        stopAutoSlide()
        intervalId = setInterval(() => {
            changeSlide(1)
            animateSlide(dist === 'vertical' ? 'down' : 'left')
        }, 3000)
    }

    function stopAutoSlide () {
        if(intervalId != null) {
            clearInterval(intervalId)
            intervalId = null
        }
    }

    startAutoSlide()

    const sliderWrapper = slides[0].parentNode

    if(sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', stopAutoSlide)
        sliderWrapper.addEventListener('mouseleave', startAutoSlide)
    }

}