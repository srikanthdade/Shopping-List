let addbtn = document.getElementById("mainbtn");
let count=document.getElementById("count");
let c=0;

addbtn.addEventListener("click", function (event) {
  let items = document.getElementById("items");
  const container = document.createElement("div");
  const additem = document.createElement("span");
  let input = document.getElementById("inputitm");
  if(input.value.trim()===''){
    return;
  } else {
    additem.innerHTML = input.value;
    input.value = '';
  }
  const remove = document.createElement("div");
  remove.innerHTML = '<i class="fa fa-trash" aria-hidden="true" style="color:red;"></i>';

  additem.classList.add("add-item");
  container.appendChild(additem);

  remove.classList.add("removebtn");
  container.appendChild(remove);

  container.classList.add("item");
  items.appendChild(container);
  c=c+1;
  count.innerHTML=c;

  container.onclick = function () {
    container.classList.toggle("green-item");
    additem.classList.toggle("strike");
  };
  remove.onclick = function () {
    items.removeChild(container);
    c=c-1;
    count.innerHTML=c;
  };
  if(i.value===""){
    return;
  }
});
