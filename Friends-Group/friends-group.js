// https://www.facebook.com/groups/categories/?category=FRIENDS
var get_data = document.getElementsByClassName("rq0escxv rj1gh0hx buofh1pr ni8dbmo4 stjgntxs l9j0dhe7");
new_page = window.open('');
for (var i = 0; i < get_data.length; i++) {
    var group_name = get_data[i].outerHTML.match(/(?<=aria-label=").*?(?=")/g)[0];
    var group_url = get_data[i].outerHTML.match(/https:\/\/www\.facebook\.com\/groups.*?(?=")/g)[0];
    var group_info = get_data[i].outerHTML.match(/(?<=g0qnabr5">).*?(?=<\/span>)/g)[1];
    var group_members = group_info.replace(/(?<=\.[0-9])&nbsp;万.+/g, "000").replace(/&nbsp;|\./g, "").replace(/万.+/g, "0000");
    var post_count = group_info.replace(/.+：| 篇/g, "");
    new_page.document.write("<table><tbody><tr><td>" + group_name + "</td><td>" + group_url + "</td><td>" + group_members + "</td><td>" + post_count + "</td></tr></tbody></table>");
}
