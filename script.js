const list = document.getElementById("list");

let count = 0;

// function to add list items
function addItems(number) {
  for (let i = 0; i < number; i++) {
    count++;
    const li = document.createElement("li");
    li.innerText = `Item ${count}`;
    list.appendChild(li);
  }
}

// add 10 items by default
addItems(10);

// infinite scroll
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
