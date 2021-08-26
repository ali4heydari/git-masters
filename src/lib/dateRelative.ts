import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

export default function distanceToNow(dateTime: Date | number) {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
  });
}
