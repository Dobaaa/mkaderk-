var i = 0;
var txt = "مَعًا لِإِحْضَارِ أَكَلَاتٍ مُعَقَّدَةٍ فِي دَقَائِقَ";
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txt-one").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter();

var v = 0;
var txtP ="وصفات والمقادير لألشخاص الذين يهتمون بالطبخ ويرغبون في تجربةوصفات جديدةوشهية";

function typeWriterP() {
  if (v < txtP.length) {
    document.getElementById("txt-two").innerHTML += txtP.charAt(v);
    v++ ;
    setTimeout(typeWriterP, speed);
  }
}

window.onload = typeWriterP();
