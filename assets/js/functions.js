/* Javascript for Social Media Dashboard With Theme Switcher */

const body   = document.getElementsByTagName("body")[0];
const toggle = document.getElementById("btn-theme-toggle");

toggle.addEventListener("click", function(){
  var curTheme  = "";
  var newTheme  = "theme-";

  for (let i = 0; i < body.classList.length; ++i){
    if (body.classList[i].match(/^theme/)) {
      curTheme = body.classList[i].split("-")[1];
    }
  }

  newTheme += (curTheme == "light") ? "dark" : "light";

  body.classList.remove("theme-" + curTheme);
  body.classList.add(newTheme);
});