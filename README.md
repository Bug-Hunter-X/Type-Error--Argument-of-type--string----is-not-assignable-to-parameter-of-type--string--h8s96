# Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This example demonstrates a common TypeScript error: passing an array to a function that expects a string.  The `greeter` function is defined to accept a single string, but the `user` variable is an array of strings.  This results in a type error.

The solution shows how to modify the code to handle this scenario correctly, either by iterating over the array or by modifying the function signature.