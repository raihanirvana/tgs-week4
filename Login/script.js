const emailInput = document.getElementById("formemail");
const passInput = document.getElementById("formpass");
checkBtn = document.querySelector(".signup");
const closeBtn = document.getElementById("koss");
const myAlert = document.getElementById("myAlert");
const h1 = document.querySelector("#myAlert h1");
const p = document.querySelector("#myAlert p");
const overlay = document.getElementById("overlay");

// checkBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   let email = emailInput.value;
//   let pass = passInput.value;
//   console.log(email, pass);
// });

checkBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const email = "raihanirvana13@gmail.com";
  const pass = "Test123";
  const emaill = emailInput.value;
  const passs = passInput.value;

  if (passs !== pass || emaill !== email) {
    myAlert.style.display = "block";
    overlay.style.display = "block";
    h1.innerHTML = "Login Gagal";
    p.innerHTML = `email/password anda salah`;
  } else {
    overlay.style.display = "block";
    myAlert.style.display = "block";
    h1.innerHTML = "Login Berhasil";
    p.innerHTML = `Terima kasih telah LOGIN`;
  }
});

closeBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  myAlert.style.display = "none";
});
