const bishInput = document.getElementById("bishNumber");
const boshInput = document.getElementById("boshNumber");
const countInput = document.getElementById("count");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let bish = bishInput.value;
    let bosh = boshInput.value;
    let count = countInput.value;

    output.innerHTML = "Bish-Bosh Output:<br>";
    
    for (let i = 1; i <= count; i++) {
        if (i % bish === 0 && i % bosh === 0) {
            output.innerHTML += "Bish-Bosh<br>";
        } else if (i % bish === 0) {
            output.innerHTML += "Bish<br>";
        } else if (i % bosh === 0) {
            output.innerHTML += "Bosh<br>";
        } else {
            output.innerHTML += i + "<br>";
        }
    }
})