var get_html = document.documentElement.outerHTML;
var b = get_html.match(/<div class="j83agx80 cbu4d94t buofh1pr l9j0dhe7">.*?k4urcfbm"><\/div><\/div><\/div>/g);
for (var i = 0; i < b.length; i++) {
    document.write(b[i]);
}
var c = document.documentElement.outerHTML;
var rt = c.match(/<div class="ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j">.*?<div class="q9uorilb">.*?<\/a><\/div>/g);
document.open();
document.clear();
document.close();
var f = prompt("请输入点赞类型", "");
for (var k = 0; k < rt.length; k++) {

    var v = rt[k].match(/(?<=xlink:href=").*?(?=")/g);
    var e = rt[k].match(/(?<=class=""><a aria-label=").*?(?=")/g)
    var d = rt[k].match(/(?<=lrazzd5p" href=").*?(?=.__cf|.amp)/g);
    document.write("<table><tbody><tr><td>=IMAGE(\"" + v + "\")</td><td>" + f + "</td><td><a href=\"" + d + "\">" + e + "</a></td><td>" + d + "</td></tr></tbody></table>");
}
var g = document.documentElement.outerHTML;
document.open();
document.clear();
document.close();
var u = g.replace(/undefined.+/g, "").replace(/[^>]+(?!.*<table)>+/g, "");
document.write(u);

setTimeout(function() {
    var d = document.documentElement.outerHTML;
    var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
    document.open();
    document.clear();
    document.close();
    for (var i = 0; i < e.length; i++) {
        document.write(e[i]);
    }
}, 2000);
