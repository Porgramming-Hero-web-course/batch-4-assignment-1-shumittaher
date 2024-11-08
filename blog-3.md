## Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

type guards are nessasary to ensure that each variable and function only deals with types of data that the developer has explicitly intented. there is automatic checking within typescript to ensure that unforseen data types are not used. this makes typescript harder to write but ultimately will generate less buggy code

an example of such could be seen from a simple example, 

say a developer wants to write a function to add two numbers in variable1 and variable2. 

simple function can be written in javascript

function (variable1, variable2) {
    return variable1 + variable2
}

however, in case these variables are being inputted by end user, or is being fetched from an API, there could be unforeseen cause to assign string value to either variable, this will result in a bug in the code.

Typescript will explicitly tell the program that these values can only be numbers thus migitaing chance of such error.