{
    const person = { name: "Alice", age: 30 };

    function getProperty <X>(person : X, key: keyof X) {
        

        return person[key]

         
    };

    console.log(getProperty(person, "age"))

}