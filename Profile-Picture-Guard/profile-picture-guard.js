var user_id = require("CurrentUserInitialData").USER_ID;
fetch("https://www.facebook.com/api/graphql/", {
    "credentials": "include",
    "headers": {
        "content-type": "application/x-www-form-urlencoded"
    },
    "referrer": "https://www.facebook.com/settings",
    "referrerPolicy": "origin-when-cross-origin",
    "body": (function(param){
        return Object.keys(param).map(function(key) {
            return key + '=' + encodeURIComponent(param[key]);
        }).join('&')
    })({
        fb_dtsg: require("DTSGInitialData").token,
        variables: '{\"0\":{\"is_shielded\":true,\"session_id\":\"9b78191c-84fd-4ab6-b0aa-19b39f04a6bc\",\"actor_id\":\"'+user_id+'\",\"client_mutation_id\":\"b0316dd6-3fd6-4beb-aed4-bb29c5dc64b0\"}}',
        doc_id: '1477043292367183',
    }),
    "method": "POST",
    "mode": "cors"
});
