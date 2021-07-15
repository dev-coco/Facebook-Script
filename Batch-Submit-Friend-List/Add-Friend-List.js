var input_id = prompt("请输入ID","");
var user_id = input_id.match(/.+/g).join('","')
var fbtsg = require("DTSG").getToken()
var my_id = require("CurrentUserInitialData").USER_ID;
var list_id = location.href.match(/[0-9].+/g)[0];
 var body = new FormData;
body.append('fb_dtsg',fbtsg),
body.append('variables','{"input":{"client_mutation_id":"1","actor_id":"'+my_id+'","add_ids":["'+user_id+'"],"list_id":"'+list_id+'","remove_ids":[]}}'),
body.append('doc_id','4048347108578424');
var response = await fetch("https://www.facebook.com/api/graphql/", {
        "body": body,
        "method": "POST"
    })
await alert('添加完成');
