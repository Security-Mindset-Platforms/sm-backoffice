(function(window) {
    window.env = window.env || {};
    // Environment variables
    window["env"]["apiUrl"] = "${API_URL}";
    window["env"]["appSignature"] = "${appSignature}";
    window["env"]["secretKey"] = "${secretKey}";
    window["env"]["API_KEY"] = "${API_KEY}";
  })(this);