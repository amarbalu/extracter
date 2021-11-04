const SESSION_GROUP_START_IDENTIFIER_REGEX = /(\+{3} show bfd all session)/g;
const SESSION_GROUP_STOP_IDENTIFIER_REGEX = /(\-{3} show bfd all session)/g;
const FILE_UPLOAD_URL = "./files/node0_3_CPU0.tech.gz";
const SESSION_KEY_CAPTURE_REGEX = /(?<=i\/f\:\s).*(?=\,)/gi;
const SESSION_KEY_REGEX = /(?=i\/f\:\s).*(?=\,)/gi;

module.exports = {
  SESSION_GROUP_START_IDENTIFIER_REGEX,
  SESSION_GROUP_STOP_IDENTIFIER_REGEX,
  FILE_UPLOAD_URL,
  SESSION_KEY_REGEX,
  SESSION_KEY_CAPTURE_REGEX,
};
