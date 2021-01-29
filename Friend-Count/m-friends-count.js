var get_data = document.getElementsByClassName("_56cx acw");
new_page = window.open('');
for (var i=get_data.length - 1;i<get_data.length;i--)
{ 
    var date = get_data[i].outerHTML.match(/(?<=<section class="_56cz _56c_">).*?(?=<\/section>)/g)[0];
    var friend_count = get_data[i].getElementsByClassName("img darkTouch profpic").length;
    new_page.document.write(`<table><tbody><tr><td style="user-select:none;">`+date+`</td><td>`+friend_count+`</td></tr></tbody></table>`);
}
