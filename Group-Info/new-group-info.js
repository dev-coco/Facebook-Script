var a = document.documentElement.outerHTML;
var group_location = a.match(/(?<=group_locations":\[{"id":".*?","name":").*?(?=","__typename")/g);
if (group_location == null){ var group_location=""; } else {}
var last_month_posts = a.match(/(?<=number_of_posts_in_last_month":).*?(?=,")/g)[0];
var all_member = a.match(/(?<=group_member_profiles.*?count":).*?(?=\})/g)[0];
var new_member = a.match(/(?<=group_new_member_profiles":{"count":).*?(?=\})/g)[0];
var group_status = a.match(/(?<=privacy_info.*?text":").*?(?="\})/g)[0];
var group_name = a.match(/(?<=isProfile":"Group","name":").*?(?=",")/g)[0];
var url = (location.href+"/").match(/http.+oups\/.*?\//g)[0].replace(/\/$/g,"");
var keyword = RegExp(/god|bible|church|fellowship|christ|baptist|presbyterian|gospel|catholic|holy|jesus|lord|ministry|kingdom|religion/);
var check_keyword = keyword.test(group_name.toLowerCase());
if (check_keyword == true) {
var religion = "宗派";
} else {
var religion = "外邦";
}
var date = new Date();
var today = (date.getMonth() + 1) + "/" + date.getDate();
var str ="<table><tbody><tr><td>"+today+"</td><td></td><td></td><td>"+group_location+"</td><td>"+religion+"</td><td>"+group_name+"</td><td></td><td>"+url+"</td><td>"+all_member+"</td><td>"+last_month_posts+"</td><td>"+new_member+"</td><td>"+group_status+"</td></tr></tbody></table>"
document.write(eval("'" + str + "'"));
