var person = prompt("请输入", "");
var url = person.match(/.+/g);
for (var k = 0; k < url.length; k++) {
    (function(k) {
        setTimeout(async function() {
            let response = await fetch(url[k]);
            let text = await response.text();
            try {
                let facebookID = text.match(/(?<=<title>).*?(?=<\/title>)/g)[0];
                document.write(`<table><tbody><tr><td>`+[k+1]+`</td><td>`+facebookID+`</td></tr></tbody></table>`);
            } catch {
                document.write(`<table><tbody><tr><td>`+[k+1]+`</td></tr></tbody></table>`);
            }
        }, 100 * k);
    })(k);
}
