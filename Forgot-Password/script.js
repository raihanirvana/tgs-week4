const emailInput = document.getElementById("formemail");
checkBtn = document.querySelector("#sendd");
const closeBtn = document.getElementById("koss");
const myAlert = document.getElementById("myAlert");
const h1 = document.querySelector("#myAlert h1");
const p = document.querySelector("#myAlert p");
const overlay = document.getElementById("overlay");

// checkBtn.addEventListener("click", function () {
//   let email = emailInput.value;
//   console.log(email);
// });

checkBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const email = "raihanirvana13@gmail.com";
  const emaill = emailInput.value;

  if (emaill !== email) {
    myAlert.style.display = "block";
    overlay.style.display = "block";
    h1.innerHTML = "Email tidak terdaftar";
    p.innerHTML = `Gunakan email yang terdaftar!`;
  } else {
    myAlert.style.display = "block";
    overlay.style.display = "block";
    h1.innerHTML = "Link telah dikirim ke email, silahkan cek!";
    p.innerHTML = `Link akan expired dalam waktu 2 menit`;
  }
});

closeBtn.addEventListener("click", function () {
  myAlert.style.display = "none";
  overlay.style.display = "none";
});
