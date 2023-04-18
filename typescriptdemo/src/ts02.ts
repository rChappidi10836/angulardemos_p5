const names: string[] = []
names.push('ob1');
names.push('ob2');
console.log(names);

const countryNames: readonly string[] = ["India","USA","Australia", "Canada"];
// countryNames.push("UK");
// console.log(countryNames);

const numbers=[1,2];
numbers.push(36+30);
// numbers.push("hero");
console.log(numbers);

let ourtuple: [number, boolean, string];
ourtuple=[5,false,"hello"];
// ourtuple=[false,5,"yay"];

const graph: [number,number] = [34.5,78.2];
console.log(graph)
const [val1,val2]=graph;
console.log(val1)
console.log(val2);