function readMoreLabs() {
  var dotsLabs = document.getElementById('dotsLabs');
  var moreTextLabs = document.getElementById("moreLabs");
  var btnMoreTextLabs = document.getElementById("readMoreBtnLabs");
  var btnLessTextLabs = document.getElementById("readLessBtnLabs");

  if (dotsLabs.style.display === "none") {
    dotsLabs.style.display = "inline";
    btnMoreTextLabs.style.display = "inline";
    btnLessTextLabs.style.display = "none";
    moreTextLabs.style.display = "none";
  } else {
    dotsLabs.style.display = "none";
    btnMoreTextLabs.style.display = "none";
    btnLessTextLabs.style.display = "inline";
    moreTextLabs.style.display = "inline";
  }
};

function readMoreMthd() {
  var dotsMthd = document.getElementById('dotsMthd');
  var moreTextMthd = document.getElementById("moreMthd");
  var btnMoreTextMthd = document.getElementById("readMoreBtnMthd");
  var btnLessTextMthd = document.getElementById("readLessBtnMthd");

  if (dotsMthd.style.display === "none") {
    dotsMthd.style.display = "inline";
    moreTextMthd.style.display = "none";
    btnMoreTextMthd.style.display = "inline";
    btnLessTextMthd.style.display = "none";
    moreTextMthd.style.display = "none";
  } else {
    dotsMthd.style.display = "none";
    btnMoreTextMthd.style.display = "none";
    btnLessTextMthd.style.display = "inline";
    moreTextMthd.style.display = "inline";
  }
}