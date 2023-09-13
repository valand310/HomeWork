// const users = ['Ann', 'John', 'Smith', 'Alex']

// function Check (array, item) {
//     for( let i = 0; i < array.length; i++) {
//         if(array[i] === item) {
//             return `The is a copy of the ${item} in array`
//         }
//     }
//     return `The is a not copy`
// }

// console.log(Check(users, 'John'))


// 1

function DZ(name) {
    return `Hello ${name}`
}

console.log(DZ('John'))

// 2

const massiv = [1, 2, 4, 11, 10, 12, 2, 3, 34, 124, 43]

function Check(array) {
    for( let i = 0; i < array.length; i++) {
        if(array[i] > 10) {
            console.log(array[i])
        }
    }
    
}

console.log(Check(massiv))

// 3

let result

function calc(a, b, item) {
    if(item === 'minus') {
        result = a - b
        return result
    }
    if(item === 'plus') {
        result = a + b
        return result
    }
    if(item === 'mult') {
        result = a * b
        return result
    }
    if(item === 'div') {
        result = a / b
        return result
    }

}

console.log(calc(6, 2, 'mult'))