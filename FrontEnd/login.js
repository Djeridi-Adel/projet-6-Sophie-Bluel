const inputPassword = document.querySelector('input[type="password"]');
const inputEmail = document.querySelector('input[type="email"]');
const submit = document.querySelector('input[type="submit"]');
const messageEror = document.querySelector('.message-error');
const login = document.getElementById("login");

let passwordValue
let  emailValue 


function loginRequest() {
  return fetch("http://localhost:5678/api/users/login", {
      method: 'POST',
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({
          "email": emailValue,
          "password": passwordValue,
      })
  });
};



submit.addEventListener('click', (e) => {
  e.preventDefault();
  emailValue = inputEmail.value;
  passwordValue = inputPassword.value;
  loginRequest()
      .then((response) => response.json())
      .then(login => {
          if (login.token) {
              localStorage.setItem('token', login.token);
              window.location.href = "index.html";
          } else {
              messageEror.style.visibility = "visible";
          };
        });
    });
    
   
        
