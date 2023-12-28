function copyToClipboard() {
    var copyText = document.getElementById("convertedText");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  