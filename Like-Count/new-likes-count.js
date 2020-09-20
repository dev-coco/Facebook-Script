var a = document.documentElement.outerHTML;
var b = a.match(/<div class="j83agx80 cbu4d94t buofh1pr">.*?k4urcfbm"><\/div><\/div><\/div>/g)
for (var i = 0; i < b.length; i++) {
    document.write(b[i]);
}
var c = document.documentElement.outerHTML;
var e = c.match(/(?<=class=""><a aria-label=").*?(?=")/g)
var d = c.match(/(?<=lrazzd5p" href=").*?(?=.__cf|.amp)/g);
document.open();
document.clear();
document.close();
var f = prompt("请输入点赞类型", "");
for (var k = 0, j = 0; k < d.length, j < e.length; k++, j++) {
    document.write("<table><tbody><tr><td>" + f + "</td><td></td><td>" + e[j] + "</td><td>" + d[k] + "</td></tr></tbody></table>");
}
