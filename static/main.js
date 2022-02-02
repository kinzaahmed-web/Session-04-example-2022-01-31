register = function () {
  let textBox = document.querySelector("#my-text-box");
  let e = document.createElement("li");
  e.textContent = textBox.value;
  document.querySelector("#nameList").appendChild(e);
};
