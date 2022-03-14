// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);

// const combined = [...first, ...second];

// console.log(combined)


const first = [1, 2, 3];
const second = [4, 5, 6];

const clone = [...first];

clone.push(23);

console.log(clone);
console.log(first);