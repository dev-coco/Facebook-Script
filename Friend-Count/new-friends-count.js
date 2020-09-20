var a = document.documentElement.outerHTML;
var b = a.match(/(?<=gpro0wi8" href=").*?(?=" role="link")/g);
var c = a.match(/(?<=g1cxx5fr lrazzd5p oo9gr5id" dir="auto">).*?(?=<\/span>)/g);
var f = a.match(/(?<=\<a aria-current="page" aria-label=").*?(?=" class="oajrlxb2 oo1teu6h.*?" href="\/me)/g);
var date = new Date();
var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
var regex = /Friend Requests|加好友请求/;
if (regex.test(c) && regex.test(c)) {
    for (var i = 0, j = 1; i < b.length, j < c.length; i++, j++) {
        document.write("<table><tbody><tr><td>" + nowDate + "</td><td></td><td>" + f + "</td><td>" + [j] + "</td><td>" + c[j] + "</td><td>" + b[i] + "</td></tr></tbody></table>");
    }
} else {
    for (var i = 0, j = 0; i < b.length, j < c.length; i++, j++) {
        document.write("<table><tbody><tr><td>" + nowDate + "</td><td></td><td>" + f + "</td><td>" + [j] + "</td><td>" + c[j] + "</td><td>" + b[i] + "</td></tr></tbody></table>");
    }
}
var d = document.documentElement.outerHTML;
var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
document.open();
document.clear();
document.close();
for (var i = 0; i < e.length; i++) {
    document.write(e[i]);
}
