const readlinesync = require('readline-sync');

 const userName=readlinesync.question('Enter your name: ');
 const userAge=readlinesync.question('Enter your age: ');

    console.log('Hello, ' + userName + '!');
    console.log(`Welcome, ${userName}!`);


    console.log('You are ' + userAge + ' years old.');
    console.log(`In 5 years, you will be ${Number(userAge) + 5} years old.`);
    