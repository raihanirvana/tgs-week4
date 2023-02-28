const cells = document.querySelectorAll(".cell");
const back = document.querySelectorAll(".close");
const hapus = document.querySelectorAll(".remove img");
const removes = document.querySelectorAll(".remove");
const navbar = document.querySelector(".navbar .navbar-mid");

document.querySelector(".navbar-right .hamburger").onclick = () => {
  navbar.classList.toggle("active");
};

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.querySelector(".remove").classList.toggle("clicked");
  });
});

// let cellSebelumnya = null;

// cells.forEach((cell) => {
//   cell.addEventListener("click", () => {
//     if (cellSebelumnya !== null) {
//       const removeSesudahKlik = cellSebelumnya.querySelector(".remove");
//       removeSesudahKlik.classList.remove("clicked");
//     }

//     const removeClicked = cell.querySelector(".remove");
//     removeClicked.classList.add("clicked");

//     cellSebelumnya = cell;
//   });
// });

back.forEach(function (button) {
  button.addEventListener("click", function () {
    button.querySelector(".close").classList.remove("clicked");
  });
});
hapus.forEach(function (button) {
  button.addEventListener("click", function () {
    const cell = button.parentElement.parentElement;
    cell.remove();
    cellSebelumnya = null;
  });
});
