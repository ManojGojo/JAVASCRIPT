const readlinesync=require('readline-sync');
const str1=readlinesync.question("Enter the first String :");
const str2=readlinesync.question("Enter the Second String :");
const str3=readlinesync.question("Enter the Third String :");

const length1=str1.length;
const length2=str2.length;
const length3=str3.length;

if(length1<length2  && length1<length3){
    console.log(`${str1} is smaller String`);
}
else if(length2<length1 && length2<length3){
    console.log(`${str2} is The smallest string`);
}
else{
    console.log(`${str3} is the smalleat String`)
}