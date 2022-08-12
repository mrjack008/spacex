var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
 
  if(currentScrollPos<600&&prevScrollpos > currentScrollPos){
   
    var a=window.pageXOffset;
    console.log(a);
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.backgroundColor ="";
  }
  else if (prevScrollpos > currentScrollPos) {
    var a=window.pageXOffset;
    console.log(a);
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.backgroundColor ="black";
  }
  else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
function fdrop(){
    document.getElementById("fdrop-b").style.display="block";
}
function navdis(){
    document.getElementById("sp").style.display="none";
}