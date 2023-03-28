const img = document.querySelector('.hamburger__img')
const nav = document.querySelector('.nav')

img.addEventListener('click', () => {
   nav.classList.toggle('nav--toggle')
})
