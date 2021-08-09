var get_data = document.getElementsByClassName('_2a_i');
new_page = window.open('');
for (var i = 0; i < get_data.length; i++) {
    var user_id = get_data[i].innerHTML.match(/(?<=data-sigil="feed_story_ring).*?(?=")/g)[0];
    var uesr_link = get_data[i].innerHTML.match(/(?<=href=").*?(?=")/g)[0].replace(/\?groupid.+|&amp.+/g,"");
    var user_comment = get_data[i].innerHTML.match(/(?<=comment-body">).*?(?=<\/div>)/g)[0].replace(/<.*?>/g,"");
    var user_name = get_data[i].getElementsByClassName('_2b05')[0].innerText;
    new_page.document.write(`<table><tbody><tr><td>${i+1}</td><td>${user_name}</td><td>https://www.facebook.com${uesr_link}</td><td>${user_id}</td><td>${user_comment}</td></tr></tbody></table>`)
}
