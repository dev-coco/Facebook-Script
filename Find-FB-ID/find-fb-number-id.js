var person = prompt("请输入", "");
var url = person.match(/https:\/\/[A-Za-z0-9&/?=.]+[A-Za-z0-9/]/g);
for (var k = 0; k < url.length; k++) {
    (function(k) {
        setTimeout(async function() {
            let response = await fetch(url[k])
            let text = await response.text()
            let facebookID = text.match(/"userID":"([0-9]+)/g)[0]
            document.write(""+facebookID+"<br>");
        }, 1500 * k);
    })(k);
}
