export default function accordion () {
    const accordion = document.querySelector('#accordion')
    if(!accordion) return

    function changeAccordion (e) {
        const target = e.target.closest('p')
        if(!target) return

        const block = target.nextElementSibling
        if(!block) return

        ['active', 'active-style'].forEach(cls => target.classList.toggle(cls))
    }
    
    accordion.addEventListener('click', function(e) {
        changeAccordion(e)
    })
}
