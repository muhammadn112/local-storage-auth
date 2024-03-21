function openLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
  }
  
  function openSignupPopup() {
    document.getElementById('signupPopup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
    document.getElementById('signupPopup').style.display = 'none';
  }
  
  function signUp() {
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Sign Up Successfull');
    closePopup();
  }
  
  function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
  
    if (username === storedUsername && password === storedPassword) {
      alert('Login successful!!!!!');
      closePopup();
    } else {
      document.getElementById('loginErrorMessage').innerText = 'Username or password is incorrect.';
    }
  }
  