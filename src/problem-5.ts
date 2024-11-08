{
    const person = { name: "Alice", age: 30 };

    const getProperty = (person : object, key: string) => {
        
        if (key in person) {
            return (person as any)[key]
        } else {
            return "Not Found"
        }
         
    };
    console.log(getProperty(person, "name"))

}