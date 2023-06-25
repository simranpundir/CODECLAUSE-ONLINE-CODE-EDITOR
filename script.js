function runCode() {
    var code = document.getElementById("codeInput").value;
    var preview = document.getElementById("preview").contentWindow.document;
    preview.open();
    preview.writeln(code);
    preview.close();
  }
  
  function resetCode() {
    document.getElementById("codeInput").value = "";
    document.getElementById("preview").contentWindow.document.open();
    document.getElementById("preview").contentWindow.document.writeln("");
    document.getElementById("preview").contentWindow.document.close();
  }
  