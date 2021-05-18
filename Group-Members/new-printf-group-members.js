var g_new_members = document.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo muag1w35 enqfppq2");
var get_data = g_new_members[g_new_members.length-1].getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl oo9gr5id gpro0wi8 lrazzd5p");
new_page=window.open('')
for (var i = 0; i < get_data.length; i++) {
var user_url = get_data[i].outerHTML.match(/(?<=href=").*?(?=")/g)[0].replace(/https:\/\/.*?\/|\/groups.*?user\/|\//g,"");
var user_name = get_data[i].outerHTML.match(/(?<=href=".*?>).*(?=<\/a>)/g)[0].replace(/<.*?div>/g,"");
var uesr_mark = get_data[i].outerHTML.match(/(?<=href=".*?)>.*(?=\/a>)/g)[0].replace(/>.*?>|<\/div/g,"").replace(/>.*?</g,"");
new_page.document.write(`<table><tbody><tr><td>`+[i+1]+`</td><td>`+user_name+`</td><td>https://www.facebook.com/`+user_url+`</td><td>`+uesr_mark+`</td></tr></tbody></table>`);
}
