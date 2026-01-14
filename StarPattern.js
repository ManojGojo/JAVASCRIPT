
/*
const symbol="* " 
/*for(let i=1;i<=5;i++){
    console.log(symbol.repeat(i));
}*/
/*
for(let i=5;i>=1;i--){
    console.log(symbol.repeat(i));
}

*/

const str1="Manoj Mugutrao Deshmukh";
const vowel="aeiou";

for(let i=0;i<str1.length;i++){
    if(vowel.includes(str1[i])){
        console.log(`${str1[i]} is a vowel`)
    }
    else{
        console.log(`${str1[i]} is not a vowel`)
    }
}