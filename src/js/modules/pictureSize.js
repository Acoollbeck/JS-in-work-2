export default function pictureSize () {
    const wrapper = document.querySelector('.sizes-wrapper')

    function showImage (e, isShow) {
        const target = e.target.closest('img')
        if(!target) return
        
        const parent = target.parentElement
        const paragraph = parent ? parent.querySelectorAll('p') : []
        const srcBase = target.getAttribute('src').replace(/\.png$/, '')
        const srcNew = isShow ? `${srcBase}-1.png` : `${srcBase}.png`.replace(/\-1/, '')
        
        target.setAttribute('src', srcNew)

        paragraph.forEach(p => {
            if( target.classList.contains('size-3') && p.classList.contains('sizes-hit')) return
            p.style.display = isShow ? 'none' : 'block'
        })
    }  

    wrapper.addEventListener('mouseover', (e) => showImage(e, true))
    wrapper.addEventListener('mouseout', (e) => showImage(e, false))
}