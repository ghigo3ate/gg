$(document).ready(function () {
  
  $("#b1").click(function () {
    
    alert("Вгадай який з роутерів працює.");
    
    let k = Math.random() * 5;
    let x = Math.round(k);
    let count = 0;
    $("img").click(function () {
      count++;
      let y = $(this).attr("id");
      if (y == x) {
                 $(this).attr("src", "giphy.gif");  
          document.body.style.backgroundColor = "#fff";
          alert("Правильно, доступ до сайту досволено.");
            alert("Перенаправляємо вас на наш сайт.");
            setTimeout(function(){document.location.href = "sekret/index.html";},3000);
            
          }

                else{ 
               $(this).attr("src", "unnamed (1).png");}
         });
    
  });  

});