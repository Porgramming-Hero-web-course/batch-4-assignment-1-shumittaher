"use strict";
{
    const person = { name: "Alice", age: 30 };
    function getProperty(person, key) {
        if (key in person) {
            return person[key];
        }
        else {
            return "Not Found";
        }
    }
    ;
    console.log(getProperty(person, "name"));
}
