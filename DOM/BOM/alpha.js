// Alert
function showAlert() {
    alert("This is an alert message");
}

// Confirm
function showConfirm() {
    let result = confirm("Do you agree?");
    document.getElementById("result").innerText =
        result ? "User clicked OK" : "User clicked Cancel";
}

//Prompt
function showPrompt(){
    let result=prompt("Hello Manoj Give ME the Password");
    if(Number(result)===901116){
        console.log("Welcome");
    }else{
        console.log("ERROR : Wrong Password");
    }
}

// Checkbox
let checkbox = document.getElementById("agreeCheckbox");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        alert("Checkbox is checked");
    } else {
        alert("Checkbox is unchecked");
    }
});


setTimeout(showPrompt,1000*5);