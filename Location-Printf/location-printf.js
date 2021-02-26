console.clear();
var get_list = document.querySelectorAll("div.scb9dxdr.sj5x9vvc.dflh9lhu.cxgpxx05 > ul > div");
for (var i=0;i<get_list.length;i++)
{
    var get_id = get_list[i].outerHTML.match(/(?<=id=").*?(?=")/g)[0];
    var get_name = get_list[i].outerHTML.match(/(?<=g0qnabr5">).*?(?=<\/span)/g)[0];
    console.log("ID: https://www.facebook.com/"+get_id+", 名字: "+get_name+"")
}
