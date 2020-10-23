var a = document.documentElement.outerHTML;
var b = a.match(/ios:url/g);
if (b == "ios:url")
{
var a = document.documentElement.outerHTML;
var c = a.match(/(?<=fb:\/\/profile\/).*?(?=">)/g);
document.write(c[0])
}
else {
var c = a.match(/(?<=userID":")[0-9].*?[0-9](?=")/g);
document.write(c[0])
}
