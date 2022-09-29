
function total(array, amount){
    for(let i = 0; i < array.length; i++){
        let num1 = array[i]

    for (let j = i + 1; j < array.length; j++){
        let num2 = array[j]
        if ( num1 + num2 == amount){
            return true
        }
    }
    }
    return false
}

console.log(total([5, 3,6, 2], 9))
console.log(total([8,5,6, 7,], 50))