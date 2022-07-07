function passwordMatch() {
  var password = document.getElementById('password')
  var confirm_pass = document.getElementById('confirm_pass')
  if (password.value == confirm_pass.value) {
    confirm_pass.setCustomValidity('');
    password.style.border = "1px solid green"
    confirm_pass.style.border = "1px solid green"
  }
  else {
    confirm_pass.setCustomValidity('Passwords dont match')
    confirm_pass.style.border = "1px solid red"
    password.style.border = "1px solid red"
  }
}
