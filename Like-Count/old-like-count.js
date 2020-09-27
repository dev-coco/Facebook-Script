var a = document.documentElement.outerHTML;
var b = a.match(/<div class="_5i_p" id="u_.*?_.*?">.*?"><\/span><\/div><\/div>/g)
document.write(b[0]);
var c = document.documentElement.outerHTML;
var v = c.match(/(?<=src=").*?(?=")/g);
var e = c.match(/(?<=<a title=").*?(?=")/g)
var d = c.match(/(?<=data-gt="{.*?}}" href=")http.*?(?=\?fref|&amp)/g);
document.open();
document.clear();
document.close();
var f = prompt("请输入点赞类型", "");
for (var k = 0, j = 0, h =0; k < d.length, j < e.length, h < v.length; k++, j++, h++) {
    document.write("<table><tbody><tr><td>=IMAGE(\"" +v[h]+ "\")</td><td>" + f + "</td><td>" + e[j] + "</td><td>" + d[k] + "</td></tr></tbody></table>");
}
