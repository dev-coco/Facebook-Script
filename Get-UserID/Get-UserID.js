var b = document.documentElement.outerHTML.match(/ios:url/g);
if (b) {
    var c = a.match(/(?<=fb:\/\/profile\/).*?(?=">)/g);
} else {
    var c = a.match(/(?<=userID":")[0-9].*?[0-9](?=")/g);
}
document.write(c[0])
