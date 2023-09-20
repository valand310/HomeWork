




// const burger = document.querySelector('.burger-icon')
// const body = document.querySelector('.body')
// var check = false



// ============ мой способ

const burger = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
var check = false
const open = document.querySelector('.open')


burger.addEventListener('click', abc)


function abc(event) {
    const target = event.target
    if(check === false) {
    body.classList.add('body--opened-menu')
    burger.classList.add('open')
    
    }
    check = true
    
}

open.addEventListener('click', cba)

function cba(e) {
    const target = e.target
    if(check === true) {
        body.classList.remove('body--opened-menu')
        burger.classList.remove('open')
        
        }
        check = false
}



// ============== способ преподавателя

// document.addEventListener('click', burgerInit )

// function burgerInit(e) {
    
//     const burgerIcon = e.target.closest('.burger-icon')
//     const burgerNavLink = e.target.closest('.nav__link')
    
    

//     if(!burgerIcon && !burgerNavLink) return
    
//     if(!document.body.classList.contains('body--opened-menu')) {
//     document.body.classList.add('body--opened-menu')
//     }

//     else {
//         document.body.classList.remove('body--opened-menu')
//         }


// }




