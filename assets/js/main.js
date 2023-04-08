const toggleButton = document.querySelector('.js-toggle')

const headerLayout = document.querySelector('.js-header-layout')

const menuLinks = document.querySelectorAll('.js-menu-link')

toggleButton.addEventListener('click', e => {
    headerLayout.classList.toggle('is-active')
})

// menuLinks.forEach(link=>{
//     link.
// })
