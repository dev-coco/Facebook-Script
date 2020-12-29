var person = prompt("请输入", "");
var url = person.match(/[0-9].+/g);
for (var k = 0; k < url.length; k++) {
    (function(k) {
        setTimeout(async function() {
            let response = await fetch(url[k])
            let text = await response.text()
            try {
                let facebookID = text.match(/(?<="userVanity":").*?(?=")/g)[0]
                if (facebookID.length == 0) {
                    facebookID = url[k].replace(/.+com\//g, "");
                    document.write("<a href=\"https://www.facebook.com/profile.php?id=" + facebookID + "\">https://www.facebook.com/profile.php?id=" + facebookID + "</a><br>");
                } else {
                    document.write("<a href=\"https://www.facebook.com/" + facebookID + "\">https://www.facebook.com/" + facebookID + "</a><br>");
                }
            } catch {
                document.write("<br>");
            }
        }, 1500 * k);
    })(k);
}
