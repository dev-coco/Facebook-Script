var a = document.documentElement.outerHTML;
var b = a.match(/<div class="j83agx80 cbu4d94t buofh1pr l9j0dhe7">.*?k4urcfbm"><\/div><\/div><\/div>/g)
for (var i = 0; i < b.length; i++) {
    document.write(b[i]);
}
var c = document.documentElement.outerHTML;
var v = c.match(/(?<=xlink:href=").*?(?=")/g);
var e = c.match(/(?<=class=""><a aria-label=").*?(?=")/g)
var d = c.match(/(?<=lrazzd5p" href=").*?(?=.__cf|.amp)/g);
document.open();
document.clear();
document.close();
var f = prompt("请输入点赞类型", "");
for (var k = 0, j = 0, h = 0; k < d.length, j < e.length, h < v.length; k++, j++, h++) {
    document.write("<table><tbody><tr><td>=IMAGE(\"" +v[h]+ "\")</td><td>" + f + "</td><td><a href=\""+ d[k] +"\">" + e[j] + "</a></td><td>" + d[k] + "</td></tr></tbody></table>");
}
var g = document.documentElement.outerHTML;
document.open();
document.clear();
document.close();
var u = g.replace(/undefined.+/g,"").replace(/[^>]+(?!.*<table)>+/g,"");
document.write(u);
