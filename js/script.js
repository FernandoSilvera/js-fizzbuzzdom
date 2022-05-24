const row = document.querySelector("#row");
let text = "";
let color = "";

for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    text = "fizzbuzz"
    color = "fizzbuzz";
  } else if (i % 5 === 0) {
    text = "buzz"
    color = "buzz";
  } else if (i % 3 === 0) {
    text = "fizz"
    color = "fizz";
  } else {
    text = i.toString();
    color = "no-fizzbuzz";
  }

  row.innerHTML += `<div class="col ${color}">
                      <span>${text}</span>
                    </div>`
}

