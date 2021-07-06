var person = prompt("请输入", "");
var get_data = person.match(/.+/g);
for (var i = 0; i < get_data.length; i++) {
    var str = get_data[i].replace(/\t.+/g,"");
    var url = get_data[i].replace(/.+\t/g,"");
    document.write('<a href="' + url + '">' + str + '</a><br>');
}
