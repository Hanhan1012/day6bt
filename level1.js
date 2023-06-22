const countries = [
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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  //1
  for( let i=0; i<=10; i++){
    console.log(i)
  }
  //1.2
  let i12 = 0
while (i12 <= 10) {
  console.log(i12)
  i12++
}
//1.3
let i13 = 0
do {
    console.log(i13)
    i13++
} while (i13<=10)
  //2.1
  for (let i21=10; i21 >=0; i21--){
    console.log(i21)
  }
  //2.2
let i22=10
while(i22 >=0){
    console.log(i22)
    i22--
}
//2.3
let i23 = 10
do {
  console.log(i23)
  i23--
} while (i23 >=0)

  //3
  
  for(let i3 = 0; i3 <=10; i3++){
    console.log(i3)
  }
  
  //4
  
for( var i4=1; i4<=7; i4++)
{
   for (j4=1; j4<=i4; j4++)
     {
      document.write("#");        
      }
      document.write("</br>");  
}


  //5
  for(let i5 = 0; i5 <= 10; i5++){
    console.log(`${i5} * ${i5} = ${i5 * i5}`)
  }
  //6 
  for(let i6 = 0; i6 <= 10; i6++){
    console.log(`${i6}  ${i6*i6}  ${i6*i6*i6}`)}
  //7 even numbers
  for(let i7 = 0; i7 <= 100; i7++){
    if (i7 % 2 ==0)
    console.log(i7)
  }
  //8 odd numbers
  for(let i8 = 0; i8 <= 100; i8++){
    if (i8 % 2 !=0)
    console.log(i8)}
  //9 prime numbers
  for(var i9 = 0; i9 <= 100; i9++){
     
      for( j9=2;j9<i9;j9++){
        if(i9 % j9==0 )
        break;}
        if (i9==j9){
          console.log(i9)
        }
      }
        
  //10 sum of all numbers
  let sum10 = 0
   for(let i10 = 0; i10 <= 100; i10++){
  sum10  = sum10 + i10 
}
console.log(sum10)
  //11 the sum of all evens and the sum of all odds.
  let sumeven11 = 0
  let sumodd11=0
   for(let i11 = 0; i11 <= 100; i11++){
    if (i11 % 2 ===0){
      console.log(`The sum of all evens from 0 to 100 is ${sumeven11  +=  i11}`)
    } else { 
    console.log(`And the sum of all odds from 0 to 100 is ${sumodd11  +=  i11}`)
  }
   }
  //12
  let sumeven12 = 0;
  let sumodd12 = 0;

for (let i12 = 0; i12 <= 100; i12++) {
  if (i12 % 2 === 0) {
     sumeven12 += i12;
  } else {
     sumodd12 += i12;
  }
}
let arr12 = [sumeven12, sumodd12];  
console.log(arr12);
  //13
  var arr13 = [];
  for (var i1=0, j13=5; i1<j13; i1++) {
      arr13.push(Math.floor(Math.random() * j13))
  }
  console.log(arr13); 
  //14
  
  var arr14 = [];
  for (let i14 = 0, j14 = 5; i14 < j14; i14++) {
      let randomNumber = Math.floor(Math.random() * 100);
      if (!arr14.includes(randomNumber)) {
        arr14.push(randomNumber);
      }
    }
  console.log(arr14)
  //15
  
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    function character(length) {
    let result = '';
    const charactersLength = characters.length;
   for (let i15=0;i15<length;i15++)
    {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(character(5));