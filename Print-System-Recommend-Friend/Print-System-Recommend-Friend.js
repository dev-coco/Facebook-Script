var get_data = document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 i09qtzwb n7fi1qx3 pmk7jnqg j9ispegn kr520xx4");
new_page = window.open('');
for (var i = 0; i < get_data.length; i++) {
    try {
        var avatar = get_data[i].outerHTML.match(/(?<=src=").*?(?=")/g)[0];
        var user_name = get_data[i].outerHTML.match(/(?<=alt=").*?(?=的头像"|的大頭貼照")/g)[0];
        var user_id = get_data[i].outerHTML.match(/(?<=href=".+_id=).*?(?=")/g)[0].replace(/&amp;/g, "&");
        try {
            var user_mark = get_data[i].outerHTML.match(/(?<=simplemarker-mark.*?">).*?(?=<\/div>)/g)[0];
        } catch {
            var user_mark = "";
        }
        new_page.document.write(`<table><tbody><tr><td>${i+1}</td><td style="font-size:0px;">=IMAGE("${avatar}")</td><td>${user_name}</td><td>${user_id}</td><td>${user_mark}</td></tr></tbody></table>`);
    } catch {}
}
