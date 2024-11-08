{
    const inputArray : Array<number> = [1, 2, 3, 4, 5, 5, 4, 2, 1]

    const removeDuplicates = (input: Array<number>) : Array<number> => {

        let result : Array<number> = input.filter((value: number, index: number, self: Array<number>) => {
            return self.indexOf(value) == index;
        });
          
        return result
    }

    console.log(removeDuplicates(inputArray))
}