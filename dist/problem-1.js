"use strict";
{
    const inputArray = [1, 2, 3, 4, 5];
    const summingArray = (inputArray) => {
        let result = 0;
        inputArray.forEach(element => {
            result += element;
        });
        return result;
    };
    console.log(summingArray(inputArray));
}
