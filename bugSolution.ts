function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Solution 1: Iterate over the array
for (let i = 0; i < user.length; i++) {
  console.log(greeter(user[i]));
}

// Solution 2: Modify the function signature to accept an array
function greeterArray(people: string[]): string[] {
  return people.map(person => "Hello, " + person);
}
console.log(greeterArray(user));