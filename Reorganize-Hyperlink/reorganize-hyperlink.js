var person = prompt("请输入", "");
var url = person.match(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
var name = person.replace(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g, "\n");
var nameb = name.match(/.+/g);
for (var k = 0, j = 0; k < url.length, j < nameb.length; k++, j++) {
    document.write("<a href=\"" + url[k] + "\">" + nameb[j] + "</a><br>");
}
