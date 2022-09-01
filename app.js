let count = 0;
// Dom Element
const btns = document.querySelectorAll('.btn');
const value = document.getElementById("value")
btns.forEach(function (btn) {
 btn.addEventListener("click", function (e) {
  const check = e.currentTarget.classList;
  if (check.contains("increase")) {
   count++
  }
  else if (check.contains("decrease")) {
   count--
  }
  else {
   count = 0
  }
  if (count < 0) {
   value.style.color = "red"
  }
  if (count > 0) {
   value.style.color = "green"
  }
  if (count == 0) {
   value.style.color = "darkblue"
  }
  value.textContent = count
 })
})
