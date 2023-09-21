




// const burger = document.querySelector('.burger-icon')
// const body = document.querySelector('.body')
// var check = false





// burger.addEventListener('click', (event) => {
//     const target = event.target
//     if(check === false) {
//     body.classList.add('body--opened-menu')
//     }

//     check = true

//     burger.addEventListener('click', (event) => {
//     if(check === true) {
//         body.classList.remove('body--opened-menu')
//         }
    

//     check = false
//     })
    
// })

// ============

// const burger = document.querySelector('.burger-icon')
// const body = document.querySelector('.body')
// var check = false
// const open = document.querySelector('.open')


// burger.addEventListener('click', abc)


// function abc(event) {
//     const target = event.target
//     if(check === false) {
//     body.classList.add('body--opened-menu')
//     burger.classList.add('open')
    
//     }
//     check = true
    
// }

// open.addEventListener('click', cba)

// function cba(e) {
//     const target = e.target
//     if(check === true) {
//         body.classList.remove('body--opened-menu')
//         burger.classList.remove('open')
        
//         }
//         check = false
// }



// ==============

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




