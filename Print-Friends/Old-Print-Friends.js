var html = document.documentElement.outerHTML;
var c = html.match(/(?<=<div class="fsl fwb fcb"><a href=").*?(?=<\/a><\/div>)/g);
var account = html.match(/(?<=<span class="_1vp5">).*?(?=<\/span>)/g);
var g = prompt("请输入名字", "");
var date = new Date();
var nowDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
for (var i = 0; i < c.length; i++) {
    var url = c[i].match(/https:\/\/www\.facebook.*?(?=.fref|&amp)/g);
    var k = c[i].match(/(?<=data-hovercard-prefer-more-content.*?>).+/g);
    document.write("<table><tbody><tr><td>" + nowDate + "</td><td>" + g + "</td><td>" + account + "</td><td></td><td>" + [i] + "</td><td>" + k + "</td><td></td><td></td><td>" + url + "</td></tr></tbody></table>");
}
var d = document.documentElement.outerHTML;
var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
document.open();
document.clear();
document.close();
for (var i = 0; i < e.length; i++) {
    document.write(e[i]);
}
