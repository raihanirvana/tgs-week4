const test = document.querySelector(".value-email");
const tost = document.querySelector(".value-phone");
const tust = document.querySelector(".value-adress");
const checkBtn = document.querySelector(".save");

checkBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let email = test.value;
  let emaill = tost.value;
  let emailll = tust.value;
  console.log(email, emaill, emailll);
});
