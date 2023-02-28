const emailInput = document.getElementById("formemail");
const passInput = document.getElementById("formpass");
const hpInput = document.getElementById("formhp");
const checkBtn = document.querySelector(".signup");
const closeBtn = document.getElementById("koss");
const myAlert = document.getElementById("myAlert");
const overlay = document.getElementById("overlay");
const h1 = document.querySelector("#myAlert h1");
const p = document.querySelector("#myAlert p");

// checkBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   let email = emailInput.value;
//   let pass = passInput.value;
//   let hp = hpInput.value;
//   console.log(email, pass, hp);
// });

checkBtn.addEventListener("click", function (event) {
  const emailValue = emailInput.value;
  const passwordValue = passInput.value;
  const phoneValue = hpInput.value;
  const emailRegex = /@/;
  const passwordRegex = /^(?=.*[A-Z]).+$/;
  const phoneRegex = /^\+62/;
  event.preventDefault();

  if (!emailInput.checkValidity() || !emailRegex.test(emailValue)) {
    myAlert.style.display = "block";
    overlay.style.display = "block";
    h1.innerHTML = "Sign Up tidak berhasil";
    p.innerHTML = "Gunakan @ pada email";
  } else if (!passInput.checkValidity() || !passwordRegex.test(passwordValue)) {
    myAlert.style.display = "block";
    overlay.style.display = "block";
    h1.innerHTML = "Sign Up tidak berhasil";
    p.innerHTML = "Minimal 1 huruf besar";
  } else if (!hpInput.checkValidity() || !phoneRegex.test(phoneValue)) {
    myAlert.style.display = "block";
    overlay.style.display = "block";
    h1.innerHTML = "Sign Up tidak berhasil";
    p.innerHTML = "Gunakan awalan +62";
  } else {
    myAlert.style.display = "block";
    overlay.style.display = "block";
    h1.innerHTML = "Sign Up Berhasil";
    p.innerHTML = `email anda adalah : ${emailValue}`;
  }
});

closeBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  myAlert.style.display = "none";
});
