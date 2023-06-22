//1
const characters1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
function character1(length) {
let result21 = '';
const charactersLength1 = characters1.length;
for (let i21=0;i21<length;i21++)
{
  result21 += characters1.charAt(Math.floor(Math.random() * charactersLength1));
}
return result21;
}

console.log(character1(12));
//2
function genHexString(len) {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < len; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
}
//3
//4
const Arr4 = []
for(let i24 = 0; i24 < countries.length; i24++){
  Arr4.push(countries[i24].toUpperCase())
}

console.log(Arr4)
//5
function length(){
const Arr25 = []
countries.forEach(countries => Arr25.push(countries.length))

    return Arr25;}
 console.log(length())


//7
const arr27=[]
for(let i27 = 0; i27 < countries.length; i27++){
    if(countries[i27].includes('land'))
    arr27.push(countries[i27])
}
if(arr27.length > 0 )
  console.log(arr27);
else
  console.log('All these are countries without land')

//8
const countries28 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const arr28=[]
for(let i28 = 0; i28 < countries28.length; i28++){
    if(countries28[i28].includes('ia'))
    arr28.push(countries28[i28])
}
if(arr28.length > 0 )
  console.log(arr28);
else
  console.log('All these are countries without ia')
//9

  function findbiggestword() {
    let arr29=[]
    countries.forEach(countries => arr29.push(countries.length))
    return countries[arr29.indexOf(Math.max(...arr29))]
}
     console.log(findbiggestword())

//10
function FiveCharecters(){
    let arr210= []

    countries.forEach(country => {
        if(country.length !== 5)
         return        
        arr210.push(country)
    })
  return arr210;  
  
}console.log(FiveCharecters())
//11
function longesttword() {
    let arr211=[]
    webTechs.forEach(tech => arr211.push(tech.length))
    return webTechs[arr211.indexOf(Math.max(...arr211))]
}
     console.log(longesttword())
//12
//13
for (const tech of webTechs) {
    console.log(tech[0])
}
//14
const Arr214 = []
for(const tech14 of webTechs){
  Arr214.push(tech14)
}

console.log(Arr214)
//15
const fruitarray = ['banana', 'orange', 'mango', 'lemon'];
const arr215 = []

fruitarray.forEach(fruit => arr215.unshift(fruit))

 console.log(arr215) 
//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]


fullStack.forEach(techArray =>                
    techArray.forEach(tech =>                 
        console.log(tech.toUpperCase()))
    ) 
        