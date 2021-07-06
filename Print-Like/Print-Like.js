var get_html = document.documentElement.outerHTML;
var like_type = prompt("请输入点赞类型", "");
if (like_type == null) {} else {
    try {
        new_page.document.write('');
    } catch {
        new_page = window.open('');
    }
    var get_page_data = get_html.match(/<div class="j83agx80 cbu4d94t buofh1pr l9j0dhe7">.*?k4urcfbm"><\/div><\/div><\/div>/g);
    var get_new_html = get_page_data[get_page_data.length - 1];
    var new_page_data = get_new_html.match(/<div class="ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j">.*?<div class="q9uorilb">.*?<\/a><\/div>/g);
    for (var k = 0; k < new_page_data.length; k++) {
        var user_avatar = new_page_data[k].match(/(?<=xlink:href=").*?(?=")/g)[0];
        var user_name = new_page_data[k].match(/(?<=<div class="q9uorilb"><a class.*?)>.*?<\/a>(?=<\/div>)/g)[0].replace(/<.*?div>|<\/a>|>/g, "");
        var user_mark = new_page_data[k].match(/(?<=<div class="q9uorilb"><a class.*?)>.*?<\/a>(?=<\/div>)/g)[0].replace(/>.*?>|<\/div/g, "");
        var user_link = new_page_data[k].match(/(?<=lrazzd5p" href=").*?(?=.__cf|.amp)/g)[0].replace(/.+\.com\/|groups.+user\/|\//g, "");
        new_page.document.write("<table><tbody><tr><td>" + [k + 1] + "</td><td style='font-size:0px;'>=IMAGE(\"" + user_avatar + "\")</td><td>" + like_type + "</td><td>" + user_name + "</td><td>https://www.facebook.com/" + user_link + "</td><td>" + user_mark + "</td></tr></tbody></table>");
    }
}
