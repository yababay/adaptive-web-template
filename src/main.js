import './style.css'

import list from 'bootstrap-icons/icons/list.svg'
import bug from 'bootstrap-icons/icons/bug.svg'
import github from 'bootstrap-icons/icons/github.svg'
import hand from 'bootstrap-icons/icons/hand-thumbs-up.svg'

document.querySelectorAll('li').forEach(li => {
    li.style.backgroundRepeat = `no-repeat` 
    li.style.backgroundPosition = `left center` 
    li.style.backgroundSize = `1.5rem` 
    const a = li.querySelector('a')
    switch(a.textContent.toLowerCase()){
        case 'github':
            li.style.backgroundImage = `url(${github})`
            break
        case 'eula':
            li.style.backgroundImage = `url(${list})`
            break
        case 'error':
            li.style.backgroundImage = `url(${bug})`
            break
        default:
            li.style.backgroundImage = `url(${hand})`
    }
})
