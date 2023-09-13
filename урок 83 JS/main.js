// const users = [
//     {
//         name: 'alex',
//         age: 23
//     },
//     {
//         name: 'john',
//         age: 21

//     }
// ]

// for( let i = 0; i < users.length; i++ ) {
//     console.log(users[i].name)
// }

// -------ДЗ-------
// ------1------

const iAm = {
    firstName: 'Valeriy',
    lastName: 'Andrutskiy',
    age: 21
}

// --------2-------

const Name = {
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

console.log(Name.sayHello('tom'))
    
// ---------3---------

const users = [
    {
        name:'ivan',
        isAdmin: true
    },
    {
        name:'stepan',
        isAdmin: false
    },
    {
        name:'sergey',
        isAdmin: false
    },
    {
        name:'vasya',
        isAdmin: false
    },
    {
        name:'petr',
        isAdmin: true
    },
    {
        name:'alex',
        isAdmin: true
    },
    {
        name:'vova',
        isAdmin: false
    }
]

let check = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        check++
    }
}

console.log(check)



