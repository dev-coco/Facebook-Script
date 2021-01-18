var a = document.documentElement.outerHTML;
var b = a.match(/(?<=<div class="_4bl7"><div class="_1c-4 _6qq5 _63ok _1c-7 _6qqc"><div class="_63om _6qq6">).*?(?=<i class="_3-99 img)/g);
var c = a.match(/(?<=<div class="_63op _6qqa">过去 30 天内有 ).*?(?= 篇<\/div>)/g);
var d = a.match(/(?<=<div class="_63op _6qqa">过去 30 天内有超过 ).*?(?= 位<\/div>)/g);
var e = a.match(/(?<=<div><div class=" _2ieo">).*?(?=<\/div><div class=" _2ieq _rzy">.*?<\/div><\/div><\/div><div class="_3-95 _3qn7 _61-0 _2fyi _3qng">)/g);
var group_name = a.match(/(?<=<h1 id="seo_h1_tag" class="_19s-"><a href.*?>).*?(?=<\/a><\/h1>)/g);
var url = location.href.match(/http.+oups\/.*?\//g);
var date = new Date();
var today = (date.getMonth() + 1) + "/" + date.getDate();
document.write("<table><tbody><tr><td>" + today + "</td><td></td><td></td><td></td><td></td><td>" + group_name + "</td><td></td><td>" + url + "</td><td>" + b + "</td><td>" + c + "</td><td>" + d + "</td><td>" + e + "</td></tr></tbody></table>");
var d = document.documentElement.outerHTML;
var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">.*?<\/div>/g, "");
document.open();
document.clear();
document.close();
for (var i = 0; i < e.length; i++) {
    document.write(e[i]);
}
