
function openLoginPopup() {
  $('#loginPopup').fadeIn();
}

function openSignupPopup() {
  $('#signupPopup').fadeIn();
}


function closePopup() {
  $('.popup').fadeOut();
}

$(document).ready(function () {

  $('#loginForm').parsley();
  $('#signupForm').parsley();


  $('#signupForm').on('submit', function (e) {
      e.preventDefault();
      if ($(this).parsley().isValid()) {
          var username = $('#signupUsername').val().trim();
          var password = $('#signupPassword').val().trim();
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          alert('Sign Up Successful');
          closePopup();
      }
  });


  $('#loginForm').on('submit', function (e) {
      e.preventDefault();
      if ($(this).parsley().isValid()) {
          var username = $('#loginUsername').val().trim();
          var password = $('#loginPassword').val().trim();
          var storedUsername = localStorage.getItem('username');
          var storedPassword = localStorage.getItem('password');

          if (username === storedUsername && password === storedPassword) {
              alert('Login successful!');
              closePopup();
          } else {
              $('#loginErrorMessage').text('Username or password is incorrect.');
          }
      }
  });
});
