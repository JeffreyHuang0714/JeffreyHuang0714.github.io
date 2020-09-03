window.onload = function(){
  var myTab = document.getElementById("tab");
  var myUl = document.getElementsByTagName("ul")[0];
  var myLi = document.getElementsByTagName("li");
  var myDiv = document.getElementsByTagName("div");

  for(var i = 0; i<myLi.length;i++){
      myLi[i].index = i;
      myLi[i].onclick = function(){
          for(var j = 0; j < myLi.length; j++){
              myLi[j].className="off";
              myDiv[j].className = "hide";
          }
          this.className = "active";
          myDiv[this.index].className = "show";
      }
    }
}
