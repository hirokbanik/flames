const form = document.querySelector("form");
const resultbox = document.querySelector(".result-box");
const result = document.querySelector("#result");

form.addEventListener("submit", flames);
form.name1.addEventListener("click", ()=>{
	resultbox.classList.remove("active");
	resultbox.classList.remove("error");
});
form.name2.addEventListener("click", () => {
  resultbox.classList.remove("active");
  resultbox.classList.remove("error");
});

function flames(e) {
  e.preventDefault();

  if (form.name1.value.trim() && form.name2.value.trim()) {
    form.name1.blur();
    form.name2.blur();

    const name1 = form.name1.value;
    const name2 = form.name2.value;
    const flames = [
      "Friends",
      "Lovers",
      "Affair",
      "Marriage",
      "Enemies",
      "Siblings"
    ];
    const fLength = flames.length;

    const n1 = name1
      .toLowerCase()
      .split("")
      .filter(i => !name2.includes(i));
    const n2 = name2
      .toLowerCase()
      .split("")
      .filter(i => !name1.includes(i));

    const nLength = n1.length + n2.length;

    let l = nLength % fLength === 0 ? fLength - 1 : (nLength % fLength) - 1;

	resultbox.classList.add('active');
    result.textContent = nLength % fLength === 0 ? "Soul Mates" : flames[l];
  } else {
	resultbox.classList.add("error");
	result.textContent = 'Name missing';
  }
}
