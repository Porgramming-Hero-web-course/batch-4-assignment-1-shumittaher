{
    const inputArray : number[] = [1,2,3,4,5]

    const summingArray = (inputArray: number[]): number => {
        let result = 0
        inputArray.forEach(element => {
            result += element
        });

        return result
    }

    console.log(summingArray(inputArray))

}