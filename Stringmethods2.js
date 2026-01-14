
//charAt()
/*
const mssg="Hay there How are you";
console.log(mssg.charAt(5));*/

//charCodeAt()
/*
const mssg="Hay there How are you";
const result=mssg.charCodeAt(5);
console.log(`The ASCII value of the character at index 5 is ${result}`);*/

//indexOf();
/*const mssg="Hey Manoj How Are You?";
console.log(mssg.indexOf("H",2));*/

/*
function userData(text,char){
    const index=text.indexOf(char);
    console.log(`The ${char} is located at index ${index}`);

}

userData("Manoj","n");
*/


//string.include();
/*
const mssg="Hey Manoj Gojo How Are You";
console.log(mssg.includes("Gojo"));*/


//uppercase() and lowercase()
/*
const mssg="Hay There";
console.log(mssg.toLowerCase());
console.log(mssg.toUpperCase());*/

//Substring()
/*
const userData="Manoj Mugutrao Deshmukh";
const string=userData.substring(0,10);
console.log(string + "****");*/

//trim()

const string="       Manoj";
const str2= string.trim();
console.log(str2.substring(0,2));
