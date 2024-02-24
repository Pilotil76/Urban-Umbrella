
let users = [
    ["Komal", "Karir", "kkarir@waes.ac.uk", 123456789], 
    ["Igor", "Voinov", "pilotil76@gmail.com",123456789], 
    ["Olena", "Rybets", "515908@waes.ac.uk", 123456789], 
    ["Kunal", "Shukla", "512193@waukes.ac.uk", 123456789],
    ["Yasir", "Mohamed", "516097@waes.ac.uk", 123456789]
];

function checkEmail(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i][2] === email) {
            return true;
        }
    }
    return false;
}

function openWindow(email) {
    if (checkEmail(email)) {
        window.open("signin.html");
    } else {
        window.open("signup.html");
    }
}

function submitEmail() {
    let userEmail = document.getElementById("email_address").value;
    openWindow(userEmail);
}

function submitEmailUp() {
    // Get form inputs
    let firstName = document.getElementById("userName").value;
    let lastName = document.getElementById("userLastName").value;
    let email = document.getElementById("email_address").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Check if email already exists in users array
    if (checkEmail(email)) {
        alert("Email already exists");
        return;
    }

    // Add user to users array
    let newUser = [firstName, lastName, email, password];
    users.push(newUser);

    // Provide feedback to user
    alert("User registered successfully");
    
    }
    
function openWindow(email) {
    if (checkEmail(email)) {
        window.open("signin.html");
    } 
}


function checkIdIn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usernameFound = false;
    let passwordCorrect = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i][2] === username && users[i][3] === parseInt(password)) {
            window.open("message.html");
            usernameFound = true;
            passwordCorrect = true;
            break;
        }
    }

    if (!usernameFound || !passwordCorrect) {
        alert("Invalid username or password");
    }
}



/* new old

let users = [
    ["Komal", "Karir", "kkarir@waes.ac.uk", 123456789], 
    ["Igor", "Voinov", "pilotil76@gmail.com",123456789], 
    ["Olena", "Rybets", "515908@waes.ac.uk", 123456789], 
    ["Kunal", "Shukla", "512193@waukes.ac.uk", 123456789],
    ["Yasir", "Mohamed", "516097@waes.ac.uk", 123456789]
];

function checkEmail(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i][2] === email) {
            return true;
        }
    }
    return false;
}

function openWindow(email) {
    if (checkEmail(email)) {
        window.open("signin.html");
    } else {
        window.open("signup.html");
    }
}

function submitEmail() {
    let userEmail = document.getElementById("email_address").value;
    openWindow(userEmail);
}

function checkIdIn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usernameFound = false;
    let passwordCorrect = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i][2] === username && users[i][3] === parseInt(password)) {
            window.open("message.html");
            usernameFound = true;
            passwordCorrect = true;
            break;
        }
    }

    if (!usernameFound || !passwordCorrect) {
        alert("Invalid username or password");
    }
}

new old */
/*OLD VERGION

let users=[
    ["Komal", "Karir", "kkarir@waes.ac.uk", 123456789], 
    ["Igor", "Voinov", "pilotil76@gmail.com", 123456789], 
    ["Olena", "Rybets", "515908@waes.ac.uk", 123456789], 
    ["Kunal", "Shukla", "512193@waukes.ac.uk", 123456789],
    ["Yasir", "Mohamed", "516097@waes.ac.uk", 123456789]];
    
    function checkId(usersEmail) {
       
        
        let usersEmailTrue=false;
        for (let i=0; i<5; i++) {
           
            if (users[i][2]==usersEmail) 
            {
                usersEmailTrue=true;
                break;
            }}
            return usersEmailTrue;
           // openWindow(usersEmailTrue, usersEmail)       
    }
    function openWindow(emailTrue, email) {
    
        if (emailTrue==true){

        
        window.open("signin.html")
        self.focus() 
        
        }
        else
        { window.open("signup.html")        
        self.focus()
        }
      //  let userName=document.getElementById("username"); 
      
       // userName.value=email;  
      
    function submitEmail() {
        let userEmail=document.getElementById("email_address").value;
        let usersEmail=String(userEmail);
       
       let userstrue=checkId(usersEmail)
      
       openWindow(userstrue, usersEmail)
    }
    /*  
        let usersEmailTrue=false;
        for (let i=0; i<5; i++) {
           
            if (users[i][2]==usersEmail) 
            {
                 window.open("signin.html");
                usersEmailTrue=true;
                break;
                }}
          if (usersEmailTrue==false) 
          { window.open("signup.html")}            
    */
    /*function checkIdIn()   {
        let username=document.getElementById("username").value;
        //alert(usersEmail);
            username=String(username);

        let password=document.getElementById("password").value;
            password=String(password);
        
        let usernameTrue=false;
        let passwordTrue=false;
        for (let i=0; i<5; i++) {
           
            if (user[i][2]==username && password[i][3]==password)
            {
                 window.open("message.html");
                usernameTrue=true && passwordTrue=true;
                break;
                }}
          //if (usersEmailTrue==false) 
          //{ window.open("message.html") }
    }*/
   
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
/*OLD VERGION

function checkIdIn() {
    let username = document.getElementById("username").value;
    let usernames=String(username);
    let password = document.getElementById("password").value;
    let passwords=String(password);
    let usernamesTrue = false;
    let passwordsTrue = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i][2] == usernames && users[i][3] == passwords) {
            window.open("message.html");
            self.focus() 
           usernamesTrue = true;
           passwordsTrue = true;
            break;
        }
        if (!usernames || !passwords) {
            alert("Invalid username or password");
        }
    }
}*/