function todo() {
  let list = document.getElementById("list").value;
  let span = document.createElement("span");
  span.textContent = list;

  let icon = document.createElement("i");
  icon.className = "fa-solid fa-square-xmark";
  let result = list;
  icon.onclick = function () {
    span.remove();
  };
  span.appendChild(icon);
  document.getElementById("outputShow").appendChild(span);
  document.getElementById("list").value = " ";
}
