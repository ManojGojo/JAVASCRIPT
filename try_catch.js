const myname="Manoj";

try{
    console.log(userName);
}
catch(err){
    console.log("Error Occured");
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}finally{
    console.log("Finally Executed")
}

console.log(myname);