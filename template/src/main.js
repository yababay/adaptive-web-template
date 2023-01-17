import './tailwind-ext.css'
import './icons.css'
import './style.css'

const menu = document.querySelector('.links ul')

document.querySelector('a[href="#menu-show"]').addEventListener('click', e => {
    e.preventDefault()
    menu.style.display = 'block'
})

document.querySelector('a[href="#menu-hide"]').addEventListener('click', e => {
    e.preventDefault()
    menu.style.display = 'none'
})

window.addEventListener('resize', e => {
    if(window.innerWidth > 420) menu.style.display = 'inline-block'
    else menu.style.display = 'none'
})
