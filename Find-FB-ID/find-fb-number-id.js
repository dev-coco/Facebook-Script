var person = prompt("请输入", "");
var url = person.match(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
for (var k = 0; k < url.length; k++) {
    let response = await fetch(url[k])
    let text = await response.text()
    let matches = text.match(/"userVanity":".*?"/g)
    let facebookID = matches ? matches.sort((a, b) => matches.filter(v => v == a).length - matches.filter(v => v == b).length).pop().slice('"userVanity":"'.length).slice(0, -1) : ''
    if (facebookID.length == 0) {
        facebookID = url[k].replace(/.+com\//g, "");
        document.write("<a href=\"https://www.facebook.com/profile.php?id=" + facebookID + "\">https://www.facebook.com/profile.php?id=" + facebookID + "</a><br>");
    } else {
        document.write("<a href=\"https://www.facebook.com/" + facebookID + "\">https://www.facebook.com/" + facebookID + "</a><br>");
    }
}



