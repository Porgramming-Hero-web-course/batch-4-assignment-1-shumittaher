{

    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    type PersonType = Record<string, string | number>

    const validateKeys = <X extends PersonType>(obj: X, keys: Array<keyof X>) : boolean => {
        
        for (const key in obj) {
            if (!keys.includes(key)){
                return false
            }
        }

        return true
    }

    console.log(validateKeys(person, ["name", "age"]));


}