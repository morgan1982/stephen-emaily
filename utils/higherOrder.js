const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003},
    { name: "Company Two", category: "Retail", start: 1992, end: 2008},
    { name: "Company Three", category: "Auto", start: 1999, end: 2008},
    { name: "Company Four", category: "Retail", start: 1989, end: 2007},
    { name: "Company Five", category: "Tehcnology", start: 2009, end: 2014},
    { name: "Company Six", category: "Finance", start: 1987, end: 2010},
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    { name: "Company Eight", category: "Tehcnology", start: 2011, end: 2016},
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989},
]


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64];


// companies.forEach(company => console.log(company.name));

// let canDrink = [];

// for (let i = 0; i <= ages.length; i ++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// };

let canDrink = ages.filter(age => age >= 21);
let retailCompanies = companies.filter(company => company["category"] === "Retail" )
                                .map(company => company.name);

// get companies that lasted 10 years or more
let moreThan10 = companies.filter(company => (
        company.end - company.start >= 10
    )).map(company => company.name);

// sort companies by starting year
const sortedByYear = companies.sort((a, b) => (!(a.start > b.start) ? 1 : -1));
// reverse string
let str = "this is a cat"

// const reversed = function (str) {

//     let reversedArr = [];
//     counter = str.length;
//     do {
//         reversedArr.push(str[counter -1])
//         counter--
//     }while(counter > 0)
//     const word = reversedArr.join("");
//     return word;

// }
// const reversed = (str) => {
//     let reversedStr = ""
//     for (let i = str.length -1; i>=0; i --) {
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }
const reversed = (str) => {
    return str
        .split("")
        .reverse()
        .join("");
}



console.log(reversed(str));
