window.onscroll = function() {myFunction()};

function myFunction() {

    document.getElementById("div14").style.visibility = "visible";
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("div14").className = "arrowTopOn";
  } else {
    document.getElementById("div14").className = "arrowTopOff";
  }
}