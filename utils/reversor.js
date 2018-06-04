// CLEAN SPACES
const quote = "the sunny day";


const cleaner = (dirt) => {

    return dirt
            .split("")
            .reduce((clean, char) => char !== " " ? char + clean : clean , "");

};


const phrase = cleaner(quote);
// console.log(phrase);

// REVERSE NUMBER

const seq = -12345789;

function ReverseInt(num) {

    const revStr = num.toString()
                      .split("")
                      .reverse()
                      .join("");

        return parseInt(revStr) * Math.sign(num); // returns the sign of the number
};

// console.log(ReverseInt(seq));

// CAPITALIZE LETTERS
const logo = "the humanity at stake";

const Capitilize = (str) => {

    return str.toLowerCase().split(" ").map( word => {
        return word[0].toUpperCase() + word.slice(1, word.length)
        }).join(" ");
}
const RegexCapitilize = (str) => {
    return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}


// console.log(Capitilize(logo));
// console.log(RegexCapitilize(logo));

const MaxCharacter = (str) => {
    let len = str.length();


}


