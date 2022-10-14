
let arr = []

function findAverage(array) {
    // your code here
    
    console.log(array.length)
    if (array.length === 0) {
        return 0
    } else {
        let sum = array.reduce((a, c) => a + c, 0)
        let average = sum / array.length
        
        return average; 
    }
}

  console.log(findAverage(arr))