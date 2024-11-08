"use strict";
{
    const input1 = "I love typescript ok typescripttypescript typescript xyz typescript";
    const input2 = "typescript";
    // function counting(searchString: string,  count : number) : any {
    //     let result = count
    //     let search : number = searchString.indexOf(input2)
    //     console.log(search)
    //     if (search === -1) {
    //         return result
    //     } else {
    //         count += 1
    //         console.log(searchString)
    //         searchString = searchString.slice(input2.length + search)
    //         console.log(searchString)
    //         console.log(count)
    //         counting(searchString, result)
    //     }
    // }
    const countWordOccurrences = (input1, input2) => {
        let result = 0;
        let searchString = input1;
        do {
            let searchResult = searchString.indexOf(input2);
            if (searchResult != -1) {
                result += 1;
                searchString = searchString.slice(input2.length + searchResult);
            }
            else {
                break;
            }
        } while (true);
        return result;
    };
    console.log(countWordOccurrences(input1, input2));
}
