var get_data = document.getElementsByClassName('a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5');
var get_name = "";
for (var i = 1; i < get_data.length-2; i++) {
get_name += get_data[i].outerText+"\n";
}
copy(get_name)
function copy(str){
var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = str;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
}
