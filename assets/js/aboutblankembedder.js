var urlobj = new window.URL(window.location.href);
let url = window.location.href;
if (url) {
  var win;
  document.getElementById("embed-button").onclick = function () {
    if (win) {
      win.focus();
    } else {
      var features =
        "width=" +
        window.innerWidth +
        ",height=" +
        window.innerHeight +
        ",menubar=no,toolbar=no,location=no,status=no,resizable=no";
      win = window.open("", "_blank", features);
      win.document.body.style.margin = "0";
      win.document.body.style.height = "100%";
      var iframe = win.document.createElement("iframe");
      iframe.style.border = "none";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.margin = "0";
      iframe.src = url;
      win.document.body.appendChild(iframe);
    }
  };
}
