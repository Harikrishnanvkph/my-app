export function readOnly() {
  var button = document.querySelectorAll("button");

  button.forEach((it) => {
    it.addEventListener("click", () => {
      alert(it.value);
    });
  });
}
