var dataBase = [
  "00100110011",
  "00110010011",
  "00110011001",
  "01101100111",
  "01101110011",
  "01110110011",
  "01100110111",
  "01100111011",
  "01110011011",
  "00110110111",
  "00110111011",
  "00111011011",
  "01001100011",
  "01100100011",
  "01100110001",
  "01000110011",
  "01100010011",
  "01100011001",
  "00110001101",
  "00110100011",
  "00110110001",
  "00100011011",
  "00110001011",
  "00010010001",
  "00010110011",
  "00011010011",
  "00011011001",
  "00010011011",
  "00011001011",
  "00011001101",
  "00100100111",
  "00100111001",
  "00111001001",
  "01011100111",
  "01110100111",
  "01110111001",
  "01001110111",
  "01110010111",
  "01110011101",
  "00101110111",
  "00111010111",
  "00111011101",
  "01001000111",
  "01001110001",
  "01110010001",
  "01000100111",
  "01000111001",
  "01110001001",
  "00010001001",
  "00101110001",
  "00111010001",
  "00100010111",
  "00100011101",
  "00100010001",
  "00010100111",
  "00010111001",
  "00011101001",
  "00010010111",
  "00010011101",
  "00011100101",
  "00010000101",
  "00110111101",
  "00001110101",
  "01011001111",
  "01011110011",
  "01101001111",
  "01101111001",
  "01111010011",
  "01111011001",
  "01001101111",
  "01001111011",
  "01100101111",
  "01100111101",
  "01111001011",
  "01111001101",
  "00111101101",
  "00110101111",
  "00001000101",
  "00111101011",
  "01110000101",
  "01011000011",
  "01101000011",
  "01101100001",
  "01000011011",
  "01100001011",
  "01100001101",
  "00001011011",
  "00001101011",
  "00001101101",
  "00100100001",
  "00100001001",
  "00001001001",
  "01010000111",
  "01011100001",
  "01110100001",
  "01000010111",
  "01000011101",
  "00001010111",
  "00001011101",
  "01000100001",
  "01000010001",
  "00010100001",
  "00001010001",
];

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var str = document.getElementById("text").value;
  var StartCodeB = "00101101111",
    checkCode = "",
    endCode = "0011100010100";
  var strArry = [""];

  for (var i = 0; i < str.length; i++) {
    strArry[i] = str.charCodeAt(i) - 32;
    console.log("here");
    console.log(strArry[i]);
  }

  var newString = [""],
    total = 104;

  for (var j = 0; j < strArry.length; j++) {
    newString[j] = strArry[j] * (j + 1);

    total += newString[j];
  }
  // console.log(newString);
  total %= 103;
  console.log("total");
  console.log(total);

  var codeData = "";
  for (var x = 0; x < newString.length; x++) {
    var n = strArry[x];
    codeData += dataBase[n];
    // console.log("hna");
    // console.log(codeData);
  }

  var code128 = StartCodeB + codeData + dataBase[total] + endCode; //
  // console.log("StartCodeB");
  console.log(code128);
  console.log(dataBase[total]);

  var content = "",
    left = 1;

  for (let r = 0; r < code128.length; r++) {
    if (code128[r] == "0") {
      left = left + 1 * 1;
        
      content +=
        "<span  class='black' style='border-left: 1px solid black;  left: ${left}" +
        left +
        "px;'></span>";
    } else if (code128[r] == "1") {
      left = left + 1 * 1;

      content +=
        "<span class='white' style='border-left: 1px solid white;  left: ${left}" +
        left +
        "px;'></span>";
    }
  }

  content =
    "<div id='list'>" +
    content +
    "<br>" +
    "<center>" +
    str +
    "</center>" +
    "</div>";
  document.getElementById("show").innerHTML = content;
  //console.log(strArry);
});
