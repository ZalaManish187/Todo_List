function todo() {
  let list = document.getElementById("list").value;
  let span = document.createElement("span");
  span.innerHTML = list;
   

  let icon = document.createElement("i");
  icon.className = "fa-solid fa-square-xmark";
  icon.onclick = function () {
    span.remove();
    saveData();
  };
  span.addEventListener('click',function(e){
    span.style.textDecoration = 'line-through';
    saveData();
  })
  span.appendChild(icon);
  document.getElementById("outputShow").appendChild(span);
  document.getElementById("list").value = " ";
  saveData();
}

function saveData(){
  localStorage.setItem("data" , outputShow.innerHTML);
}
function showData(){
  outputShow.innerHTML = localStorage.getItem("data");



  let spans = document.querySelectorAll("span");
  for(let i=0;i<spans.length;i++){
    let span = spans[i];
    let icon = span.querySelector('i');
    icon.onclick = function () {
      span.remove();
      saveData();
    }
  
  span.addEventListener('click' , function (e){
    span.style.textDecoration = 'line-through';
    saveData();
  });
  
   

  

}
}
window.onload = showData();
