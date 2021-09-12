export default function cutLongString(string) {
    return string.length > 100 ? string.substring(0, 99) + "..." : string = string;
}
