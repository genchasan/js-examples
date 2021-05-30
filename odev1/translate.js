var translationMap = {
    merry: "god",
    christmas: "jul",
    and: "och",
    happy: "gott",
    new: "nytt",
    year: "år"
}

function translate(sentence) {
    if ((typeof sentence) == "string") {
        return sentence.split(" ").map(function (it) {
            let ret = translationMap[it];
            return ret == undefined ? it : ret
        }).join(" ");
    }
    else {
        throw Error("Sadece string");
    }
}

// Test input
let translation = translate("hello merry christmas year hello");
console.log(translation)
console.log(typeof 5)
//let errtest = translate(5);

// Expected output :
// "hello god jul år hello"
