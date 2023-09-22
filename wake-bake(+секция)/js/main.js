

document.addEventListener('click', burgerInit )

function burgerInit(e) {
    
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')
    
    

    if(!burgerIcon && !burgerNavLink) return

    if(document.documentElement.clientWidth > 900) return
    
    if(!document.body.classList.contains('body--opened-menu')) {
    document.body.classList.add('body--opened-menu')
    }

    else {
        document.body.classList.remove('body--opened-menu')
        }


}


// ---------modal

const gift = document.querySelector('.about__img-button')
const body = document.querySelector('.body')
const cancel = document.querySelector('.modal__cancel')
const modal = document.querySelector('.modal')

const openModal = (e) => {
    e.preventDefault()
    body.classList.add('body--opened-modal')
}
const closeModal = () => {
    
    body.classList.remove('body--opened-modal')
}

gift.addEventListener('click', openModal)

modal.addEventListener('click', (e) => {
    e.preventDefault()
    const target = e.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel') ||target.classList.contains('modal__cancel-vec') ) {
        closeModal()
    }
}
)

document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && body.classList.contains('body--opened-modal')) {
        closeModal()
    }
})













