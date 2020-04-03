function limpiar(){
  "use strict";
  user.addEventListener("click", function(){
    document.getElementById("user").value="";
    document.getElementById('verificar').style.display = 'none';
  });
  password.addEventListener("click", function(){
    document.getElementById("password").value="";
    document.getElementById('verificar').style.display = 'none';
  });
}
window.onload=limpiar();
