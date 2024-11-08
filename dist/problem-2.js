"use strict";
{
    const inputArray = [1, 2, 3, 4, 5, 5, 4, 2, 1];
    const removeDuplicates = (input) => {
        let result = input.filter((value, index, self) => {
            return self.indexOf(value) == index;
        });
        return result;
    };
    console.log(removeDuplicates(inputArray));
}
