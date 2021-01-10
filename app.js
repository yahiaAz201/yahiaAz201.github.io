

window.onscroll = function() {myFunction()};

function myFunction() {
    var n = (document.documentElement.scrollTop * 100) / 1828;
    document.getElementById('output').style.width =`${n}%`
    document.getElementById('value').innerHTML =`width of this bar is : ${Math.floor(n)}%`
   
  }