function oldFunction(data){
    let name = data;
    console.log("Hello " + name)

}
oldFunction("James");

newFunction = (data) => {
    let name = data;
    console.log("Hello " + name)
}

newFunction("Timmy");

addStudent = () => {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let age = +document.getElementById("age").value;
    let subject = document.getElementById("subject").value;

    console.log(first, last, age, subject);
    
    if(age >= 18){
        alert("Student: " + first + " " + last + " is accepted to " + subject);
    } else{
        alert("Student: " + first + " " + last + " is too young to enroll");
    }
}

makePizza = () => {
    let pizzaName = document.getElementById("pizzaName").value
    let size = document.getElementById("size").value

    let baseOptions = document.getElementsByName("baseRadio");
    let baseValue;

    for(let i = 0; i < baseOptions.length; i++){
        if(baseOptions[i].checked){
            baseValue = baseOptions[i].value
        }
    }
    

    let salami = document.getElementById("salami").checked;

    if(salami){
        alert("Pizza Order: The " + pizzaName + " - Size "  + size + " - Base " + baseValue + " with Salami")
    } else {
        alert("Pizza Order: The " + pizzaName + " - Size "  + size + " - Base " + baseValue + " without Salami")
    }
}