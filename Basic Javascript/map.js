const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
console.log(capital);  
console.log(capital.size);  
console.log(capital.get( "Jakarta" )); // Indonesia

// Add data to the map  
capital.set('Paris', 'France');
console.log(capital.has("Paris"));     // returns true
console.log(capital.get("Paris"));      // returns France

// Delete a key from the map
capital.delete("Jakarta");
console.log(capital.has("Jakarta"));   // returns false

let keys = [...capital.keys()];       // return an array of keys
console.log(keys);                     // ['London', 'Tokyo', 'Paris']

let values = [...capital.values()];   // return an array of values
console.log(values);                   // ['England', 'Japan', 'France