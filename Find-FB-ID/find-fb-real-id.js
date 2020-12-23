var person = prompt("请输入", "");
var url = person.match(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
for (var k = 0; k < url.length; k++) {
    let response = await fetch(url[k])
    let text = await response.text()
    let matches = text.match(/"userID":"([0-9]+)"/g)
    let facebookID = matches ? matches.sort((a, b) => matches.filter(v => v == a).length - matches.filter(v => v == b).length).pop().slice('"userID":"'.length).slice(0, -1) : ''
        document.write(""+facebookID+"<br>");
}



