var html = document.documentElement.outerHTML;
var friends_data = html.match(/<li class="_698">.*?<\/li>/g);
var account = html.match(/(?<=<span class="_1vp5">).*?(?=<\/span>)/g);
for (var i = 0; i < friends_data.length; i++) {
try {var name = friends_data[i].match(/(?<=}" data-hovercard=".*?" data-hovercard-prefer.*?>).*?(?=<\/a><\/div>)/g)[0];} catch {}
try {var url = friends_data[i].match(/https:\/\/www\.facebook.*?(?=.fref|&amp)/g)[0];} catch {}
try {var count_friend = friends_data[i].match(/(?<=class="_39g5".*?>).*?(?=<\/a>)/g)[0].replace(/<div class="simplemarker-mark".*?<\/div>/g,"");} catch{}
document.write("<table><tbody><tr><td>"+account+"</td><td>"+name+"</td><td>"+url+"</td><td>"+count_friend+"</td></tr></tbody></table>");
}
var d = document.documentElement.outerHTML;
var e = d.replace(/<div class="simplemarker-mark" style="background-color: rgba\(255, 255, 255, 0\); display: inline; text-align: center; color: red; padding: 2px;">|<\/div>/g, "");
document.open();
document.clear();
document.close();
for (var i = 0; i < e.length; i++) {
    document.write(e[i]);
}
