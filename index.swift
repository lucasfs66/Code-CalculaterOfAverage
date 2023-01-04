func findAverage(array: [Int]) -> Int{
    // your code here
    
    print(array.count)
    if array.count == 0 {
        return 0
    } else {
        var sum = array.reduce(0, { x, y in x + y})
        let average = sum / array.count
        
        return average;
    }
}

findAverage(array: [10, 10])
