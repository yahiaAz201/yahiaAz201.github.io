var show = document.getElementById("show");
var content = "";
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var hh, mm, ss;

hh = "<option selected>HH</option>";
mm = "<option selected>MM</option>";
ss = "<option selected>SS</option>";
for (var i = 0; i < 24; i++) {
  if (i <= 9) {
    hh += "<option  value=" + "0" + i + ">" + "0" + i + "</option>";
  } else {
    hh += "<option  value=" + i + ">" + i + "</option>";
  }
}
for (var i = 0; i < 60; i++) {
  if (i <= 9) {
    mm += "<option  value=" + "0" + i + ">" + "0" + i + "</option>";
  } else {
    mm += "<option  value=" + i + ">" + i + "</option>";
  }
}
for (var i = 0; i < 60; i++) {
  if (i <= 9) {
    ss += "<option  value=" + "0" + i + ">" + "0" + i + "</option>";
  } else {
    ss += "<option value=" + i + ">" + i + "</option>";
  }
}

document.write(
  "<div  class='windows'><select  id='hh'>" +
    hh +
    "</select>" +
    '<span style="color:#fff;font-weight:900 ;font-size:24px;">:</span>' +
    "<select id='mm'>" +
    mm +
    "</select>" +
    '<span style="color:#fff;font-weight:900 ;font-size:24px;">:</span>' +
    "<select id='ss'>" +
    ss +
    "</select></div>"
);

document.getElementById("btn").addEventListener("click", () => {
  var sth = document.getElementById("hh").value,
    stm = document.getElementById("mm").value,
    sts = document.getElementById("ss").value;

    var res = sth + stm + sts ;
  

  content = sth + ":" + stm + ":" + sts;
  var d = new Date();
  newDate =
    months[d.getMonth()] +
    " " +
    d.getDate() +
    " " +
    d.getFullYear() +
    " " +
    content;
  var theTime = new Date(newDate);

  //console.log(sth + stm +  sts);
  //	console.log(typeof(parseInt(sth + stm +  sts)) );
  //console.log(parseInt(sth + stm +  sts) >= 1);
  console.log(res.indexOf("/m/gi")); //true

  if (res >= 1 && res.indexOf()) {
    document.querySelector(".windows").style.display = "none";
    document.querySelector("#btn").style.display = "none";

    setInterval(function () {
      var realTime = new Date();

      var time = theTime.getTime() - realTime.getTime();

      var h = time / 3600000,
        m,
        s;

      if (h > Math.floor(h)) {
        h = Math.floor(h);
        m = (time % 3600000) / 60000;

        if (m > Math.floor(m)) {
          m = Math.floor(m);
          s = Math.floor(((time % 3600000) % 60000) / 1000);

          if (h.toString().length < 2) {
            h = "0" + h.toString();
          }
          if (m.toString().length < 2) {
            m = "0" + m.toString();
          }
          if (s.toString().length < 2) {
            s = "0" + s.toString();
          }
        }
      }

      
      var r2 = "<div   id='ses'>"+s+"</div>";



      if (s <= "0" && m <= "0" && h <= "0") {

      	
        s = "00";
        m = "00";
        h = "00";
        document.getElementById("audio").pause();
        document.getElementById("zero").play();
        setTimeout(function(){

     	document.getElementById("show").style.animation = "rotat 1s ease forwards";
    
     },1000);
        setTimeout(function(){
         document.getElementById('ses').animation = "change 1 ease forwards";
       },1000);


      } 
      else 
      {
        document.getElementById("show").innerHTML = `${h}:${m}:${r2}`;
       setTimeout(function(){
         document.getElementById('ses').animation = "change 1 ease forwards";
       },1000);

        
        
       
       
       
        document
          .querySelector("#show")
          .setAttribute("data-text", `${h}:${m}:${s}`);
        document.getElementById("audio").play();
        setTimeout(function(){

     	document.getElementById("show").style.animation = "rotat 1s ease forwards";
      
      


     },1000);
      }
      
    }, 1000);
  }

  var shadow = "";
  for (var i = 0; i < 20; i++) {
    shadow +=
      (shadow ? "," : "") + i * -1 + "px " + i * 1 + "px 0" + " #b3b3b3 ";
  }

  console.log(shadow);

  show.style.setProperty('--myShadow', shadow);



  /*
0px 0px 0 #c30202,-1px 1px 0 #c30202,-2px 2px 0 #c30202,-3px 3px 0 #c30202,-4px 4px 0 #c30202,-5px 5px 0 #c30202,-6px 6px 0 #c30202,-7px 7px 0 #c30202,-8px 8px 0 #c30202,-9px 9px 0 #c30202,-10px 10px 0 #c30202,-11px 11px 0 #c30202,-12px 12px 0 #c30202,-13px 13px 0 #c30202,-14px 14px 0 #c30202,-15px 15px 0 #c30202,-16px 16px 0 #c30202,-17px 17px 0 #c30202,-18px 18px 0 #c30202,-19px 19px 0 #c30202
  */

  console.log(
    getComputedStyle(document.querySelector("#show")).getPropertyValue(
      "content"
    )
  );
});
