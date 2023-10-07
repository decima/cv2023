const params = {
    quick: "slow",
    over: "under"
}

let paragraph = 'The {quick} brown fox jumps {over} the lazy dog. It barked.';
const regex = /\{[^\}]+\}/g;

const founds = paragraph.match(regex);

for (let found of founds) {

    const key = found.replace("{", "").replace("}", "");
    const value = params[key];
    paragraph = paragraph.replace(found, value);
}

console.log(paragraph);