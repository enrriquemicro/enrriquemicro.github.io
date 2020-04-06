function aula(){
  "use strict";
  //OCULTAR LA PRIMERA WEB
  //MANDAR ENLACES AL AULA
  //OCULTAR LECTURA COMPLEMENTARIA Y TAREA DOMICILIARIA
  //FUNCION PARA EL CURSO CyT 3° SEMANA 1
  cyt3sem1.addEventListener("click", function(){
    // document.getElementById("fecha_presentacion").value="Fecha de Presentación: 15 de Abril del 2029.";
    // var cyt3sem1 = document.getElementById("cyt3sem1");
    tema_semana.innerHTML = "Tema: Diagnóstico del Coronavirus.";
    fecha_presentacion.innerHTML = "Fecha de Presentación: 17 de Abril del 2020.";
    // fecha_presentacion.setAttribute("p", "Fecha de Presentación: 15 de Abril del 2029.");
    lectura_complementaria.setAttribute("href", "material/Lectura_Complementaria.pdf");
    tarea_domiciliaria.setAttribute("href", "material/Tarea_Domiciliaria.pdf");
    video_aula.setAttribute("src", "video/1.mp4");
    video_aula.setAttribute("poster", "img/poster_ed.png");
    video_aula.setAttribute("controls", "");
  });
  //FUNCION PARA EL CURSO CyT 3° SEMANA 2
  cyt3sem2.addEventListener("click", function(){
    // document.getElementById("fecha_presentacion").value="Fecha de Presentación: 15 de Abril del 2029.";
    // var cyt3sem1 = document.getElementById("cyt3sem1");
    tema_semana.innerHTML = "Tema: Gigantes del Cenepa.";
    fecha_presentacion.innerHTML = "Fecha de Presentación: 24 de Abril del 2020.";
    // fecha_presentacion.setAttribute("p", "Fecha de Presentación: 15 de Abril del 2029.");
    lectura_complementaria.setAttribute("href", "material/gigantes_lectura.pdf");
    tarea_domiciliaria.setAttribute("href", "material/gigantes_tarea.pdf");
    video_aula.setAttribute("src", "video/2.mp4");
    // video_aula.setAttribute("src", "https://youtu.be/W2mTMkA6DZg");
    video_aula.setAttribute("poster", "img/poster_ed.png");
    video_aula.setAttribute("controls", "");
  });
  //FUNCION PARA EL CURSO CyT 3° SEMANA 3
  //FUNCION PARA EL CURSO CyT 3° SEMANA 4
}
window.onload=aula();
