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
    let registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
     
        let firstName = document.getElementById("userName").value;
        let lastName = document.getElementById("userLastName").value;
        let email = document.getElementById("email_address").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;

        
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        
        if (checkEmail(email)) {
            alert("Email already exists");
            return;
        }

      
        let newUser = [firstName, lastName, email, password];
        users.push(newUser);
        
        alert("User registered successfully");

        
        window.open("signin.html", "_self");
    });
}


const maxLoginAttempts = 3;
let loginAttempts = {};

function checkIdIn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usernameFound = false;
    let passwordCorrect = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i][2] === username && users[i][3].toString() === password) {
            window.open("message.html");
            usernameFound = true;
            passwordCorrect = true;
            break;
        }
    }

    if (!usernameFound || !passwordCorrect) {
        if (!loginAttempts.hasOwnProperty(username)) {
            loginAttempts[username] = 1;
        } else {
            loginAttempts[username]++;
        }

        if (loginAttempts[username] === maxLoginAttempts) {
            alert("You have exceeded the maximum number of login attempts.");
            window.open("contact-us.html");
        } else {
            let remainingAttempts = maxLoginAttempts - loginAttempts[username];
            alert("Invalid username or password. Attempts remaining: " + remainingAttempts);
        }
    }
}

