var superray = [1, 2, 3, { value: [4.3, 4.6, 4.9] }, 5];

var [,,,{ value: [, a, ,]}, b] = superray;

console.log(a, b);