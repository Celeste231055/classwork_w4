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
        alert("Student: " + first + " " + last + "is accepted to " + subject)
    } else{
        alert("Student: " + first + " " + last + "is too young to enroll")
    }
}
