var html = document.documentElement.outerHTML;
var c = html.match(/(?<=alt="" aria-label=").*?(?=" role="img">)/g);
var url = html.match(/(?<=class="_5q6s _8o _8t lfloat _ohe" href=")https:\/\/www.facebook.com\/.*?(?=.fref|&amp)/g);
var account = html.match(/(?<=<span class="_1vp5">).*?(?=<\/span>)/g);
var date = new Date();
var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
for (var i = 0, j = 0; i < c.length, j < url.length; i++, j++) {
    document.write("<table><tbody><tr><td>" + nowDate + "</td><td></td><td>" + account + "</td><td></td><td>" + [i] + "</td><td>" + c[i] + "</td><td></td><td></td><td>" + url[j] + "</td></tr></tbody></table>");
}
var d = document.documentElement.outerHTML;
var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>|\uD83D[\uDC00-\uDE4F]/g, "");
document.open();
document.clear();
document.close();
for (var i = 0; i < e.length; i++) {
    document.write(e[i]);
}
