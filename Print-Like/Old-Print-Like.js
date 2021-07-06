var a = document.documentElement.outerHTML;
var b = a.match(/<div class="_5i_p" id="u_.*?_.*?">.*?"><\/span><\/div><\/div>/g)
document.write(b[0]);
var c = document.documentElement.outerHTML;
var v = c.match(/(?<=<a class="_5i_s _8o _8r lfloat _ohe" title=").*?\?id=.*?(?=&amp;extragetparams)/g);
document.open();
document.clear();
document.close();
var f = prompt("请输入点赞类型", "");
for (var k = 0; k < v.length; k++) {
    var userid = v[k].match(/(?<=user\.php\?id=)[0-9].+/g);
    var username = v[k].match(/.*?(?=")/g)[0];
    var userurl = v[k].match(/http.+(?=(\?|&amp;)fref)/g);
    document.write("<table><tbody><tr><td>=IMAGE(\"http://graph.facebook.com/" + userid + "/picture?width=1080\")</td><td>" + f + "</td><td><a href=\"" + userurl + "\">" + username + "</a></td><td>" + userurl + "</td></tr></tbody></table>");
}
