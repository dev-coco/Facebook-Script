var group_member_list = document.querySelectorAll(".clearfix._60rh._gse");
new_page = window.open('');
for (var i = 0; i < group_member_list.length; i++) {
    var user_name = group_member_list[i].outerHTML.match(/(?<=title=").*?(?=")/g)[0];
    var avatar = group_member_list[i].outerHTML.match(/(?<=src=").*?(?=")/g)[0];
    try {
        var user_id = group_member_list[i].outerHTML.match(/(?<=member_id=).*?(?=&)/g)[0];
    } catch {
        var user_id = group_member_list[i].outerHTML.match(/(?<=id=)[0-9].*?[0-9](?=&)/g)[0];
    }
    new_page.document.write('<table><tbody><tr><td>' + [i + 1] + '</td><td style="font-size:0px;">=IMAGE("' + avatar + '")</td><td><a href="https://www.facebook.com/' + user_id + '" target="_blank">' + user_id + '</a></td><td>' + user_name + '</td></tr></tbody></table>');
}
