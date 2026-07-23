const link = document.querySelector(".link");
const message = document.getElementById("msgDiv");

message.style.display = "none";

link.addEventListener("mouseover", function () {
  message.style.display = "block";
});

link.addEventListener("mouseleave", function () {
  message.style.display = "none";
});
