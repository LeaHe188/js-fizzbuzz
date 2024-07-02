// This is our main function
function fizzbuzz() {
    let result = []
    let index = -1
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0 ) {
            result.push('Fizz')
            result.push('Buzz')
        } else if (i % 3 === 0 ) {
            result.push('Fizz')
        } else if (i % 5 === 0 ) {
            result.push('Buzz')
        }

        if (i % 7 === 0 ) {
            result.push('Bang')
        }

        if (i % 11 === 0 ) {
            result = ['Bong']
        }

        if (i % 13 === 0 ) {
            index = result.indexOf('Buzz')
            if (index === -1) {
                result.unshift('Fezz')
            }
            else {
                result.splice(index, 0, 'Fezz')
            }
        }
        if (i % 17 === 0) {
            result.reverse()
        }
        if (result.length === 0) {
            console.log(i)
        } else {
            console.log(result.join(''))
        }
        result = []
    }

}

// Now, we run the main function:
fizzbuzz();

