function todo() {
  let list = document.getElementById("list").value;
  let span = document.createElement("span");
  span.innerHTML = list;

  

  let icon = document.createElement("i");
  icon.className = "fa-solid fa-square-xmark";
  icon.onclick = function () {
    span.remove();
  };
  span.addEventListener('click',function(e){
    span.style.textDecoration = 'line-through';
  })
  span.appendChild(icon);
  document.getElementById("outputShow").appendChild(span);
  document.getElementById("list").value = " ";
}
