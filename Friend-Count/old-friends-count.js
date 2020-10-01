var a = document.documentElement.outerHTML;
var b = a.match(/<div class="_5i_p" id="u_.*?_.*?">.*?"><\/span><\/div><\/div>/g)
document.write(b[0]);
var c = document.documentElement.outerHTML;
var v = c.match(/(?<=data-hovercard="\/ajax\/hovercard\/user\.php\?id=).*?(?=&)/g);
var e = c.match(/(?<=<a title=").*?(?=")/g)
var d = c.match(/(?<=data-gt="{.*?}}" href=")http.*?(?=\?fref|&amp)/g);
document.open();
document.clear();
document.close();
var f = prompt("请输入点赞类型", "");
for (var k = 0, j = 0, h =0; k < d.length, j < e.length, h < v.length; k++, j++, h++) {
    document.write("<table><tbody><tr><td>=IMAGE(\"http://graph.facebook.com/" +v[h*2]+ "/picture?width=1080\")</td><td>" + f + "</td><td><a href=\"" + d[k] + "\">" + e[j] + "</a></td><td>" + d[k] + "</td></tr></tbody></table>");
}
var g = document.documentElement.outerHTML;
document.open();
document.clear();
document.close();
var u = g.replace(/undefined.+/g,"").replace(/[^>]+(?!.*<table)>.+/g,"");
document.write(u);
