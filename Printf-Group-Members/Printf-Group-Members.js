var group_members = document.getElementsByClassName('b20td4e0 muag1w35');
var new_members = group_members[group_members.length-1];
new_page=window.open('')
var get_data = new_members.querySelectorAll('div [data-visualcompletion="ignore-dynamic"][style="padding-left: 8px; padding-right: 8px;"]');
for (var i = 0; i < get_data.length; i++) {
var user_data = get_data[i].getElementsByClassName('ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j')[0];
var user_name = user_data.outerHTML.match(/(?<=aria-label=").*?(?=")/g)[0];
var user_id = user_data.outerHTML.match(/(?<=href=").*?(?=")/g)[0].replace(/.+user|\//g,"");
var user_avatar = user_data.outerHTML.match(/(?<=href=").*?(?=")/g)[1].replace(/&amp;/g,"&");
var is_blank = "";
if(user_avatar.match("t1.30497-1")) {
var is_blank = "未设置头像";
}
try {
var user_mark = user_data.outerHTML.match(/simplemarker-mark.*?<\/div>/g)[0].replace(/.+">|<.*?>/g,"");
} catch {
var user_mark = "";
}
var join_date = user_data.outerHTML.match(/(?<=m9osqain">).*?(?=<\/)/g)[0].replace(/<.*?>/g,"");
var other_info = user_data.outerHTML.match(/(?<=hzawbc8m" dir="auto">).*?(?=<)/g).slice(-1)[0];
new_page.document.write('<table><tbody><tr><td>'+[i+1]+'</td><td>'+user_name+'</td><td>'+user_id+'</td><td>=IMAGE("'+user_avatar+'")</td><td>'+join_date+'</td><td>'+other_info+'</td><td>'+is_blank+'</td><td>'+user_mark+'</td></tr></tbody></table>')
}
