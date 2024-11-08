{
    const person = { name: "Alice", age: 30 };

    function getProperty (person : object, key: string) {
        
        if (key in person) {
            return (person as any)[key]
        } else {
            return "Not Found"
        }
         
    };
    console.log(getProperty(person, "name"))

}