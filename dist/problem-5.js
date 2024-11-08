"use strict";
{
    const person = { name: "Alice", age: 30 };
    function getProperty(person, key) {
        return person[key];
    }
    ;
    console.log(getProperty(person, "age"));
}
