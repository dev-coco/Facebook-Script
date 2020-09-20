var a = location.href;
var b = prompt("请输入关键词", "");
var c = a.match(/(?<=filters=).+/g);
window.location.href = "https://www.facebook.com/search/groups?q=" + b + "&filters=" + c;
