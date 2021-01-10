new_page = window.open('');
var get_all_group = document.querySelectorAll("div.hpfvmrgz.g5gj957u.buofh1pr.rj1gh0hx.o8rfisnq > div");
var group_data = document.querySelectorAll("div.hpfvmrgz.g5gj957u.buofh1pr.rj1gh0hx.o8rfisnq > div");
for (var i=0;i<group_data.length;i++)
{
var url = group_data[i].outerHTML.match(/(?<=href=").*?(?=\/")/g)[0];
try {
var group_name = group_data[i].outerHTML.match(/(?<=aria-label=").*?(?=")/g)[0];
} catch {
var group_name = "无法获取";
}
var group_member = group_data[i].outerHTML.match(/(?<=l9j0dhe7 ltmttdrg g0qnabr5">).*?(?=<\/span>)/g)[0];
var group_post = group_data[i].outerHTML.match(/(?<=l9j0dhe7 ltmttdrg g0qnabr5">).*?(?=<\/span>)/g)[1];
new_page.document.write(`<table><tbody><tr><td>`+group_name+`</td><td>`+group_member+`</td><td>`+group_post+`</td><td>`+url+`</td></tr></tbody></table>`);
}
