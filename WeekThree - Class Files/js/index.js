function oldFunction(data){
    let name = data;
    console.log("Hello " + name)

}
oldFunction(James);

newFunction = (data) => {
    let name = data;
    console.log("Hello " + name)
}

newFunction(Timmy);

addStudent = () => {
    let first = document.getElementById().value
    let last = document.getElementById().value
    let age = +document.getElementById().value
    let subject = document.getElementById().value

    console.log(first, last, age, subject);
    
    if(age >= 18){
        alert("Student: " + first + " " + last + "is accepted to " + subject);
    } else{
        alert("Student: " + first + " " + last + "is too young to enroll");
    }
}

makePizza = () => {
    let pizzaName = document.getElementById().value
    let size = document.getElementById().value

    let baseOptions = document.getElementsByName("baseRadio");
    console.log(baseOptions)

    let baseValue;

    for(let i = 0; i < baseOptions.length; i++){
        if(baseOptions[i].checked){
            basevalue = baseOptions[i].value
        }
    }
    console.log(baseValue);

    let salami = document.getElementById("salami").checked;

    if(salami){
        alert("Pizza Order: The " + pizzaName + " - Size "  + size + " - Base " + baseValue + " with Salami")
    } else {
        alert("Pizza Order: The " + pizzaName + " - Size "  + size + " - Base " + baseValue + " without Salami")
    }
}