function go_back() {
  window.location = "index.html";
}

function loadLeaderBoard() {
  document.getElementById("resultsPage").innerHTML = "";
  for (var i = 0, len = localStorage.length; i < len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    document.getElementById("resultsPage").innerHTML +=
      "<span> UserName: <p>" + key + "</p> UserScore: <p>" + value;
    console.log(key + " => " + value);
  }
}
