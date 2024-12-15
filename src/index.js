// let go=document.getElementById("go");
// function changebutton(){
// go.style.backgroundColor="Red"
//     go.style.color="white"
// }
// go.addEventListener("click",changebutton);


    let user=prompt("what is your gender?");
    user=user.toLowerCase();
    if (user == "male"){
        alert(`you are a ${user}!🧔‍♂`)
    }
else if(user=="female"){
    alert(`you are a ${user}!👩‍🦱`)
}
else{
    alert(`invalid input,refresh and try again`)
}