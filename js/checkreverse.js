function reverse(string) {
    if (string.length == 0) {
        return string
    } else {
        return reverse(string.substr(1)) + string[0]
    }
}
console.log(reverse("abc"))
