var i = 0;
var txt1 =
  "Hi Motu.....!  <<               Now I wan't to say something  to you. <<<                So , Be ready .Yooo...!                                                                           > I hate you the most < You very pagal just like me  <<                  As the days goes < you get closer to me....! <<                           All i want is ki tu khush rahe your smile is very very very precious..so laugh pakodanath ...!                                                     > Everything about you is always intresting for me...!                     << Finally i did this yeahhh .!                                                     > I Love you so much than anything else in this world....!                                                                                >I Miss U <Cutie.....! |                  <<<< Me always happy with you ...!   ";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
