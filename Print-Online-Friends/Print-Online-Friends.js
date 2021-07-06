var online_list = document.querySelectorAll("div > div > div.j83agx80.cbu4d94t.buofh1pr.l9j0dhe7 > div > div> div > div.cxgpxx05.sj5x9vvc > div > ul")[0];
var online_user = online_list.outerHTML.match(/(?<=zawbc8m" dir="auto").*?(?=<\/span>)/g);
var online_id = online_list.outerHTML.match(/(?<=l82x9zwi" href=").*?(?=")/g);
new_page = window.open('');
for (var i = 0; i < online_user.length; i++) {
    var user_id = online_id[i].match(/[0-9].+[0-9]/g)[0];
    var user_name = online_user[i].replace(/<div class.*?div>/g, "").replace(/>/g, "@");
    var user_mark = online_user[i].replace(/><div class=".*?>|<\/div.+|>.+/g,"");
    new_page.document.write(`<table><tbody><tr><td>` + [i + 1] + `</td><td>`+user_id+`</td><td>`+user_mark+`</td><td>` + user_name + `</td></tr></tbody></table>`);
}
