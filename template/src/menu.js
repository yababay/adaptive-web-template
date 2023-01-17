const menu = document.querySelector('.links ul')
const main = document.querySelector('main')
const showMenuItem = document.querySelector('a[href="#menu-show"]')
const hideMenuItem = document.querySelector('a[href="#menu-hide"]')

function toggleMenu(state = 'none') {
    menu.style.display = state
}

export default function(){ 

    if(menu && showMenuItem && hideMenuItem){
        showMenuItem.addEventListener('click', e => {
            e.preventDefault()
            toggleMenu('block')
        })

        hideMenuItem.addEventListener('click', e => {
            e.preventDefault()
            toggleMenu()
        })

        main.addEventListener('click', e => {
            window.innerWidth < 420 && toggleMenu()
        })

        window.addEventListener('resize', e => {
            toggleMenu(window.innerWidth > 420 ? 'inline-block' : 'none')
        })

        window.addEventListener('keyup', e => e.key == 'Escape' && toggleMenu())
    }
}
