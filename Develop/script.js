var time9 = document.querySelector("#time9");
var time10 = document.querySelector("#time10");
var time11 = document.querySelector("#time11");
var time12 = document.querySelector("#time12");
var time1 = document.querySelector("#time1");
var time2 = document.querySelector("#time2");
var time3 = document.querySelector("#time3");
var time4 = document.querySelector("#time4");
var time5 = document.querySelector("#time5");

function calendar() {
  //Time at 9AM
  var timeat9 = m.format("9 [AM]").toString();
  time9.append(timeat9);
  moment().format('ll');

  var col9 = document.querySelector("#col9");
  a = document.createElement("INPUT");
  a.setAttribute("type", "text");
  a.setAttribute("class", "input9");
  if (timeat9 == m.format("H [AM]").toString()) {
    a.setAttribute("placeholder", "Current time");
    a.style.backgroundColor = "red";
    col9.append(x);
  } else if (m.format("H") < m.format("09")) {
    a.setAttribute("placeholder", "Coming time");
    a.style.backgroundColor = "green";
    col9.append(x);
  } else {
    a.setAttribute("placeholder", "Passed time");
    a.style.backgroundColor = "silver";
    col9.append(x);
  }


  var textboxArray = $(".form-control");
  for (let i = 0; i < textboxArray.length; i++) {
    let val = getCookie("box" + i);
    textboxArray[i].value = val != null ? val : "";
    localStorage.setItem(name, value)
    localStorage.getItem(name, value)
  }

  document.getElementById("date").innerHTML = moment();

  console.log(moment())
  function test(box) {
    setCookie("box" + box, textboxArray[box].value);
  }


  function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/;";
  }

  function getCookie(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
    localStorage.setItem(name, value);
    localStorage.getItem(name, value);
  }