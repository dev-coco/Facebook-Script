var getdata = document.documentElement.outerHTML;
var token = window.location.href.match(/(?<=token=).+(?=&pretty)/g);
var username = getdata.match(/(?<=name":").*?(?=")/g);
var userid = getdata.match(/(?<=id":").*?(?=")/g);
document.write('<table><tbody>');
for (var i = 0; i < username.length, i < userid.length; i++) {
    document.write('<tr><td><img src="https://graph.facebook.com/' + userid[i] + '/picture?width=100&access_token=' + token + '" style="width:100;height:100px;"></td><td><a href="https://www.facebook.com/' + userid[i] + '">' + username[i] + '</td><td>' + userid[i] + '</td></tr>');
}
