"use strict";
{
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    const validateKeys = (obj, keys) => {
        const stringKeys = keys.map(item => item.toString());
        for (const key in obj) {
            if (!stringKeys.includes(key)) {
                return false;
            }
        }
        return true;
    };
    console.log(validateKeys(person, ["name", "age", "email"]));
}
