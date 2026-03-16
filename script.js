const list = document.getElementById("infi-list");

let count = 0;

// function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    count++;
    const li = document.createElement("li");
    li.textContent = "Item " + count;
    list.appendChild(li);
  }
}

// add 2 items by default
addItems(2);

// infinite scroll
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
