var comment_list = document.getElementsByClassName("cwj9ozl2 tvmbv18p")[0];
var get_data = comment_list.getElementsByClassName("l9j0dhe7 ecm0bbzt rz4wbd8a qt6c0cv9 dati1w0a j83agx80 btwxx1t3 lzcic4wl");
var str = [];
for (const x of get_data) {
var user_name = x.outerHTML.match(/(?<=auto">).*?(?=<\/span>)/g)[0];
var avatar = x.outerHTML.match(/(?<=xlink:href=").*?(?=")/g)[0].replace(/amp;/g,"");
var user_link = x.outerHTML.match(/(?<=href=").*?(?=")/g)[0].replace(/(\?|&amp;)comment.+|\?__.+|http.*?com|\/group.*?user/g,"");
var content = x.outerHTML.match(/(?<=start;">).*?(?=<\/div>)/g)[0].replace(/<.*?alt="|" refer.*?<\/span>/g,"");
str += '=IMAGE("'+ avatar + '")\t' + user_name + '\thttps://www.facebook.com' + user_link + '\t' + content + '\n';
}
copy(str)
function copy(str){
var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = str;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
}
