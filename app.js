const fs = require("fs");
const zlib = require("zlib");
const readline = require("readline");
const {
  SESSION_GROUP_STOP_IDENTIFIER_REGEX,
  SESSION_GROUP_START_IDENTIFIER_REGEX,
  FILE_UPLOAD_URL,
  SESSION_KEY_CAPTURE_REGEX,
  SESSION_KEY_REGEX,
} = require("./constants");

let lineReader = readline.createInterface({
  input: fs.createReadStream(FILE_UPLOAD_URL).pipe(zlib.createGunzip()),
});

let lines = "";
let sessionlines = "";
const sessionObject = {};
let groupActive = false;
let sessionActive = false;
const list = [];
let currentsessionKey = "";
lineReader.on("line", (line) => {
  if (SESSION_GROUP_START_IDENTIFIER_REGEX.test(line)) {
    groupActive = true;
  }
  if (groupActive) {
    if (sessionActive) {
      sessionlines = sessionlines + "\r\n" + line;
    }
    lines = lines + "\r\n" + line;
    if (SESSION_KEY_REGEX.test(line)) {
      if (sessionActive) {
        sessionActive = false;
        sessionObject[currentsessionKey] = sessionlines;

        sessionlines = "";
      }
      /**https://stackoverflow.com/questions/4724701/regexp-exec-returns-null-sporadically */
      [currentsessionKey] = /(?<=i\/f\:\s).*(?=\,)/gi.exec(line);
      console.log(":::matches", currentsessionKey);
      sessionActive = true;
      sessionlines += line;
    }
  }
  if (SESSION_GROUP_STOP_IDENTIFIER_REGEX.test(line)) {
    groupActive = false;
    sessionActive = false;
    // list.push(lines);
    list.push(sessionObject);
    lines = "";
  }
});

lineReader.on("close", () => {
  console.log("groups", list.length);
});
