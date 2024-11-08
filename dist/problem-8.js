"use strict";
{
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    const validateKeys = (obj, keys) => {
        for (const key in obj) {
            if (!keys.includes(key)) {
                return false;
            }
        }
        return true;
    };
    console.log(validateKeys(person, ["name", "age"]));
}
