{

    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    type PersonType = Record<string, string | number>

    const validateKeys = <T extends PersonType>(obj: T, keys: (keyof T)[]) : boolean => {
        
        for (const key in obj) {
            if (!keys.includes(key)){
                return false
            }
        }

        return true
    }

    console.log(validateKeys(person, ["name", "age"]));


}