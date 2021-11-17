const SESSION_GROUP_START_IDENTIFIER_REGEX =
  /(\+{3} show bfd all session status detail)/g;
const SESSION_GROUP_STOP_IDENTIFIER_REGEX =
  /(\-{3} show bfd all session status detail)/g;
const FILE_UPLOAD_URL = "./files/node0_3_CPU0.tech.gz";
const SESSION_KEY_CAPTURE_REGEX = /(?<=i\/f\:\s).*(?=\,)/gi;
const SESSION_KEY_REGEX = /(?=i\/f\:\s).*(?=\,)/gi;
const DESTINATION = /Dest:/g;
const SOURCE = /Src:/g;
const STATE = /State: /g;
const SESSION_TYPE = / Session type:/g;
const RECEIVED_PARAMETERS = /Received parameters:/g;
const TRANSMITTED_PARAMETERS = /Transmitted parameters:/g;
const TIMER_VALUES = /Timer Values:/g;
const LABEL = /Label:/g;
const LOCAL_STATUS = /Label:/g;

module.exports = {
  SESSION_GROUP_START_IDENTIFIER_REGEX,
  SESSION_GROUP_STOP_IDENTIFIER_REGEX,
  FILE_UPLOAD_URL,
  SESSION_KEY_REGEX,
  SESSION_KEY_CAPTURE_REGEX,
};
