var get_data = document.documentElement.outerHTML;
var group_member = get_data.match(/(?<="group_member_profiles":{"count":).*?(?=},")/g)[0];
try {
	var group_last_month_post = get_data.match(/(?<="number_of_posts_in_last_month":).*?(?=,")/g)[0];
} catch {
	var group_last_month_post = "";
}
try {
	var group_today_post = get_data.match(/(?<="number_of_posts_in_last_day":).*?(?=,")/g)[0];
} catch {
	var group_today_post = "";
}
try {
	var group_new_member = get_data.match(/(?<="group_new_member_profiles":{"count":).*?(?=})/g)[0];
} catch {
	var group_new_member = "";
}
var group_avator = get_data.match(/(?<=image":{"uri":").*?(?=")/g)[0].replace(/\\/g,"");
var group_create_date = get_data.match(/(?<="group_history_summary":{"text":").*?(?="})/g)[0];
var group_create_date_str = eval("'"+group_create_date+"'");
var group_description = get_data.match(/(?<=description_with_entities":{"text":").*?(?=","delight_ranges)/g)[0];
var group_description_str = eval("`"+group_description+"`");
var group_title = get_data.match(/<title.*?title>/g)[0].replace(/<.*?>| \| Facebook|\(.*?\) /g,"");
var keyword = RegExp(/god|bible|church|fellowship|christ|baptist|presbyterian|gospel|catholic|holy|jesus|lord|ministry|kingdom|religion/);
var check_keyword = keyword.test(group_title.toLowerCase());
if (check_keyword == true) {
	var religion = "宗派";
} else {
	var religion = "外邦";
}
var group_id = get_data.match(/(?<="groupID":").*?(?=")/g)[0];
var group_status = get_data.match(/(?<=privacy_info.+text":").*?(?="})/g)[0];
var group_status_str = eval("'"+group_status+"'");
try {
	var group_admin_count = get_data.match(/(?<=facepile_admin_profiles":{"count":).*?(?=,)/g)[0];
} catch {
	var group_admin_count = "";
}
try {
	var group_location = get_data.match(/(?<=group_locations":\[{"id":".*?","name":").*?(?=")/g)[0];
	var group_location_str = eval("'"+group_location+"'");
} catch {
	var group_location_str = "";
}
document.write(`<table><tbody><tr><td style="font-size:0px;">=IMAGE("`+group_avator+`")</td><td>`+group_title+`</td><td>`+religion+`</td><td>`+group_id+`</td><td>`+group_member+`</td><td>`+group_last_month_post+`</td><td>`+group_today_post+`</td><td>`+group_new_member+`</td><td>`+group_create_date_str+`</td><td>`+group_status_str+`</td><td style="font-size:0px;">`+group_description_str+`</td><td>`+group_location_str+`</td><td>`+group_admin_count+`</td></tr></tbody></table>`);
