var get_group_info = document.querySelectorAll("a.span-name");
var get_group_members = document.querySelectorAll("div.rt-td:nth-child(3)");
for (var i=0;i<get_group_info.length;i++)
{
    var group_url = get_group_info[i].outerHTML.match(/(?<=href=").*?(?=")/g)[0];
    var group_name = get_group_info[i].outerHTML.match(/(?<=<span class="span-name">).*?(?=<\/span>)/g)[0];
    var group_members = get_group_members[i].outerHTML.match(/(?<=>).*?(?=<)/g)[0];
    document.write(`<table><tbody><tr><td>`+group_name+`</td><td>`+group_members+`</td><td></td><td>`+group_url+`</td></tr></tbody></table>`);
}
