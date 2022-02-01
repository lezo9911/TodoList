document.querySelector(".btn-submit").addEventListener("click", addItem);


const list = document.querySelector(".list");

function addItem() {
    const todo = document.querySelector(".input-text").value;
    const item = document.createElement('li');
    item.innerHTML = todo;
    list.appendChild(item);

    const delete_btn = document.createElement("button");

    delete_btn.innerText = "X";
    delete_btn.className = "delete-btn";
    delete_btn.addEventListener("click", deleteitem);

    item.appendChild(delete_btn);
}

function deleteitem(e) {
    e.target.parentElement.remove();
}
