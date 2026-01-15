
const obj1={
    Name:"Manoj",
    display:function(){
        console.log(this.Name);
    }
};
obj1.display();


function userdata(){
    console.log(this);
}

userdata();
