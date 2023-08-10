const themeButton = document.querySelector("button");

function changeTheme() {
  // Get the html element. whenever dark adds to the html tag all other dark: utility classes will run
  // https://developer.mozilla.org/en-US/docs/Web/API/Document.documentElement.
  document.documentElement.classList.toggle("dark");
}

themeButton.addEventListener("click", changeTheme);
