var inputs = document.getElementsByClassName('_71u9 _4jy0 _4jy3 _517h _51sy _42ft');
    function getRandom (n, m) {
    var num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}
var ramdom_number = getRandom(18000, 25000)
for (var i=0;i<inputs.length;i++){
    
        (function(i) {
        setTimeout(function() {
        inputs[i].click();
        }, ramdom_number * i);
    })(i);
}
