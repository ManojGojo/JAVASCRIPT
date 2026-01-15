

/*
const num=[1,2,3,4,5];
const [a,b,c,d,e,courses]=[1,2,3,4,5,["Mango","Banana"]];
console.log(a,b,c,d,e,courses);*/



/*

const num=[1,2,3,4,5,["Mango","Banana"]];
const [,,,,,courses]=num;
console.log(courses);*/



const num=[["Mango","Banana"],1,2,3,4,5];
const [courses,...rest]=num;
console.log(courses,...rest);


//Swap values 

// let a=10;
// let b=20;

// [a,b]=[b,a];

// console.log(a,b);



