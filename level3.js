//1

let countriesCopy = []    
for (const country of countries) {
    countriesCopy.push(country);}
//2
let sortedCountries = countriesCopy.sort();
console.log(sortedCountries); 
//3
const sortedwebTechs = webTechs.sort();
const mernStack33 = ['MongoDB', 'Express', 'React', 'Node']
const sortedmernStack = mernStack33.sort(); 

//4
let land = [];
for(const country of countries) {
   if(country.includes('land')) {
      land.push(country);
   }
} console.log(land);
//5
let maxLength = 0;
let hightest;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      hightest = country;
   }
} console.log(hightest);
//6
let land36 = [];
for(const country of countries) {
   if(country.includes('land')) {
      land36.push(country);
   }
} console.log(land36);
//7

let Four = [];
for (const country of countries) {
   if(country.length === 4) 
      Four.push(country);
} console.log(Four);
//8
let word38 = [];
for(const country of countries) {
   if(country.split(' ').length > 1) 
      word38.push(country);
} console.log(word38);
//9
let nine = countries.reverse();
let arr39 = [];

for(const country of nine) {
   arr39.push(country.toUpperCase());   
} 
console.log(arr39);
//10



const reversedCountriesArray = [];
countries.forEach(country => reversedCountriesArray.push(country.toUpperCase()));

reversedCountriesArray.reverse()

reversedCountriesArray