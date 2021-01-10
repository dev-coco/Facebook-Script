var online_list = document.querySelectorAll("div.rq0escxv.lpgh02oy.du4w35lb.pad24vr5.rirtxc74.dp1hu0rb.fer614ym.hlyrhctz.o387gat7.qbu88020.ni8dbmo4.stjgntxs.czl6b2yu > div > div > div.j83agx80.cbu4d94t.buofh1pr.l9j0dhe7 > div > div:nth-child(2) > div > div.cxgpxx05.sj5x9vvc > div > ul")[0]
var online_name = online_list.outerHTML.match(/(?<=zawbc8m" dir="auto").*?(?=<\/span>)/g);
new_page = window.open('');
for (var i=0;i<online_name.length;i++){
var str = online_name[i].replace(/>/g,"@");
new_page.document.write(`<table><tbody><tr><td>`+[i+1]+`</td><td>`+str+`</td></tr></tbody></table>`);
}
