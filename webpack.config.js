const crypto = require("crypto");
crypto.createHash = (algorithm) =>
  crypto.createHash(algorithm === "md4" ? "sha256" : algorithm);
