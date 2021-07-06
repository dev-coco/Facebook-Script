var get_user = document.getElementsByClassName("bp9cbjyn ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi n1f8r23x rq0escxv j83agx80 bi6gxh9e discj3wi hv4rvrfc ihqw7lf3 dati1w0a gfomwglr");
new_page = window.open('');
for (var i = 0; i < get_user.length; i++) {
    try {
        var check_url = get_user[i].outerHTML.match(/(?<=gpro0wi8" href=").*?(?=" role="link")/g)[0];
    } catch {
        try {
            var in_active = get_user[i].outerHTML.match(/(?<=lrazzd5p oo9gr5id".*?>).*?(?=<\/span>)/g)[0];
            new_page.document.write(in_active + "<br>");
        } catch {}
    }
}
new_page.document.write("不活跃账号检测完成。");
