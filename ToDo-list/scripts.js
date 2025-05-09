const btn = document.getElementById("btn");
const input = document.getElementById("input");
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (e.target.classList.contains("task-text")) {
      li.classList.toggle("completed");
    }
    
    if (e.target.classList.contains("delete-btn")) {
      li.remove();
    }
  });
  
  btn.addEventListener("click", () => {
    const task = input.value; 
    if (task) { 
        list.innerHTML += `
        <li class="list-group-item">
          <div class="d-flex justify-content-between align-items-center task-text">
            ${task}
            <button class="btn btn-sm btn-danger delete-btn">X</button>
          </div>
        </li>`;
        input.value = "";
    }
});