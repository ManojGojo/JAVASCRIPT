function a(inner){
    console.log("Hello");
    inner();
}

function b(){
    console.log("Jai Ho!!!");
    
}
a(b);