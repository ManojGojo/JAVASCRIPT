const readlinesync=require("readline-sync");
const totalMarks=readlinesync.question("Enter the number of Marks :");

// if we have multiple conditions
// It is difficult to read compared to the if else

(totalMarks<40) ? console.log("You are Passed") : (totalMarks<60) ? console.log("You are Smart") : (totalMarks<80) ? console.log("You are Genius") : console.log("YOU ARE REDICULOUS");