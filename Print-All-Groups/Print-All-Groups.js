var html = document.documentElement.outerHTML;
var get_data = html.match(/(?<=<div class="_7hkf _3qn7 _61-3 _2fyi _3qng">).*?(?=<\/div>)/g);
for (var i=0;i<get_data.length;i++){
var group_name = get_data[i].match(/(?<=h3z9dlai ld7irhx5 pbevjfx6 igjjae4c">).*/g);
var group_url = get_data[i].match(/(?<=<a class="_7hkg" href=").*?(?=\/\?ref=group_browse">)/g);
    document.write("<table><tbody><tr><td>"+group_name+"</td><td>https://www.facebook.com"+group_url+"</td></tr></tbody></table>");
}
