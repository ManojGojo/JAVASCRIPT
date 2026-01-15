function greeting(user){
    return `Good morning, ${user}`;
};

function print(value){
    console.log(value);
};

// module.exports={
//     greeting,
//     print,  
// }

export default{
    greeting,
    print
}