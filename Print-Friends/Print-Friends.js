var a = document.documentElement.outerHTML;
var c = a.match(/(?<=gpro0wi8" href=").*?(?=" role="link").*?(?=<\/span>)/g);
var f = a.match(/(?<=\<a aria-current="page" aria-label=").*?(?=" class="oajrlxb2 oo1teu6h.*?" href="\/me)|(?<=<span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5">).*?(?=<\/span>)/g);
var g = prompt("请输入名字", "");
var date = new Date();
var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
for (var i = 0; i < c.length; i++) {
    var friends = c[i].match(/http.+(?=" role="link")/g);
    var k = c[i].match(/(?<=dir="auto">).+/g);
    (function(i) {
        document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + g + "</td><td>" + f[0] + "</td><td></td><td>" + i + "</td><td>" + k + "</td><td></td><td></td><td>" + friends + "</td></tr></tbody></table>");
    })(i)
}
var d = document.documentElement.outerHTML;
var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
document.open();
document.clear();
document.close();
for (var i = 0; i < e.length; i++) {
    document.write(e[i]);
}
