var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);
function openNav() {
    document.getElementById("myNav").style.width = "62%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  

