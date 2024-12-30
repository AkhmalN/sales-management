import moment from "moment-timezone";

export default function getCurrentTime() {
  return moment().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss");
}
