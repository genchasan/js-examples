var persons = [
    {
        name :"Ali",
        age: 20
    },{
        name :"Veli",
        age: 15
    },{
        name :"Selami",
        age: 30
    },{
        name :"Elif",
        age: 24
    }
];

persons.sort((a, b) => a.name.localeCompare(b.name));

console.log(persons);
