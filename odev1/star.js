Array.prototype.convertStar = function () {
    return this.map(function (it) {
        return typeof it == "number" ? "*".repeat(it) : it;
    });
}

function generateStarWarSymbols(stars) {
    return stars.convertStar().join("\n");
}


// test input
let output = generateStarWarSymbols([1, 3, 5, 2, 1, 5]);

/*[1, 3, 5, 2, 1].convertStar().forEach(function (it) {
    console.log(it);
})*/

console.log(output);
// expected output
