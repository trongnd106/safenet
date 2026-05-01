"use strict";

var fs = require("fs");
var path = require("path");

var root = path.join(__dirname, "..");
var outFile = path.join(root, "mail-config.js");

var envKey =
  typeof process.env.SAFENET_WEB3FORMS_ACCESS_KEY === "string"
    ? process.env.SAFENET_WEB3FORMS_ACCESS_KEY.trim()
    : "";

function writeFile(keyStr) {
  var body =
    "/**\n * Tự động sinh khi deploy (đừng sửa trên máy chủ — dùng Vercel env).\n */\n" +
    "window.SAFENET_WEB3FORMS_ACCESS_KEY = " +
    JSON.stringify(keyStr) +
    ";\n";

  fs.writeFileSync(outFile, body, "utf8");
}

function onVercel() {
  return (
    process.env.VERCEL === "1" ||
    process.env.VERCEL_ENV === "production" ||
    process.env.VERCEL_ENV === "preview"
  );
}

var hasLocal = fs.existsSync(outFile);

if (envKey.length > 0) {
  writeFile(envKey);
  console.log("[inject-mail-config] Đã ghi mail-config.js từ biến môi trường SAFENET_WEB3FORMS_ACCESS_KEY.");
} else if (onVercel()) {
  writeFile("");
  console.warn(
    "[inject-mail-config] ⚠ Deploy Vercel nhưng chưa có SAFENET_WEB3FORMS_ACCESS_KEY — form mail sẽ không gửi được. Vào Vercel → Project → Settings → Environment Variables và thêm biến này (Production + Preview)."
  );
} else if (!hasLocal) {
  writeFile("");
  console.warn(
    "[inject-mail-config] Chưa có mail-config.js và chưa set env → ghi stub rỗng. Local: copy mail-config.example.js → mail-config.js và dán key."
  );
} else {
  console.log(
    "[inject-mail-config] Giữ nguyên mail-config.js hiện có (dev local không set env)."
  );
}
