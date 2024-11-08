"use strict";
{
    const person = { name: "Alice", age: 30 };
    const getProperty = (person, key) => {
        if (key in person) {
            return person[key];
        }
        else {
            return "Not Found";
        }
    };
    console.log(getProperty(person, "name"));
}
