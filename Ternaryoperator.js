const readlinesync=require("readline-sync");
const totalMarks=readlinesync.question("Enter the number of Marks :");

(totalMarks<60) ? console.log("you are failed") : console.log("you are passed");

//by using it there is no need to write if else block