var person = { name: "Ali", surname: "Veli"}

console.log(person);

function cevap2(person, address) {
    return {...person, ...address}
}

var m = cevap2({ name: "Adile", surname: "Veli" },
    { address: ["Nişantaşı", "İstanbul"]});

console.log(m);

var person2 = { name: "Ali", surname: "Bozar"}

let m2 = cevap2(m, person2);
console.log(m2);
