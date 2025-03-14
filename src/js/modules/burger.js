export default function burger (burgerSelector, menuSelector) {
    const burger = document.querySelector(burgerSelector)
    const menu = document.querySelector(menuSelector)

    if(!burger || !menu) return

    menu.classList.add('animated', 'fadeOutUp', 'hidden')

    function openMenu () {
        if(!menu.classList.contains('hidden')) return
        menu.classList.remove('hidden', 'fadeOutUp')
        menu.classList.add('fadeInDown')
    }

    function closeMenu () {
        if(menu.classList.contains('hidden')) return
        menu.classList.remove('fadeInDown')
        menu.classList.add('fadeOutUp')
        setTimeout(() => menu.classList.add('hidden'), 300)
    }

    function toggleMenu () {
        if(window.innerWidth >= 993) return
        menu.classList.contains('hidden') ? openMenu() : closeMenu()
    }

    function closeMenuOnResize () {
        if(window.innerWidth > 992) closeMenu()
    }

    burger.addEventListener('click', toggleMenu)
    window.addEventListener('resize', closeMenuOnResize)
        
}