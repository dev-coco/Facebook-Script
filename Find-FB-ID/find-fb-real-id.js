var person = prompt("请输入", "");
var get_url = person.match(/.+/g);
for (var k = 0; k < get_url.length; k++) {
    (function(k) {
        setTimeout(async function() {
            let response = await fetch("https://www.facebook.com/"+get_url[k])
            let real_url = response.url.replace(/\/$/g,"");
            try {
              document.write(`<table><tbody><tr><td>`+[k+1]+`</td><td><a href="` + real_url + `">` + real_url + `</a></td></tr></tbody></table>`);
            } catch {
                document.write(`<table><tbody><tr><td>`+[k+1]+`</td><td>识别不到</td></tr></tbody></table>`);
            }
        }, 1500 * k);
    })(k);
}
