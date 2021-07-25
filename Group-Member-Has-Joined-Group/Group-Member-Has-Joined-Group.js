function unicode_restore(str) {
    str = str.replace(/&#x/g,"\\u").replace(/;/g,"");
    return eval("`"+str+"`");
}
var group_id = document.documentElement.outerHTML.match(/(?<=groupID":").*?(?=")/g)[0];
var token = require("DTSGInitialData").token;
var my_id = require("CurrentUserInitialData").USER_ID;
var body = new FormData;
body.append('av', my_id),
body.append('__user', my_id),
body.append('fb_dtsg', token),
body.append('fb_api_caller_class', 'RelayModern'),
body.append('fb_api_req_friendly_name', 'AutoApprovedMembersPaginationContainerWrapperQuery'),
body.append('variables','{"groupID":"'+group_id+'"}'),
body.append('doc_id', '3808916502518124');
var resp = await fetch("https://www.facebook.com/api/graphql/", {
        "body": body,
        "method": "POST"
    })
var text = await resp.text();
var get_data = unicode_restore(text).match(/"node":{"id":".*?","name":".*?"/g);
for (var i = 0; i < get_data.length; i++) {
    var group_id = get_data[i].match(/(?<="id":").*?(?=")/g)[0];
    var group_name = get_data[i].match(/(?<="name":").*?(?=")/g)[0];
    document.write(`<table><tbody><tr><td>https://www.facebook.com/${group_id}</td><td>${group_name}</td></tr></tbody></table>`)
}
