{
    const input1 : string = "I love Typescript ok typescripttypescript typescript xyz typescript"
    const input2 : string  = "typescript"

    const countWordOccurrences = (input1: string , input2 : string ) : number => {         
        
        let result : number = 0
        let searchString = input1.toLowerCase()

        let searchedString = input2.toLowerCase()

        do {

            let searchResult : number = searchString.indexOf(searchedString)
    
            if (searchResult != -1) {
                result += 1
                searchString = searchString.slice(input2.length + searchResult)
            } else {
                break
            }
            
        } while (true);

        return result

    }

    console.log(countWordOccurrences(input1, input2))
}