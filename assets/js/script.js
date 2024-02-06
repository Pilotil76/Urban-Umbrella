

let users=[
    ("Komal", "Karir", "kkarir@waes.ac.uk", 123456789), 
    ("Igor", "Voinov", "511656@waes.ac.uk", 123456789), 
    ("Olena", "Rybets", "515908@waes.ac.uk", 123456789), 
    ("Kunal", "Shukla", "512193@waes.ac.uk", 123456789),
    ("Yasir", "Mohamed", "516097@waes.ac.uk", 123456789)];
    
    function checkId() {
        let usersEmail=document.getElementById("email_address");
        console.log(usersEmail);
        for (let i=0; i<4; i++) {
            if (users[i][2]==usersEmail) {
                let userName=users[i][0]
                console.log("welcome")}

        }
    }
   
/*
// Write your code here
let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);
let errorMsg = document.getElementById('errors');

function handleSubmit(event){
    event.preventDefault();
    //let name = form.elements.username.value;
    let name = document.getElementById('username').value;
    if (usernames.includes(name)) {
        errorMsg.innerHTML = `Sorry, the username ${name} is already in use. Please choose another username.`;
    } else {
        usernames.push(name);
        form.submit();
        console.log(usernames);
    }
}
*/
