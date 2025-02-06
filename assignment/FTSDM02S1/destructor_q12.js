const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

for(let each of people){
  // console.log(typeof each)
  let {name, address}=each
  let {city, street}=address
  let {name:streetname, number}=street
  console.log(`${name} lives in ${city} on ${streetname}.`)
}
