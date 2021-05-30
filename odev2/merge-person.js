var person = { name: "Ali", surname: "Veli"}

console.log(person);

function mergePerson(person, address) {
    return {...person, ...address}
}

var m = mergePerson({ name: "Adile", surname: "Veli" },
    { address: ["Nişantaşı", "İstanbul"]});

console.log(m);